'use strict';
/* Load after instruction.js. MMSN requirements come from guides 31368/31367,
   templates in folders 2003/2004, and the EdSp version chart (31548). */
(() => {
  const D = window.CALTPA;
  D.contentRevision = 'question-guides-2026-10-09-v2';
  D.tracks.mmsn = {name:'Education Specialist: MMSN', audience:'Mild/Moderate Support Needs', assessments:['mmsn-math','mmsn-literacy']};
  D.sources.mmsnUpdates = ['Education Specialist assessment updates', 'https://docs.ctc.ca.gov/Document/Download/31548'];

  // Preserve the base schema, but replace every instructional field for this pathway.
  const part = (type, id, content) => ({...D.partSets[type].find(p => p.id === id), ...content, id});
  D.assessments['mmsn-math'] = {
    track:'mmsn', type:1, name:'Math Performance Assessment', short:'Math (MPA)',
    version:'2.0', templateVersion:'2.0', guide:31368, folder:2003,
    templates:{A:31369,B:31370,C:31371,F:31372,G:31373,H:31374},
    pages:{evidence:14,spec:17,score:13,A:20,B:21,C:26,D:27,E:34,F:34,G:38,H:41},
    rubricPages:[28,30,31,32,36,37,40,42], subject:'math', language:'math academic language development (ALD)',
    description:'Plan and teach one math lesson for one focus student with an IEP, analyze learning and adaptations, and determine the next instruction.',
    focus:'One focus student with an IEP', lessons:'One lesson', sample:'mmsn-math',
    parts:[
      part(1,'A',{
        title:'Clinical Practice Context',limit:'Up to 4 pages',
        purpose:'Describe the setting in which you will teach the math lesson so the reader can understand the instructional access and collaboration available to your focus student.',
        prepare:['Confirm the age range, grade levels, delivery model, and language or languages used in your actual clinical placement.','Identify the personnel with whom you collaborate and what assistance they can provide before, during, or after the lesson.','With your cooperating teacher or supervising faculty, select one focus student with an IEP using recent observations, assessment information, and relevant learning needs.'],
        write:['Answer the four current context prompts: age and grade range, instructional delivery model, instructional support personnel, and language of instruction. Explain whether the lesson occurs in an inclusive class, a small group, a self-contained setting, or another actual arrangement.','Describe personnel by role and connect those roles to access. An aide may support the focus student or facilitate routines for other students while you teach. If you teach alone, explain the collaboration that actually occurs without implying an adult appears in the lesson.','Identify the language of instruction and relevant communication supports accurately. Keep the detailed focus-student learning profile, special education eligibility, IEP connections, and adaptations in Part C, where the current template requests them.'],
        checks:['I described my actual setting under all four prompts.','I selected one FS with an IEP.','Personnel roles and language of instruction agree with the lesson plan.','I used FS and role labels instead of identifying names.'],
        pitfall:'The older MMSN sample describes three focus students and allows more context pages. Its organization and allowances are not the current MMSN requirements.',
        connect:'The setting and personnel in Part A explain what is possible in Part B; the individual learning evidence belongs in Part C.'
      }),
      part(1,'B',{
        title:'Math Lesson Plan',limit:'Up to 5 pages',
        purpose:'Plan one lesson in which the focus student can work toward a math content-and-practice goal, a related math ALD goal, and relevant IEP goal(s).',
        prepare:['Use recent FS evidence to select an appropriate California math content strand or standard and one Mathematical Practice Standard.','For PK/TK, follow the age-level foundations option; for K-ATP, follow the grade-level standards directions. Use grade-aligned Core Content Connectors only when the FS meets the stated alternate-assessment or alternate-curriculum eligibility condition.','Identify the IEP goal and supports relevant to this lesson, the learning evidence you will collect, and the responsibilities of instructional support personnel.'],
        write:['Write one observable goal joining the selected math content and practice, then a related ALD goal. Show what reasoning the FS will express and how accessible communication will make that reasoning visible. Keep the standard, practice, goals, task, and monitoring consistent.','Explain the activity sequence, connection to recent learning, safe environment, use of assets, UDL strategies, and developmentally appropriate higher-order questions. Show how the FS will compare, explain, justify, or make a mathematical decision with appropriate support.','Explain where the lesson supports the math-related IEP goal and how you will monitor content/practice and ALD. Name the response you will observe, how you will distinguish prompted from independent performance, and what evidence would lead you to adjust instruction.','Describe collaboration or facilitation of support personnel, including support for other students while you teach if applicable. Address functionally appropriate math skills for independence when relevant, and explain the instructional purpose of each resource.'],
        checks:['The selected standard and practice match the goal and task.','Both math and ALD goals have observable evidence.','The lesson addresses the relevant IEP goal and required supports.','Monitoring, personnel roles, and higher-order thinking are concrete.'],
        pitfall:'A disability category does not justify an unrelated lower-grade standard. Follow the guide options and the FS evidence; do not silently substitute standards or IEP goals.',
        connect:'Part C explains why the adaptations fit this FS; Parts E-F show their actual implementation.'
      }),
      part(1,'C',{
        title:'Focus Student Adaptations',limit:'Up to 10 pages',
        purpose:'Explain how evidence about one focus student with an IEP leads to specific math adaptations, including two or more multisensory strategies and an evidence-based rationale.',
        prepare:['Gather recent work, observations, math assessments, and relevant IEP information. Record the task, conditions, support level, and what the FS did.','Identify the FS age, grade, present math performance, eligibility and its educational impact, learning needs, assets, and relevant IEP goal(s).','Review additional IEP supports such as services, behavior supports, assistive technology, or AAC. Identify the evidence-based practice or research that informs your adaptation.'],
        write:['Explain the particular math need using a response or pattern, not a score or diagnosis alone. Describe the adaptation and how it will support the selected math-related IEP goal, content/practice goal, and ALD access.','Connect the adaptation to recent learning and an asset or interest that has an instructional use. Explain what the FS will do with the support: for example, coordinate number-line movement with a represented operation, rather than merely hold a preferred object.','Describe at least two multisensory strategies and why they address the identified need. Explain how visual, auditory, tactile, or movement-based experiences contribute to the same mathematical understanding; different worksheets are not automatically different sensory strategies.','Give a relevant evidence-based or research rationale and explain its application to this FS. Preserve required communication supports and distinguish difficulty communicating in a particular mode from difficulty understanding mathematics.'],
        checks:['All responses concern the same FS with an IEP.','I connected recent evidence, need, adaptation, and IEP goal.','I explained at least two multisensory strategies and their rationale.','Assets and additional IEP supports have a specific instructional role.'],
        pitfall:'The template gives broad examples including 504 and MTSS support, but the guide explicitly requires an FS with an IEP. Those examples do not waive the IEP requirement.',
        connect:'Keep evidence during teaching that will let Part G evaluate each adaptation against its intended learning purpose.'
      }),
      part(1,'D',{
        title:'Math Lesson Resources and Materials',limit:'Up to 7 pages',
        purpose:'Supply the actual resources needed to understand the focus student\'s math task, representations, communication supports, and adaptations.',
        prepare:['Select the tasks, visuals, manipulatives representations, directions, or other resources used in this lesson.','Match each resource to the goal and support described in Parts B and C.','Check legibility, source attribution, and identifying information in the assembled file.'],
        write:['Provide descriptions and/or screenshots or images of the resources, as the guide permits. Arrange them in lesson order and label them consistently with the plan. Include enough of the task and directions for a reader to understand what the FS must solve, explain, or demonstrate.','Make the mathematics inspectable. A number line needs readable values and equal intervals; a visual direction cue needs a clear relationship to the operation. Check that the resource supports the selected content and practice.','Include or describe relevant accessible response supports such as a communication board or sentence frame when used. Make their actual instructional use understandable and credit materials you did not create.'],
        checks:['The resources match the planned lesson.','The task and mathematical representations are readable.','The FS supports discussed in Parts B-C are recognizable.','The file meets the page allowance and privacy directions.'],
        pitfall:'A resource can attract attention without revealing mathematical reasoning. Include the task and response supports that make the FS learning visible.',
        connect:'The assessor should recognize these resources when reading the plan and viewing the teaching clips.'
      }),
      part(1,'E',{
        title:'Math Teaching Video',limit:'1-3 clips; 15 minutes total maximum',
        purpose:'Show your teaching and the focus student\'s math learning in a safe environment, including UDL, higher-order thinking, monitoring, and an intentional response.',
        prepare:['Obtain required recording permissions and test the visibility of the FS, instructional materials, and accessible communication, as well as sound.','Record the lesson and review the recording yourself against the current MMSN video directions.','Identify moments where the FS thinks mathematically and where evidence of learning affects your next teaching move.'],
        write:['Choose one to three clips that collectively address the required teaching evidence. The FS must be seen and heard as required by the guide; make signed, gestural, AAC, written, or manipulative responses understandable in their actual context.','Show both the support and the FS response. A model alone does not establish what the student learned; include evidence of the FS attempting, explaining, revising, or applying the mathematics.','Keep the combined duration within 15 minutes. Apply the official editing rules, retain accurate clip order, and use timestamps from the final files when writing Part F. Review playback for missing audio, unreadable responses, and cuts that obscure the instructional exchange.'],
        checks:['The final clips collectively show the required MMSN practices.','The FS and relevant responses can be understood.','One to three clips total no more than 15 minutes.','Clip numbering and timestamps agree with Part F.'],
        pitfall:'A clip showing successful completion after extensive prompting cannot establish independent performance. Keep the support conditions visible.',
        connect:'Part F explains particular events in these clips; it cannot replace teaching evidence missing from them.'
      }),
      part(1,'F',{
        title:'Math Teaching Commentary',limit:'Up to 8 written pages OR 10 minutes verbal/ASL',
        purpose:'Explain what you did, why you did it, and the observed impact on the focus student\'s learning at specific moments in the math clips.',
        prepare:['Use the current five-prompt template: safe environment, higher-order thinking, UDL, monitoring, and intentional response.','Log final clip numbers and short timestamps, the FS response, the support used, and what happened next.','Separate evidence of access, mathematical understanding, and math ALD before making an impact claim.'],
        write:['For each prompt, locate the relevant event and explain the instructional decision. Connect a specific FS action or response to the math or ALD goal instead of describing only your teaching behavior.','For higher-order thinking, explain the reasoning the task or question required at this student\'s developmental level. A nonverbal comparison or justified choice can carry reasoning when you describe what the response signifies.','For monitoring and response, identify what you noticed, how you interpreted it, the adjustment you made, and the FS response after the adjustment. State whether accuracy required a model, cue, repetition, or another support.','Use the same evidence discipline for the safe environment and UDL: explain what participation or learning the support enabled. Answer all five prompts in the approved format and keep claims within what the submitted clips show.'],
        checks:['All five current prompts are answered.','Each event has an accurate clip and timestamp.','I explain reasons and observed effects for the FS.','I distinguish assisted success from independent learning.'],
        pitfall:'Naming a UDL principle or calling a question higher order does not demonstrate its effect. The account needs the FS response and an explanation tied to the goal.',
        connect:'The events explained here become evidence for the broader evaluation in Part G.'
      }),
      part(1,'G',{
        title:'Math Lesson Reflection and Analysis',limit:'Up to 5 pages',
        purpose:'Evaluate what worked, what did not, and how the lesson and adaptations affected the one focus student\'s math and ALD learning.',
        prepare:['Bring together the learning goals, Part C adaptations, observations, video evidence, and assessment information from the lesson.','Separate math content/practice evidence from ALD evidence and note the conditions under which the FS responded.','Identify a success, a continuing need, and any evidence that limits your initial interpretation.'],
        write:['Answer what went well and what did not using specific examples from planning and teaching. Explain the impact of knowing the FS, the safe environment, the asset-based approach, UDL, and higher-order thinking.','Judge progress toward both the math and ALD goals. Describe the mathematical response and the communication it demonstrates; neither engagement nor a total score alone establishes both outcomes.','Analyze the impact of the adaptations on the FS learning needs and progress. Explain what each adaptation enabled, what evidence supports that conclusion, and what remains incomplete. Use the IEP connection where relevant without claiming annual goal attainment from a single lesson.','Compare like evidence when describing growth. State differences in task difficulty, communication mode, prompting, or opportunity to respond. Acknowledge when the evidence shows successful supported performance but not yet generalization.'],
        checks:['The reflection evaluates the same FS throughout.','Both learning goals are analyzed using specific evidence.','I addressed all five teaching influences in the template.','My conclusions about adaptations and progress fit the evidence.'],
        pitfall:'A result such as three correct answers out of four needs item-level interpretation and support conditions; it does not by itself establish why the adaptation worked.',
        connect:'The unresolved learning need and successful supports should directly shape the next activity in Part H.'
      }),
      part(1,'H',{
        title:'Application of Math Learning',limit:'Up to 4 written pages; verbal/ASL duration conflict: see guidance',
        purpose:'Use evidence from this cycle to explain the next math and ALD activity for the focus student and the collaboration that will support it.',
        prepare:['Select a specific finding from Steps 1-3 that warrants the next teaching move.','Identify what will advance in math content/practice and ALD, which supports remain necessary, and how student assets can contribute.','For a recorded response, check the official duration discrepancy: the evidence/specification tables allow 6 minutes, while the Step 4 direction note says 5.'],
        write:['Explain what you learned from both the effective and less effective parts of this cycle. Use a precise earlier example to justify the proposed instructional change.','Describe the next activity you would teach and how it advances both math and ALD. Specify the task, support, expected FS response, and a check that would help you decide whether learning is progressing.','Explain continued support for the FS learning needs and purposeful use of assets or interests. Retain required IEP accommodations; any reduction in instructional prompting should be supported by evidence.','Describe how you will collaborate with or facilitate instructional support personnel. Name the information to share, the role or routine involved, and how observations from other settings will inform future teaching.'],
        checks:['Every next step has a specific basis in earlier evidence.','The activity advances math and ALD for the same FS.','The support and personnel plan is concrete.','I used the consistent 4-page written option or clarified the recording limit with my program and current official guidance.'],
        pitfall:'Repeating a list of tools does not explain the next learning. State what the FS will learn or do differently with those tools.',
        connect:'This is an evidence-based proposal for future instruction; unlike literacy Parts J-L, it does not require a newly taught follow-up video.'
      })
    ]
  };

  D.assessments['mmsn-literacy'] = {
    track:'mmsn', type:2, name:'Literacy Performance Assessment', short:'Literacy (LPA)',
    version:'2.1', templateVersion:'2.0', guide:31367, folder:2004,
    templates:{A:31375,B:31376,C:31377,F:31378,I:31379,J:31380,L:31381},
    pages:{evidence:14,spec:18,score:13,A:22,B:24,C:29,D:30,E:36,F:37,G:43,H:43,I:45,J:49,K:50,L:50},
    rubricPages:[32,34,39,40,41,42,47,51], subject:'literacy', language:'English language development (ELD)',
    description:'Teach a connected three-lesson literacy unit for one focus student with an IEP, analyze assessment evidence, provide student and family feedback, and teach a follow-up activity.',
    focus:'One focus student with an IEP', lessons:'Three lessons + follow-up', sample:'mmsn-literacy',
    parts:[
      part(2,'A',{
        title:'Focus Student Context',limit:'Up to 5 pages',
        purpose:'Build an evidence-based literacy profile of one focus student with an IEP that explains the goals, adaptations, and assessments you will plan.',
        prepare:['With your cooperating teacher or supervising faculty, select an FS with an IEP who meets one or more of the guide\'s literacy or language support criteria. This cycle is for TK and above.','Review recent literacy assessments, observations, work, language information, and the IEP, including relevant input from service providers or family.','Identify strengths, interests, literacy learning needs, relevant IEP goals, and additional services, behavior supports, assistive technology, or AAC.'],
        write:['Describe the FS age and grade, assets and interests, and current literacy knowledge and skills. Distinguish decoding, word analysis, fluency, comprehension, and expression when the evidence supports those distinctions.','Explain how special education eligibility affects access to the literacy learning in this unit using actual performance evidence. A category alone cannot establish the instructional need. Describe primary-language literacy for the students identified in that prompt and ELD needs when the FS is an English learner.','State the IEP goal(s) related to foundational reading, the additional theme, and/or ELD that the lessons address. Explain how the relevant supports contribute to access and demonstration of learning, while protecting identifying information.'],
        checks:['The FS has an IEP and meets the guide selection criteria.','The profile describes the individual FS using recent evidence.','Relevant IEP goals and additional supports are identified.','Language status and skills are described accurately.'],
        pitfall:'Not being an English learner does not remove the unit\'s integrated ELD requirement. A conditional English-learner profile prompt and the required instructional goals are different matters.',
        connect:'The learning evidence and IEP information should explain the progression and adaptations in Part B.'
      }),
      part(2,'B',{
        title:'Three-Lesson Literacy Unit Plan',limit:'Up to 24 pages',
        purpose:'Plan a coherent progression that integrates foundational reading, an additional ELA/ELD Framework theme, and ELD for the focus student.',
        prepare:['Use recent FS learning and IEP information to select appropriate ELA/Literacy and ELD standards and developmentally appropriate goals under the current guide options.','Place foundational reading instruction in at least one lesson, an additional theme in two or three lessons, and integrated ELD across all three lessons, even when the FS is not an English learner.','Plan a formative assessment in each lesson and a summative assessment after the third lesson that measures both ELA/Literacy and ELD goals.'],
        write:['In the scope and sequence, explain how the evidence and IEP led to the selected goals, reading skill, and additional theme: meaning making, language development, effective expression, or content knowledge. Show how each lesson builds on the preceding learning.','For each lesson, give ELA/Literacy and ELD goals, activities, direct/systematic/explicit foundational instruction where applicable, active work with the additional theme, and integrated ELD. Explain the model, supported practice, and FS application rather than listing strategy names.','Describe UDL, active engagement, use of the FS assets, adaptations, IEP supports, and formative monitoring in each lesson. Explain what the FS response will reveal and how an emerging difficulty could change your instruction.','Specify collaboration or facilitation of support personnel for each lesson. Explain how adults will support access, communicate observations, and preserve opportunities to observe the FS own learning. End the unit with the planned summative evidence; the later follow-up is separate.'],
        checks:['The plan contains three connected lessons.','Reading skill, additional theme, and ELD coverage meet the current directions.','Each lesson includes FS adaptations, formative assessment, and personnel collaboration.','The summative task measures both goal areas.'],
        pitfall:'A sequence of topics does not establish a progression. Explain what the FS learns in one lesson that enables the intellectual work in the next.',
        connect:'Parts C-D make the final assessment inspectable; Parts E-F show how you implemented and adjusted this unit.'
      }),
      part(2,'C',{
        title:'Summative Assessment Description',limit:'Up to 5 pages',
        purpose:'Explain how the assessment after lesson three will reveal the focus student\'s progress toward both the ELA/Literacy and ELD unit goals.',
        prepare:['Restate the unit goals exactly enough to preserve the intended literacy and language performances.','Decide whether the FS response will be a product, process, or performance and how it will be captured.','Identify observable criteria and allowed supports that will make the response interpretable.'],
        write:['Describe the summative task, administration, response to be collected or observed, and how the task measures the unit goals. Include the selected foundational reading skill and additional theme in the assessment reasoning.','Explain what in the FS response would indicate progress toward, attainment of, or performance beyond each goal. Distinguish accurate word reading or analysis from understanding meaning and from communicating an explanation when those are different goals.','Specify the conditions of performance. Document required accommodations and communication supports, and distinguish neutral access assistance from help that supplies the answer. If the ELD goal involves oral interaction, identify the observation or recording that will capture it.','Keep the task, criteria, and description consistent. Verify point totals and criterion labels before the assessment so later conclusions rest on a clear scoring basis.'],
        checks:['The assessment occurs after the third lesson.','I described the FS response type and collection method.','Both ELA/Literacy and ELD goals have observable evidence.','Criteria and allowed supports agree with Part D.'],
        pitfall:'A written vocabulary score cannot establish an oral interaction goal on its own. Collect evidence in the mode the goal requires.',
        connect:'Use these same goals and criteria when scoring the FS response in Part G and interpreting results in Part I.'
      }),
      part(2,'D',{
        title:'Blank Summative Assessment and Criteria',limit:'Up to 3 pages',
        purpose:'Provide the blank assessment and rubric or performance criteria that make the focus student\'s eventual results understandable.',
        prepare:['Assemble the actual blank task and the rubric or performance criteria you will use.','Check that the criteria cover ELA/Literacy and ELD rather than only work completion.','Reconcile item values, total points, proficiency descriptions, and any visual or communication supports.'],
        write:['Include readable task directions, questions, prompts, or performance instructions together with the criteria. For a process or performance, provide the directions and criteria that explain what will be elicited and evaluated.','Keep the criteria tied to the unit goals. If you assess identifying word parts, explaining a complete meaning, and communicating a reason, show how those performances will be distinguished.','Use the same version when administering and scoring. Make support conditions clear in Part C, credit sources, and ensure the blank document contains no student identifiers or completed FS response.'],
        checks:['Both the blank assessment and criteria are included.','The file is readable within 3 pages.','Totals and descriptions are internally consistent.','Every assessed goal has relevant criteria.'],
        pitfall:'An overall score band can hide which skill needs attention. The criteria should support the analysis you will later make.',
        connect:'Part G pairs the completed FS response with scored criteria; Part I explains the evidence behind the score.'
      }),
      part(2,'E',{
        title:'Literacy Teaching Video',limit:'1-4 clips; 20 minutes total maximum',
        purpose:'Show the focus student learning through direct foundational-reading instruction, the additional theme, UDL and integrated ELD, and assessment-informed teaching.',
        prepare:['Secure required permissions and record the three lessons, checking sound and visibility of the FS and relevant response modes.','Review the recordings for the four required evidence areas in the guide.','Choose clips yourself that show both your teaching and the FS learning, including a formative finding and intentional response.'],
        write:['Across one to four clips, show direct and explicit foundational reading instruction; active work with the additional theme using FS assets or interests; UDL and integrated ELD; and monitoring followed by an intentional response.','Make the FS contribution identifiable even when instruction includes peers. A group response can obscure whether this FS decoded, explained, or applied the target learning. Show the actual support and response needed to understand your claims.','Keep all clips together within 20 minutes and follow the official editing and labeling rules. Review final playback and record precise timestamps for Part F; do not use an entire clip as the locator for every claim.'],
        checks:['The clips cover all required literacy evidence areas.','The FS and meaningful responses are observable.','One to four clips total no more than 20 minutes.','Final timestamps and labels match the commentary.'],
        pitfall:'An engaging word activity is not sufficient evidence of direct instruction or of the FS learning. Show the teaching process and the student\'s use of it.',
        connect:'Part F explains the decisions and effects visible here; the summative response and feedback are submitted separately in Parts G-H.'
      }),
      part(2,'F',{
        title:'Literacy Teaching Commentary',limit:'Up to 8 written pages OR 10 minutes verbal/ASL',
        purpose:'Explain the instructional reasoning and focus-student evidence for all eight current literacy commentary prompts.',
        prepare:['Map the eight prompts to final clip numbers and focused timestamps.','Distinguish the model you provided, the FS practice, the learning demonstrated, and the support still required.','Identify a formative response that informed an actual adjustment during teaching.'],
        write:['Explain the direct and explicit foundational-reading approach and how the FS actively learned that skill. Then explain engagement in the additional theme and the instructional use of the FS assets or interests. These are related prompts, but each needs an answer.','Explain integrated ELD and UDL using particular supports and FS responses. State what language performance the FS practiced and how it served the literacy learning, including when the FS is not an English learner.','For monitoring and intentional response, identify the evidence you noticed, the decision it led to, and the FS response after the change. Naming a feedback strategy without the response does not establish its effect.','For each selected moment, provide clip, timestamp, action, reason, and observed learning impact. Be precise about supported versus independent performance and do not infer individual mastery from a general account of class participation.'],
        checks:['I answered all eight current prompts.','Each video claim has a usable locator.','The analysis centers on the FS.','The response to formative evidence is specific and its impact is bounded.'],
        pitfall:'A teacher think-aloud establishes what was modeled. Evidence of the FS subsequent application is needed to explain what the student learned.',
        connect:'Keep the learning patterns identified here available for comparison with the final assessment in Part I.'
      }),
      part(2,'G',{
        title:'Focus Student Response and Scored Criteria',limit:'1-2 files; no response-length limit specified in the table',
        purpose:'Submit the focus student\'s summative assessment response and scored rubric or performance criteria so the learning evidence can be inspected.',
        prepare:['Administer the planned summative assessment after the three lessons with the required supports.','Score the FS response against the criteria from Part D and check item values and totals.','Prepare the appropriate response evidence: a document for a product or appropriate audio/video evidence for a process or performance.'],
        write:['Submit the actual FS response and scored criteria, not only a narrative summary or score. Check that work, marks, and criterion judgments remain legible.','When a task involves groupwork, preserve evidence of the individual FS learning. Distinguish a shared product from what the FS personally demonstrated.','Keep the response and scoring consistent with Part C and the eventual analysis. Record support conditions when interpreting results, and use the supported file types and one-to-two-file allowance in the specifications.'],
        checks:['The response is the selected FS actual work or performance.','The scored rubric or criteria are included.','Scoring and totals agree with the evidence.','Files are readable/playable and meet privacy and format requirements.'],
        pitfall:'A score entered on a rubric without the underlying FS response leaves the learning claim uninspectable.',
        connect:'Use this response to provide actionable feedback in Part H and to analyze distinct goal areas in Part I.'
      }),
      part(2,'H',{
        title:'Focus Student Actionable Feedback',limit:'1 file; written length N/A, or audio/video up to 5 minutes',
        purpose:'Document feedback you actually provided that helps the focus student use assessment results to improve literacy and language learning.',
        prepare:['Identify a demonstrated strength and a specific next learning need from the scored FS response.','Choose an accessible feedback mode and a next action the FS can understand and use.','Plan the required family/guardian communication about results and support beyond the classroom; report that communication in Part I.'],
        write:['Provide specific feedback linked to the ELA/Literacy and ELD goals. Identify what the FS did successfully and explain a practical next step grounded in an actual response or criterion.','Submit an audio/video recording of the spoken or signed feedback, or a written summary of the feedback provided. A plan to provide feedback later is not the same evidence.','Keep feedback developmentally appropriate and accessible through the FS communication supports. For recorded feedback stay within five minutes; the specification table does not assign a written page maximum.'],
        checks:['The feedback was actually provided to the FS.','It refers to specific learning evidence and goals.','The next action is understandable and usable.','The chosen format and file count follow the specifications.'],
        pitfall:'Praise alone does not tell the FS how to improve. A correction should explain the learning move, not simply supply the missing answer.',
        connect:'Part I explains why the feedback fits the evidence and documents the separate family/guardian feedback.'
      }),
      part(2,'I',{
        title:'Summative Assessment Reflection and Analysis',limit:'Up to 7 pages',
        purpose:'Interpret the focus student\'s results, evaluate teaching, and explain the feedback provided to both the FS and family/guardian(s).',
        prepare:['Bring together the scored response, unit goals, formative evidence, teaching observations, and feedback already provided.','Sort evidence into the ELA/Literacy and ELD result rows of the current MMSN template.','Record the actual method and content of family/guardian feedback, protecting identities.'],
        write:['Analyze patterns in understandings and misconceptions for each goal area using specific summative responses and relevant formative evidence. Describe which aspects of a task were correct, incomplete, or dependent on support; a total score alone is insufficient.','Explain the impact of instructional approaches and FS activities. Connect a teaching choice to evidence while acknowledging limits, then identify changes you would make if teaching the unit again.','Describe the specific, actionable FS feedback and explain how its next steps help advance literacy and ELD. Keep this account consistent with the evidence in Part H.','Explain how you provided family/guardian feedback and summarize the results, strengths, learning needs, and feasible beyond-classroom support you communicated. Distinguish completed communication from a future intention. Do not claim a family response or home-learning outcome that you did not observe.'],
        checks:['I analyzed ELA/Literacy and ELD separately for the FS.','My claims refer to actual responses and learning conditions.','Instructional changes and FS feedback follow from the analysis.','I documented actual family/guardian feedback and beyond-classroom support.'],
        pitfall:'This current MMSN template centers on one FS. Copying group-analysis rows from another credential pathway can displace the required individual analysis and family feedback.',
        connect:'Use a specific unresolved need or demonstrated readiness from this analysis to justify Part J.'
      }),
      part(2,'J',{
        title:'Follow-Up Activity Plan',limit:'Up to 5 pages',
        purpose:'Plan a re-teaching or extension activity justified by the focus student\'s learning across the unit and summative assessment.',
        prepare:['Review actual FS responses and support conditions before selecting re-teaching or extension.','Identify the next ELA/Literacy and ELD goals and how they relate to the assessed learning.','Choose an activity and appropriate supports that use FS assets or interests purposefully.'],
        write:['Select one option and justify it with specific examples from Steps 1, 2, and/or 3. The guide calls for re-teaching when the FS needs more experience or practice toward the measured ELA/Literacy and ELD goals, and extension when the FS met or exceeded those goals. A high total score can coexist with a meaningful misconception; assess both goal areas before deciding.','State the follow-up goals in both template rows. For re-teaching, describe the targeted intervention or individualized strategy that changes access to unfinished learning. For extension, explain what deepens or advances the established learning.','Describe the actual instruction and purposeful use of FS assets or interests. Identify the student response that would let you check the intended advance and retain relevant IEP supports.','Keep the proposal teachable as a follow-up activity. It follows the three-lesson unit and analysis; it is not a substitute for one of the three planned lessons.'],
        checks:['I selected and justified re-teaching or extension.','Both follow-up goal rows are completed.','The instruction responds to a specific FS finding.','Assets, supports, and a meaningful learning check fit the activity.'],
        pitfall:'A more interesting text or another worksheet does not automatically extend learning. State the new intellectual demand or targeted change in instruction.',
        connect:'Teach this activity for Part K, then use Part L to explain what happened and why it mattered.'
      }),
      part(2,'K',{
        title:'Follow-Up Teaching Video',limit:'1 clip; up to 5 minutes',
        purpose:'Show the focus student participating in the re-teaching or extension activity chosen from the assessment analysis.',
        prepare:['Check permissions, recording setup, and visibility of the FS and response supports.','Teach and record the entire follow-up activity.','Select one clip yourself that shows the targeted instruction and the FS response.'],
        write:['Show the instructional move that addresses the identified need or advances established learning. The clip should let the assessor understand what the FS is being asked to do and how the support operates.','Include the FS response needed to interpret the effect. Make clear whether the response follows a model, is jointly produced, or is independently generated.','Keep the selected clip within five minutes, follow the official editing rules, and review the final file for playback and accessibility of evidence. Use this final clip for Part L timestamps.'],
        checks:['The clip shows actual follow-up teaching with the FS.','The instruction connects to the Part J plan.','The response and support conditions are understandable.','One playable clip lasts no more than 5 minutes.'],
        pitfall:'A recording explaining what you intend to teach is not a recording of the required follow-up instruction.',
        connect:'Part L interprets the evidence in this clip in relation to the need and goals established earlier.'
      }),
      part(2,'L',{
        title:'Follow-Up Commentary',limit:'Up to 2 written pages OR 5 minutes verbal/ASL',
        purpose:'Explain how the follow-up instruction supported the focus student\'s literacy and/or ELD learning using specific video evidence.',
        prepare:['Choose the current prompt matching the activity you actually taught: re-teaching or extension.','Locate the targeted strategy and FS response in the final Part K clip.','Compare the observed response with the earlier evidence and follow-up goals, noting remaining support needs.'],
        write:['For re-teaching, identify the targeted intervention or individualized strategy and explain why it supports progress toward the follow-up goals. For extension, identify the instruction that deepens or advances the FS learning and explain why it is an appropriate next step.','Use the template\'s timestamp, action, reason, and impact structure. Describe what the FS did after the instruction, including the accuracy, explanation, or application that bears on the goal.','Separate the opportunity you created from the learning demonstrated. A repeated teacher example shows supported practice; an independently analyzed new example may provide different evidence. State the actual result without assuming that participation proves transfer.'],
        checks:['I answered the prompt matching the taught activity.','Timestamps identify specific evidence in Part K.','The explanation connects need, instruction, FS response, and learning.','The claim fits the observed support conditions and format limit.'],
        pitfall:'A model and a completed whiteboard do not, by themselves, establish generalization to new text. Explain the specific learning the clip can support.',
        connect:'Read Parts I-L together to confirm one traceable account from assessment finding through feedback, decision, teaching, and response.'
      })
    ]
  };

  D.pathwayNotes['mmsn-math'] = {
    A:'Current MMSN math selects one FS with an IEP. Part A describes the clinical setting; Part C contains the individual profile and adaptations. The older sample\'s FS1/FS2/FS3 labels remain historical source labels only.',
    B:'Plan one math content-and-practice goal and one math ALD goal. Connect the lesson to relevant IEP goal(s), monitor the FS, and describe collaboration or facilitation of instructional support personnel.',
    C:'Use two or more multisensory strategies and an evidence-based or research rationale for this one FS. The broad 504/MTSS examples in the template do not override the guide\'s IEP requirement.',
    D:'Use the MMSN 7-page materials allowance. Include resources that make the math task and the FS access supports understandable.',
    E:'Submit 1-3 clips totaling no more than 15 minutes. Center the evidence on the same FS and the actual math teaching.',
    F:'The current template has five prompts and asks for clip, timestamp, action, reason, and learning impact.',
    G:'Analyze the one FS math and ALD outcomes and the effect of adaptations. Do not import a three-focus-student reflection requirement.',
    H:'Guide 31368 is internally inconsistent: its evidence table, specifications, and evidence list allow up to 6 minutes verbal/ASL; the printed page 36 direction note says 5 minutes. The written limit is consistently 4 pages. Clarify the recorded-response limit with your program and current official guidance.'
  };
  D.pathwayNotes['mmsn-literacy'] = {
    A:'Select one FS with an IEP. The current profile includes relevant IEP goals and supports, with conditional prompts about primary-language literacy and English-learner needs.',
    B:'Foundational reading: at least one lesson. Additional ELA/ELD Framework theme: two or three lessons. Integrated ELD: all three lessons, even for an FS who is not an English learner. Include personnel collaboration in each lesson.',
    C:'The current assessment measures both ELA/Literacy and ELD goals after the third lesson. The 2026 EdSp update specifically revises rubric 2.1 to require both goal areas.',
    D:'Submit the blank assessment and criteria within 3 pages. Check scoring arithmetic and whether each goal can actually be observed.',
    E:'Submit 1-4 clips totaling no more than 20 minutes, showing foundational reading, the additional theme and assets, UDL/ELD, and formative monitoring and response.',
    F:'Answer all eight prompts using the FS evidence. A general account of peers or the teacher cannot establish the FS learning.',
    G:'Submit the FS response and scored rubric or performance criteria in 1-2 files. The response-length field is N/A; use the official file specifications.',
    H:'Provide and document actionable FS feedback. Contact family/guardian(s) with assessment-based feedback and beyond-classroom support, and describe that communication in Part I.',
    I:'Use the current MMSN template, which is labeled V2.0 while the literacy guide is V2.1. It analyzes one FS in separate ELA/Literacy and ELD rows and asks about feedback actually provided to the family/guardian(s).',
    J:'Choose a re-teach or extension using the FS evidence. Plan ELA/Literacy and ELD follow-up goals; teach the activity after the unit analysis.',
    K:'Teach and record the whole follow-up activity, then select one clip of up to 5 minutes.',
    L:'Answer the prompt matching the re-teach or extension you taught. Use a specific timestamp, action, reason, and observed learning impact.'
  };

  // Essential-question overviews, not level descriptors or predictions of scores.
  D.specialistRubrics = D.specialistRubrics || {};
  D.specialistRubrics['mmsn-math'] = [
    ['Context, goals, and the IEP','A-D','Use the clinical context and FS evidence to plan a math lesson with appropriate content/practice and ALD goals that supports relevant math-related IEP goals.'],
    ['Recent learning, UDL, and thinking','A-D','Use recent FS learning to design accessible mathematics, purposeful use of assets, higher-order thinking, and a safe, positive environment.'],
    ['Monitoring and personnel collaboration','A-D','Explain how you will monitor the FS learning and collaborate with or facilitate instructional support personnel during the lesson.'],
    ['Adaptations for one focus student','A-D','Connect recent evidence, assets or interests, learning needs, and IEP goals to specific adaptations, including the multisensory and rationale requirements in Part C.'],
    ['Safe environment and UDL in action','E-F','Show how the learning environment and UDL-focused teaching support the FS participation and progress during the actual math lesson.'],
    ['Thinking, monitoring, and response','E-F','Engage the FS in developmentally appropriate higher-order thinking, observe the learning, and respond intentionally to what the evidence shows.'],
    ['Evaluate the lesson and adaptations','G','Analyze the impact of asset-based, UDL-focused teaching and adaptations on this FS math and ALD learning using specific evidence.'],
    ['Determine the next math instruction','H','Use what you learned to justify the FS next math content/practice and ALD activity, supports, and personnel collaboration.']
  ];
  D.specialistRubrics['mmsn-literacy'] = [
    ['Goals and assessment from FS evidence','A-D','Use appropriate standards, recent learning, and IEP information to set ELA/Literacy and ELD goals and design formative and summative assessments that measure both goal areas.'],
    ['A connected, accessible literacy unit','A-D','Sequence three lessons using assets and UDL, direct/systematic/explicit foundational reading instruction, active additional-theme learning, integrated ELD, and personnel collaboration.'],
    ['Direct foundational reading instruction','E-F','Show direct and explicit teaching that actively engages the FS in learning the selected foundational reading skill.'],
    ['Assets and the additional theme','E-F','Use the FS assets or interests to engage the student actively in learning the selected additional ELA/ELD Framework theme.'],
    ['UDL and integrated ELD','E-F','Use UDL and integrated ELD to support the FS learning of foundational reading and/or the additional theme.'],
    ['Formative evidence and response','E-F','Monitor the FS learning with formative assessment and respond intentionally to support progress toward the ELA/Literacy and/or ELD goals.'],
    ['Analyze results and communicate feedback','C, D, G, H, I','Analyze the FS understandings and misconceptions, explain actionable student and family/guardian feedback, and use unit evidence to identify instructional changes.'],
    ['Teach a justified follow-up','J-L','Use specific FS unit and summative evidence to plan, teach, and explain re-teaching or extension that addresses the next learning.']
  ];

  D.examples.push(
    {id:'mmsn-math',title:'MMSN Math: Grade 2 Number-Line Addition and Subtraction',file:'VI MMSN MPA (2nd Grade) Sample Submission.pdf',url:D.sources.samples[1],version:'V1 / 2025-26',
      versionNote:'The original VI filename is preserved; the companion PDF footer identifies V01 and copyright 2025. The sample uses three focus students and older template allowances; current MMSN math V2.0 uses one FS with an IEP. Read the writing as historical evidence, not as the current task or an officially scored benchmark.',
      description:'A number-line lesson with accessible communication, interest-based manipulatives, and IEP connections. The studies examine standards alignment, prompting, nonverbal evidence, collaboration, and the limits of learning claims.',readings:[]},
    {id:'mmsn-literacy',title:'MMSN Literacy: Grades 4-5 Word Analysis',file:'V1 MMSN LPA Sample Submission.pdf',url:D.sources.samples[1],version:'V1 / 2025-26',
      versionNote:'Use the current V2.1 literacy guide with the V2.0 MMSN templates. Older group-response prompts, assessment descriptions, and future-tense family-feedback language are not the current requirements. No official rubric score or passing status is inferred.',
      description:'A prefixes, roots, and suffixes unit followed by assessment analysis and an extension. The studies examine the IEP link, systematic instruction, evidence for both goals, family feedback, and the difference between modeling and demonstrated transfer.',readings:[]}
  );
})();
