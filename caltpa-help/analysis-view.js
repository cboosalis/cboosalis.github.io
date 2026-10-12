/* Sustained, case-specific analysis. Supplied responses remain unchanged. */
(() => {
 'use strict';
 const D=window.CALTPA, e=s=>String(s??'').replace(/[&<>"']/g,c=>'&#'+c.charCodeAt(0)+';');
 D.contentRevision='case-analysis-20261011-v2';
 const sourceNames={math:'https://www.cde.ca.gov/be/st/ss/documents/ccssmathstandardaug2013.pdf',ela:'https://www.cde.ca.gov/be/st/ss/documents/finalelaccssstandards.pdf',eld:'https://www.cde.ca.gov/sp/el/er/documents/eldstndspublication14.pdf'};
 const historicalURL='https://www.scribd.com/document/399067971/CalTPA-C1-AssessmentGuide-MS';
 const standardLink=(c,doc,page)=>doc==='case'?`<a href="#example/${c.id}">Supplied case: IEP statement</a>`:[page].flat().map(n=>`<a href="${sourceNames[doc]}#page=${n}" target="_blank" rel="noopener">California standards, PDF p. ${n}</a>`).join('<br>');
 const section=(id,title,body)=>`<section class="review-section" id="${id}"><h2>${e(title)}</h2>${body}</section>`;
 const jump=(c,id,text)=>`<a href="#review/${c.id}?section=${id}">${e(text)}</a>`;
 const prose=(c,s)=>e(s).replace(/¶(\d+)(?:([–−-])(\d+))?/g,(_,a,d,b)=>jump(c,'review-source-'+a,'¶'+a+(b?d+b:'')));
 const p=(c,s)=>`<p>${prose(c,s)}</p>`;
 const quote=(c,n,original=false)=>`<figure class="review-quotation"><blockquote>${e((original?c.originalQuotes:c.quotes)[n])}</blockquote><figcaption>${e(original?c.source:c.file)} · ${original?'original':'rewrite'} paragraph ${n}</figcaption></figure>`;
 const number=(c,n)=>(c.id==='ms-historical'?1:D.assessments[c.id].type)+'.'+n;
 const card=(c,r)=>{
  const [n,estimate,criteria,judgment,adjacent]=r;
  const levels=c.id==='ms-historical'?null:D.rubricLevels[c.id][n-1];
  const a=D.assessments[c.id];
  return `<section class="review-rubric" id="review-rubric-${n}"><h3>Rubric ${number(c,n)} <span class="review-score">${e(estimate)}</span></h3><p class="source-note">${c.id==='ms-historical'?'2018 V01 instructional comparison':'Current V'+e(a.version)+' instructional comparison'} · ${estimate==='Insufficient evidence'?'No numeric judgment':'Not an official score'}</p>`+
   (levels?`<details class="review-descriptors"><summary>Read the complete five-level rubric descriptors</summary>${levels.map((s,i)=>`<section><h4>Level ${i+1}</h4><p>${e(s)}</p></section>`).join('')}<p><a href="https://docs.ctc.ca.gov/Document/Download/${a.guide}#page=${a.rubricPages[n-1]}" target="_blank" rel="noopener">Official guide, PDF page ${a.rubricPages[n-1]} — rubric, footnotes, and source layout</a></p></details><h4>Level 3 requirements</h4><p class="review-descriptor">${e(levels[2])}</p>`:
    `<h4>Historical rubric focus</h4><p>${e(c.rubricSummaries[n-1])}</p><p class="source-note">Brief paraphrase. <a href="${historicalURL}" target="_blank" rel="noopener">Read the complete 2018 CTC guide at the public mirror</a>.</p>`)+
   `<h4>Evidence against the requirements</h4><ol class="review-evidence">${criteria.map(s=>`<li>${prose(c,s)}</li>`).join('')}</ol><h4>Why this estimate is justified</h4>${p(c,judgment)}<h4>Why the adjacent levels are not established</h4>${p(c,adjacent)}</section>`;
 };
 D.reviewTeaser=cid=>{
  const c=D.deepReviews[cid];if(!c)return '';
  return `<aside class="review-intro"><p class="eyebrow">Revised October 11 · Full case analysis</p><h2>Standards, teaching, evidence, and all eight rubrics</h2><p>${e(c.thesis)}</p><a class="primary-link" href="#review/${cid}">Read the complete analysis</a> <a href="#review/${cid}?section=review-scores">See justified instructional estimates</a></aside>`;
 };
 D.renderDeepReview=cid=>{
  const c=D.deepReviews[cid],source=D.rewrittenCases[cid];
  return `<header class="page-head"><p class="eyebrow">Full example analysis · ${e(c.reviewDate)}</p><h1>${e(c.title)}</h1><p class="deck">${e(c.thesis)}</p></header>`+
   `<p><a href="#example/${cid}">Read the complete supplied rewrite and retained artifacts</a> · <a href="#assessment/${source.path}">Pathway assessment guide</a></p>`+
   `<div class="review-version"><h2>Which evidence and rubric version are being judged?</h2><p>${e(c.version)}</p><p>The estimates evaluate this fictional instructional packet. They do not establish a candidate’s official performance or a passing result. A range marks a substantive uncertainty; “insufficient evidence” means a required performance cannot be inspected. Missing video is not automatically Level 1. Scores are not added into a total.</p><p>Classroom task points, percentages, and IEP criteria are different from CalTPA rubric levels. Their meaning is analyzed separately below.</p></div>`+
   `<nav class="toc" aria-label="Full analysis sections">${[['review-standards','Standards alignment'],['review-lessons','Lesson and evidence analysis'],['review-gallery','Retained artifacts'],['review-scores','Rubric estimates'],['review-comparison','Original and rewrite'],['review-sources','Source paragraphs']].map(([id,t])=>jump(c,id,t)).join('')}</nav>`+
   D.figure('assets/maps/evidence-thread.svg','Student knowledge, teaching decisions, evidence, analysis, and next instruction','Read this case as a chain of decisions. Each learning claim must be supported by the response or artifact that follows it.')+
   section('review-standards','Standards alignment: demand, task, and evidence',`<p>These are lesson-sized alignments. A task can address a standard without demonstrating every part of it or proving student mastery.</p><div class="table-scroll" tabindex="0" role="region" aria-label="Standards alignment"><table><thead><tr><th>Standard and source</th><th>Demand and task alignment</th><th>Evidence to examine</th><th>Judgment</th></tr></thead><tbody>${c.standards.map(([code,demand,alignment,assessment,verdict,doc,page])=>`<tr><th scope="row">${e(code)}<br>${standardLink(c,doc,page)}</th><td><strong>${e(demand)}</strong>${p(c,alignment)}</td><td>${e(assessment)}</td><td>${e(verdict)}</td></tr>`).join('')}</tbody></table></div>`)+
   section('review-lessons','Read the teaching decisions and learning evidence',`<nav class="toc" aria-label="Case studies">${c.sections.map(s=>jump(c,'review-'+s[0],s[2])).join('')}</nav>${c.sections.map(([slug,part,title,refs,analysis,next])=>`<section class="review-study" id="review-${slug}"><p class="eyebrow">Source Part ${e(part)}</p><h3>${e(title)}</h3>${quote(c,refs[0])}<details><summary>Additional cited response paragraphs (${refs.length-1})</summary>${refs.slice(1).map(n=>quote(c,n)).join('')}</details><h4>Analysis</h4>${p(c,analysis)}<div class="review-next"><h4>Instructional revision and next evidence</h4>${p(c,next)}</div><p class="source-note">Source locators: ${refs.map(n=>jump(c,'review-source-'+n,'¶'+n)).join(', ')}. Paragraph numbers refer to the extracted source document, not page numbers.</p></section>`).join('')}`)+
   section('review-gallery','Inspect the retained resources and work',`<p>These are the supplied images. The analysis above distinguishes blank instructional resources, answer keys, and actual student responses. Enlarge an image to inspect its marks and criteria.</p><details><summary>Retained source images (${source.images.length})</summary><div class="review-gallery">${source.images.map((src,i)=>D.figure(src,'Retained source image '+(i+1)+' for '+c.title,`${c.title} · source image ${i+1} of ${source.images.length}. Interpret with the artifact analysis above.`)).join('')}</div></details>`)+
   section('review-scores','All eight rubrics: justified instructional estimates',`<p>Read the evidence and rationale with the estimate. For the six earlier V1 samples, current descriptors are a teaching comparison: changes in task design prevent a verified original-year rescore. The historical opinion-writing case uses its earlier Cycle 1 framework.</p><div class="review-score-grid">${c.rubrics.map(([n,value])=>`<a href="#review/${cid}?section=review-rubric-${n}"><strong>Rubric ${number(c,n)}</strong><span>${e(value)}</span></a>`).join('')}</div>${c.rubrics.map(r=>card(c,r)).join('')}`)+
   section('review-comparison','What the rewrite improves—and what still needs evidence',c.comparison.map(([original,rewritten,analysis])=>`<section class="review-study"><h3>Original paragraph ${original} → rewrite paragraph ${rewritten}</h3><div class="review-comparison"><div><h4>Original response</h4>${quote(c,original,true)}</div><div><h4>Supplied rewrite</h4>${quote(c,rewritten)}</div></div><h4>Evaluation of the revision</h4>${p(c,analysis)}</section>`).join('')+`<div class="review-next"><h3>A stronger analysis pattern</h3>${p(c,c.illustration)}<p class="source-note">This proposed wording is an instructional illustration. It does not add an event, student response, or result to the supplied example.</p></div>`)+
   section('review-sources','Check the source paragraphs',`<p>Quotes below retain the supplied rewrite. Findings and corrections appear in the analysis; the original record has not been silently altered.</p>${Object.entries(c.quotes).map(([n])=>`<details id="review-source-${n}"><summary>Rewrite paragraph ${n}</summary>${quote(c,n)}</details>`).join('')}`)+
   `<nav class="endnav"><a href="#example/${cid}">Return to the complete example</a><a href="#examples">All teaching examples</a></nav>`;
 };
 const oldCase=D.renderRewrittenCase;
 D.renderRewrittenCase=cid=>D.reviewTeaser(cid)+oldCase(cid).replace(/<a href="#questions\/[^\"]+">Detailed analysis<\/a>/g,`<a href="#review/${cid}">Full revised analysis and scores</a>`);
 const oldGuide=D.renderQuestionGuide;
 D.renderQuestionGuide=(id,embedded)=>D.reviewTeaser(id)+oldGuide(id,embedded);
 const oldOverview=D.renderOverview;
 D.renderOverview=track=>oldOverview(track).replace(/(<a href="#example\/([^"?]+)">)/g,(_,link,cid)=>`<a href="#review/${cid}">Full analysis and scores</a><br>${link}`);
 const oldParts=D.renderPartStudies;
 D.renderPartStudies=(id,letter)=>{
  const c=D.deepReviews[id],sections=c?.sections.filter(s=>s[1]===letter)||[];
  return (sections.length?`<aside class="review-intro"><h2>Examine Part ${e(letter)} in the teaching example</h2><ul>${sections.map(s=>`<li>${jump(c,'review-'+s[0],s[2])}</li>`).join('')}</ul><a href="#review/${id}?section=review-scores">All eight rubric analyses and justified estimates</a></aside>`:'')+oldParts(id,letter);
 };
})();
