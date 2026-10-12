'use strict';
/* Instructional review of public samples, not candidate-specific feedback or scoring. */
(() => {
  const D=window.CALTPA;
  D.contentRevision='instructional-review-2026-10-09';
  D.reviewed='2026-10-09';
  D.sampleFiles={
    'ms-math':'V1-MS-MPA-2nd-Grade-Sample-Submission.pdf',
    'ms-literacy':'V1-MS-LPA-Sample-Submission.pdf',
    'ss-c1':'V1-SS-Cycle-1-7th-Grade-English-Sample-Submission.pdf',
    'ss-c2':'V1-SS-CalTPA-Cycle-2-Sample-Submission.pdf'
  };
  // These are deliberately partial reading lenses. The linked official rubric governs.
  const cycle1=[
    ['Design learning from evidence','A–D','Connect recent learning, assets, standards, content and ALD goals, a safe environment, higher-order thinking, monitoring, and UDL.','Look for purposeful collaboration supporting both learning goals.','Look for a meaningful connection to an additional academic area.'],
    ['FS1: language access and development','A–D','Use recent evidence and an asset to explain a targeted ALD adaptation.','Look for multiple modes of communication, not only a sentence starter.','Explain the relevant research or evidence-based rationale for the adaptation.'],
    ['FS2: access to the content','A–D','Connect a demonstrated content need and an asset to a specific adaptation.','Look for two or more multisensory strategies that address the actual need.','Explain a relevant content-specific research or evidence-based rationale.'],
    ['FS3: participation, well-being, and learning','A–D','Use recent evidence and an asset to plan support for well-being or behavior that enables learning.','Look for a targeted, proactive plan rather than only reacting to difficulty.','Explain a relevant research or evidence-based rationale.'],
    ['An environment that supports learning','E–F','Show a safe, positive environment, UDL, accurate content, and teaching of the planned lesson.','Look for multiple UDL strategies that support access and engagement.','Look for structured collaborative exploration of the content.'],
    ['Thinking, monitoring, and responding','E–F','Engage learners in higher-order thinking; monitor and intentionally respond to their learning.','Look for multiple assessment methods used to adjust instruction.','Look for a meaningful real-world connection that develops the content learning.'],
    ['Analyze the lesson’s effectiveness','G','Analyze what worked and what did not using specific evidence, both goals, and all three focus-student adaptations.','Analyze how student assets influenced learning.','Use specific teaching examples to explain which strategies moved learning forward.'],
    ['Use learning to decide what follows','H','Justify next content and ALD instruction for the group and three focus students with earlier evidence.','Explain continued use of student assets.','Explain how the next instruction will strengthen higher-order thinking.']
  ];
  const cycle2=[
    ['Design assessments for both goals','A–D','Use recent evidence, standards, goals, formative assessment in each lesson, and a summative task with criteria aligned to content and ELD.','Look for multiple formative assessments within each lesson.','Look for real-life assessment connected to students’ cultures, languages, or experiences.'],
    ['Build a connected three-lesson unit','A–D','Sequence learning, use assets and UDL, integrate ELD, and explain adaptations for the focus student.','Explain purposeful use of cultural, lived, linguistic, or interest-based assets.','Look for multiple UDL strategies within each lesson.'],
    ['Teach for disciplinary understanding','E–F','Show active, deep content learning through the instruction planned in Step 1.','Respond to students’ age, language development, and content development.','Look for intentionally designed learning experiences that promote deep engagement.'],
    ['Use assets and UDL for access','E–F','Use students’ assets and UDL to engage them in content and ELD learning.','Explain the instructional use of cultural, lived, or linguistic assets.','Look for multiple UDL strategies supporting the focus student.'],
    ['Integrate ELD with content','E–F','Provide integrated ELD that supports the content learning goal.','Explain purposeful use of students’ assets and why those choices support learning.','Look for purposeful translanguaging to support learning.'],
    ['Use formative assessment to respond','E–F','Monitor learning and make an intentional instructional response.','Use multiple assessment methods addressing both goals.','Identify a pattern or misconception and make an immediate adaptation.'],
    ['Analyze summative learning and feedback','G–I','Analyze group and focus-student understandings and misconceptions, actionable feedback, teaching impact, and needed changes.','Provide concrete, goal-aligned feedback for the focus student.','Synthesize planning, teaching, and assessment evidence to identify the strategies’ impact.'],
    ['Teach an evidence-based follow-up','J–L','Plan, teach, and explain re-teaching or extension using focus-student summative and unit evidence.','Use the focus student’s assets, lived experiences, or language resources purposefully.','Synthesize multiple sources and explain why the follow-up advances learning.']
  ];
  D.rubricGuides={
    'ms-math':cycle1.map(r=>r.slice()),
    'ss-c1':cycle1.map(r=>r.slice()),
    'ms-literacy':cycle2.map(r=>r.slice()),
    'ss-c2':cycle2.map(r=>r.slice())
  };
  D.rubricGuides['ms-math'][0][2]+=' Include the math content standard and mathematical practice, not just a topic.';
  D.rubricGuides['ms-literacy'][0][2]+=' Address foundational reading skills and the selected additional literacy theme.';
  D.rubricGuides['ms-literacy'][1][2]+=' Use direct, systematic, explicit foundational-skills instruction and active learning in the additional theme.';
  D.rubricGuides['ms-literacy'][2]=['Teach foundational reading skills','E–F','Show direct, explicit foundational-skills instruction and active student learning from the planned unit.','Use a precise academic think-aloud to make the process visible.','Provide frequent opportunities to respond, feedback, and formative assessment throughout.'];
  D.rubricGuides['ms-literacy'][3]=['Develop the additional literacy theme','E–F','Use students’ assets and interests to engage them actively in the additional literacy theme.','Use cultural, lived, or linguistic assets purposefully.','Provide structured collaborative exploration of the additional theme.'];
  D.rubricGuides['ms-literacy'][4]=['UDL and integrated ELD','E–F','Use UDL and integrated ELD to support literacy learning.','Use multiple UDL strategies supporting learning.','Use purposeful translanguaging to support learning.'];
  D.rubricGuides['ms-literacy'][6][1]='C, D, G, H, I';

  D.caseStudies={};
  function add(id,path,title,page,quote,strength,gap,revision,investigate,rubrics,extra) {
    D.caseStudies[id]={id,path,title,page,quote,strength,gap,revision,investigate,rubrics,extra};
  }
  add('m-context','ms-math','Replace a learner label with an observation',1,
    'Students are also visual learners',
    'The surrounding paragraph identifies representations and modeling that the teacher can build on.',
    'A fixed learner label does not tell the reader what students recently did or which representation helped with which task.',
    'The context reports that students use visual representations and teacher modeling. The planning explanation needs a recent measurement example to show why those supports are appropriate for this lesson.',
    'Locate an actual recent task: did students align an object at zero, iterate equal units, or confuse the unit with the endpoint? Keep observation separate from interpretation.',[1,2,3,4]);
  add('m-goals','ms-math','Make the content and language goals observable',6,
    'Students will explain their thinking using simple sentences and math-related terms',
    'The lesson links estimating and measuring with language for explaining a mathematical decision.',
    'Vocabulary use alone does not establish an explanation. The measurement and language criteria need to be distinguishable.',
    'The plan identifies two related outcomes: estimating and measuring in centimeters, and explaining the reasoning using measurement language. The assessment description should make clear how each outcome will be recognized.',
    'Compare the estimate, measured value and unit, tool use, and explanation. A sensible estimate need not equal the eventual measurement. What counts as a reason rather than a guess?',[1]);
  add('m-adapt','ms-math','Complete the need-to-support connection',10,
    'I think an estimate that would be too high is __.',
    'The frame gives FS1 a way into the same mathematical discussion as peers.',
    'Completing the blank can name a number without explaining why it is unreasonable. A language scaffold should preserve the mathematical thinking.',
    'The frame supports stating an estimate. It does not, by itself, elicit the comparison or reason behind the estimate.',
    'Review whether the planned interaction also elicits a reason, allows relevant language resources, and records what FS1 can communicate. For FS2 and FS3, identify their distinct barriers instead of reusing the FS1 rationale.',[2,3,4]);
  add('m-monitor','ms-math','Name the misconception, not just the timestamp',18,
    "02:12 - Here I am noticing a student's misconception and am encouraging them to explore it.",
    'The writer locates a potentially useful teaching event.',
    'The sentence does not identify the misconception, the teacher’s response, or the student’s subsequent thinking. The unreleased video cannot be checked here.',
    'At 02:12, the commentary reports noticing a misconception and inviting exploration. As written, it does not establish what the student misunderstood or whether the response changed that understanding.',
    'During self-review, use the final clip to record the initial response, the exact instructional move, and the next response. Do not invent a quotation to complete the sequence.',[5,6]);
  add('m-language','ms-math','A language support is not yet a language outcome',22,
    'She used academic language to share her thinking regarding estimates that were too high, too low, and about right.',
    'The claim is tied to the actual lesson’s language demand.',
    'The account needs a locatable student response to show the reasoning expressed, the language used, and the assistance provided.',
    'The reflection reports FS1’s use of comparison language during estimation. Without a quoted or precisely described response, the reader cannot determine the quality or independence of the explanation.',
    'Distinguish a repeated frame from an explanation that uses a benchmark or object comparison. Analyze the response against the stated ALD goal, not the number of vocabulary words.',[7]);
  add('m-breaks','ms-math','Separate access from achievement',23,
    'Throughout the lesson, he confidently asked for two breaks.',
    'The account provides a concrete example of FS3 using a support and communicating a need.',
    'Requesting breaks is evidence about access and self-advocacy, not enough evidence of measurement or ALD learning.',
    'FS3 requested two breaks during the lesson. This supports a claim that the routine enabled him to communicate a need; a separate measurement response and explanation are needed to judge the lesson goals.',
    'Look for the student’s return to the task, the measurement produced, and the explanation after re-entry. Do not infer mathematical success from calm participation alone.',[4,7]);
  add('m-next','ms-math','Target the skill that remains unfinished',25,
    'FS2 demonstrated partial understanding of estimates, with a strong understanding of measuring lengths.',
    'The writer distinguishes two related skills instead of treating all measurement learning as one outcome.',
    'The distinction needs work evidence, then a next task focused on estimation rather than undifferentiated repetition.',
    'The reflection identifies estimation, rather than measuring length, as FS2’s remaining need. A defensible next step should use the estimation evidence to select practice and a recheck while preserving access supports.',
    'What response shows the estimate was unreasonable? What benchmark or comparison would address that error? How will a later independent response test the same idea?', [8]);
  add('l-context','ms-literacy','Answer the language question that was asked',3,
    'The focus student is an expanding English Learner who has been steadily improving in English literacy throughout the school year.',
    'The writer identifies relevant English-language development information.',
    'This response appears under a prompt about the primary language, Spanish. English proficiency does not establish Spanish literacy skills.',
    'The response supplies English-language information, but does not establish the focus student’s Spanish literacy skills. That information must be documented separately or identified as not yet known.',
    'Separate records, observed performance, and unknowns. Do not infer reading or writing proficiency in a home language from family language or an English proficiency label.',[1,2]);
  add('l-plan','ms-literacy','Use the actual standard and current unit structure',14,
    'CCSS.ELA-LITERACY.L.3.4.A',
    'The word-analysis sequence offers a teachable progression from word parts to meaning in connected text.',
    'The accompanying affix description belongs to L.3.4b, not L.3.4a. The V1 four-lesson sequence also cannot be copied as the current three-lesson unit.',
    'The affix task should be checked against L.3.4b. Context clues and known roots address related but distinct substandards; the plan should identify which learning is taught and assessed in each of the three current lessons.',
    'Check the exact wording of the standard, then trace each lesson’s goal, model, student practice, and assessment. Keep the separately taught follow-up outside the three-lesson unit.',[1,2],
    ['Verify L.3.4b with CDE','https://www2.cde.ca.gov/cacs/id/web/5688']);
  add('l-complete','ms-literacy','Completion does not establish mastery',25,
    'Completion of the worksheet demonstrates students’ mastery',
    'A worksheet can preserve student responses for analysis.',
    'Finishing is a task-status measure. It does not show whether word analysis, meaning, or the ELD performance met the goals.',
    'The completed worksheet provides responses to evaluate. Mastery must be judged against the accuracy of word-part analysis and meaning, and the separately identified ELD criteria.',
    'Identify which response demonstrates each criterion. If the ELD goal concerns collaborative discussion, determine what actual discussion evidence was collected; a worksheet alone may not capture it.',[1,7]);
  add('l-rubric','ms-literacy','Make classroom criteria distinguishable',43,
    'Chose an appropriate word from the word bank or recording sheet',
    'The student-task rubric gives a basis for feedback rather than only a total score.',
    'This Level 3 descriptor overlaps Level 2, which also accepts an appropriate word from the word bank. The source of a word does not necessarily distinguish quality of analysis.',
    'The word-selection descriptors overlap. A useful classroom criterion should distinguish the quality relevant to the goal rather than reward which list supplied the word.',
    'Review whether word-part accuracy, inferred meaning, and explanation are separately visible. This 18-point classroom rubric is not the CalTPA five-level rubric, and its points cannot be converted into a CalTPA score.',[1,7]);
  add('l-accuracy','ms-literacy','Check the content in the teacher model',27,
    'dis- meaning “not,” tract meaning “to pull,” and -ion indicating “an action or result.”',
    'The writer makes the intended word-part explanation visible enough to examine.',
    'For distract/distraction, treating dis- as simply “not” produces a misleading explanation. Content accuracy matters before commentary polish.',
    'In distract, the historical sense combines drawing or pulling with apart or away. A teaching explanation should connect the whole word’s meaning to that idea, rather than mechanically interpreting it as “not pull.”',
    'Check the exact word form shown to students. Distinguish distraction from distracting and connect the parts to a sentence’s meaning; do not teach one prefix gloss as valid in every word.',[3],
    ['Check distract in Etymonline','https://www.etymonline.com/word/distract']);
  add('l-support','ms-literacy','Reconcile independence and assistance',30,
    'I did not provide feedback on word meanings or correctness',
    'The writer recognizes that assessment conditions matter.',
    'Page 31 also reports immediate feedback, corrected misconceptions, and reinforced meanings, spelling, and sentence construction. The independence claim needs to be reconciled with the actual sequence.',
    'The commentary contains two different accounts of assistance. The analysis should distinguish responses completed before feedback from responses completed after support; it should not describe supported work as independent mastery.',
    'Use the actual task and recording to establish when assistance occurred and which responses it affected. Preserve the truth even when it limits the conclusion.',[6,7]);
  add('l-results','ms-literacy','Replace “majority” with interpretable evidence',32,
    'the majority of students scored highly across all components',
    'The writer attempts a group-level interpretation rather than discussing only one student.',
    'The statement omits counts, the number assessed, the criteria, and the distinction between literacy and ELD outcomes.',
    'The reflection reports generally high performance, but the statement does not identify how many students met each literacy or ELD criterion. The conclusion therefore remains broader than the evidence shown in the sentence.',
    'Use actual response counts and the scoring criteria. Keep absent work separate from demonstrated errors, and identify a representative misconception rather than relying only on the average.',[7]);
  add('l-feedback','ms-literacy','Keep feedback about the actual learning goal',41,
    'I had to repaint my wall cause it was dirty.',
    'The reported student sentence uses repaint meaningfully, and the feedback recognizes an example from the student’s experience.',
    'Changing “cause” to “because” concerns formal register; it is not, by itself, feedback on using re- to determine meaning.',
    'The sentence places repaint in a plausible context. Feedback can recognize that success while checking whether the student can explain how re- changes the meaning of paint; formal-register feedback is a separate issue.',
    'Review the actual feedback for a specific strength, an accurate next action, and an opportunity to use it. Do not describe the student’s home-language practices or conversational register as a global deficit.',[7]);
  add('l-follow','ms-literacy','Justify extension without erasing remaining needs',37,
    'five students, including my Focus Student (FS), who demonstrated mastery of prefixes and suffixes',
    'The follow-up moves word analysis into connected text and makes use of interests described in the context.',
    'Page 33 also identifies gaps in decoding unfamiliar multisyllabic words. Those findings need not conflict, but the account must distinguish the skills and level of support.',
    'The writer reports success with prefixes and suffixes and remaining difficulty decoding unfamiliar multisyllabic words. The follow-up rationale should explain why text-based extension is appropriate for the demonstrated skill and how the remaining need will be supported.',
    'Find the FS response that warrants extension. In the follow-up, distinguish a prompted explanation from independent transfer to a new word in text.',[7,8]);
  add('s-context','ss-c1','Reconcile the group before interpreting results',5,
    'Out of 33 students',
    'The diagnostic categorizes performance as beginning, developing, and secure.',
    'Part A describes a class of 32. A different assessment group may explain 33, but the text does not establish that. English-learner and reclassified counts also need consistent labels.',
    'The diagnostic reports 33 assessed students, while the context reports a class of 32. The account needs to identify the population and date for each figure before the counts can support a planning claim.',
    'Check the underlying roster and assessment record. Do not silently select a convenient denominator or count reclassified students as currently identified English learners.',[1,2,3,4]);
  add('s-demand','ss-c1','Preserve the reasoning in a supported task',7,
    'Discuss options, reach consensus on the best central idea, annotate supporting evidence and jot down page/line references.',
    'The task can require comparison and evidence-based justification, not just recall.',
    'Choosing among supplied options only reveals reasoning if students explain why the evidence supports their choice. A one-central-idea lesson is also only a contribution to RI.7.2’s broader demand.',
    'The planned discussion asks students to choose a central idea and cite evidence. Its intellectual demand depends on students doing the comparison and justification, not on the teacher eliminating alternatives.',
    'Inspect the student materials and prompts: do they leave a meaningful decision to the learner? Explain the lesson’s scope without claiming that one chosen idea demonstrates the full standard.',[1,6]);
  add('s-adapt','ss-c1','Connect the organizer to the documented need',10,
    'a simple graphic organizer that helps him connect the topic, evidence, and central idea before writing.',
    'The adaptation targets FS2’s reported difficulty distinguishing a topic from a central idea.',
    'Naming an organizer does not explain how its prompts change the thinking or how the teacher will check learning beyond the organizer.',
    'The organizer separates topic, evidence, and central idea to address the difficulty identified for FS2. The plan still needs to explain the task within each section and the response that will show a more accurate distinction.',
    'Keep a content need distinct from language development and well-being needs. For FS3, describe the observable access need and proactive check-in without repeating private family history.',[2,3,4]);
  add('s-cue','ss-c1','Do not turn a teacher cue into student reasoning',22,
    'he picked it because I had told him two of the other options were wrong.',
    'The writer reports the student’s actual reason, including a limitation of the instructional move.',
    'This reason is evidence of using the teacher’s elimination cue, not yet evidence of analyzing the text to justify a central idea.',
    'The student attributed the choice to the teacher’s elimination of two options. That response does not yet show an evidence-based justification of the central idea, even if the selected answer was correct.',
    'Look for a later response in which the student connects a claim to text evidence. If none is available, acknowledge the limitation and use it to inform future questioning.',[5,6]);
  add('s-time','ss-c1','Make the evidence locator usable',22,
    '5:04:80',
    'Time references can help a reader locate a specific teaching event.',
    'The notation is ambiguous; other entries include seconds fields greater than 59. The actual videos are not available in the public sample.',
    'The timestamp must be checked against the final submitted clip and expressed in the format required by the current directions. The text alone does not establish a corrected time.',
    'Use clip number plus a verified time range. Do not guess whether a malformed value means minutes, seconds, hundredths, or a recording-clock time.',[5,6]);
  add('s-results','ss-c1','Attainment is not the same as growth',23,
    '65% of the class earned a 75% or higher on the assessment',
    'The reflection reports an outcome rather than only describing teaching activities.',
    'The class denominator, scoring criteria, and meaning of the threshold need explanation. A single post-lesson result cannot establish growth.',
    'The writer reports that 65% met a 75% assessment threshold. This is a claim about attainment at one point; growth would require an appropriate comparison with earlier evidence.',
    'Separate summary quality from academic-language performance. For each focus student, explain the actual response and assistance instead of interpreting two percentages as an instructional cause-and-effect finding.',[7]);
  add('s-next','ss-c1','Let an unfinished explanation determine the next task',28,
    'some students still struggled to explain why their answer was correct or how it connected to the text.',
    'The writer identifies a specific problem in reasoning rather than simply requesting more practice.',
    'The application needs to identify whose responses show this problem and how the next task will expose improvement.',
    'The remaining need is connecting a central-idea claim to text evidence. Next instruction should target that connection, with a later response that shows whether students can justify it rather than merely select an answer.',
    'Review differentiated next steps for the group, FS1, FS2, and FS3. Fade optional scaffolds in response to evidence, not by date, and do not remove required accommodations.',[8]);
  add('r-context','ss-c2','Describe observed access, not a family judgment',1,
    'lack of parental support',
    'The context attempts to account for conditions affecting access to learning.',
    'The phrase asserts a family deficit without establishing evidence or a specific instructional implication. It risks replacing knowledge of learners with an assumption.',
    'The family-support judgment should be removed unless a relevant, verified fact needs to be reported. Describe the observed classroom access need and the instructional response without attributing it to an unverified home cause.',
    'Identify what is directly known: completion patterns, access to materials, questions asked, or performance under particular supports. Language demands still need analysis; “NA” does not explain the language of mathematics.',[1,2]);
  add('r-plan','ss-c2','Verify the standard before building alignment',7,
    'CCSS.MATH.CONTENT.7.NA.2.d',
    'The unit identifies rational-number conversion as part of its intended learning.',
    'The standard code is mistyped: the number-system domain is NS, not NA. The historical four-lesson sequence also needs redesign for the current three-lesson requirement.',
    'The decimal-conversion standard should be identified as 7.NS.2.d. The current plan must show a coherent three-lesson progression and keep the subsequent follow-up separate.',
    'Verify the exact standard and narrow the unit’s claims to what three lessons can teach and assess. Do not compress four lessons only by relabeling the headings.',[1,2],
    ['Verify 7.NS.2.d with CDE','https://www2.cde.ca.gov/cacs/id/web/489']);
  add('r-assess','ss-c2','Define the response to a formative finding',25,
    'If a student shows significant struggle, I will step in and provide support or reteach if necessary.',
    'The plan anticipates responding rather than waiting until the end of the unit.',
    '“Struggle” and “support” do not identify a mathematical error, an instructional response, or a recheck. The ELD goal also needs its own evidence.',
    'The plan promises intervention but does not specify what finding would trigger it. A useful assessment plan identifies the response to inspect, the likely mathematical interpretation, and how the next response will test that interpretation.',
    'Distinguish conversion, sign, operation-selection, and vocabulary difficulties. A correct computation is not automatically evidence of asking and answering explanatory questions.',[1,6]);
  add('r-cue','ss-c2','Replace a keyword shortcut with mathematical relationships',30,
    'What does the word each tell us to do?',
    'The teacher is drawing attention to language in a word problem.',
    'A keyword alone does not determine an operation. The explanation needs to connect the quantities and their relationship in this particular situation.',
    'The question directs attention to “each,” but does not by itself reveal why multiplication or another operation represents the situation. The reasoning should identify the quantities and what one quantity represents per unit.',
    'In the reported scoring-game context, distinguish the amount per correct or incorrect response from the number of responses. Examine the student’s explanation rather than treating a prompted operation name as deep understanding.',[3,4,5,6]);
  add('r-artifact','ss-c2','Keep the focus student separate from the class pattern',33,
    'several answered 13 feet instead of 17 feet',
    'The group analysis identifies a specific error on the pool-distance item rather than relying only on the average.',
    'The FS artifact on PDF p. 41 shows 17 on that item. The group error cannot be assigned to this student. The FS’s p. 42 response to item 16 shows division with a $22 result, so the omitted negative sign deserves separate analysis.',
    'Some students gave 13 rather than 17 for the pool-distance item; the focus student’s displayed answer is 17. The focus-student analysis must therefore use different evidence for the learning need, such as the sign interpretation in item 16.',
    'Check PDF pp. 41–42 against the narrative. Pages 43–44 are an answer key, not the FS work. A correct division setup with a sign error suggests a different instructional question from not understanding division at all.',[7]);
  add('r-feedback','ss-c2','Tie the next action to the demonstrated error',32,
    'Next time, try circling the signs before combining the numbers.',
    'The feedback supplies a concrete action the learner can try.',
    'Circling signs may support attention, but the account should identify the response it addresses and what conceptual explanation or correction is still needed.',
    'The feedback offers a sign-checking routine. Its usefulness should be evaluated against the specific sign error and the student’s subsequent corrected reasoning, not simply whether the routine was mentioned.',
    'Locate the actual feedback given to the FS. Check that it recognizes a correct feature, identifies a needed change, and gives a goal-related action without assuming an error was caused by a diagnosis or rushing.',[7]);
  add('r-follow','ss-c2','Use an assessment blind spot to redesign instruction',39,
    'several of the original formative checks emphasized operational fluency rather than conversion skills',
    'The writer identifies why earlier checks may not have exposed the later difficulty.',
    'The follow-up must elicit the missing understanding, not only rehearse a familiar computation. A successful example with 8 ÷ 2 would not alone resolve fraction-to-decimal conversion.',
    'The reflection identifies a gap in the assessment design: operational checks did not sufficiently reveal conversion understanding. The follow-up should therefore make the fraction-as-division relationship and decimal placement visible.',
    'Use the FS’s actual evidence to justify re-teaching. Inspect a new conversion response and the explanation of numerator/dividend and denominator/divisor; do not infer mastery from a choral answer about what goes “inside.”',[8]);

  // Part-specific teaching: one decision, an evidence product, a public case, and a self-review task.
  D.pageLessons={};
  function pathway(id,rows) {
    D.pageLessons[id]={};
    rows.forEach(([letter,purpose,prepare,write,pitfall,cases,rubrics,practice])=>{
      D.pageLessons[id][letter]={purpose,prepare,write,pitfall,cases,rubrics,practice};
    });
  }
  pathway('ms-math',[
    ['A','Show what these learners already know about the mathematics, the language they can use, and the specific needs that will shape this lesson.',
      ['Select recent measurement or related unit-iteration evidence, not only broad addition and subtraction performance.','Separate the group profile from FS1 language development, FS2 content learning, and FS3 well-being or behavior.'],
      ['Build each relevant statement from an observation, its source and timing, and a planning consequence. A bilingual asset becomes instructional when students actually use it to compare, explain, or make sense of measurement.','Describe what each focus student can already do before naming a need. Keep primary-language skills, English proficiency, mathematical knowledge, and access conditions distinct.'],
      'A demographic fact or “visual learner” label is not evidence that a particular adaptation is needed.',['m-context'],[1,2,3,4],'Which recent response would change your lesson plan, and what decision does it support?'],
    ['B','Design one math lesson in which estimating, measuring, and explaining are visible, assessable actions.',
      ['Check the math content standard, mathematical practice, and current five-page template.','Write separate observable content and math ALD goals, then inspect the task for evidence of both.'],
      ['Sequence a model, supported exploration, and a response that reveals student thinking. In the public lesson, tool choice, zero alignment, equal units, and estimation reasonableness are useful decisions to examine.','Specify what you will listen for or inspect, how you will interpret a likely response, and how instruction can respond. Explain why a tool or collaborative structure fits these students rather than merely naming UDL.'],
      'Manipulatives and group work do not automatically create reasoning. The task must leave the mathematical decision with students.',['m-goals'],[1],'Where does your task require a mathematical reason, and where will you see language used to express it?'],
    ['C','Explain a different, evidence-based adaptation for each focus student while preserving the math goal.',
      ['Bring the precise need and asset for each focus student from Part A.','Locate the actual prompt, tool, interaction, or routine in Part B that implements each adaptation.'],
      ['For FS1, explain how the support enables mathematical meaning through language, including opportunities to communicate. For FS2, explain how the adaptation addresses the identified content barrier.','For FS3, describe a proactive routine, access to the task, and re-entry into learning. Explain the mechanism of each support and how its usefulness will be monitored; a diagnosis is not the mechanism.'],
      'Do not use the same general differentiation paragraph for all three students. Explain why this support fits this learner and this task.',['m-adapt','m-breaks'],[2,3,4],'Can you trace each adaptation from a recent observation to a specific teaching move and a response to inspect?'],
    ['D','Provide the actual resources that make the mathematical work and planned adaptations inspectable.',
      ['Check legibility of the task, diagrams, tool images, student directions, and language supports.','Match each included resource to its use in the lesson plan and remove identifying information.'],
      ['Inspect the worksheet as a learner would: does it require an estimate, measurement with units, and reasoning, or only a number? Include the resources required by the current directions, not a substitute description of them.','Show the actual frame or organizer you plan to use. Verify that it does not supply the mathematical conclusion that the student is supposed to produce.'],
      'A resource description cannot make an unseen task’s intellectual demand clear. A polished worksheet cannot repair a goal-assessment mismatch.',['m-goals','m-adapt'],[1,2,3,4],'Which visible feature of the materials elicits the intended reasoning rather than just completion?'],
    ['E','Self-select video evidence that shows students thinking and your response, not only a well-managed lesson.',
      ['Check permissions and current clip count and total-duration specifications.','Review the final clips for audible student responses, visible task context, safe interaction, and your instructional response.'],
      ['Create a private evidence log while reviewing your own footage: clip and time, student response, teaching move, next response. Use it to evaluate coverage of the official directions.','Look for evidence relevant to both the content and math ALD goals. A teacher explanation of what was intended is different from the students demonstrating the learning.'],
      'The public sample’s videos are unavailable. Its commentary can be analyzed as writing, but it cannot verify what its video actually shows.',['m-monitor'],[5,6],'Does your own evidence log identify a student response before and after an instructional decision?'],
    ['F','Explain why a recorded teaching move mattered using a locatable student response.',
      ['Use timestamps from the final submitted clips, not the original recording clock.','Distinguish planned support, an observed need, an in-the-moment decision, and its observed result.'],
      ['Analyze a short event rather than narrating every action. Identify the actual mathematical idea or misconception, explain why you responded as you did, and interpret the next response cautiously.','When discussing ALD, identify what students communicated with the frame or discussion structure. Explain how the response relates to the goal; do not equate providing a frame with developing language.'],
      '“I noticed a misconception” and “this was effective” are conclusions needing evidence, not self-explanatory evidence.',['m-monitor','m-language'],[5,6],'What does the student’s response support, and what would be an overclaim?'],
    ['G','Evaluate the lesson using mathematical and language evidence for the group and all three focus students.',
      ['Gather goal-related responses and identify the amount of support each involved.','Separate evidence of participation, access, mathematical understanding, and language use.'],
      ['Analyze a success and an unfinished learning need, then examine the teaching choices that may have contributed. Use specific examples from the earlier parts without turning an association into proof of causation.','Discuss each focus-student adaptation in relation to its intended function and the goals. FS3 using a break can be a genuine access success even when further evidence is needed to judge mathematics.'],
      'A strategy’s intended benefit is not the same as an observed benefit, and engagement is not interchangeable with learning.',['m-breaks','m-language'],[7],'Which reflection claim has direct goal-aligned evidence, and which needs to be narrowed?'],
    ['H','Plan next math and ALD instruction that follows from the learning you actually found.',
      ['Identify the next need for the group and separately for FS1, FS2, and FS3.','Bring one specific earlier response or finding to justify each instructional decision.'],
      ['Distinguish re-teaching an unfinished concept from extending a demonstrated one. In the sample, partial estimation understanding calls for a different next step from already-strong measuring performance.','Explain the next task, the continued use of assets and supports, and how the response will reveal more developed reasoning. This cycle’s Apply step describes next instruction; do not substitute the second assessment’s taught-follow-up requirements.'],
      '“More practice” is not a precise instructional decision. Fade optional support because evidence warrants it, not simply because time has passed.',['m-next'],[8],'What finding makes each next step necessary, and what new evidence would show it helped?']
  ]);
  pathway('ss-c1',[
    ['A','Use accurate, recent information about the group and three focus students to explain the subject-specific lesson.',
      ['Reconcile enrollment, number assessed, current English-learner status, and reclassification.','Select evidence of the exact disciplinary learning, not only a broad reading level or test label.'],
      ['Connect a recent response to a planning decision. In the English sample, confusing a topic with a central idea is more instructionally useful than a general achievement label.','Describe each focus student’s assets and needs with relevant, de-identified observations. Keep a well-being support focused on access to learning without publishing unnecessary family details.'],
      'Counts from different populations cannot be treated as one class result without explanation.',['s-context'],[1,2,3,4],'Which contextual fact changes the lesson, and is its population and evidence source clear?'],
    ['B','Plan a content-rich task with separate content and ALD goals and a way to see both.',
      ['Verify the standard’s full demand and state the portion this one lesson addresses.','Inspect whether students must reason in the discipline, not merely repeat terminology.'],
      ['For an English central-idea task, distinguish identifying a topic, stating a central idea, selecting evidence, and writing an objective summary. Explain the planned progression rather than treating these as interchangeable.','Plan questions and assessments that expose why students reached a conclusion. A language goal should concern a meaningful function such as justifying or summarizing, with language resources that enable it.'],
      'One correct selection does not establish the full standard or higher-order thinking.',['s-demand'],[1],'What decision must students make, and what response reveals their disciplinary reasoning?'],
    ['C','Explain how each focus-student adaptation addresses an identified need without doing the thinking for the student.',
      ['Match FS1 to ALD, FS2 to content access, and FS3 to well-being or behavior using actual evidence.','Locate the exact adaptation in the planned task or routine.'],
      ['Explain what the learner will do with an organizer, sentence support, or partner routine. In the sample, topic/evidence/central-idea fields are useful only if their use makes the distinction clearer.','Identify how you will notice whether the adaptation worked. For a proactive check-in after absence, specify the classroom access need and return to the task, not a speculative home cause.'],
      'An accommodation label or general promise of support does not explain an instructional mechanism.',['s-adapt'],[2,3,4],'How will the adaptation enable access while leaving the central intellectual decision with the student?'],
    ['D','Make the actual disciplinary task, materials, and adaptations available for review.',
      ['Check text excerpts, question options, organizers, directions, and language supports for legibility.','Match resources to Part B and the adaptations in Part C.'],
      ['Read the materials for the thinking they require. Prewritten central-idea options may support access, but the learner still needs to compare evidence and justify a choice.','Check that resources use accurate content and do not signal the correct answer in a way that replaces the intended reasoning. Follow current specifications and redact identifying information.'],
      'An attractive handout is not evidence of a demanding task if the reasoning has already been supplied.',['s-demand','s-adapt'],[1,2,3,4],'Which material makes the reasoning visible, and which might inadvertently supply the answer?'],
    ['E','Review your own clips for safe engagement, disciplinary thinking, and responsive teaching.',
      ['Check current clip requirements, consent, audio, and visibility.','Make an evidence log using final clip numbers and verified time ranges.'],
      ['Look for the students’ reasoning, not only the teacher’s questions. A correct answer after elimination of alternatives may be useful evidence of a limitation rather than evidence of independent analysis.','Review coverage of content and ALD opportunities across the clips you select. Keep video-selection decisions your own and follow the acceptable-support policy.'],
      'The public commentary is not a substitute for its unavailable videos. Do not infer a visible event from the writer’s evaluation alone.',['s-cue','s-time'],[5,6],'Can another viewer locate the student response on which your interpretation depends?'],
    ['F','Explain recorded instruction without confusing a prompted answer with disciplinary understanding.',
      ['Verify timestamps against final clips; ambiguous notations cannot be repaired by guessing.','Identify a student response, your decision, and the subsequent response for each major claim.'],
      ['Use precise disciplinary language for the thinking involved. Selecting a central idea because the teacher ruled out alternatives is not yet text-based justification.','Explain how ALD and UDL supports affected participation and learning, using what students actually said or did. Acknowledge when the evidence supports only a limited conclusion.'],
      'Commentary should not convert a reported limitation into a claim of higher-order thinking.',['s-cue','s-time'],[5,6],'Where does the actual response warrant a narrower claim than your first interpretation?'],
    ['G','Analyze attainment, remaining needs, and the effectiveness of instruction using interpretable evidence.',
      ['Attach meaning to each percentage: population, criterion, denominator, and time point.','Separate group results from each focus student’s content and ALD performance.'],
      ['Explain the quality of responses behind scores. A summary score and an academic-language score address different dimensions and need their own criteria.','Use the earlier teaching and student evidence to analyze adaptations, assets, environment, and learning. If you claim growth, identify an appropriate earlier comparison; otherwise describe attainment.'],
      'A post-lesson percentage alone does not establish improvement or show that one teaching strategy caused it.',['s-results'],[7],'Is each numerical claim interpretable, and does each learning claim have a specific response behind it?'],
    ['H','Choose next disciplinary and ALD instruction from the needs revealed by the lesson.',
      ['Identify a group need and a distinct next decision for each focus student.','Select specific earlier evidence supporting each decision.'],
      ['If students can select but cannot justify a central idea, target the claim-to-evidence relationship rather than repeating selection alone. Describe the task and how you will check the explanation.','Explain continued use of assets, appropriate support, and higher-order thinking. Extension should advance a demonstrated skill; re-teaching should address an identified gap.'],
      'Do not remove an accommodation to make a task appear more independent. Distinguish required access supports from optional scaffolds.',['s-next'],[8],'What will the next response reveal that the earlier response could not?']
  ]);
  pathway('ms-literacy',[
    ['A','Establish the group’s and focus student’s literacy, language, and asset information that the unit will use.',
      ['Gather recent decoding, word-analysis, meaning-making, and language evidence relevant to the planned unit.','Distinguish English skills, primary-language skills, and information not yet established.'],
      ['Describe what students can do, under what conditions, and what remains difficult. A language-proficiency label is context, not a direct account of a reading or writing response.','Explain how the identified assets will be used in literacy instruction. Do not infer home-language literacy from a home-language designation.'],
      'Answer the prompt about the particular language or skill rather than substituting a general English-development description.',['l-context'],[1,2],'What do you know directly about the focus student’s literacy in each relevant language, and what is still unknown?'],
    ['B','Plan three connected literacy lessons with explicit foundational-skills teaching, the additional theme, and integrated ELD.',
      ['Check exact ELA/Literacy and ELD standards and the current three-lesson directions.','Map the foundational reading skill and additional theme across the unit; address the additional theme in two or three lessons and integrated ELD in all three.'],
      ['Show how the model, guided practice, and student application develop the reading skill systematically. A word-parts lesson should teach accurate analysis and connect it to meaning rather than only labeling affixes.','Explain why each lesson follows from earlier learning and assessment evidence. Plan the three lessons before the separate follow-up; do not copy the V1 four-lesson structure.'],
      'Accurate standard codes and content explanations are prerequisites for alignment, not cosmetic details.',['l-plan','l-accuracy'],[1,2],'How does each lesson develop a capability needed in the next, and where is each learning goal assessed?'],
    ['C','Design assessments that distinguish literacy learning from completion and make ELD outcomes visible.',
      ['Identify a formative response in each lesson and the summative responses needed for both goals.','Check whether the criteria measure the actual goal and whether assessment assistance will be documented.'],
      ['Explain what a response will reveal about foundational skills and the additional theme. For morphology, naming parts, inferring meaning, decoding, and using a word are related but distinct performances.','Specify how language performance will be observed and evaluated. If the ELD goal concerns interaction, a written worksheet alone cannot establish how the student participated in that interaction.'],
      'Completing a worksheet is not equivalent to meeting its literacy and ELD criteria.',['l-complete'],[1],'Which actual response supplies evidence for each goal, and what would count as a misunderstanding?'],
    ['D','Provide the assessment task and scoring criteria that make the later analysis reproducible.',
      ['Inspect the blank task, directions, and criteria alongside the goals.','Check whether adjacent performance descriptions distinguish meaningful differences.'],
      ['Make the criteria sufficiently specific to explain why one response meets a goal and another does not. Remove accidental rewards for decorative features unless those features are part of the learning goal.','Keep the classroom rubric distinct from the CalTPA rubric. The first evaluates student work; the second evaluates the candidate’s evidence and teaching performance.'],
      'Overlapping criteria make a score hard to interpret. A classroom total cannot be translated into a CalTPA rubric level.',['l-rubric'],[1,7],'Could two readers apply the criteria to the same response and explain the same distinction?'],
    ['E','Review video for explicit literacy teaching, active learning, integrated ELD, and assessment-based response.',
      ['Check the current clip and duration rules and review the final recordings yourself.','Log examples of foundational-skills teaching, the additional theme, UDL/ELD, and formative response.'],
      ['Look for students applying the modeled process, not just watching the teacher model. For a word-analysis sequence, track the precise explanation and the response it elicits.','Identify evidence of both literacy and language learning. Note where responses required prompting so later analysis does not mistake supported performance for independent transfer.'],
      'A prompt-to-clip coverage list helps organization but does not by itself demonstrate the quality of instruction.',['l-accuracy','l-support'],[3,4,5,6],'Which student response makes the effect or limitation of a recorded instructional move visible?'],
    ['F','Analyze recorded literacy teaching accurately and distinguish instruction from independent assessment.',
      ['Check content explanations against reliable references and the exact word forms used.','Reconcile the timing of feedback, correction, and independent work in your own account.'],
      ['Explain the literacy process you made visible and what learners did with it. Include the additional theme and integrated ELD rather than writing only about affix identification.','When instruction changes in response to evidence, identify the initial response, the reason for the change, and the later response. Describe assistance truthfully even when it limits what can be concluded.'],
      'Do not polish away a contradiction about assessment conditions; resolve it from the actual evidence.',['l-accuracy','l-support'],[3,4,5,6],'Which responses were independent, and which show learning with feedback or a prompt?'],
    ['G','Submit the focus student’s actual summative response with the scoring evidence required by the directions.',
      ['Match the response, criteria, and results to the assessment described earlier.','De-identify the work without removing the evidence needed to interpret it.'],
      ['Preserve the student’s response and the basis for its evaluation. A blank worksheet or a teacher answer key cannot substitute for the student’s completed response.','Account for assistance and distinguish literacy from ELD evidence. The artifact, classroom criteria, and Part I analysis should tell the same factual story.'],
      'Do not reconstruct a cleaner answer after the fact or describe completion as mastery.',['l-complete','l-rubric'],[7],'Can you trace every focus-student result to an actual response and a stated criterion?'],
    ['H','Provide the actual actionable feedback given to the focus student, not a retrospective description of ideal feedback.',
      ['Locate the feedback in the permitted written, audio, or video format.','Check its relationship to a specific response and the literacy and ELD goals.'],
      ['Look for a recognized success, a precise learning need, and an action the student can use. In the repaint example, meaningful word use and explanation of the prefix are different things to inspect.','Keep language feedback respectful and goal-related. Correcting conversational register is not automatically feedback on morphology or reading meaning.'],
      'A feedback artifact must document what the student actually received. Do not replace it with newly improved feedback presented as historical fact.',['l-feedback'],[7],'What can the learner do next because of this feedback, and which goal will that action advance?'],
    ['I','Analyze actual group and focus-student results for both ELA/Literacy and ELD, then evaluate your teaching.',
      ['Use current Part I result rows and reconcile counts, criteria, and assessment conditions.','Gather representative successes and misconceptions as well as totals.'],
      ['Explain how many students met each criterion and what their responses show. Analyze the focus student separately; the group pattern cannot stand in for this learner’s evidence.','Connect outcomes to specific planning and teaching decisions, including limitations. Distinguish affix knowledge, decoding unfamiliar multisyllabic words, meaning in context, and language performance instead of calling all of them mastery.'],
      'An average or “majority” claim can hide a learning need and cannot explain how instruction worked.',['l-results','l-follow'],[7],'Which strategy appears to have helped which learning, and what evidence limits that inference?'],
    ['J','Plan a separate follow-up that re-teaches or extends the focus student’s demonstrated literacy learning.',
      ['Identify the focus-student summative response and other unit evidence supporting the choice.','Specify the new learning demand, planned support, and response that will reveal progress.'],
      ['Explain why the evidence warrants re-teaching or extension. Success analyzing familiar affixes may coexist with difficulty decoding unfamiliar words; specify which skill you are advancing.','Use the focus student’s assets purposefully and keep the additional demand manageable. Moving word analysis into a meaningful text can extend learning only if the task actually elicits transfer.'],
      'Do not choose extension simply because the group performed well or because a fourth lesson was already written.',['l-follow'],[8],'Why is this follow-up appropriate for the focus student’s actual response, not just the class topic?'],
    ['K','Record the taught follow-up so the focus student’s response to the new instruction is visible.',
      ['Check the one-clip, five-minute requirement and all current specifications.','Ensure the response and degree of prompting can be identified without exposing student identity.'],
      ['Capture the activity you actually taught following the analysis. Review whether the evidence shows the focus student using the literacy skill, not merely receiving an explanation.','Distinguish independent use from prompted performance. A group response does not establish the focus student’s understanding.'],
      'Planning the follow-up is not the same as teaching and recording it. The original three lessons cannot substitute for the required follow-up.',['l-follow'],[8],'Does the clip make the focus student’s thinking and level of support inspectable?'],
    ['L','Explain how the follow-up responded to earlier evidence and what the focus student actually demonstrated.',
      ['Bring the Part I finding, Part J decision, and a verified moment in Part K together.','Identify the learner’s response and any prompt or feedback that supported it.'],
      ['Analyze whether the new response addresses the earlier need or shows extension. Explain the role of the selected assets and supports rather than merely naming them.','State the limits of the evidence. A correct answer after guidance can show supported progress without establishing independent transfer to all unfamiliar words.'],
      'A plausible follow-up rationale does not establish impact until it is connected to the taught activity and the student response.',['l-follow'],[8],'What changed in the demonstrated performance, and what remains untested?']
  ]);
  pathway('ss-c2',[
    ['A','Identify the content, language, and access evidence that should shape this unit for this group and focus student.',
      ['Select recent disciplinary responses and language observations relevant to the planned unit.','Distinguish directly observed needs from assumptions about families or diagnoses.'],
      ['Use specific performance under specific conditions. Strong guided practice and difficulty with independent conversion are different findings that can both inform the plan.','Identify the language students need to reason in the subject. In mathematics, explaining relationships, interpreting a situation, and asking clarifying questions are language demands even when no student is identified as an English learner.'],
      'A family judgment or “NA” in place of language analysis does not explain instruction.',['r-context'],[1,2],'Which contextual statement is a verified observation, and what planning decision follows from it?'],
    ['B','Build three connected content lessons with integrated ELD and assessments that guide the progression.',
      ['Verify the precise content and ELD standards and use the current three-lesson template.','Map the relationship among prerequisite skills, new learning, and application.'],
      ['Make the progression depend on what students demonstrate, not just a list of related topics. For rational numbers, conversion, operations, and modeling have different demands that require coherent sequencing.','Plan content and ELD goals, assets, UDL, focus-student adaptations, and formative checks in each lesson. The separately planned and taught follow-up comes after summative analysis.'],
      'Four historical lessons do not become a compliant three-lesson unit merely by combining labels.',['r-plan'],[1,2],'What learning from each lesson makes the next lesson possible, and how will you know it is available?'],
    ['C','Explain assessments that reveal specific content and ELD learning, not just right answers.',
      ['Match each goal to an observable response and an interpretable criterion.','Identify the formative finding that would change instruction and how you would recheck it.'],
      ['Separate error types that call for different responses. In the rational-number sample, an operation-selection error, decimal-conversion error, omitted sign, and vocabulary misunderstanding are not one generic weakness.','Explain how the summative evidence captures the ELD goal. If that goal involves asking and answering questions, a computation score alone does not supply the required language evidence.'],
      '“I will reteach if they struggle” postpones the instructional decision instead of explaining it.',['r-assess'],[1],'What evidence would lead to a different teaching response, and why?'],
    ['D','Provide the actual assessment materials and criteria that support later scoring and interpretation.',
      ['Match directions, items, answer expectations, and scoring criteria to the goals.','Check that the language performance has visible criteria as well as the content performance.'],
      ['An answer key can identify a correct result but may not distinguish conceptual reasoning, procedural errors, and explanation quality. Make the intended basis for interpretation clear.','Keep blank assessment materials here distinct from the actual focus-student response used later. In the sample, the teacher key and the FS work are separate documents with different evidentiary roles.'],
      'Do not read a teacher’s correct solution as evidence of what the learner understood.',['r-artifact','r-assess'],[1,7],'What distinction can the criteria reveal that a correct-answer key alone cannot?'],
    ['E','Review your own video for deep disciplinary thinking, integrated ELD, and responsive instruction.',
      ['Check current clip count, combined duration, permissions, audio, and final-file playback.','Log student thinking, your instructional move, and the next response using final clip times.'],
      ['Look for learners explaining relationships or evidence, not only naming an operation after a cue. Review how assets and UDL supported actual participation in both content and language learning.','Identify a formative finding and a response to it. The evidence should show the teaching of the planned unit while making any necessary adjustment understandable.'],
      'A correct short answer following a leading question can show less understanding than the commentary claims.',['r-cue'],[3,4,5,6],'Which response shows disciplinary reasoning rather than compliance with a cue?'],
    ['F','Explain recorded teaching through the content idea, language demand, and evidence behind each decision.',
      ['Verify timestamps and avoid guessing corrections to malformed historical sample times.','Check that subject explanations are accurate, including exceptions to any stated rule.'],
      ['Analyze the relationship between the question, the student response, and your next move. For mathematics, explain the quantities and their relationship rather than presenting words such as “each” as universal operation signals.','Explain integrated ELD in relation to content learning and distinguish teacher-provided language from student use. Describe whether a response was spontaneous, scaffolded, or prompted.'],
      'Do not equate mentioning vocabulary, using a keyword, or receiving a correct binary answer with deep disciplinary learning.',['r-cue','r-assess'],[3,4,5,6],'What does the student’s explanation reveal beyond the final answer?'],
    ['G','Provide the focus student’s actual summative evidence and scoring, keeping it separate from the teacher key.',
      ['Verify the artifact belongs to the focus student and matches the assessment described.','Preserve visible reasoning and corrections while redacting identifying information.'],
      ['Use the student’s response rather than the group’s most common error as the basis for analysis. The public FS’s correct pool-distance answer shows why that distinction matters.','Interpret the process shown on the page as well as the final value. Division set up correctly with an omitted negative sign presents a different diagnostic question from inability to select division.'],
      'The group average is not the focus-student score, and the answer key is not the focus-student artifact.',['r-artifact'],[7],'Can every focus-student claim be checked against the actual response, not a class-level summary?'],
    ['H','Document feedback the focus student can actually use to improve the demonstrated performance.',
      ['Locate the actual feedback provided and the response it addresses.','Check that the next action concerns the content or ELD goal and preserves a specific success.'],
      ['Give the reader a traceable relationship between the response, feedback, and goal. A sign-checking routine can support accuracy, but its conceptual purpose still needs to be clear.','Do not attribute an error to rushing or a diagnosis without evidence. Analyze what the work shows and the action that would help the student inspect or revise the reasoning.'],
      'Do not substitute revised ideal feedback for the artifact of what the learner actually received.',['r-feedback'],[7],'What exact action can the learner take, and what understanding will that action check?'],
    ['I','Explain group and focus-student results for content and ELD and analyze what instruction contributed.',
      ['Use current Part I result rows and the actual denominators, criteria, and assessment conditions.','Identify separate error patterns and check each FS claim against the artifact.'],
      ['An average describes a distribution incompletely; use criterion-level patterns and representative responses to explain understanding. Keep the group’s pool-distance error separate from the FS’s correct answer.','Evaluate specific planning and teaching decisions, including where formative checks missed a need later revealed in the summative assessment. State uncertainty rather than attributing mistakes to unsupported causes.'],
      'A plausible explanation for an error is an interpretation to test, not an observed fact.',['r-artifact','r-follow'],[7],'Which teaching decision is supported by the evidence, and what alternative explanation remains possible?'],
    ['J','Plan a targeted follow-up using the focus student’s summative response and other unit evidence.',
      ['Identify the precise concept or language need, not only a low total score.','Design a task that makes the missing understanding visible and uses relevant assets.'],
      ['Explain why re-teaching or extension follows from the focus student’s evidence. If earlier checks emphasized operations but missed conversion, the follow-up should expose the fraction-as-division relationship.','Plan the learning sequence and recheck so the response tests the actual misconception. Clarify when partner support occurs and when the student will respond individually.'],
      'An easy whole-number division example alone cannot establish understanding of unfamiliar fraction-to-decimal conversions.',['r-follow'],[8],'How will the new task test the exact learning that earlier assessments failed to reveal?'],
    ['K','Record the taught follow-up with inspectable evidence of the focus student’s thinking.',
      ['Check the one-clip, five-minute requirement and current specifications.','Review visibility, audio, permissions, and whether the FS’s response can be distinguished from a group answer.'],
      ['Show the follow-up actually taught after analysis, not a substitute excerpt from the original unit. Include enough task context to understand the response.','A choral answer about which number goes inside the division symbol may demonstrate participation; inspect the FS’s explanation of why and application to a new conversion.'],
      'Group accuracy cannot stand in for evidence about the focus student’s progress.',['r-follow'],[8],'What does the focus student demonstrate, and how much assistance makes that response possible?'],
    ['L','Connect the earlier finding, follow-up decision, and observed focus-student response into one defensible analysis.',
      ['Use the relevant earlier evidence and a verified moment in the follow-up clip.','Identify what is shown, what is inferred, and what is still untested.'],
      ['Explain how the activity addresses the actual need and how assets or language supports helped. Interpret a response to the new task rather than only explaining why the activity was a good idea.','Describe progress at the level the evidence supports. A prompted placement answer does not necessarily establish independent conversion, decimal reasoning, or transfer to a new problem.'],
      'Do not call the follow-up successful solely because it was completed or the group answered together.',['r-follow'],[8],'What conclusion about this focus student is justified, and what would require another response?']
  ]);
  D.supplemental=[
    {title:'Historical Multiple Subject Cycle 1: opinion writing',file:'CalTPAMSCycle1ExampleRevised.pdf',page:3,quote:'I am not sure if FS1 will be familiar with “opinions”',
      lesson:'This is a useful admission of an unknown. The preparation lesson is to elicit the relevant prior understanding before treating it as established; do not turn uncertainty into a fabricated baseline.',
      boundary:'2018-era structure, not a current MS Math or Literacy submission model.',url:'https://docs.nesinc.com/CA/CalTPAMSCycle1ExampleRevised.pdf'},
    {title:'Mild to Moderate Support Needs: Math',file:'VI-MMSN-MPA-2nd-Grade-Sample-Submission.pdf',page:1,quote:'often counts in Spanish',
      lesson:'The described counting practice is an observable linguistic asset. Its instructional value comes from explaining how the learner can use that resource in the actual mathematics, not from listing a language alone.',
      boundary:'Education Specialist pathway. Do not transfer its focus-student eligibility, IEP requirements, templates, or rubric expectations to Multiple Subject.',url:D.sources.samples[1]},
    {title:'Mild to Moderate Support Needs: Literacy',file:'V1-MMSN-LPA-Sample-Submission.pdf',page:1,quote:'Several students can decode most single- and multisyllabic words with support',
      lesson:'“With support” matters. A more precise description identifies the support and distinguishes decoding from meaning-making; it should not be rewritten as independent proficiency.',
      boundary:'Education Specialist pathway. This comparison teaches evidence precision only, not an MS/SS performance benchmark.',url:D.sources.samples[1]}
  ];
  D.supportCases={
    writing:['m-monitor','s-cue'],
    evidence:['m-breaks','r-artifact'],
    rubrics:['l-rubric','s-results'],
    planning:['m-goals','l-plan'],
    students:['l-context','r-context'],
    language:['m-language','l-feedback'],
    literacy:['l-accuracy','l-support'],
    video:['s-time','m-monitor'],
    assessment:['l-complete','r-assess'],
    reflection:['l-results','r-follow']
  };
  const labs={
    writing:['Write a claim the evidence can carry','Start with the response, not an adjective such as effective. Identify what the learner did, interpret it against the goal, explain the teaching decision, and name the limit of the inference.','Practice on the public example first. A defensible revision can become narrower rather than more impressive: the break routine supported self-advocacy, while a separate response is needed to establish mathematics learning.'],
    evidence:['Sort evidence before interpreting it','Distinguish the planned task, the teaching event, the student response, the scoring criterion, and the interpretation. Each has a different role; none can simply substitute for the others.','Trace a result to its actual artifact and assessment conditions. Keep group patterns, focus-student responses, teacher answer keys, and prompted performances separate.'],
    rubrics:['Read the rubric as an evidence question','Choose the correct assessment and rubric before reviewing a claim. Identify the listed evidence sources, read all five levels, and locate what in your evidence addresses each relevant descriptor.','The pathway overviews and full example reviews provide complete current rubric descriptors alongside instructional reading guidance. The full case reviews label their rubric versions, justified estimates, and evidence limits. Higher-level additions are cumulative; naming translanguaging, collaboration, or research cannot substitute for evidence that the foundational criteria are present.'],
    literacy:['Separate the literacy performances','Decoding a word, identifying its parts, inferring its meaning, using it in a sentence, and explaining a reasoning process are related but different performances. Name the one the task actually elicits, and check the teacher model for accuracy.','In the public morphology sample, supported responses, remaining decoding needs, and a claim of affix mastery must be reconciled rather than blended into a single success statement. The worked analyses below show how to inspect those distinctions.'],
    assessment:['Plan how a response changes your next move','For each assessment, identify the response, the goal-related criterion, a meaningful error pattern, and what instructional decision the finding could inform. Collect language evidence appropriate to the language goal rather than assuming content accuracy establishes ELD.','Keep independent and supported responses distinguishable. If a summative task included correction or feedback, document the actual conditions and limit the conclusion accordingly; do not retrospectively describe assisted work as independent.'],
    reflection:['Move from results to a teaching decision','Begin with what the group and focus student actually demonstrated. Then examine a specific instructional choice, how the evidence supports its effect or limitation, and what you would change because of that finding.','Use scores as entry points, not explanations. Counts need denominators and criteria; growth needs an appropriate earlier comparison; causal claims need more than a successful activity or a plausible story.']
  };
  Object.entries(labs).forEach(([id,[title,...paragraphs]])=>{
    const page=D.supportPages[id];
    if(page){page.intro=paragraphs[0];page.sections.unshift({title,paragraphs});}
  });
})();
