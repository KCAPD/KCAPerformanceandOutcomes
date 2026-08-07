window.KCA_DATA = {
  updated: "August 2026",
  years: ["2024", "2025", "2026"],
  highlights: [
    { value: "77%", label: "Good Level of Development", meta: "EYFS · 2026", note: "up from 70% in 2024" },
    { value: "80%", label: "Reading at expected standard", meta: "KS2 · 2026", note: "national 75%" },
    { value: "78%", label: "Mathematics at expected standard", meta: "KS2 · 2026", note: "national 75%" },
    { value: "73%", label: "Reading, writing & maths combined", meta: "KS2 · 2026", note: "national 63%" }
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
          note: "2026 national figure not yet available in the current summary."
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
      story: "The average score remains above 21, with a substantial proportion of pupils achieving full marks. Camden's 2026 outcomes are higher, so our focus is on strengthening automatic recall while retaining a broad mathematics curriculum.",
      measures: [
        {
          name: "Pupils achieving full marks",
          unit: "%",
          school: [38, 44, 38],
          camden: [35, 44, 52],
          national: [34, 37, null],
          note: "Current statutory summary figure; provisional 2026 data will be refreshed when final data is confirmed."
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
      commentary: "The distribution matters as well as the mean. The 2026 Camden analysis shows that the school has pupils achieving at the very top of the scale while also identifying a tail of pupils who need further fluency support."
    },
    ks2: {
      kicker: "05 · Key Stage 2",
      title: "Strong expected-standard outcomes in 2026.",
      intro: "At the end of Year 6, pupils are assessed in reading and mathematics through national tests and in writing through teacher assessment. The combined measure records pupils who meet the expected standard in reading, writing and mathematics.",
      story: "The strongest 2026 KS2 story is the improvement at expected standard: 80% in reading, 78% in writing, 78% in mathematics and 73% combined. The current national figures are 75%, 73%, 75% and 63% respectively.",
      provisionalExtra: "KS2 is particularly provisional: current outcomes may change following confirmed disapplications and final cohort validation.",
      measures: [
        { name: "Reading · expected standard", unit: "%", school: [61,78,80], camden: [82,83,null], national: [74,75,75], note: "2026 Camden figure is awaiting final confirmation in the current summary." },
        { name: "Writing · expected standard", unit: "%", school: [65,76,78], camden: [79,78,null], national: [72,72,73], note: "Writing is teacher assessed." },
        { name: "Mathematics · expected standard", unit: "%", school: [56,56,78], camden: [82,81,null], national: [73,74,75], note: "A notable improvement in the school's three-year trend." },
        { name: "Reading, writing & maths · combined", unit: "%", school: [44,52,73], camden: [72,73,null], national: [61,62,63], note: "The key combined KS2 measure." },
        { name: "Reading · higher standard", unit: "%", school: [15,39,30], camden: [36,41,null], national: [28,33,null], note: "Higher standard = scaled score of 110+ in reading." },
        { name: "Writing · greater depth", unit: "%", school: [6,11,3], camden: [20,20,null], national: [13,13,null], note: "Greater depth is based on teacher assessment." },
        { name: "Mathematics · higher standard", unit: "%", school: [14,19,23], camden: [33,37,null], national: [24,26,null], note: "Higher standard = scaled score of 110+ in mathematics." },
        { name: "Combined · higher standard", unit: "%", school: [2,7,3], camden: [13,15,null], national: [8,8,null], note: "Requires higher-standard outcomes across reading, writing and mathematics." }
      ],
      scaled: [
        { name: "Reading", school: [102.7,106,106], camden: [107,107,null], national: [105,106,null] },
        { name: "Mathematics", school: [99.6,102,106], camden: [106,106,null], national: [104,105,null] },
        { name: "Grammar, punctuation & spelling", school: [101.6,104,105], camden: [107,107,null], national: [105,105,null] }
      ],
      commentary: "The expected-standard picture is encouraging, particularly in mathematics and the combined measure. Higher-standard outcomes are more mixed and remain an important next step. Progress scores are also available provisionally for 2026, but are not shown as a headline here because the methodology and cohort remain subject to final validation."
    }
  }
};
