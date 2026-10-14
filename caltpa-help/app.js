(() => {
  'use strict';
  const D = window.CALTPA, KEY = 'caltpa-study-v1', INK = 'caltpa-annotations-v1';
  const main = document.getElementById('main'), side = document.getElementById('sidebar');
  const esc = value => String(value ?? '').replace(/[&<>\x22']/g, c => '&#'+c.charCodeAt(0)+';');
  const icon = name => `<i data-lucide="${name}" aria-hidden="true"></i>`;
  const p = text => `<p>${esc(text)}</p>`;
  const list = (items, ordered = false) => `<${ordered?'ol class="task-sequence"':'ul'}>${items.map(x=>`<li>${esc(x)}</li>`).join('')}</${ordered?'ol':'ul'}>`;
  const external = (url,label) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} ${icon('arrow-up-right')}</a>`;
  const source = id => external(D.sources[id][1],D.sources[id][0]);
  const guide = (a,page,label='Official guide') => external(`https://docs.ctc.ca.gov/Document/Download/${a.guide}#page=${page}`,`${label}, PDF p. ${page}`);
  const folder = a => external(`https://docs.ctc.ca.gov/DocumentLookup/5/Folder/${a.folder}`,'Official guides & templates');
  const section = (id,title,html) => `<section class="band" id="${esc(id)}"><h2>${esc(title)}</h2>${html}</section>`;
  const table = (heads,rows) => `<div class="table-scroll" tabindex="0" role="region" aria-label="${esc(heads.join(', '))}"><table><thead><tr>${heads.map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(x=>`<td>${esc(x)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const fresh = () => ({schema:1,year:D.year,track:'ms',activeAssessment:'ms-math',notes:{},checks:{},completed:{},exercises:{},deadlines:{}});
  let state = fresh(), current = 'home', statusTimer, firstRender = true, storageAvailable = true;
  function validState(value) {
    if (!value || value.schema!==1 || value.year!==D.year || !D.tracks[value.track] || !D.assessments[value.activeAssessment] || D.assessments[value.activeAssessment].track!==value.track) return false;
    for (const key of ['notes','checks','completed','exercises','deadlines']) {
      if (!value[key] || typeof value[key]!=='object' || Array.isArray(value[key]) || Object.keys(value[key]).length>1500) return false;
      for (const [id,v] of Object.entries(value[key])) {
        if (id.length>180 || ['__proto__','constructor','prototype'].includes(id)) return false;
        if (['checks','completed'].includes(key) ? typeof v!=='boolean' : typeof v!=='string'||v.length>20000) return false;
        if (key==='deadlines' && v && !validDate(v)) return false;
      }
    }
    return true;
  }
  try {const saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved?.track==='wl'){saved.track='ms';saved.activeAssessment='ms-math';}if(validState(saved))state=saved;} catch {storageAvailable=false;}
  function notify(message) {
    const status=document.getElementById('status');status.textContent=message;status.classList.add('visible');
    clearTimeout(statusTimer);statusTimer=setTimeout(()=>status.classList.remove('visible'),5000);
  }
  function save() {
    try {localStorage.setItem(KEY,JSON.stringify(state));storageAvailable=true;return true;}
    catch {storageAvailable=false;notify('Browser storage is unavailable. Export your study work before leaving.');return false;}
  }
  const active = () => D.assessments[state.activeAssessment];
  const parts = id => D.assessments[id].parts || D.partSets[D.assessments[id].type];
  const reviewed = id => parts(id).filter(x=>state.completed[id+'/'+x.id]).length;
  function head(eyebrow,title,description) {
    return `<header class="page-head"><div class="eyebrow">${esc(eyebrow)}</div><h1>${esc(title)}</h1>${description?`<p class="deck">${esc(description)}</p>`:''}</header>`;
  }
  function footer() {
    return `<footer class="page-footer"><nav aria-label="Additional information"><a href="#resources">Official documents</a><a href="#support/privacy">Originality & privacy</a><a href="#glossary">Glossary</a><a href="#notes">My notes</a><a href="#about">About & annual updates</a></nav><p>Independent instructional companion. CTC/Pearson directions and your preparation program govern your submission. Instructional rubric estimates are not official scores and do not establish a passing result.</p><p>Academic year ${D.year} · MS/SS requirements audit October 8, 2026 · Historical seven-case review October 11, 2026 · MS academic revision October 13, 2026.</p></footer>`;
  }
  // Earlier saved notes remain readable/exportable in Notes and Backup.
  const noteBox = () => '';
  function crumb(items) {
    return `<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#home">Overview</a>${items.map(([label,url])=>`${icon('chevron-right')}${url?`<a href="${url}">${esc(label)}</a>`:`<span>${esc(label)}</span>`}`).join('')}</nav>`;
  }
  function sourceStrip(a,page,extra='') {
    return `<div class="source-strip"><span class="version">${D.year} · Guide V${a.version}</span><p>${guide(a,page)} · ${folder(a)}</p>${extra?`<p>${extra}</p>`:''}<p>Requirement summaries link to the official source. The explanations are instructional guidance.</p></div>`;
  }
  function toc(items) {
    return `<nav class="toc" aria-label="On this page">${items.map(([id,label])=>`<a href="#${esc(current)}?section=${id}">${esc(label)}</a>`).join('')}</nav>`;
  }
  function sidebar() {
    const a=active(),id=state.activeAssessment;
    const size=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--text-size'),10)||18;
    side.innerHTML=D.readingHTML(`<div class="sidebar-reading"><h2>Text size</h2><div class="text-size-options" role="group" aria-label="Text size">${[[16,'A'],[18,'A+'],[21,'A++']].map(([n,label])=>`<button data-text-size="${n}" aria-label="${n} pixel reading text" aria-pressed="${size===n}">${label}</button>`).join('')}</div></div><h2 class="sidebar-label">Your pathway</h2><nav class="pathway-nav" aria-label="Credential pathways">${Object.entries(D.tracks).map(([k,t])=>`<button data-track="${k}" aria-pressed="${state.track===k}"><i data-lucide="${k==='ms'?'school':k==='ss'?'graduation-cap':'accessibility'}" aria-hidden="true"></i><span>${esc(t.name)}</span></button>`).join('')}</nav>${state.track==='ms'&&['home','resources','evidence-help'].includes(current)?'<nav class="side-section" aria-label="Multiple Subject cycles"><h2 class="sidebar-label">Both Multiple Subject cycles</h2><a href="#assessment/ms-math">Cycle 1 · Mathematics</a><a href="#assessment/ms-literacy">Cycle 2 · Language arts</a></nav>':''}<h2 class="sidebar-label">Selected cycle: ${esc(a.short)}</h2><nav aria-label="Assessment parts"><a href="#assessment/${id}" ${current===`assessment/${id}`?'aria-current="page"':''}>${icon('map')}Assessment and examples</a>${D.steps.map((step,i)=>`<details ${current.startsWith('part/'+id) && parts(id).find(x=>current===`part/${id}/${x.id}`)?.step===i+1?'open':''}><summary>${i+1}. ${esc(step.name)}</summary>${parts(id).filter(x=>x.step===i+1).map(x=>`<a class="part-link" href="#part/${id}/${x.id}" ${current===`part/${id}/${x.id}`?'aria-current="page"':''}><span class="part-letter">${x.id}</span><span>${esc(x.title)}</span></a>`).join('')}</details>`).join('')}</nav><nav class="side-section" aria-label="Study resources"><h2 class="sidebar-label">Study resources</h2><a href="#examples/${state.track}">${icon('book-open')}Example directory</a><a href="#planner">${icon('calendar-days')}Planning reference</a><a href="#support/submission">${icon('list-checks')}Submission requirements</a><a href="#glossary">${icon('book-a')}Glossary</a><a href="#notes">${icon('notebook-pen')}Notes and backup</a></nav><div class="source-small">${D.year} · Guide V${a.version}<br>Instructional examples</div>`);
    const ids=D.tracks[state.track].assessments;
    document.querySelector('.primary-nav').innerHTML=`<a href="#home" ${current==='home'?'aria-current="page"':''}>Overview</a>${ids.map(k=>`<a href="#assessment/${k}" ${['assessment/'+k,'questions/'+k,'example/'+k].includes(current)||current.startsWith('part/'+k+'/')?'aria-current="page"':''}>${esc(D.assessments[k].track==='ms'?(D.assessments[k].type===1?'Mathematics':'Language Arts'):D.assessments[k].track==='ss'?D.assessments[k].short:D.assessments[k].type===1?'Math Assessment':'Literacy Assessment')}</a>`).join('')}<a href="#resources" ${current==='resources'?'aria-current="page"':''}>More Sources</a><a href="#evidence-help" ${current==='evidence-help'||current.startsWith('support/')?'aria-current="page"':''}>Teaching Evidence Help</a>`;
  }
  function guideNav(id) {
    return D.studiesFor(id).length?`<a href="#questions/${id}" ${current===`questions/${id}`?'aria-current="page"':''}>${icon('book-open')}Understanding the questions</a>`:'';
  }
  function addGuideNav() {
    side.querySelector('nav[aria-label="Assessment parts"] a').insertAdjacentHTML('afterend',guideNav(state.activeAssessment));
  }
  function home() {
    const track=D.tracks[state.track];
    return head('A companion for California credential candidates','CalTPA Help','Know your students. Plan purposeful instruction. Explain what the evidence shows.')+
      `<p>Work through your assessment one part at a time, from the first planning decision to the final submission. Begin with your credential pathway.</p><div class="path-options" role="group" aria-label="Credential pathway">${Object.entries(D.tracks).map(([id,t])=>`<button type="button" data-track="${id}" aria-pressed="${state.track===id}">${esc(t.name)}<small>${esc(t.audience)}</small></button>`).join('')}</div><div class="assessment-list">${track.assessments.map((id,i)=>{const a=D.assessments[id];return `<div class="assessment-item"><div class="lead-label">Assessment ${i+1}</div><h2>${esc(a.short)}</h2><p>${esc(a.description)}</p><div class="fact-line"><span>${icon('users')}${esc(a.focus)}</span><span>${icon('book-open')}${esc(a.lessons)}</span></div><a class="text-link" href="#assessment/${id}">Begin ${esc(a.short)} ${icon('arrow-right')}</a></div>`;}).join('')}</div>`+
      section('start','Understand the questions',`<div class="two-column"><div><h3>Read the example with the question</h3><p>A useful response explains a decision: what the teacher knew, what the teacher did, what the student showed, and what follows. Examine those connections in the sample for your assessment.</p><a class="text-link" href="#${D.studiesFor(state.activeAssessment).length?'questions/'+state.activeAssessment:'examples/'+state.track}">Study ${esc(active().short)} examples ${icon('arrow-right')}</a></div><div><h3>Develop your own explanation</h3><p>Keep the current prompt beside your own evidence. Use the critique to identify the reasoning a reader still needs, then return to your actual teaching and student responses.</p><a class="text-link" href="#part/${state.activeAssessment}/A">Begin with Part A ${icon('arrow-right')}</a></div></div>`)+
      section('journey','The same four steps, all the way through',`<ol class="roadmap">${D.steps.map((x,i)=>`<li><span class="step-dot">${i+1}</span><strong>${esc(x.name)}</strong><small>${esc(x.verb)}</small></li>`).join('')}</ol><p>Keep the connection visible: what you learned about students informs your teaching; what students demonstrate informs your next decision.</p><figure class="diagram"><img src="assets/evidence-connection.png" width="1440" height="430" alt="Learning about students informs a teaching decision. Student responses provide evidence. Analysis of that evidence informs the next teaching decision."><figcaption>The connection to keep visible in your writing.</figcaption></figure>`)+
      section('today','What would help today?',`<ul class="reading-links"><li><a href="#support/planning">${icon('notebook-pen')}Plan instruction and evidence together</a></li><li><a href="#support/writing">${icon('pencil-line')}Write clearly about teaching decisions</a></li><li><a href="#examples">${icon('book-open')}Read the official examples thoughtfully</a></li><li><a href="#planner">${icon('calendar-days')}Organize the work and submission timeline</a></li></ul>`)+
      `<div class="source-strip"><span class="version">2026-27 materials</span><p>MS Literacy and general SS Cycle 2 guides and Part I templates are V2.1. Other materials follow the official version chart. ${source('updates')}.</p></div>`;
  }
  function partList(id,step) {
    return `<ul class="part-list">${parts(id).filter(x=>x.step===step).map(x=>`<li><a href="#part/${id}/${x.id}"><span class="part-letter">${x.id}</span><span><strong>${esc(x.title)}</strong><small>${esc(x.limit)}</small></span>${icon('arrow-right')}</a></li>`).join('')}</ul>`;
  }
  function assessment(id) {
    const a=D.assessments[id];
    return crumb([[D.tracks[a.track].name],[a.short]])+head('Your assessment',a.name,a.description)+
      `<div class="fact-line"><span>${icon('users')}${esc(a.focus)}</span><span>${icon('book-open')}${esc(a.lessons)}</span><span>${icon('list-checks')}8 rubrics</span></div>`+sourceStrip(a,a.pages.evidence)+

      toc([['step1','1. Plan'],['step2','2. Teach & Assess'],['step3','3. Reflect'],['step4','4. Apply'],['rubrics','Rubric map']])+
      `<div class="callout"><p>${a.track==='mmsn'?(a.type===1?'Plan and teach one math lesson for one focus student with an IEP. Connect the lesson goals, adaptations, assessment evidence, and next instruction to this student.':'Plan and teach a three-lesson literacy unit focused on one student with an IEP, then teach and record the follow-up activity. Analyze this student’s literacy and ELD evidence and provide the required family feedback.'):(a.type===1?'Teach one lesson to a group of at least three students, including the three focus students. Explain the next activity in the Apply step.':'Teach a three-lesson unit to a group of at least three students, including one focus student. After analysis, teach and record the required follow-up activity.')}</p></div>`+
      (D.studiesFor(id).length?`<section class="guide-entry"><div><h2>Understanding the questions</h2><p>${esc(D.examples.find(x=>x.id===id).description)}</p></div><a class="text-link" href="#questions/${id}">Read the guide ${icon('arrow-right')}</a></section>`:'')+
      D.steps.map((s,i)=>section('step'+(i+1),`${i+1}. ${s.name}`,p(s.verb)+partList(id,i+1))).join('')+
      section('rubrics','Connect the work to the rubrics',D.specialistRubrics?.[id]?specialistRubrics(id):D.rubricGuides[id]?rubricLens(id,[1,2,3,4,5,6,7,8]):`<p>These are orientation summaries. Open each official rubric for its complete criteria and evidence sources.</p><div class="rubric-list">${D.rubrics[a.type].map((r,i)=>`<div class="rubric"><h3>${a.type}.${i+1} · ${esc(r[0])}</h3><p>${esc(r[1])}</p><p><strong>Ask yourself:</strong> ${esc(r[3])}</p><small>Evidence orientation: Parts ${esc(r[2])}</small><p class="source-note">${guide(a,a.rubricPages[i],'Read rubric '+a.type+'.'+(i+1))}</p></div>`).join('')}</div><p class="source-note">World Languages uses its own target-language and UDL constructs. Follow the WL rubric wording.</p><a class="text-link" href="#support/rubrics">How to review against a rubric ${icon('arrow-right')}</a>`)+
      section('next','Before you start',`<p>Check the exact template version and submission specifications. Discuss the lesson or unit timing, permissions, and focus-student selection with your program and cooperating teacher.</p><div class="button-row"><a class="primary-link" href="#part/${id}/A">Start Part A ${icon('arrow-right')}</a><a href="#planner">${icon('calendar-days')}Plan my timeline</a></div>`);
  }
  function partPage(id,letter) {
    const a=D.assessments[id],set=parts(id),base=set.find(x=>x.id===letter),idx=set.indexOf(base),lesson=D.pageLessons[id]?.[letter],item={...base,...lesson},key=id+'/'+letter;
    const template=a.templates[letter]?external(`https://docs.ctc.ca.gov/Document/Download/${a.templates[letter]}`,`Download official Part ${letter} template`):guide(a,a.pages.spec,'Submission specifications');
    const related=item.step===1?['planning','students','language']:item.step===2?['video','evidence','writing']:['reflection','assessment','rubrics'];
    return crumb([[D.tracks[a.track].name],[a.short,'#assessment/'+id],['Part '+letter]])+head(`Step ${item.step}: ${D.steps[item.step-1].name}`,`Part ${letter}: ${item.title}`,item.purpose)+
      `<div class="fact-line"><span>${icon('file-text')}${esc(item.limit)}</span></div>`+sourceStrip(a,a.pages[letter],template)+toc([...(D.questionMap?.[id]?.[letter]?[['current-questions','Current task']]:[]),...(D.hasPartStudies(id,letter)?[['question-studies','Questions & examples']]:[]),['prepare','Preparation'],...(lesson?[['rubric-lens','Rubric']]:[])])+
      (D.pathwayNotes[id]?.[letter]?`<div class="callout ${letter==='H'&&a.type===1?'caution':''}"><h3>${esc(D.tracks[a.track].name)} focus</h3>${p(D.pathwayNotes[id][letter])}</div>`:'')+
      (D.renderMSPartContext?D.renderMSPartContext(id,letter):'')+D.renderPartStudies(id,letter)+
      (D.questionMap?.[id]?.[letter]?'<details class="preparation-detail"><summary>Preparation and writing guidance</summary><div>':'')+
      section('prepare','Before you write',item.prepare.map(p).join(''))+
      section('write','Develop a clear, supported response',item.write.map(p).join(''))+
      `<div class="callout"><h3>A useful distinction</h3>${p(item.pitfall)}</div>`+
      (D.questionMap?.[id]?.[letter]?'</div></details>':'')+
      (lesson?(!D.studiesFor(id,letter).length?section('worked','Study the public answer',`<p class="source-note">Public V1 sample, not a current submission model. Quoted video commentary is not verification of the unreleased video.</p>${lesson.cases.map((c,i)=>caseStudy(c,i===0)).join('')}`):'')+
        section('rubric-lens','Use the rubric to inspect evidence',rubricLens(id,lesson.rubrics)):'')+
      section('connect','Connect this part to the next',p(item.connect))+
      section('help','Further support',`<ul class="reading-links">${related.map(k=>`<li><a href="#support/${k}">${icon(D.supportPages[k].icon)}${esc(D.supportPages[k].title)}</a></li>`).join('')}${a.sample?`<li><a href="#examples?section=sample-${a.sample}">${icon('book-open')}Read the related official sample</a></li>`:''}</ul>`)+noteBox(current)+
      `<nav class="endnav" aria-label="Previous and next part"><a href="#${idx?`part/${id}/${set[idx-1].id}`:`assessment/${id}`}">${icon('arrow-left')}${idx?'Part '+set[idx-1].id:'Assessment overview'}</a><a href="#${idx<set.length-1?`part/${id}/${set[idx+1].id}`:'support/submission'}">${idx<set.length-1?'Part '+set[idx+1].id+': '+esc(set[idx+1].title):'Review and submit'}${icon('arrow-right')}</a></nav>`;
  }
  function specialistRubrics(id) {
    const a=D.assessments[id];
    return `<p>Read these connections alongside the complete MMSN rubrics. The selected evidence and learning goals concern your focus student with an IEP.</p><div class="rubric-list">${D.specialistRubrics[id].map((r,i)=>`<div class="rubric"><h3>${a.type}.${i+1} · ${esc(r[0])}</h3>${p(r[2])}<small>Evidence orientation: Parts ${esc(r[1])}</small><p class="source-note">${guide(a,a.rubricPages[i],'Read complete rubric '+a.type+'.'+(i+1))}</p></div>`).join('')}</div>`;
  }
  function rubricLens(id,numbers) {
    const a=D.assessments[id];
    return `<p class="source-note">Selected reading lenses, paraphrased from the current ${esc(D.tracks[a.track].name)} ${esc(a.short)} V${esc(a.version)} rubrics. They omit detail and do not replace the complete Levels 1–5. Higher levels are cumulative: an added feature does not repair missing foundational evidence. No public sample is assigned a level.</p>`+numbers.map(n=>{
      const r=D.rubricGuides[id][n-1],label=a.type+'.'+n;
      return `<details class="rubric-lens"><summary>Rubric ${label}: ${esc(r[0])}</summary><div><p class="source-note">Evidence orientation: Parts ${esc(r[1])}. ${guide(a,a.rubricPages[n-1],'Read complete rubric '+label)}</p><dl><dt>Level 3 reading focus</dt><dd>${esc(r[2])}</dd><dt>Additional Level 4 focus</dt><dd>${esc(r[3])}</dd><dt>Additional Level 5 focus</dt><dd>${esc(r[4])}</dd></dl><p class="source-note">Self-review: locate the relevant evidence first, then read every descriptor in the official rubric. Do not treat a strategy name or checklist tick as proof of a score.</p></div></details>`;
    }).join('');
  }
  function caseStudy(id,open=false) {
    const c=D.caseStudies[id],s=D.examples.find(x=>x.id===c.path),a=D.assessments[c.path];
    return `<details class="worked-case" ${open?'open':''}><summary>${esc(c.title)} <span class="source-note">· PDF p. ${c.page}</span></summary><div><p class="case-label">Public answer excerpt</p><blockquote>${esc(c.quote)}</blockquote><p class="source-note">${external(`https://drive.google.com/file/d/${s.drive}/view`,s.title)} · PDF p. ${c.page}<br>${esc(D.sampleFiles[c.path])}</p><dl class="case-analysis"><dt>What is useful</dt><dd>${esc(c.strength)}</dd><dt>What to improve</dt><dd>${esc(c.gap)}</dd></dl><div class="editorial-revision"><h3>A more defensible reading</h3>${p(c.revision)}<p class="source-note">Editorial revision of the public claim, not a candidate answer or a scoring benchmark. It deliberately leaves unsupported conclusions unfilled.</p></div><h3>Evidence and revision task</h3>${p(c.investigate)}${c.extra?`<p class="source-note">${external(c.extra[1],c.extra[0])}</p>`:''}<p class="source-note">Inspect with ${c.rubrics.map(n=>guide(a,a.rubricPages[n-1],'rubric '+a.type+'.'+n)).join(' · ')}. These links identify relevant criteria, not a score for this excerpt.</p></div></details>`;
  }
  function supportPage(id) {
    const page=D.supportPages[id];
    return crumb([['Writing & Evidence','#support/writing'],[page.title]])+head('Teaching and writing support',page.title,page.intro)+
      `<details class="no-print"><summary>Browse all support topics</summary><div><ul class="reading-links">${Object.entries(D.supportPages).map(([k,v])=>`<li><a href="#support/${k}" ${id===k?'aria-current="page"':''}>${icon(v.icon)}${esc(v.title)}</a></li>`).join('')}</ul></div></details>`+
      toc(page.sections.map((s,i)=>['section-'+i,s.title]))+page.sections.map((s,i)=>section('section-'+i,s.title,(s.paragraphs||[]).map(p).join('')+(s.list?list(s.list):'')+(s.table?table(s.table.heads,s.table.rows):''))).join('')+
      (D.supportCases[id]?section('worked','Apply the idea to a public answer',`<p>Compare the claim with its evidence before reading the editorial analysis. Each example belongs to its named pathway; do not transfer its requirements to another assessment.</p>${D.supportCases[id].map((c,i)=>caseStudy(c,i===0)).join('')}`):'')+
      section('references','Read the source',`<p class="source-note">Instructional explanation by this companion. Official requirements and definitions are in the linked materials and your assessment guide.</p><ul class="reading-links"><li>${guide(active(),active().pages.evidence,active().short+' guide')}</li>${page.sources.map(k=>`<li>${source(k)}</li>`).join('')}</ul>`)+
      section('related','Keep going',`<ul class="reading-links">${page.related.map(k=>`<li><a href="#support/${k}">${icon(D.supportPages[k].icon)}${esc(D.supportPages[k].title)}</a></li>`).join('')}</ul>`)+noteBox(current);
  }
  function examples(selected) {
    const track=D.tracks[selected]?selected:state.track;
    const samples=D.examples.filter(x=>D.assessments[x.id].track===track);
    return head('Examples and critique','Read the Sample Responses','Follow a teaching decision from the question to the response, the evidence, and the next instructional step.')+
      `<nav class="example-tabs" aria-label="Example pathways">${Object.entries(D.tracks).map(([id,t])=>`<a href="#examples/${id}" ${track===id?'aria-current="page"':''}>${esc(t.name)}</a>`).join('')}</nav>`+
      `<p class="source-note">The supplied DOCX examples are historical teaching references. The current guide and template govern your assessment. Official scores are unknown and sample teaching videos are unavailable. Each revised analysis provides evidence-based instructional estimates and identifies evidence that cannot be judged.</p>`+
      (samples.length?samples.map(x=>`<section class="sample-entry" id="sample-${x.id}"><p class="lead-label">${esc(x.version)}</p><h2>${esc(x.title)}</h2>${p(x.description)}<div class="button-row"><a class="primary-link" href="#review/${x.id}">Full analysis and rubric estimates</a><a href="#example/${x.id}">Full rewritten example</a><a class="primary-link" href="#questions/${x.id}">Understanding the questions ${icon('arrow-right')}</a>${external(x.url||`https://drive.google.com/file/d/${x.drive}/view`,'Official sample source')}</div><p class="source-note">${esc(x.versionNote)}</p><ul class="sample-questions">${D.studiesFor(x.id).map(s=>`<li><small>Part ${esc(s.part)}${s.historical?' · Historical comparison':''}</small><a href="#questions/${x.id}?section=question-${s.id}">${esc(s.title)}</a></li>`).join('')}</ul><p><a class="text-link" href="#assessment/${x.id}">Current ${esc(D.assessments[x.id].short)} overview ${icon('arrow-right')}</a></p></section>`).join(''):`<section class="band"><h2>World Languages</h2><p>The supplied DOCX set does not contain a World Languages sample. Use the dedicated World Languages guides and rubrics; the other pathways’ sample interpretations do not establish target-language performance.</p><a href="#assessment/wl-c1">World Languages Cycle 1</a> · <a href="#assessment/wl-c2">World Languages Cycle 2</a></section>`)+
      (track==='ms'?'<section class="band"><h2>Additional historical example</h2><a href="#example/ms-historical">Grade 3 opinion writing: complete rewritten example</a><p><a href="#review/ms-historical">Full historical analysis and all eight rubric estimates</a></p></section>':'')+section('transfer','Carry the reasoning into your own work',`<p>A strong explanation makes the connection visible: an observed learning need, a purposeful teaching choice, the student’s response, and a justified next step. Keep those links grounded in your own teaching. An example’s wording, older limits, and student outcomes do not transfer to your submission.</p><p>${source('support')}</p>`)+noteBox(current);
  }
  function resources() {
    const a=active();
    return head('Official sources','Guides, Templates, and Resources','Use the official documents for requirements. Check the year and version inside the file each time you begin a new assessment.')+
      section('current',D.tracks[a.track].name+' · '+a.short,`<div class="source-strip"><span class="version">${D.year} · Guide V${a.version}</span><p>${folder(a)}</p></div><ul class="reading-links"><li>${guide(a,1,'Assessment guide')}</li>${Object.entries(a.templates).map(([letter,id])=>`<li>${external(`https://docs.ctc.ca.gov/Document/Download/${id}`,`Part ${letter}: ${parts(state.activeAssessment).find(p=>p.id===letter).title}`)}<small>Template V${a.type===2&&['ms','ss'].includes(a.track)&&letter==='I'?'2.1':'2.0'}</small></li>`).join('')}</ul>`)+
      section('versions','Current version check',`<p>The September 2026 corrections document identifies MS Literacy and SS Cycle 2 guides and Part I templates as V2.1. Other MS/SS templates and Math/Cycle 1 guides remain V2.0. </p><p>${source('updates')} · ${source('materials')}</p><p class="source-note">The Pearson materials page and September corrections chart differ in their description of the SS Part I version. Use the current CTC template and version chart, and ask your program to resolve any mismatch in the file supplied through registration.</p>`)+
      section('all','All supported assessment pathways',`<ul class="reading-links">${Object.values(D.assessments).map(x=>`<li>${external(`https://docs.ctc.ca.gov/DocumentLookup/5/Folder/${x.folder}`,D.tracks[x.track].name+' · '+x.short)}<small>Guide V${x.version}</small></li>`).join('')}</ul>`)+
      section('support','Registration, preparation, and results',`<ul class="reading-links">${['overview','dates','prep','portfolio','policies','passing','secondary','support','faq','samples'].map(k=>`<li>${source(k)}</li>`).join('')}</ul>`)+
      section('teaching','Teaching standards and frameworks',`<ul class="reading-links">${['standards','frameworks','eld','udl'].map(k=>`<li>${source(k)}</li>`).join('')}</ul><p class="source-note">CAST is the primary UDL resource. It is not a CalTPA scoring authority.</p>`)+
      section('specialist','Education Specialist materials',`<p>The MMSN Math guide is V2.0 and Literacy guide is V2.1; their templates, including Literacy Part I, remain V2.0. The older examples must be read against the current one-focus-student assessment. ${external('https://docs.ctc.ca.gov/Document/Download/31548','Official Education Specialist updates')}</p>`)+
      section('other','Other credential areas and access needs',`<p>This companion covers Mild/Moderate Support Needs within Education Specialist. Extensive Support Needs, Early Childhood Special Education, Deaf and Hard of Hearing, Visual Impairments, and PK-3 have separate official materials. For dual credentials, changes in credential area, accommodations, bilingual settings, or submission-language questions, confirm the applicable directions with your program.</p><p>${source('ctc')} · ${source('faq')} · ${source('overview')}</p>`);
  }
  function validDate(value) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
    const d=new Date(value+'T12:00:00');
    return Number.isFinite(d.getTime()) && `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`===value;
  }
  function dateOffset(date,days) {const d=new Date(date+'T12:00:00');d.setDate(d.getDate()+days);return d;}
  const dayLabel = date => date.toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});
  function milestones() {
    return [
      [-28,'Confirm requirements and permissions','Review the guide, speak with your cooperating teacher, and plan the teaching window.'],
      [-21,'Prepare the plan and assessments','Use recent learning evidence, align goals and tasks, and check recording arrangements.'],
      [-14,'Teach and gather evidence',active().type===2?'Teach the three-lesson unit and collect assessment evidence.':'Teach the lesson and preserve the recording and learning evidence.'],
      [-10,'Analyze and respond',active().type===2?'Score and interpret learning, give feedback, then plan and teach the follow-up.':'Analyze the lesson and focus-student adaptations; determine the next instructional activity.'],
      [-7,'Review the complete account','Check prompts, evidence, rubrics, consistency, file limits, and privacy.'],
      [-5,'Upload and review','Allow the official recommended buffer for processing, playback, and corrections.'],
      [0,'Complete the submission','Finish the official ePortfolio process and verify confirmation.']
    ];
  }
  function timeline() {
    const date=state.deadlines[state.activeAssessment];
    if (!validDate(date||'')) return '<p class="empty">Choose your intended submission date to lay out the preparation milestones.</p>';
    const today=new Date();today.setHours(0,0,0,0);
    return `<ol class="timeline">${milestones().map(([offset,title,desc])=>{const d=dateOffset(date,offset);return `<li><time datetime="${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}">${dayLabel(d)}${d<today?'<br><span class="source-note">Date has passed</span>':''}</time><div><strong>${esc(title)}</strong><p>${esc(desc)}</p></div></li>`;}).join('')}</ol><p class="source-note">Suggested planning intervals, not official deadlines. Adjust the teaching window with your program. Check the official Pacific Time cutoff and your program deadline.</p>`;
  }
  function planner() {
    return head('Planning reference','Organize the Work','Leave enough time for teaching, analysis, the required follow-up, and a careful submission review.')+
      `<nav class="toc" aria-label="Choose an assessment">${Object.entries(D.assessments).map(([id,a])=>`<a href="#planner/${id}">${esc(D.tracks[a.track].name+' · '+a.short)}</a>`).join('')}</nav><p><strong>${esc(active().name)}</strong></p><p class="source-note">${source('dates')} · ${source('overview')}</p>`+
      section('timeline','Suggested preparation sequence',`<p>These are suggested intervals, not official deadlines. Coordinate the teaching window and submission date with your preparation program.</p>${milestones().map(([offset,title,desc])=>`<section><h3>${esc(title)}</h3><p class="source-note">${offset?Math.abs(offset)+' days before submission':'Submission day'}</p>${p(desc)}</section>`).join('')}`)+
      section('parts','Read each assessment part',D.steps.map((step,i)=>`<h3>${i+1}. ${esc(step.name)}</h3>${partList(state.activeAssessment,i+1)}`).join(''));
  }
  function titleFor(route) {
    const [kind,id,letter]=route.split('/');
    if (kind==='part'&&D.assessments[id]) return `${D.tracks[D.assessments[id].track].name} ${D.assessments[id].short} · Part ${letter}`;
    if (kind==='support'&&D.supportPages[id]) return D.supportPages[id].title;
    if (kind==='assessment'&&D.assessments[id]) return D.assessments[id].name;
    if (kind==='questions'&&D.assessments[id]) return D.tracks[D.assessments[id].track].name+' '+D.assessments[id].short+': Understanding the Questions';
    if (kind==='planner'&&D.assessments[id]) return 'My plan · '+D.assessments[id].name;
    return {home:'Overview',examples:'Official examples',planner:'My plan',resources:'Official resources',glossary:'Glossary'}[kind]||route;
  }
  function notes() {
    const entries=Object.entries(state.notes).filter(([,v])=>v.trim()),practice=Object.entries(state.exercises).filter(([,v])=>v.trim());
    return head('My study work','Notes and Backup','Keep your questions, review records, and planning dates together.')+
      `<div class="callout"><p>Notes stay in this browser. Keep them de-identified and export a backup before clearing browser data or changing devices. An export contains your study notes, practice responses, review checks, dates, and drawing annotations.</p></div><div class="button-row"><button type="button" data-action="export">${icon('download')}Export backup</button><button type="button" data-action="import">${icon('upload')}Import backup</button><button type="button" data-action="text-export">${icon('file-text')}Export notes as text</button></div>`+
      section('saved','Saved notes',entries.length?entries.map(([route,text])=>`<div class="saved-note"><h3><a href="#${esc(route)}">${esc(titleFor(route))}</a></h3><p>${esc(text)}</p></div>`).join(''):'<p class="empty">No previously saved study notes. Use the annotation tools while reading.</p>')+
      section('practice','Practice responses',practice.length?practice.map(([route,text])=>`<div class="saved-note"><h3>${esc(titleFor(route))}</h3><p>${esc(text)}</p></div>`).join(''):'<p class="empty">No practice responses saved.</p>')+
      section('manage','Manage saved study work','<p>Clear only this site\'s notes, review checks, dates, and annotations. Export a backup first if you need to keep them.</p><button type="button" data-action="reset">'+icon('trash-2')+'Clear saved study work</button>');
  }
  function about() {
    return head('About this companion','A Clearer Path Through CalTPA','Developed for California post-baccalaureate elementary and secondary credential candidates, using the CalAPA Help teaching model.')+
      section('approach','The instructional approach',p('Each part explains its purpose, what to prepare, how to develop a supported response, how it connects to the next part, and what to check. Support pages develop the underlying teaching and writing concepts. The examples invite careful reading of official public samples.')+p('This is independent instructional guidance. CTC and Pearson have not endorsed this companion. Official documents remain on their original sites, and their current directions take precedence.'))+
      section('scope','Coverage',p('Multiple Subject Math and Literacy, general Single Subject Cycles 1 and 2, Education Specialist Mild/Moderate Support Needs Math and Literacy, with seven supplied rewritten examples. Six question guides pair current MS, SS, and MMSN tasks with the supplied DOCX examples. The historical Multiple Subject example is identified separately. Other Education Specialist areas and PK-3 use their own materials linked from Official Documents.'))+
      section('year','Academic year and annual review',p('This edition addresses 2026-27 materials. The MS/SS instructional revision and rubric review were completed October 9, 2026; the earlier requirements audit was October 8. Each new academic year requires a substantive review of official guides, templates, rubrics, evidence tables, policies, and updates.')+p('During the year, corrections can also change requirements. Confirm the current version before beginning and again before submitting. The September 2026 version chart identifies the revised Part I templates for both MS Literacy and SS Cycle 2.')+`<p>${source('updates')} · ${source('ctc')}</p>`)+
      section('limits','Known source questions',p('The first-assessment Part H recorded-response directions contain a duration inconsistency between the evidence/specification table and a direction note. The affected pages flag it. Confirm the recorded-response limit through your program and current official updates; the 4-page written option is consistent.')+p('The V1 sample submissions are historical writing references. Their scores are unknown, and videos are unavailable. The full case reviews provide justified instructional estimates or identify insufficient evidence. Current-rubric comparisons are not verified original-year scores and do not establish a passing result.'))+
      section('help','Get the right help',p('Your preparation program is the first contact for pathway, placement, support, accommodations, and individual submission decisions. Use Pearson preparation and contact resources for technical questions.')+`<p>${source('prep')} · ${source('overview')}</p>`);
  }
  function render() {
    const hash=location.hash.slice(1)||'home', [path,query='']=hash.split('?');
    if(path==='main'){main.focus();return;}
    const [kind,id,letter]=path.split('/');
    if(kind==='assessment'&&!id){location.replace('#assessment/'+state.activeAssessment);return;}
    current=path;
    if(['example','review'].includes(kind)&&D.rewrittenCases[id]){state.activeAssessment=D.rewrittenCases[id].path;state.track=D.assessments[state.activeAssessment].track;save();}
    if(kind==='examples'){
      const sampleId=new URLSearchParams(query).get('section')?.replace(/^sample-/,'');
      if(D.assessments[sampleId]){state.activeAssessment=sampleId;state.track=D.assessments[sampleId].track;save();}
      else if(D.tracks[id]){const second=active().type===2;state.track=id;state.activeAssessment=D.tracks[id].assessments[second?1:0];save();}
    }
    if(['assessment','part','planner','questions','rubrics'].includes(kind)&&D.assessments[id]){state.activeAssessment=id;state.track=D.assessments[id].track;save();}
    let html;
    if(kind==='home')html=D.renderOverview(state.track)+noteBox('home/'+state.track);
    else if(kind==='evidence-help')html=D.renderEvidenceHelp(state.track)+noteBox(current);
    else if(kind==='rubrics'&&['ms-math','ms-literacy'].includes(id))html=D.renderMSRubrics(id);
    else if(kind==='review'&&D.deepReviews[id])html=D.renderDeepReview(id)+noteBox(current);
    else if(kind==='example'&&D.rewrittenCases[id])html=D.renderRewrittenCase(id)+noteBox(current);
    else if(kind==='assessment'&&D.assessments[id])html=D.renderAssessment(id)+noteBox(current);
    else if(kind==='part'&&D.assessments[id]&&parts(id).some(x=>x.id===letter))html=partPage(id,letter);
    else if(kind==='support'&&D.supportPages[id])html=supportPage(id);
    else if(kind==='examples')html=examples(id);
    else if(kind==='questions'&&D.assessments[id]&&D.studiesFor(id).length)html=D.renderQuestionGuide(id)+noteBox(current);
    else if(kind==='resources')html=state.track==='ms'?D.renderAcademicSources()+D.renderReferenceLibrary():resources()+D.renderReferenceLibrary();
    else if(kind==='planner'){current='planner';html=planner();}
    else if(kind==='notes')html=notes();
    else if(kind==='about')html=about();
    else if(kind==='glossary')html=head('Reading support','Glossary','Plain-language explanations. Use the official guide glossary for the assessment definitions.')+`<dl class="glossary">${D.glossary.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl><p class="source-note">${guide(active(),1,'Current assessment guide and glossary')}</p>`;
    else html=head('Page not found','Let us get you back to the assessment','This reading link is not available.')+'<a class="primary-link" href="#home">Overview '+icon('arrow-right')+'</a>';
    main.dataset.pageVersion=D.year+'|'+(D.contentRevision||'original')+'|'+state.track+'|'+state.activeAssessment+'|'+current;main.innerHTML=D.readingHTML(`<article>${html}${footer()}</article>`);
    sidebar();addGuideNav();side.innerHTML=D.readingHTML(side.innerHTML);side.classList.remove('open');document.getElementById('menuBtn').setAttribute('aria-expanded','false');
    const nav=['part','questions','rubrics'].includes(kind)?'assessment':['review','example'].includes(kind)?'examples':kind;
    document.querySelectorAll('[data-nav]').forEach(el=>{if(el.dataset.nav===nav)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});
    document.title=main.querySelector('h1').textContent+' | CalTPA Help';window.lucide?.createIcons();
    const target=new URLSearchParams(query).get('section');
    if(target){const el=document.getElementById(target);if(el){let parent=el;while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;}el.scrollIntoView({block:'start'});el.setAttribute('tabindex','-1');el.focus({preventScroll:true});}}
    else{window.scrollTo(0,0);if(!firstRender)main.focus({preventScroll:true});}
    firstRender=false;
  }
  function setTrack(id) {
    if(!D.tracks[id])return;
    const was=state.activeAssessment,second=active().type===2;state.track=id;state.activeAssessment=D.tracks[id].assessments[second?1:0];save();
    if(['home','resources','planner'].includes(current))render();
    else if(current.startsWith('part/')||current.startsWith('assessment/'))location.hash='assessment/'+state.activeAssessment;
    else if(current.startsWith('questions/'))location.hash=(D.studiesFor(state.activeAssessment).length?'questions/':'assessment/')+state.activeAssessment;
    else if(current.startsWith('examples'))location.hash='examples/'+id;
    else if(current.startsWith('example/'))location.hash='example/'+state.activeAssessment;
    else render();
    if(was!==state.activeAssessment)notify('Pathway: '+D.tracks[id].name);
  }
  function download(name,text,type='application/json') {
    const url=URL.createObjectURL(new Blob([text],{type})),a=document.createElement('a');
    a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  function exportBackup() {
    let annotations={};try{annotations=JSON.parse(localStorage.getItem(INK)||'{}');}catch{}
    download(`CalTPA-study-${D.year}.json`,JSON.stringify({format:'CalTPA Help study backup',schema:1,exported:new Date().toISOString(),state,annotations},null,2));notify('Study backup exported.');
  }
  function confirmAction(title,message,label,callback) {
    const dialog=document.getElementById('confirmDialog');document.getElementById('confirmTitle').textContent=title;document.getElementById('confirmText').textContent=message;
    const yes=document.getElementById('confirmYes');yes.textContent=label;yes.onclick=()=>{dialog.close();callback();};
    document.getElementById('confirmCancel').onclick=()=>dialog.close();dialog.showModal();document.getElementById('confirmCancel').focus();
  }
  function validInk(data) {
    if(!data||typeof data!=='object'||Array.isArray(data)||Object.keys(data).length>2000)return false;
    return Object.entries(data).every(([k,arr])=>k.length<300&&Array.isArray(arr)&&arr.length<1500&&arr.every(s=>s&&['pen','highlight'].includes(s.tool)&&/^#[0-9a-f]{6}$/i.test(s.color)&&Number.isFinite(s.width)&&s.width>0&&s.width<=48&&Array.isArray(s.points)&&s.points.length>0&&s.points.length<=50000&&s.points.every(p=>Array.isArray(p)&&p.length===3&&p.every(Number.isFinite))));
  }
  function calendarExport() {
    const date=state.deadlines[state.activeAssessment];
    if(!validDate(date||'')){notify('Choose an intended submission date first.');document.getElementById('deadline').focus();return;}
    const dateString=d=>`${d.getFullYear()}${String(d.getMonth()+1).padStart(2,'0')}${String(d.getDate()).padStart(2,'0')}`;
    const clean=s=>s.replace(/\\/g,'\\\\').replace(/\r?\n/g,'\\n').replace(/,/g,'\\,').replace(/;/g,'\\;');
    const stamp=new Date().toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');
    const lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//CalTPA Help//Study Plan//EN','CALSCALE:GREGORIAN'];
    for(const [offset,title,desc] of milestones()){
      const d=dateOffset(date,offset),end=dateOffset(date,offset+1);
      lines.push('BEGIN:VEVENT',`UID:${state.activeAssessment}-${date}-${offset}@caltpa-help.local`,`DTSTAMP:${stamp}`,`DTSTART;VALUE=DATE:${dateString(d)}`,`DTEND;VALUE=DATE:${dateString(end)}`,`SUMMARY:${clean(active().short+': '+title)}`,`DESCRIPTION:${clean(desc+' Suggested study milestone. Confirm official and program deadlines.')}`,'END:VEVENT');
    }
    lines.push('END:VCALENDAR');const folded=lines.map(line=>line.match(/.{1,70}/g).join('\r\n ')).join('\r\n')+'\r\n';
    download('CalTPA-study-milestones.ics',folded,'text/calendar');notify('Calendar milestones exported.');
  }
  document.addEventListener('click',event=>{
    const track=event.target.closest('[data-track]');if(track){setTrack(track.dataset.track);return;}
    const action=event.target.closest('[data-action]')?.dataset.action;
    if(action==='export')exportBackup();
    if(action==='import')document.getElementById('importFile').click();
    if(action==='text-export'){
      const text=['CalTPA Help study notes',D.year,'',...Object.entries(state.notes).filter(([,v])=>v.trim()).flatMap(([r,v])=>[titleFor(r),v,'']),...Object.entries(state.exercises).filter(([,v])=>v.trim()).flatMap(([r,v])=>['Practice: '+titleFor(r),v,''])].join('\n');
      download('CalTPA-study-notes.txt',text,'text/plain');notify('Notes exported as text.');
    }
    if(action==='calendar')calendarExport();
    if(action==='reset')confirmAction('Clear saved study work?','This removes notes, practice responses, review checks, dates, and annotations from this browser. Export a backup first to keep a copy.','Clear study work',()=>{
      try{localStorage.removeItem(KEY);localStorage.removeItem(INK);state=fresh();location.hash='home';location.reload();}catch{notify('The browser could not clear saved work.');}
    });
  });
  document.addEventListener('change',event=>{
    const t=event.target;
    if(t.id==='trackSelect')setTrack(t.value);
    if(t.dataset.check){state.checks[t.dataset.check]=t.checked;save();}
    if(t.dataset.complete){state.completed[t.dataset.complete]=t.checked;save();sidebar();addGuideNav();window.lucide?.createIcons();}
    if(t.id==='deadline'){
      if(t.value&&!validDate(t.value)){notify('Choose a valid date.');return;}
      state.deadlines[state.activeAssessment]=t.value;save();document.getElementById('timelineContent').innerHTML=timeline();
    }
    if(t.id==='planAssessment'&&D.assessments[t.value]){state.activeAssessment=t.value;state.track=active().track;save();render();}
  });
  document.addEventListener('input',event=>{
    const t=event.target;
    if(t.dataset.note){state.notes[t.dataset.note]=t.value;const ok=save();document.getElementById('noteStatus').textContent=ok?'Saved in this browser. Keep notes de-identified.':'Not saved. Export a backup before leaving.';}
    if(t.dataset.exercise){state.exercises[t.dataset.exercise]=t.value;save();}
  });
  document.getElementById('importFile').addEventListener('change',async event=>{
    const file=event.target.files[0];event.target.value='';if(!file)return;
    if(file.size>10*1024*1024){notify('This backup is too large (maximum 10 MB).');return;}
    try{
      const data=JSON.parse(await file.text());
      if(data.format!=='CalTPA Help study backup'||data.schema!==1||!validState(data.state)||!validInk(data.annotations))throw new Error('invalid');
      confirmAction('Replace saved study work?',`Import this ${D.year} backup and replace the current notes, checklists, dates, and annotations in this browser?`,'Import backup',()=>{
        let beforeState,beforeInk;
        try{
          beforeState=localStorage.getItem(KEY);beforeInk=localStorage.getItem(INK);
          localStorage.setItem(INK,JSON.stringify(data.annotations));localStorage.setItem(KEY,JSON.stringify(data.state));location.reload();
        }catch{
          try{if(beforeState===null)localStorage.removeItem(KEY);else if(beforeState!==undefined)localStorage.setItem(KEY,beforeState);if(beforeInk===null)localStorage.removeItem(INK);else if(beforeInk!==undefined)localStorage.setItem(INK,beforeInk);}catch{}
          notify('Import could not be saved. Your backup file is unchanged.');
        }
      });
    }catch{notify(`Use a valid CalTPA Help ${D.year} study backup. Nothing was imported.`);}
  });
  function readingControls() {
    const dark=document.documentElement.dataset.theme==='dark',button=document.getElementById('theme');
    button.setAttribute('aria-label',dark?'Switch to light theme':'Switch to dark theme');button.title=button.getAttribute('aria-label');button.innerHTML=icon(dark?'sun':'moon');
    const size=parseInt(getComputedStyle(document.documentElement).getPropertyValue('--text-size'),10)||18;
    document.getElementById('smaller').disabled=size<=16;document.getElementById('larger').disabled=size>=24;window.lucide?.createIcons();
  }
  document.getElementById('theme').onclick=()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;try{localStorage.setItem('caltpa-theme',theme);}catch{}readingControls();};
  for(const [id,delta] of [['smaller',-2],['larger',2]])document.getElementById(id).onclick=()=>{
    const size=Math.max(16,Math.min(24,(parseInt(getComputedStyle(document.documentElement).getPropertyValue('--text-size'),10)||18)+delta));
    document.documentElement.style.setProperty('--text-size',size+'px');try{localStorage.setItem('caltpa-text-size',String(size));}catch{}readingControls();notify('Reading text: '+size+' px');
  };
  document.getElementById('menuBtn').onclick=()=>{const open=side.classList.toggle('open');document.getElementById('menuBtn').setAttribute('aria-expanded',String(open));if(open){side.querySelector('[data-track]').focus();window.scrollTo(0,0);}};
  document.getElementById('print').onclick=()=>window.print();
  window.addEventListener('hashchange',render);render();readingControls();
})();
