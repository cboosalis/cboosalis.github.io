(() => {
  'use strict';
  const D = window.CALTPA;
  const esc = value => String(value ?? '').replace(/[&<>\x22']/g, c => '&#' + c.charCodeAt(0) + ';');
  const para = text => `<p>${esc(text)}</p>`;
  const link = (url, label) => `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`;
  const sampleURL = sample => sample.url || `https://drive.google.com/file/d/${sample.drive}/view`;
  const partSet = id => D.assessments[id].parts || D.partSets[D.assessments[id].type];
  const studies = (id, part) => D.studies.filter(s => s.path === id && (!part || s.part === part));
  D.studiesFor = studies;
  const relatedStudies = (id, letter) => studies(id).filter(s => ({D:['B','C'],E:['F'],G:['I'],H:['I'],K:['L']}[letter] || []).includes(s.part)).slice(0,2);
  D.hasPartStudies = (id, letter) => studies(id,letter).length>0 || relatedStudies(id,letter).length>0;

  function rubricSummary(id, numbers) {
    const a = D.assessments[id];
    return `<div class="question-rubrics"><h4>Rubric connection</h4>${numbers.map(n => {
      const r = D.specialistRubrics?.[id]?.[n - 1];
      const general = D.rubricGuides?.[id]?.[n - 1];
      return `<p><strong>${a.type}.${n} ${esc(r?.[0] || general?.[0] || '')}</strong> ${esc(r?.[2] || general?.[2] || '')} ${link(`https://docs.ctc.ca.gov/Document/Download/${a.guide}#page=${a.rubricPages[n - 1]}`, 'Read full rubric')}</p>`;
    }).join('')}<p class="source-note">A reading focus, not a complete descriptor or a score for the example.</p></div>`;
  }

  function study(s, guideView = false) {
    const a = D.assessments[s.path], sample = D.examples.find(x => x.id === s.path);
    const template = a.templates[s.templatePart || s.part];
    const sourceTarget = s.historical ? 'https://docs.nesinc.com/CA/CalTPAMSCycle1ExampleRevised.pdf' : sampleURL(sample);
    return `<article class="question-review" id="question-${esc(s.id)}">
      <header class="question-heading"><p class="lead-label">Part ${esc(s.part)}${s.historical ? ' · Historical comparison' : ''}</p><h3>${esc(s.title)}</h3><a class="question-permalink" href="#questions/${s.path}?section=question-${esc(s.id)}" aria-label="Link to ${esc(s.title)}" title="Link to this question"><i data-lucide="link" aria-hidden="true"></i></a></header>
      <div class="current-question"><p class="case-label">Current question focus</p>${para(s.question)}<p class="source-note">Paraphrase · ${esc(s.currentLocator || 'Part ' + s.part)} · ${link(template ? `https://docs.ctc.ca.gov/Document/Download/${template}` : `https://docs.ctc.ca.gov/Document/Download/${a.guide}#page=${a.pages[s.part]}`, template ? 'Open current template' : 'Open current directions')}</p></div>
      <div class="question-meaning"><h4>What this asks</h4>${para(s.meaning)}</div>
      ${rubricSummary(s.path, s.rubrics)}
      <div class="source-response"><h4>${s.historical ? 'Historical source response' : 'Original response being analyzed'}</h4><p><a href="#example/${s.historical?'ms-historical':s.path}${D.rewrittenCases?.[s.historical?'ms-historical':s.path]?.parts.some(p=>p.id===s.part)?'?section=example-'+(s.historical?'ms-historical':s.path)+'-'+s.part:''}">Read this part in the full rewritten teaching example</a></p><p class="source-note">${esc(s.historical ? 'Older Multiple Subject Cycle 1 example' : sample.title)} · ${esc(s.historical ? 'Earlier assessment design' : sample.version)}</p><blockquote>${s.excerpts.map((e,i) => `${i && s.source.paragraphs[i] !== s.source.paragraphs[i-1]+1 ? '<p class="excerpt-gap" aria-label="Nonconsecutive excerpt">[...]</p>' : ''}${para(e)}`).join('')}</blockquote><details class="source-locator"><summary>Source and location</summary><div><p>${esc(s.source.file)}</p><p>DOCX paragraph${s.source.paragraphs.length === 1 ? '' : 's'} ${s.source.paragraphs.map(n=>n+1).join(', ')}${s.pdfPages?.length ? ' · companion PDF page' + (s.pdfPages.length === 1 ? ' ' : 's ') + s.pdfPages.join(', ') : ''}. Selected text retains the supplied wording; nonconsecutive excerpts are separated by [...]. Conversion artifacts may remain.</p>${link(sourceTarget, s.historical ? 'Historical source PDF' : 'Official sample source')}</div></details></div>
      <div class="question-critique"><h4>Analysis of the source response</h4><p><strong>What works.</strong> ${esc(s.strength)}</p><p><strong>What needs more explanation.</strong> ${esc(s.gap)}</p><h4>Specific improvements</h4><ol>${s.improvements.map(x=>`<li>${esc(x)}</li>`).join('')}</ol></div>
      <div class="question-connection"><h4>Connect the evidence</h4>${para(s.connection)}${guideView ? `<a class="text-link" href="#part/${s.path}/${s.part}">Part ${s.part}: preparation and guidance <i data-lucide="arrow-right" aria-hidden="true"></i></a>` : ''}</div>
    </article>`;
  }

  D.renderQuestionMap = (id, letter) => {
    const map = D.questionMap?.[id]?.[letter];
    if (!map) return '';
    return `<details class="question-map" id="current-questions" ${studies(id,letter).length?'':'open'}><summary>Current questions for this part</summary><div><ol>${map.questions.map(q=>`<li>${esc(q)}</li>`).join('')}</ol><p class="source-note">${esc(map.locator)} · Plain-language reading map. Address every prompt in the official template.</p></div></details>`;
  };

  D.renderPartStudies = (id, letter) => {
    const items = studies(id, letter);
    const related = items.length ? [] : relatedStudies(id,letter);
    return D.renderQuestionMap(id, letter) + (items.length ? `<section id="question-studies" class="question-studies"><h2>Understand the questions</h2><p class="source-note">Current tasks are paired with older sample writing. The critiques are instructional interpretations; no official score is assigned.</p>${items.map(s=>study(s)).join('')}</section>` : related.length ? `<section class="band" id="question-studies"><h2>Connect the artifact to its explanation</h2><ul class="reading-links">${related.map(s=>`<li><a href="#questions/${id}?section=question-${s.id}">${esc(s.title)}</a><small>${esc(s.question)}</small></li>`).join('')}</ul><p>Use the actual submitted artifact to check the account. A written sample cannot verify an unavailable video or work product.</p></section>` : '');
  };

  D.renderQuestionGuide = (id, embedded=false) => {
    const a = D.assessments[id], sample = D.examples.find(x=>x.id===id), items = studies(id);
    const groups = partSet(id).filter(p=>items.some(s=>s.part===p.id));
    return `${embedded?'':`<nav class="breadcrumb" aria-label="Breadcrumb"><a href="#home">Overview</a><span>/</span><a href="#assessment/${id}">${esc(D.tracks[a.track].name)} · ${esc(a.short)}</a></nav>
      <header class="page-head"><p class="eyebrow">${esc(D.tracks[a.track].name)}</p><h1>${esc(a.short)}: Understanding the Questions</h1><p class="deck">${esc(sample.description)}</p></header>`}
      <p>Begin with what the current question asks. Read how the sample writer responds, then consider the explanation, evidence, and improvements together.</p>
      <div class="callout caution"><h2 class="compact-heading">Keep the versions separate</h2>${para(sample.versionNote)}<p class="source-note">Official sample scores are unknown. The available written account does not verify the unreleased teaching video.</p></div>
      <details class="question-index" open><summary>Questions and examples</summary><nav aria-label="Questions in this guide">${groups.map(part=>`<div><strong>Part ${part.id} · ${esc(part.title)}</strong>${items.filter(s=>s.part===part.id).map(s=>`<a href="#questions/${id}?section=question-${s.id}">${esc(s.title)}</a>`).join('')}</div>`).join('')}</nav></details>
      ${groups.map(part=>`<section class="question-group" id="study-part-${part.id}"><h2>Part ${part.id}: ${esc(part.title)}</h2>${D.rewrittenCases?.[id]?.parts.filter(p=>p.id===part.id).map(p=>`<details class="full-rewrite"><summary>Read the full rewritten teaching example: Part ${part.id}</summary><div class="rewritten-response">${p.html}</div></details>`).join('')||''}${items.filter(s=>s.part===part.id).map(s=>study(s,true)).join('')}</section>`).join('')}
      <nav class="endnav"><a href="#assessment/${id}"><i data-lucide="arrow-left" aria-hidden="true"></i>Assessment overview</a><a href="#examples/${a.track}">More examples<i data-lucide="arrow-right" aria-hidden="true"></i></a></nav>`;
  };
})();
