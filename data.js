window.KCA_DATA = {
  updated: "August 2026",
  years: ["2024", "2025", "2026"],
  highlights: [
    { value: "415", label: "Pupils", meta: "School context · September 2026", note: "Learning together from Nursery to Year 6" },
    { value: "36%", label: "Pupils with SEND", meta: "School context · September 2026", note: "An inclusive school with ambitious expectations for every child" },
    { value: "49%", label: "Disadvantaged pupils*", meta: "205 pupils · September 2026", note: "A Department for Education reporting category — not a KCA label" },
    { value: "50", label: "Home languages spoken", meta: "School context · September 2026", note: "Reflecting the rich linguistic diversity of our Academy community" }
  ],
  trendHighlights: [
    { label: "EYFS GLD", values: [70, 71, 77], unit: "%", change: "+7pp", note: "Good Level of Development" },
    { label: "Phonics by end of Y2", values: [90, 91, 93], unit: "%", change: "+3pp", note: "Expected standard" },
    { label: "KS2 Reading", values: [62, 78, 80], unit: "%", change: "+18pp", note: "Expected standard" },
    { label: "KS2 Writing", values: [65, 76, 78], unit: "%", change: "+13pp", note: "Expected standard" },
    { label: "KS2 Mathematics", values: [56, 56, 78], unit: "%", change: "+22pp", note: "Expected standard" },
    { label: "KS2 Combined", values: [44, 52, 73], unit: "%", change: "+29pp", note: "Reading, writing & maths" },
    { label: "Swimming & water safety", values: [85, 87, 92], unit: "%", change: "+7pp", note: "Pupils meeting the outcome" },
    { label: "LAMDA", values: [100, 100, 100], unit: "%", change: "100%", note: "Pass rate sustained for 3 years", sustained: true }
  ],
  familyStory: [
    {
      title: "A strong start",
      value: "77%",
      copy: "Reception outcomes have strengthened over three years, with 77% of children achieving a Good Level of Development in 2026."
    },
    {
      title: "An inclusive school",
      value: "22",
      suffix: "SEND pupils in the 2026 KS2 cohort",
      copy: "We are ambitious for every child, with high expectations for pupils with SEND at the heart of our inclusive approach."
    },
    {
      title: "The full picture matters",
      value: "5 views",
      copy: "Explore KS2 outcomes for all pupils, disadvantaged pupils, SEND pupils and pupils who joined KCA at different points in their primary journey."
    }
  ],
  sections: {
    eyfs: {
      kicker: "02 · Early Years Foundation Stage",
      title: "A strong start to school.",
      intro: "At the end of Reception, children are assessed against the Early Learning Goals. A Good Level of Development (GLD) indicates that a child has met the expected standard across the prime areas of learning and literacy and mathematics.",
      story: "In 2026, 77% of Reception pupils achieved a Good Level of Development. The three-year trend shows improvement from 70% in 2024 to 77% in 2026.",
      explorer: {
        intro: "Explore the 2026 EYFS outcome for different groups. Cohort sizes are shown so that percentages can be read in context.",
        groups: {
          all: { label: "All pupils", short: "All pupils", cohort: 60, metrics: [{ label: "Good Level of Development", value: 77, unit: "%" }], note: "Whole Reception cohort." },
          send: { label: "Pupils with SEND", short: "SEND", cohort: 19, metrics: [{ label: "Good Level of Development", value: 53, unit: "%" }], note: "The EYFS source records 17 pupils at SEN Support and 2 pupils with an EHCP. The combined GLD figure is calculated from those source counts." },
          disadvantaged: { label: "Disadvantaged pupils", short: "Disadvantaged*", cohort: 26, metrics: [{ label: "Good Level of Development", value: 69, unit: "%" }], note: "‘Disadvantaged’ is the Department for Education reporting category used in the source data, not a KCA label." }
        }
      },
      measures: [
        {
          name: "Good Level of Development",
          unit: "%",
          school: [70, 71, 77],
          national: [67, 67, null],
          note: "2026 national figure not yet available in the current statutory summary."
        }
      ],
      commentaryTitle: "A strong foundation for what comes next",
      commentary: "We want children to leave Reception confident, curious and ready for the next stage of their learning. The improvement in Good Level of Development over the last three years is encouraging and reflects our continued focus on strong foundations across the whole Early Years curriculum."
    },
    phonics: {
      kicker: "03 · Phonics",
      title: "Building fluent early readers.",
      intro: "The Year 1 Phonics Screening Check assesses whether pupils can decode a mixture of real words and pseudo-words. Pupils who do not meet the standard in Year 1 are checked again in Year 2.",
      story: "Year 1 outcomes are lower in 2026 than in the previous two years, while the Year 2 re-check shows a strong cumulative picture. This is an area where the trend matters more than a single headline.",
      explorer: {
        intro: "Explore the current 2026 Year 1 phonics picture by pupil group. These subgroup figures are drawn from the Academy's current pupil-level phonics record and will be refreshed when the final validated dataset is available.",
        groups: {
          all: { label: "All pupils", short: "All pupils", cohort: 58, metrics: [{ label: "Meeting the expected standard", value: 78, unit: "%" }], note: "The published provisional headline remains 78%." },
          send: { label: "Pupils with SEND", short: "SEND", cohort: 11, metrics: [{ label: "Recorded as meeting the standard", value: 36, unit: "%" }], note: "Current internal pupil-level record; this figure will be refreshed against the final validated phonics dataset." },
          disadvantaged: { label: "Disadvantaged pupils", short: "Disadvantaged*", cohort: 25, metrics: [{ label: "Recorded as meeting the standard", value: 76, unit: "%" }], note: "Current internal pupil-level record. ‘Disadvantaged’ is the Department for Education reporting category, not a KCA label." }
        }
      },
      measures: [
        {
          name: "Year 1 meeting the expected standard",
          unit: "%",
          school: [91, 91, 78],
          national: [79, 80, null],
          note: "2026 national figure not yet available in the current summary."
        },
        {
          name: "Year 2 meeting the expected standard",
          unit: "%",
          school: [90, 91, 93],
          national: [89, 89, null],
          note: "Shows the cumulative position after the Year 2 re-check."
        }
      ],
      commentaryTitle: "Keeping the whole reading journey in view",
      commentary: "The 2026 Year 1 result is lower than we want it to be and early reading remains an important priority. A number of pupils were very close to meeting the threshold. These children will receive bespoke phonics teaching, carefully woven through the wider curriculum, so that gaps are addressed quickly and they are supported to meet the expected standard securely by the end of Year 2. Our strong Year 2 cumulative outcome gives us confidence in the impact of this sustained, targeted approach."
    },
    mtc: {
      kicker: "04 · Multiplication Tables Check",
      title: "Fluency that supports later mathematics.",
      intro: "The Year 4 Multiplication Tables Check is an online assessment of pupils' recall of multiplication facts. The maximum score is 25.",
      story: "The average score remains above 21. Our focus is on strengthening automatic recall while retaining a broad mathematics curriculum and ensuring more pupils reach full marks.",
      explorer: {
        intro: "Explore the 2026 MTC outcome by the pupil groups available in the current source pack.",
        groups: {
          all: { label: "All pupils", short: "All pupils", cohort: 57, metrics: [{ label: "Average mark", value: 21.1, unit: " / 25" }, { label: "Full marks (25/25)", value: 34, unit: "%" }], note: "34% is the Academy-confirmed final full-marks figure." },
          disadvantaged: { label: "Disadvantaged pupils", short: "Disadvantaged*", cohort: 42, metrics: [{ label: "Average mark", value: 21.2, unit: " / 25" }, { label: "Full marks (25/25)", value: 33, unit: "%" }], note: "The detailed MTC pack provides this disadvantaged breakdown. ‘Disadvantaged’ is a Department for Education reporting category, not a KCA label." }
        },
        unavailableNote: "The current MTC source pack does not provide a SEND breakdown, so we have not estimated or inferred one."
      },
      measures: [
        {
          name: "Pupils achieving full marks",
          unit: "%",
          school: [38, 44, 34],
          national: [34, 37, null],
          note: "34% of pupils achieved the maximum score of 25/25 in 2026. This is the school-confirmed final figure."
        },
        {
          name: "Average mark",
          unit: " / 25",
          school: [21.0, 21.8, 21.1],
          national: [20.6, 21.0, null],
          note: "Average score of pupils taking the check."
        }
      ],
      commentaryTitle: "Fluency matters — and we remain ambitious",
      commentary: "Secure multiplication facts give children greater confidence as mathematics becomes more complex. In 2026, 68% of pupils scored more than 22 marks out of 25 — an exceptionally strong level of fluency across the cohort. The Multiplication Tables Check is designed to help schools identify where pupils may benefit from further support, rather than to operate as a stand-alone measure of attainment. We will use this detailed information to target future teaching and intervention as the cohort moves into Year 5, while continuing to develop confident and fluent mathematicians."
    },
    ks2: {
      kicker: "05 · Key Stage 2",
      title: "Strong expected-standard outcomes in 2026.",
      intro: "At the end of Year 6, pupils are assessed in reading and mathematics through national tests and in writing through teacher assessment. The combined measure records pupils who meet the expected standard in reading, writing and mathematics.",
      story: "The strongest 2026 KS2 story is the improvement at expected standard: 80% in reading, 78% in writing, 78% in mathematics and 73% combined. The current national figures are 75%, 73%, 75% and 63% respectively.",
      provisionalExtra: "KS2 is particularly provisional: current outcomes may change following confirmed disapplications, including pupils currently being considered for disapplication, and final cohort validation.",
      measures: [
        { name: "Reading · expected standard", unit: "%", school: [62,78,80], national: [74,76,75], note: "2026 national figures are provisional in the July KS2 analysis." },
        { name: "Writing · expected standard", unit: "%", school: [65,76,78], national: [72,73,73], note: "Writing is teacher assessed." },
        { name: "Mathematics · expected standard", unit: "%", school: [56,56,78], national: [73,75,75], note: "A notable improvement in the school's three-year trend." },
        { name: "Reading, writing & maths · combined", unit: "%", school: [44,52,73], national: [61,62,63], note: "The key combined KS2 measure." },
        { name: "Reading · higher standard", unit: "%", school: [15,39,30], national: [29,34,31], note: "Higher standard = scaled score of 110+ in reading." },
        { name: "Writing · greater depth", unit: "%", school: [6,11,3], national: [13,13,13], note: "Greater depth is based on teacher assessment." },
        { name: "Mathematics · higher standard", unit: "%", school: [13,19,28], national: [24,27,27], note: "Higher standard = scaled score of 110+ in mathematics." },
        { name: "Combined · higher standard", unit: "%", school: [2,7,3], national: [8,8,9], note: "Requires higher-standard outcomes across reading, writing and mathematics." }
      ],
      scaled: [
        { name: "Reading", school: [102.7,106.0,105.9], national: [105,106,106] },
        { name: "Mathematics", school: [99.6,101.8,105.2], national: [104,105,105] },
        { name: "Grammar, punctuation & spelling", school: [101.6,104.2,105.7], national: [105,105,105] }
      ],
      commentaryTitle: "A strong year at the end of primary school",
      commentary: "Our 2026 outcomes reflect the hard work of our children and staff and the sustained improvements we have made to teaching and the curriculum. Reading, writing and mathematics outcomes at the expected standard are strong, with particularly encouraging outcomes for pupils with SEND. We are proud of this progress while remaining ambitious about the next stage of improvement. During 2026/27, a particular whole-school focus will be the development of writing at greater depth, alongside our continued ambition to increase higher-standard outcomes across the curriculum."
    }
  },
  ks2Explorer: {
    title: "Explore the full KS2 picture",
    intro: "A school average can hide important differences. Choose a cohort to see the 2026 strength profile, cohort size and three-year combined trend.",
    groups: {
      all: {
        label: "All pupils",
        short: "All",
        cohort: 40,
        profile: { reading: 80, writing: 78, maths: 78, combined: 73 },
        combinedTrend: [44,52,73],
        cohortTrend: [52,54,40],
        headline: "A strong overall 2026 picture",
        commentary: "Expected-standard outcomes are above the current national figure in reading, writing, mathematics and the combined measure."
      },
      disadvantaged: {
        label: "Disadvantaged pupils",
        short: "Disadvantaged",
        cohort: 21,
        profile: { reading: 67, writing: 57, maths: 57, combined: 52 },
        combinedTrend: [30,32,52],
        cohortTrend: [30,31,21],
        headline: "Improvement, with more to do",
        commentary: "The combined expected-standard outcome rose from 32% in 2025 to 52% in 2026. Reading is the strongest of the three subjects for this group, while writing and mathematics remain priorities."
      },
      send: {
        label: "SEND pupils",
        short: "SEND",
        cohort: 22,
        profile: { reading: 73, writing: 73, maths: 68, combined: 64 },
        combinedTrend: [27,21,64],
        cohortTrend: [22,14,22],
        headline: "Ambition and inclusion together",
        commentary: "In 2026, 73% of pupils with SEND reached the expected standard in both reading and writing, 68% in mathematics and 64% across the combined measure. The source dataset reports this cohort as ‘All SEN pupils’; it includes pupils with a wide range of needs and starting points."
      },
      afterY1: {
        label: "Joined after Year 1",
        short: "Joined after Y1",
        cohort: 18,
        profile: { reading: 83, writing: 78, maths: 78, combined: 78 },
        combinedTrend: [32,32,78],
        cohortTrend: [22,25,18],
        headline: "Strong outcomes for pupils who joined later",
        commentary: "The source analysis defines this group as pupils who were on roll after September of Year 1. In 2026, this group achieved 78% combined and 83% in reading — a strong outcome for pupils who did not experience their entire primary journey at KCA."
      },
      finalTwoYears: {
        label: "Joined since Year 5",
        short: "Joined since Y5",
        cohort: 3,
        profile: { reading: 100, writing: 100, maths: 100, combined: 100 },
        combinedTrend: [0,20,100],
        cohortTrend: [2,10,3],
        headline: "A very small cohort — interpret with care",
        commentary: "This group includes pupils who joined King's Cross Academy from the start of Year 5 onwards. The 2026 group contains only three pupils, so percentages move dramatically with each child and should be interpreted with particular care."
      }
    },
    mobilityNote: "‘Joined since Year 5’ refers to pupils who joined King's Cross Academy from the start of Year 5 onwards."
  }
};