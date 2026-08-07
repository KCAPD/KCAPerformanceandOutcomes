window.KCA_DATA = {
  updated: "August 2026",
  years: ["2024", "2025", "2026"],
  highlights: [
    { value: "77%", label: "Good Level of Development", meta: "EYFS · 2026", note: "up from 70% in 2024" },
    { value: "80%", label: "Reading at expected standard", meta: "KS2 · 2026", note: "national 75%" },
    { value: "78%", label: "Mathematics at expected standard", meta: "KS2 · 2026", note: "national 75%" },
    { value: "73%", label: "Reading, writing & maths combined", meta: "KS2 · 2026", note: "national 63%" }
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
      copy: "We are ambitious for pupils with additional needs and make their outcomes visible rather than hiding them inside an overall average."
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
      measures: [
        {
          name: "Good Level of Development",
          unit: "%",
          school: [70, 71, 77],
          camden: [70, 70, 73],
          national: [67, 67, null],
          note: "2026 national figure not yet available in the current statutory summary."
        }
      ],
      commentary: "The overall GLD result is a positive 2026 headline. The wider EYFS analysis also shows particular strengths in physical development, understanding the world and expressive arts and design."
    },
    phonics: {
      kicker: "03 · Phonics",
      title: "Building fluent early readers.",
      intro: "The Year 1 Phonics Screening Check assesses whether pupils can decode a mixture of real words and pseudo-words. Pupils who do not meet the standard in Year 1 are checked again in Year 2.",
      story: "Year 1 outcomes are lower in 2026 than in the previous two years, while the Year 2 re-check shows a strong cumulative picture. This is an area where the trend matters more than a single headline.",
      measures: [
        {
          name: "Year 1 meeting the expected standard",
          unit: "%",
          school: [91, 91, 78],
          camden: [84, 84, 85],
          national: [79, 80, null],
          note: "2026 national figure not yet available in the current summary."
        },
        {
          name: "Year 2 meeting the expected standard",
          unit: "%",
          school: [90, 91, 93],
          camden: [90, 90, 90],
          national: [89, 89, null],
          note: "Shows the cumulative position after the Year 2 re-check."
        }
      ],
      commentary: "The 2026 Year 1 result is an important area for continued focus. The Year 2 figure demonstrates that most pupils who need additional time go on to meet the standard by the end of Year 2."
    },
    mtc: {
      kicker: "04 · Multiplication Tables Check",
      title: "Fluency that supports later mathematics.",
      intro: "The Year 4 Multiplication Tables Check is an online assessment of pupils' recall of multiplication facts. The maximum score is 25.",
      story: "The average score remains above 21. Camden's provisional 2026 analysis is stronger overall, so our focus is on strengthening automatic recall while retaining a broad mathematics curriculum.",
      measures: [
        {
          name: "Pupils achieving full marks",
          unit: "%",
          school: [38, 44, 33],
          camden: [42, 44, 52],
          national: [34, 37, null],
          note: "2026 values use Camden's provisional MTC analysis. The school's earlier summary contains a different 2026 full-marks figure, so this should be checked before final publication."
        },
        {
          name: "Average mark",
          unit: " / 25",
          school: [21.0, 21.8, 21.1],
          camden: [21.9, 22.3, 22.8],
          national: [20.6, 21.0, null],
          note: "Average score of pupils taking the check."
        }
      ],
      commentary: "The distribution matters as well as the mean. The provisional 2026 analysis identifies pupils achieving at the very top of the scale while also showing a tail of pupils who need further fluency support."
    },
    ks2: {
      kicker: "05 · Key Stage 2",
      title: "Strong expected-standard outcomes in 2026.",
      intro: "At the end of Year 6, pupils are assessed in reading and mathematics through national tests and in writing through teacher assessment. The combined measure records pupils who meet the expected standard in reading, writing and mathematics.",
      story: "The strongest 2026 KS2 story is the improvement at expected standard: 80% in reading, 78% in writing, 78% in mathematics and 73% combined. The current national figures are 75%, 73%, 75% and 63% respectively.",
      provisionalExtra: "KS2 is particularly provisional: current outcomes may change following confirmed disapplications, including two pupils currently being considered for disapplication, and final cohort validation.",
      measures: [
        { name: "Reading · expected standard", unit: "%", school: [62,78,80], camden: [82,83,84], national: [74,76,75], note: "2026 Camden and national figures are provisional in the July KS2 analysis." },
        { name: "Writing · expected standard", unit: "%", school: [65,76,78], camden: [79,78,80], national: [72,73,73], note: "Writing is teacher assessed." },
        { name: "Mathematics · expected standard", unit: "%", school: [56,56,78], camden: [82,81,84], national: [73,75,75], note: "A notable improvement in the school's three-year trend." },
        { name: "Reading, writing & maths · combined", unit: "%", school: [44,52,73], camden: [72,73,76], national: [61,62,63], note: "The key combined KS2 measure." },
        { name: "Reading · higher standard", unit: "%", school: [15,39,30], camden: [36,42,40], national: [29,34,31], note: "Higher standard = scaled score of 110+ in reading." },
        { name: "Writing · greater depth", unit: "%", school: [6,11,3], camden: [20,20,22], national: [13,13,13], note: "Greater depth is based on teacher assessment." },
        { name: "Mathematics · higher standard", unit: "%", school: [13,19,28], camden: [33,37,38], national: [24,27,27], note: "Higher standard = scaled score of 110+ in mathematics." },
        { name: "Combined · higher standard", unit: "%", school: [2,7,3], camden: [13,15,16], national: [8,8,9], note: "Requires higher-standard outcomes across reading, writing and mathematics." }
      ],
      scaled: [
        { name: "Reading", school: [102.7,106.0,105.9], camden: [107.1,107.6,108.0], national: [105,106,106] },
        { name: "Mathematics", school: [99.6,101.8,105.2], camden: [106.5,107.0,107.5], national: [104,105,105] },
        { name: "Grammar, punctuation & spelling", school: [101.6,104.2,105.7], camden: [107.6,107.8,108.2], national: [105,105,105] }
      ],
      commentary: "The expected-standard picture is encouraging, particularly in mathematics and the combined measure. Higher-standard outcomes are more mixed and remain an important next step. The group explorer below allows families to see how different cohorts contribute to the overall picture rather than relying on a single school average."
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
        commentary: "In 2026, 73% of pupils with SEND reached the expected standard in both reading and writing, 68% in mathematics and 64% across the combined measure. This group includes pupils with a wide range of needs and starting points."
      },
      afterY1: {
        label: "Joined after Year 1",
        short: "Joined after Y1",
        cohort: 18,
        profile: { reading: 83, writing: 78, maths: 78, combined: 78 },
        combinedTrend: [32,32,78],
        cohortTrend: [22,25,18],
        headline: "Strong outcomes for pupils who joined later",
        commentary: "The Camden analysis defines this group as pupils who were on roll after September of Year 1. In 2026, this group achieved 78% combined and 83% in reading — a strong outcome for pupils who did not experience their entire primary journey at KCA."
      },
      finalTwoYears: {
        label: "Joined in the final two years*",
        short: "Final 2 years*",
        cohort: 3,
        profile: { reading: 100, writing: 100, maths: 100, combined: 100 },
        combinedTrend: [0,20,100],
        cohortTrend: [2,10,3],
        headline: "A very small cohort — interpret with care",
        commentary: "Camden labels this category '2 year mobility'. The 2026 group contains only three pupils, so percentages move dramatically with each child and should not be treated as a school-wide trend."
      }
    },
    mobilityNote: "*Working label. Camden's report calls this category '2 year mobility'. Confirm the precise local definition before the public version is published."
  }
};
