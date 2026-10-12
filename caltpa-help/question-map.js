'use strict';

// Template prompts follow current-templates.json and the matching reviewed extracts.
// Artifact entries follow the corresponding 2026-27 assessment guides.
window.CALTPA.questionMap = {
  'ms-math': {
    A: { locator: 'Current Part A template', questions: [
      'What are the group\'s age ranges and grade levels?',
      'What assets and interests do the students bring?',
      'What math knowledge, skills, and abilities do they currently have?',
      'Which students are identified English learners?',
      'What learning needs are identified, including how many students have IEPs, 504 plans, or MTSS support?',
      'Which languages will you use for instruction?'
    ] },
    B: { locator: 'Current Part B template', questions: [
      'Which age-appropriate TK math content strand or grade-level K-12 math content standard, plus one Math Practice Standard, fit the students\' recent learning, assets, interests, and needs?',
      'What single learning goal combines the selected math content and practice?',
      'What aligned math academic language development (ALD) goal addresses the language and vocabulary students will need?',
      'What activities make up the lesson?',
      'How will you support the math content and practice goal, and how will you support the math ALD goal?',
      'How will you monitor progress toward both math and ALD goals?',
      'How does this lesson connect to students\' recent math learning?',
      'How will you establish a safe, positive learning environment?',
      'How will you draw on students\' assets and interests?',
      'What questions will promote higher-order thinking and deeper math understanding?',
      'Which UDL strategies will support learning?',
      'Which materials and resources will you use, and why?'
    ] },
    C: { locator: 'Current Part C template', questions: [
      'FS1: What are this student\'s age, grade, current math knowledge and skills, and specific math ALD needs?',
      'FS1: What adaptations will you make, and how do recent learning, observations, or math assessments support those choices?',
      'FS1: Which relevant assets and interests will you use to support the student\'s needs?',
      'FS1: How will you adapt content for math ALD through reading, writing, listening, or speaking in multiple communication modes? Which evidence-based practices or research support the adaptations?',
      'FS2: What are this student\'s age, grade, current math knowledge and skills, and specific math learning needs?',
      'FS2: What adaptations will you make, and how do recent learning, observations, or math assessments support those choices?',
      'FS2: Which relevant assets and interests will you use to support the student\'s needs?',
      'FS2: How will the adaptations use at least two multisensory strategies to support math learning? Which evidence-based practices or research support them?',
      'FS3: What are this student\'s age, grade, current math knowledge and skills, math needs, and well-being or behavior needs connected to life experiences?',
      'FS3: What adaptations will you make, and how do recent learning, observations, or math assessments support those choices?',
      'FS3: Which relevant assets and interests will you use to support the student\'s needs?',
      'FS3: What targeted, proactive plan and adaptations to content and the physical or social environment will support well-being or behavior and math learning? Which evidence-based practices or research support them?'
    ] },
    D: { locator: 'Current assessment guide, Part D', questions: [
      'Provide descriptions, screenshots, or images of the resources and materials planned for the math lesson (up to 7 pages).'
    ] },
    E: { locator: 'Current assessment guide, Part E', questions: [
      'Submit 1-3 clips totaling no more than 15 minutes, with you and at least three students visible and audible.',
      'Show a safe, positive environment, higher-order math thinking, and UDL strategies.',
      'Show how you monitor student progress and respond intentionally to support learning.'
    ] },
    F: { locator: 'Current Part F template', questions: [
      'For each response, identify the clip and timestamp, explain what you did and why, and describe the impact on learning; match the submitted video evidence.',
      'How did you maintain a safe, positive environment?',
      'How did you engage students in higher-order math thinking?',
      'How did you use UDL strategies during the math lesson?',
      'How did you monitor students\' progress to support learning?',
      'How did you respond intentionally to support learning?'
    ] },
    G: { locator: 'Current Part G template', questions: [
      'For the group, including the focus students, what went well and what did not go as expected? Use specific examples from Steps 1 or 2.',
      'How did learning about students beforehand affect your teaching?',
      'How did a safe, positive environment and an asset-based approach each affect your teaching?',
      'How did UDL strategies and higher-order thinking each affect your teaching?',
      'Did the group meet the math goal and the ALD goal? What evidence supports your conclusions?',
      'FS1: How did language adaptations affect progress toward the learning goals, and what evidence shows their impact?',
      'FS2: How did math adaptations affect progress toward the learning goals, and what evidence shows their impact?',
      'FS3: How did well-being or behavior adaptations affect progress toward the learning goals, and what evidence shows their impact?'
    ] },
    H: { locator: 'Current Part H template', questions: [
      'For the group, what did the cycle teach you about what worked and what did not? Use evidence from Steps 1-3 to justify your next math instruction.',
      'What next activity would advance the group\'s math and ALD learning, and which examples from Steps 1-3 justify it?',
      'FS1: How would you support this student\'s needs in the next activity, drawing on assets or interests and evidence from Steps 1-3?',
      'FS2: How would you support this student\'s needs in the next activity, drawing on assets or interests and evidence from Steps 1-3?',
      'FS3: How would you support this student\'s needs in the next activity, drawing on assets or interests and evidence from Steps 1-3?'
    ] }
  },
  'ms-literacy': {
    A: { locator: 'Current Part A template', questions: [
      'Group: What are the students\' ages, grades, assets, and interests?',
      'Group: What literacy knowledge, skills, and abilities do students bring?',
      'Group: Which students are identified English learners, what learning needs are identified, and how many students have IEP, 504, or MTSS supports?',
      'Group: Which languages will be used for instruction, and which staff will assist in which roles, if applicable?',
      'Focus student (FS): What are the student\'s age, grade, assets, interests, and literacy knowledge, skills, and abilities?',
      'FS: What are the student\'s literacy and language-development needs?',
      'If the FS is an English learner, reclassified English learner, heritage-language speaker, or multilingual, what literacy knowledge and skills do they have in their primary languages, and what are their English language development needs?'
    ] },
    B: { locator: 'Current Part B template', questions: [
      'How will prior literacy assessments and learning inform student needs across the three lessons?',
      'Which grade-appropriate California ELA/Literacy standards will the unit address? In an eligible Spanish-language bilingual classroom, which CCSS en Espanol standards will you use?',
      'What unit literacy goal includes foundational reading skills and an additional theme, or what separate goals address each?',
      'Which grade-appropriate ELD standards strengthen the literacy standards, and what aligned ELD unit goals will you set? Where applicable, identify Spanish Language Development standards aligned with CCSS en Espanol.',
      'Which foundational reading skills will students learn in at least one lesson or across the unit?',
      'Which additional ELA/ELD Framework theme or themes will appear in two or three lessons: meaning making, language development, effective expression, or content knowledge?',
      'What are the three lessons, and how do they build a progression of learning?',
      'How will the summative assessment measure both the literacy and ELD unit goals?',
      'For each lesson (1, 2, and 3), what literacy goals and ELD goals connect to the unit goals?',
      'For each lesson, what are the activities, and how will foundational reading instruction, when included, be direct, systematic, and explicit?',
      'For each lesson, how will students actively engage with any additional theme being taught?',
      'For each lesson, how will integrated ELD support the reading skills and themes being taught? Include ELD in all three lessons even without an English learner in the group.',
      'For each lesson, which UDL strategies, active-engagement approaches, and student assets or interests will you use?',
      'For each lesson, which formative assessments will monitor learning?',
      'For each lesson, how will you adapt instruction for the FS\'s needs, drawing on their assets and interests?'
    ] },
    C: { locator: 'Current Part C template', questions: [
      'Which literacy and ELD unit goals will the summative assessment evaluate?',
      'What product, process, or performance will you collect or observe from each student?',
      'What summative assessment will you give after the third lesson?',
      'What evidence in student responses will show progress toward, attainment of, or performance beyond the literacy and ELD goals?'
    ] },
    D: { locator: 'Current assessment guide, Part D', questions: [
      'Provide the blank product-based summative assessment, or the prompts and instructions for a process or performance assessment.',
      'Include the rubric or performance criteria used to score progress toward both literacy and ELD goals.'
    ] },
    E: { locator: 'Current assessment guide, Part E', questions: [
      'Submit 1-4 clips totaling no more than 20 minutes.',
      'Show direct, explicit foundational reading instruction that actively engages students.',
      'Show active learning of an additional theme through students\' assets or interests.',
      'Show integrated ELD supporting the reading skills or additional themes.',
      'Show formative assessment of literacy learning and your intentional response to the results.'
    ] },
    F: { locator: 'Current Part F template', questions: [
      'For each response, identify the clip and timestamp, explain what you did and why, and describe the impact on learning; match the submitted video evidence.',
      'What direct, explicit approach did you use to teach foundational reading skills?',
      'How did you actively engage students in learning those reading skills?',
      'How did you actively engage students in the additional themes?',
      'How did you use student assets or interests when teaching the additional themes?',
      'How did integrated ELD support foundational reading skills or the additional themes?',
      'How did UDL strategies support literacy or ELD instruction?',
      'How did formative assessment monitor progress toward literacy or ELD goals?',
      'How did you respond intentionally to formative results to support progress?'
    ] },
    G: { locator: 'Current assessment guide, Part G', questions: [
      'Analyze the FS\'s summative results for understanding and misconceptions in literacy and ELD; submit the FS\'s response and scored rubric or performance criteria.',
      'Use evidence appropriate to the response: a product, a process document or suitable video, or an audio/video recording for a performance. Groupwork must still show the FS\'s individual learning.'
    ] },
    H: { locator: 'Current assessment guide, Part H', questions: [
      'Provide developmentally appropriate, specific, actionable feedback based on the FS\'s summative results that helps advance literacy and ELD learning.',
      'Submit a written summary of the feedback given, or an audio/video recording of you giving it to the FS (up to 5 minutes).'
    ] },
    I: { locator: 'Current Part I template', questions: [
      'What information from the three lessons shows how activities and formative assessments supported literacy and ELD progress?',
      'List the literacy and ELD unit goals assessed; for each area, report how many students exceeded, met, or did not yet meet the goals.',
      'For the group, what patterns of understanding or misconception emerge for literacy, and what patterns emerge for ELD? Use summative results, formative evidence, and specific examples from Steps 1 or 2.',
      'For the FS, what patterns of understanding or misconception emerge for literacy, and what patterns emerge for ELD? Use summative results, formative evidence, and specific examples from Steps 1 or 2.',
      'What impact did your instructional approaches and activities have on the group, and separately on the FS, based on assessment results and observations?',
      'What would you change when teaching the unit again for the group, and separately for the FS?',
      'What specific, actionable feedback did you give the FS?',
      'How will that feedback help the FS improve or advance toward meeting or exceeding literacy and ELD goals?'
    ] },
    J: { locator: 'Current Part J template', questions: [
      'Will the FS\'s follow-up be re-teaching or an extension? Justify the choice with lesson performance, formative and summative results, and specific examples from Steps 1-3.',
      'What are the follow-up literacy goals, and what are the ELD goals?',
      'For re-teaching, what targeted intervention or individualized strategy will support progress? For an extension, what instruction will deepen or advance literacy or ELD learning?',
      'How will the follow-up draw on the FS\'s assets and interests?'
    ] },
    K: { locator: 'Current assessment guide, Part K', questions: [
      'Teach and record the full follow-up activity; submit one clip of no more than 5 minutes showing the re-teaching or extension.'
    ] },
    L: { locator: 'Current Part L template', questions: [
      'Address the option you taught: for re-teaching, identify the targeted intervention or individualized strategy and explain why it supports the FS\'s literacy or ELD goals; for an extension, identify the instruction and explain why it deepens or advances that learning.',
      'Identify the timestamp, describe what you did and why, and explain the impact on the FS\'s learning.'
    ] }
  },
  'ss-c1': {
    A: { locator: 'Current Part A template', questions: [
      'What are the group\'s age ranges and grade levels?',
      'What assets and interests do the students bring?',
      'What subject-specific knowledge, skills, and abilities do they currently have?',
      'Which students are identified English learners?',
      'What learning needs are identified, including how many students have IEPs, 504 plans, or MTSS support?',
      'Which languages will you use for instruction?'
    ] },
    B: { locator: 'Current Part B template', questions: [
      'Which grade-level content strand, standard, or curriculum framework fits students\' recent learning, assets, interests, and needs?',
      'What content learning goal follows from that selection?',
      'What aligned academic language development (ALD) goal addresses the language and vocabulary students will need?',
      'What activities make up the lesson?',
      'How will you support the content goal, and how will you support the ALD goal?',
      'How will you monitor progress toward both content and ALD goals?',
      'How does this lesson connect to students\' recent subject learning?',
      'How will you establish a safe, positive learning environment?',
      'How will you draw on students\' assets and interests?',
      'What questions will promote higher-order thinking and deeper content understanding?',
      'Which UDL strategies will support learning?',
      'Which materials and resources will you use, and why?'
    ] },
    C: { locator: 'Current Part C template', questions: [
      'FS1: What are this student\'s age, grade, current subject knowledge and skills, and specific ALD needs?',
      'FS1: What adaptations will you make, and how do recent learning, observations, or assessments support those choices?',
      'FS1: Which relevant assets and interests will you use to support the student\'s needs?',
      'FS1: How will you adapt content for ALD through reading, writing, listening, or speaking in multiple communication modes? Which evidence-based practices or research support the adaptations?',
      'FS2: What are this student\'s age, grade, current subject knowledge and skills, and specific content learning needs?',
      'FS2: What adaptations will you make, and how do recent learning, observations, or assessments support those choices?',
      'FS2: Which relevant assets and interests will you use to support the student\'s needs?',
      'FS2: How will the adaptations use at least two multisensory strategies to support content learning? Which evidence-based practices or research support them?',
      'FS3: What are this student\'s age, grade, current subject knowledge and skills, content needs, and well-being or behavior needs connected to life experiences?',
      'FS3: What adaptations will you make, and how do recent learning, observations, or assessments support those choices?',
      'FS3: Which relevant assets and interests will you use to support the student\'s needs?',
      'FS3: What targeted, proactive plan and adaptations to content and the physical or social environment will support well-being or behavior and content learning? Which evidence-based practices or research support them?'
    ] },
    D: { locator: 'Current assessment guide, Part D', questions: [
      'Provide descriptions, screenshots, or images of the resources and materials planned for the lesson (up to 7 pages).'
    ] },
    E: { locator: 'Current assessment guide, Part E', questions: [
      'Submit 1-3 clips totaling no more than 15 minutes, with you and at least three students visible and audible.',
      'Show a safe, positive environment, higher-order content thinking, and UDL strategies.',
      'Show how you monitor student progress and respond intentionally to support learning.'
    ] },
    F: { locator: 'Current Part F template', questions: [
      'For each response, identify the clip and timestamp, explain what you did and why, and describe the impact on learning; match the submitted video evidence.',
      'How did you maintain a safe, positive environment?',
      'How did you engage students in higher-order thinking about the content?',
      'How did you use UDL strategies during the lesson?',
      'How did you monitor students\' progress to support learning?',
      'How did you respond intentionally to support learning?'
    ] },
    G: { locator: 'Current Part G template', questions: [
      'For the group, including the focus students, what went well and what did not go as expected? Use specific examples from Steps 1 or 2.',
      'How did learning about students beforehand affect your teaching?',
      'How did a safe, positive environment and an asset-based approach each affect your teaching?',
      'How did UDL strategies and higher-order thinking each affect your teaching?',
      'Did the group meet the content goal and the ALD goal? What evidence supports your conclusions?',
      'FS1: How did language adaptations affect progress toward the learning goals, and what evidence shows their impact?',
      'FS2: How did content adaptations affect progress toward the learning goals, and what evidence shows their impact?',
      'FS3: How did well-being or behavior adaptations affect progress toward the learning goals, and what evidence shows their impact?'
    ] },
    H: { locator: 'Current Part H template', questions: [
      'For the group, what did the cycle teach you about what worked and what did not? Use evidence from Steps 1-3 to justify your next content instruction.',
      'What next activity would advance the group\'s content and ALD learning, and which examples from Steps 1-3 justify it?',
      'FS1: How would you support this student\'s needs in the next activity, drawing on assets or interests and evidence from Steps 1-3?',
      'FS2: How would you support this student\'s needs in the next activity, drawing on assets or interests and evidence from Steps 1-3?',
      'FS3: How would you support this student\'s needs in the next activity, drawing on assets or interests and evidence from Steps 1-3?'
    ] }
  },
  'ss-c2': {
    A: { locator: 'Current Part A template', questions: [
      'Group: What are the students\' ages, grades, assets, and interests?',
      'Group: What subject-specific knowledge, skills, and abilities do students bring?',
      'Group: Which students are identified English learners, what learning needs are identified, and how many students have IEP, 504, or MTSS supports?',
      'Group: Which languages will be used for instruction, and which staff will assist in which roles, if applicable?',
      'Focus student (FS): What are the student\'s age, grade, assets, interests, and subject-specific knowledge, skills, and abilities?',
      'FS: What are the student\'s content learning needs?',
      'If the FS is an English learner, reclassified English learner, heritage-language speaker, or multilingual, what content knowledge and skills do they have in their primary languages, and what are their English language development needs?'
    ] },
    B: { locator: 'Current Part B template', questions: [
      'How will prior content assessments and learning inform student needs across the three lessons?',
      'Which grade-level California content standards or frameworks will the unit address, and what content goal follows from them?',
      'Which ELD standards strengthen the content standards or frameworks, and what grade-appropriate ELD unit goal follows from them?',
      'What are the three lessons, and how do they build a progression of learning?',
      'How will the summative assessment measure the unit learning goals?',
      'For each lesson (1, 2, and 3), what content goals and supporting ELD goals connect to the unit goals? Include an ELD goal even without an English learner in the group.',
      'For each lesson, what activities will you teach, and how will you integrate ELD?',
      'For each lesson, how will you actively engage students and draw on their assets or interests?',
      'For each lesson, which UDL strategies will support learning?',
      'For each lesson, which formative assessments will monitor learning?',
      'For each lesson, how will you adapt instruction for the FS\'s needs, drawing on their assets and interests?'
    ] },
    C: { locator: 'Current Part C template', questions: [
      'Which content and ELD unit goals will the summative assessment evaluate?',
      'What product, process, or performance will you collect or observe from each student?',
      'What summative assessment will you give after the third lesson?',
      'What evidence in student responses will show progress toward, attainment of, or performance beyond the content and ELD goals?'
    ] },
    D: { locator: 'Current assessment guide, Part D', questions: [
      'Provide the blank product-based summative assessment, or the prompts and instructions for a process or performance assessment.',
      'Include the rubric or performance criteria used to score progress toward both content and ELD goals.'
    ] },
    E: { locator: 'Current assessment guide, Part E', questions: [
      'Submit 1-4 clips totaling no more than 20 minutes.',
      'Show students actively engaged in deep content learning.',
      'Show UDL strategies and student assets or interests supporting active content or ELD learning.',
      'Show integrated ELD supporting content learning.',
      'Show formative assessment to monitor learning and your intentional response to the results.'
    ] },
    F: { locator: 'Current Part F template', questions: [
      'For each response, identify the clip and timestamp, explain what you did and why, and describe the impact on learning; match the submitted video evidence.',
      'How did you engage students in deep learning that strengthened their content knowledge, skills, or abilities?',
      'How did you use students\' assets or interests in content or ELD instruction?',
      'How did UDL strategies support content or ELD instruction?',
      'How did you actively engage students during content or ELD learning?',
      'How did integrated ELD support content instruction?',
      'How did formative assessment monitor progress toward content or ELD goals?',
      'How did you respond intentionally to formative results to support progress?'
    ] },
    G: { locator: 'Current assessment guide, Part G', questions: [
      'Analyze the FS\'s summative results for understanding and misconceptions in content and ELD; submit the FS\'s response and scored rubric or performance criteria.',
      'Use evidence appropriate to the response: a product, a process document or suitable video, or an audio/video recording for a performance. Groupwork must still show the FS\'s individual learning.'
    ] },
    H: { locator: 'Current assessment guide, Part H', questions: [
      'Provide developmentally appropriate, specific, actionable feedback based on the FS\'s summative results that helps advance content and ELD learning.',
      'Submit a written summary of the feedback given, or an audio/video recording of you giving it to the FS (up to 5 minutes).'
    ] },
    I: { locator: 'Current Part I template', questions: [
      'What information from the three lessons shows how activities and formative assessments supported content and ELD progress?',
      'List the content and ELD unit goals assessed; for each area, report how many students exceeded, met, or did not yet meet the goals.',
      'For the group, what patterns of understanding or misconception emerge for content, and what patterns emerge for ELD? Use summative results, formative evidence, and specific examples from Steps 1 or 2.',
      'For the FS, what patterns of understanding or misconception emerge for content, and what patterns emerge for ELD? Use summative results, formative evidence, and specific examples from Steps 1 or 2.',
      'What impact did your instructional approaches and activities have on the group, and separately on the FS, based on assessment results and observations?',
      'What would you change when teaching the unit again for the group, and separately for the FS?',
      'What specific, actionable feedback did you give the FS?',
      'How will that feedback help the FS improve or advance toward meeting or exceeding content and ELD goals?'
    ] },
    J: { locator: 'Current Part J template', questions: [
      'Will the FS\'s follow-up be re-teaching or an extension? Justify the choice with lesson performance, formative and summative results, and specific examples from Steps 1-3.',
      'What are the follow-up content goals, and what are the ELD goals?',
      'For re-teaching, what targeted intervention or individualized strategy will support progress? For an extension, what instruction will deepen or advance content or ELD learning?',
      'How will the follow-up draw on the FS\'s assets and interests?'
    ] },
    K: { locator: 'Current assessment guide, Part K', questions: [
      'Teach and record the full follow-up activity; submit one clip of no more than 5 minutes showing the re-teaching or extension.'
    ] },
    L: { locator: 'Current Part L template', questions: [
      'Address the option you taught: for re-teaching, identify the targeted intervention or individualized strategy and explain why it supports the FS\'s content or ELD goals; for an extension, identify the instruction and explain why it deepens or advances that learning.',
      'Identify the timestamp, describe what you did and why, and explain the impact on the FS\'s learning.'
    ] }
  },
  'mmsn-math': {
    A: { locator: 'Current Part A template', questions: [
      'What age ranges and grade levels are served in the clinical practice setting?',
      'What instructional delivery model is used?',
      'Which instructional support personnel will collaborate with you or assist during the lesson?',
      'Which languages will you use for instruction?'
    ] },
    B: { locator: 'Current Part B template', questions: [
      'For the one focus student (FS) with an IEP, which age-appropriate PK/TK math content strand or grade-level K-ATP math content standard, plus one Math Practice Standard, fit recent learning, assets, interests, and needs?',
      'If the FS is eligible for CAA Math or an alternate curriculum through the IEP, will you use grade-aligned Core Content Connectors (CCCs)? Identify them if used.',
      'What single learning goal combines the selected math content and practice?',
      'What aligned math academic language development (ALD) goal addresses the language and vocabulary the FS will need?',
      'What activities make up the lesson?',
      'How will you support the FS\'s math content and practice goal, and how will you support the math ALD goal?',
      'How will the lesson support the FS\'s math-related IEP goals?',
      'How will you monitor the FS\'s progress toward both math and ALD goals?',
      'How does this lesson connect to the FS\'s recent math learning?',
      'How will you establish a safe, positive learning environment?',
      'How will you draw on the FS\'s assets and interests?',
      'What questions will promote age- or developmentally appropriate higher-order thinking and deeper math understanding?',
      'Which UDL strategies will support learning?',
      'How will you collaborate with or guide support personnel to provide individualized instruction to the FS, or support other students while you teach the FS?',
      'If applicable, how will math learning include functional skills that increase independence in real-world settings?',
      'Which materials and resources will you use, and why?'
    ] },
    C: { locator: 'Current Part C template', questions: [
      'For the one FS with an IEP, what are their age, grade, and current math knowledge, skills, and abilities?',
      'What is the FS\'s special education eligibility, and how does it affect math ALD or math knowledge, skills, and abilities?',
      'What specific math learning needs does the FS have?',
      'What adaptations will you make to support the FS?',
      'Which math-related IEP goals will the lesson address, and how will the adaptations support them?',
      'Which other IEP supports may help the FS progress toward math and ALD goals?',
      'How do recent learning, observations, or math assessments support your adaptation choices?',
      'Which relevant assets and interests will you use to support the FS\'s needs?',
      'How will adaptations use at least two multisensory strategies to support math learning? Which evidence-based practices or research support them?'
    ] },
    D: { locator: 'Current assessment guide, Part D', questions: [
      'Provide descriptions, screenshots, or images of the resources and materials planned for the math lesson (up to 7 pages).'
    ] },
    E: { locator: 'Current assessment guide, Part E', questions: [
      'Submit 1-3 clips totaling no more than 15 minutes, with you and the FS visible and audible.',
      'Show a safe, positive environment, developmentally appropriate higher-order math thinking, and UDL strategies supporting the FS.',
      'Show how you monitor the FS\'s progress and respond intentionally to support learning.'
    ] },
    F: { locator: 'Current Part F template', questions: [
      'For each response, identify the clip and timestamp, explain what you did and why, and describe the impact on learning; match the submitted video evidence.',
      'How did you maintain a safe, positive environment?',
      'How did you engage the FS in developmentally appropriate higher-order math thinking?',
      'How did UDL strategies support the FS during the math lesson?',
      'How did you monitor the FS\'s progress to support learning?',
      'How did you respond intentionally to support the FS\'s learning?'
    ] },
    G: { locator: 'Current Part G template', questions: [
      'What went well and what did not go as expected in teaching the lesson? Use specific examples from Steps 1 or 2.',
      'How did learning about the FS beforehand affect your teaching?',
      'How did a safe, positive environment and an asset-based approach each affect your teaching?',
      'How did UDL strategies and engaging the FS in higher-order thinking each affect your teaching?',
      'Did the FS meet the math goal and the ALD goal? What evidence supports your conclusions?',
      'How did the adaptations for the FS\'s needs affect progress toward the learning goals, and what evidence shows their impact?'
    ] },
    H: { locator: 'Current Part H template', questions: [
      'What did the cycle teach you about what worked and what did not? Use evidence from Steps 1-3 to justify your next math instruction.',
      'What next activity would advance the FS\'s math and ALD learning, and which examples from Steps 1-3 justify it?',
      'How would you continue supporting the FS\'s needs in that activity, drawing on assets or interests and examples from Steps 1-3?',
      'How will you collaborate with or guide instructional support personnel to support the FS in future instruction?'
    ] }
  },
  'mmsn-literacy': {
    A: { locator: 'Current Part A template', questions: [
      'What are the focus student\'s (FS\'s) age, grade, assets, and interests?',
      'If the FS is an English learner, reclassified English learner, heritage-language speaker, or multilingual, what literacy knowledge and skills do they have in their primary languages?',
      'What literacy knowledge, skills, and abilities does the FS currently have?',
      'What is the FS\'s special education eligibility, and how does it affect literacy knowledge, skills, or abilities?',
      'If the FS is an English learner, what are their English language development needs?',
      'Which IEP goals related to foundational reading, additional themes, or ELD will the lessons address?',
      'Which other IEP supports may help the FS progress toward literacy and ELD goals?'
    ] },
    B: { locator: 'Current Part B template', questions: [
      'How will prior literacy assessments, learning, and the IEP inform the FS\'s needs across the three lessons?',
      'Which grade-appropriate California ELA/Literacy standards or developmentally appropriate CCCs will the unit address? In an eligible Spanish-language bilingual classroom, which CCSS en Espanol standards will you use?',
      'What developmentally appropriate unit literacy goals include foundational reading and an additional theme, either together or as separate goals?',
      'Which grade-appropriate ELD standards strengthen the literacy standards, and what developmentally appropriate, aligned ELD goals will you set? Where applicable, identify Spanish Language Development standards aligned with CCSS en Espanol.',
      'Which foundational reading skills will the FS learn in at least one lesson or across the unit?',
      'Which additional ELA/ELD Framework theme or themes will appear in two or three lessons: meaning making, language development, effective expression, or content knowledge?',
      'What are the three lessons, and how do they build a progression of learning?',
      'How will the summative assessment measure both the literacy and ELD unit goals?',
      'For each lesson (1, 2, and 3), what literacy goals and ELD goals connect to the unit goals?',
      'For each lesson, what are the activities, and how will foundational reading instruction, when included, be direct, systematic, and explicit?',
      'For each lesson, how will the student or students actively engage with any additional theme being taught?',
      'For each lesson, how will integrated ELD support the reading skills and themes being taught? Include ELD in all three lessons even if the FS is not an English learner.',
      'For each lesson, which UDL strategies will you use, how will you actively engage the FS, and how will you draw on the FS\'s assets or interests?',
      'For each lesson, which formative assessments will monitor learning?',
      'For each lesson, how will you adapt instruction for the FS\'s needs, drawing on their assets and interests?',
      'For each lesson, how will you collaborate with or guide instructional support personnel?'
    ] },
    C: { locator: 'Current Part C template', questions: [
      'Which literacy and ELD unit goals will the summative assessment evaluate?',
      'What product, process, or performance will you collect or observe from the FS?',
      'What summative assessment will you give after the third lesson?',
      'What evidence in the FS\'s responses will show progress toward, attainment of, or performance beyond the literacy and ELD goals?'
    ] },
    D: { locator: 'Current assessment guide, Part D', questions: [
      'Provide the blank product-based summative assessment, or the prompts and instructions for the FS\'s process or performance assessment.',
      'Include the rubric or performance criteria used to score the FS\'s progress toward both literacy and ELD goals.'
    ] },
    E: { locator: 'Current assessment guide, Part E', questions: [
      'Submit 1-4 clips totaling no more than 20 minutes.',
      'Show direct, explicit foundational reading instruction that actively engages the FS.',
      'Show active learning of an additional theme through the FS\'s assets or interests.',
      'Show integrated ELD supporting the reading skills or additional themes.',
      'Show formative assessment of the FS\'s literacy learning and your intentional response to the results.'
    ] },
    F: { locator: 'Current Part F template', questions: [
      'For each response, identify the clip and timestamp, explain what you did and why, and describe the impact on learning; match the submitted video evidence.',
      'What direct, explicit approach did you use to teach the FS foundational reading skills?',
      'How did you actively engage the FS in learning those reading skills?',
      'How did you actively engage the FS in the additional themes?',
      'How did you use the FS\'s assets or interests when teaching the additional themes?',
      'How did integrated ELD support foundational reading skills or the additional themes?',
      'How did UDL strategies support literacy or ELD instruction?',
      'How did formative assessment monitor the FS\'s progress toward literacy or ELD goals?',
      'How did you respond intentionally to formative results to support the FS\'s progress?'
    ] },
    G: { locator: 'Current assessment guide, Part G', questions: [
      'Score and analyze the FS\'s summative response for understanding and misconceptions in literacy and ELD; submit the response and scored rubric or performance criteria.',
      'Use evidence appropriate to the response: a product, a process document or suitable video, or an audio/video recording for a performance. Groupwork must still show the FS\'s individual learning.'
    ] },
    H: { locator: 'Current assessment guide, Part H', questions: [
      'Provide developmentally appropriate, specific, actionable feedback based on the FS\'s summative results that helps advance literacy and ELD learning.',
      'Submit a written summary of the feedback given, or an audio/video recording of you giving it to the FS (up to 5 minutes).',
      'Also share assessment feedback with the FS\'s family or guardians, using specific results and ways to support learning at home or in the community; describe this communication in Part I.'
    ] },
    I: { locator: 'Current Part I template', questions: [
      'For the FS, what patterns of understanding or misconception emerge for literacy, and what patterns emerge for ELD? Use summative results, formative evidence, and specific examples from Steps 1 or 2.',
      'What impact did your instructional approaches and activities have on the FS\'s learning, based on assessment results and observations?',
      'What would you change for the FS if you taught the unit again?',
      'What specific, actionable feedback did you give the FS?',
      'How will that feedback help the FS improve or advance toward meeting or exceeding literacy and ELD goals?',
      'How did you communicate feedback to the FS\'s family or guardians?',
      'What feedback did you share about assessment results and ways the family or guardians can support learning at home or in the community?'
    ] },
    J: { locator: 'Current Part J template', questions: [
      'Will the FS\'s follow-up be re-teaching or an extension? Justify the choice with lesson performance, formative and summative results, and specific examples from Steps 1-3.',
      'What are the follow-up literacy goals, and what are the ELD goals?',
      'For re-teaching, what targeted intervention or individualized strategy will support progress? For an extension, what instruction will deepen or advance literacy or ELD learning?',
      'How will the follow-up draw on the FS\'s assets and interests?'
    ] },
    K: { locator: 'Current assessment guide, Part K', questions: [
      'Teach and record the full follow-up activity; submit one clip of no more than 5 minutes showing the re-teaching or extension.'
    ] },
    L: { locator: 'Current Part L template', questions: [
      'Address the option you taught: for re-teaching, identify the targeted intervention or individualized strategy and explain why it supports the FS\'s literacy or ELD follow-up goals; for an extension, identify the instruction and explain why it deepens or advances that learning.',
      'Identify the timestamp, describe what you did and why, and explain the impact on the FS\'s learning.'
    ] }
  }
};
