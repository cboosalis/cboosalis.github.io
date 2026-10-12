'use strict';
window.CALTPA = {
  year: '2026-27', reviewed: '2026-10-08', schema: 1,
  sources: {
    materials: ['Current assessment materials', 'https://www.ctcexams.nesinc.com/TestView.aspx?f=HTML_FRAG/CalTPA_AssessmentMaterials.html'],
    ctc: ['CTC guides and templates', 'https://www.ctc.ca.gov/performance-assessment/resources/'],
    updates: ['2026-27 assessment updates', 'https://docs.ctc.ca.gov/Document/Download/31564'],
    prep: ['Video and ePortfolio preparation', 'https://www.ctcexams.nesinc.com/TestView.aspx?f=HTML_FRAG/CalTPA_PrepMaterials.html'],
    overview: ['Official CalTPA overview', 'https://www.ctcexams.nesinc.com/TestView.aspx?f=HTML_FRAG/CalTPA_TestPage.html'],
    passing: ['2026-27 passing standards and retakes', 'https://www.ctcexams.nesinc.com/Content/HTML_FRAG/GENRB_Passing_CalTPA.html'],
    support: ['Acceptable support and official samples', 'https://www.ctcexams.nesinc.com/TestView.aspx?f=CACBT_Faculty_CalTPA.html'],
    samples: ['Official sample submission folder (2025-26)', 'https://drive.google.com/drive/folders/1gZO8pxl6MSpYzITB1cqnFP4rrlKxE7Ql'],
    faq: ['CalTPA FAQ and dual credentials', 'https://www.ctcexams.nesinc.com/TestView.aspx?f=HTML_FRAG/CACBTRB_FAQ_CalTPA.html&t=tpa'],
    standards: ['California content standards', 'https://www.cde.ca.gov/be/st/'],
    frameworks: ['California curriculum frameworks', 'https://www.cde.ca.gov/ci/cr/cf/'],
    eld: ['California English Language Development Standards', 'https://www.cde.ca.gov/sp/el/er/eldstandards.asp'],
    udl: ['CAST Universal Design for Learning Guidelines', 'https://udlguidelines.cast.org/']
  },
  tracks: {
    ms: {name:'Multiple Subject', audience:'Elementary', assessments:['ms-math','ms-literacy']},
    ss: {name:'Single Subject', audience:'Secondary', assessments:['ss-c1','ss-c2']},
    wl: {name:'World Languages', audience:'Secondary language teaching', assessments:['wl-c1','wl-c2']}
  },
  assessments: {
    'ms-math': {track:'ms',type:1,name:'Math Performance Assessment',short:'Math (MPA)',version:'2.0',guide:31352,folder:2001,templates:{A:31353,B:31354,C:31355,F:31356,G:31357,H:31358},pages:{evidence:12,spec:15,score:11,A:18,B:19,C:22,D:24,E:31,F:31,G:35,H:39},rubricPages:[25,27,28,29,33,34,37,40],subject:'math',language:'math academic language development (ALD)',description:'Plan and teach one math lesson that connects what you know about students to meaningful mathematical thinking.',focus:'Three focus students',lessons:'One lesson',sample:'ms-math'},
    'ms-literacy': {track:'ms',type:2,name:'Literacy Performance Assessment',short:'Literacy (LPA)',version:'2.1',guide:31359,folder:2002,templates:{A:31360,B:31361,C:31362,F:31363,I:31364,J:31365,L:31366},pages:{evidence:12,spec:16,score:11,A:20,B:22,C:26,D:27,E:34,F:34,G:40,H:41,I:42,J:47,K:48,L:48},rubricPages:[29,31,36,37,38,39,45,49],subject:'literacy',language:'English language development (ELD)',description:'Teach a three-lesson literacy unit, interpret assessment evidence, and teach a follow-up activity for your focus student.',focus:'One focus student',lessons:'Three lessons + follow-up',sample:'ms-literacy'},
    'ss-c1': {track:'ss',type:1,name:'Cycle 1: Learning About Students',short:'Cycle 1',version:'2.0',guide:31382,folder:2005,templates:{A:31384,B:31385,C:31386,F:31387,G:31388,H:31389},pages:{evidence:10,spec:13,score:9,A:16,B:17,C:19,D:21,E:28,F:28,G:32,H:36},rubricPages:[22,24,25,26,30,31,34,37],subject:'content-specific',language:'academic language development (ALD)',description:'Plan and teach one subject-specific lesson with purposeful adaptations for three focus students.',focus:'Three focus students',lessons:'One lesson',sample:'ss-c1'},
    'ss-c2': {track:'ss',type:2,name:'Cycle 2: Assessment-Driven Instruction',short:'Cycle 2',version:'2.1',guide:31383,folder:2006,templates:{A:31390,B:31391,C:31392,F:31393,I:31394,J:31395,L:31396},pages:{evidence:11,spec:15,score:10,A:19,B:21,C:23,D:24,E:30,F:30,G:36,H:36,I:37,J:42,K:43,L:43},rubricPages:[26,28,32,33,34,35,40,44],subject:'content-specific',language:'English language development (ELD)',description:'Build a three-lesson unit around assessment evidence, then use what you learn to teach a focused follow-up.',focus:'One focus student',lessons:'Three lessons + follow-up',sample:'ss-c2'},
    'wl-c1': {track:'wl',type:1,name:'World Languages Cycle 1',short:'Cycle 1',version:'2.0',guide:31397,folder:2007,templates:{A:31399,B:31400,C:31401,F:31402,G:31403,H:31404},pages:{evidence:11,spec:14,score:10,A:17,B:18,C:20,D:22,E:29,F:29,G:33,H:37},rubricPages:[23,25,26,27,31,32,35,38],subject:'world language',language:'vocabulary in the target language',description:'Plan and teach one lesson in the target language, connecting communication, culture, and student learning needs.',focus:'Three focus students',lessons:'One lesson'},
    'wl-c2': {track:'wl',type:2,name:'World Languages Cycle 2',short:'Cycle 2',version:'2.0',guide:31398,folder:2008,templates:{A:31405,B:31406,C:31407,F:31408,I:31409,J:31410,L:31411},pages:{evidence:11,spec:15,score:10,A:19,B:21,C:23,D:23,E:29,F:29,G:35,H:35,I:37,J:41,K:42,L:42},rubricPages:[25,27,31,32,33,34,39,43],subject:'world language',language:'communication in the target language',description:'Teach a connected unit in the target language, analyze learning, and respond through a follow-up activity.',focus:'One focus student',lessons:'Three lessons + follow-up'}
  },
  steps:[{name:'Plan',icon:'notebook-pen',verb:'Know your students and design the learning.'},{name:'Teach & Assess',icon:'presentation',verb:'Make student thinking visible and respond.'},{name:'Reflect',icon:'scan-text',verb:'Interpret what the evidence actually shows.'},{name:'Apply',icon:'move-right',verb:'Use what you learned to decide what comes next.'}]
};
