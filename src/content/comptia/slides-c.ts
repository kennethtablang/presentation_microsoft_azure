import type { Slide } from "@/lib/types";

/** Module 5 (Summarizing and Visualizing), Module 6 (Integrity, Ethics, Sharing) and the close. */
export const slidesC: Slide[] = [
  // ─────────────── Module 5.0 ───────────────
  {
    id: "m5-section",
    section: "5.0 Summarizing and Visualizing Data",
    variant: "section",
    kicker: "Module 5.0",
    title: "Summarizing and Visualizing Data",
    subtitle: "Pivot tables · pivot charts · slicers · choosing charts · dashboards",
    icon: "chart",
    notes: {
      time: "Session 4 · 0:00",
      script: [`Last session! We have clean data and solid calculations. Now we turn them into something a busy person can understand in ten seconds. That's what summarizing and visualizing is for.`],
    },
  },
  {
    id: "m5-pivot",
    section: "5.0 Summarizing and Visualizing Data",
    kicker: "Building pivot tables",
    title: "A pivot table answers questions by drag and drop",
    blocks: [
      {
        type: "cards",
        cols: 4,
        items: [
          { icon: "list", title: "Rows", text: "What to group by down the side: Branch", tone: "blue" },
          { icon: "layers", title: "Columns", text: "What to group by across the top: Month", tone: "violet" },
          { icon: "cpu", title: "Values", text: "What to calculate: Sum of Total", tone: "teal" },
          { icon: "filter", title: "Filters", text: "What to include: Category = Coffee", tone: "amber" },
        ],
      },
      {
        type: "sheet",
        title: "PivotTable · Sum of Total",
        head: ["Branch", "Jan", "Feb", "Mar", "Grand total"],
        rows: [
          ["Alaminos", "82,400", "79,100", "71,950", "233,450"],
          ["Dagupan", "95,300", "97,800", "99,200", "292,300"],
          ["Lingayen", "61,200", "63,450", "66,900", "191,550"],
          ["Grand total", "238,900", "240,350", "238,050", "717,300"],
        ],
        mark: { "0:3": "bad", "3:4": "focus" },
      },
    ],
    notes: {
      script: [
        `Remember the SUMIFS table we built by hand? A pivot table does the same thing in about four clicks, and you can rearrange it instantly.`,
        `Four boxes. Rows: what goes down the side. Columns: what goes across the top. Values: what to calculate, like sum of total. And Filters: what to include.`,
        `[If you have a laptop connected, build this live from the Sales table: Insert, PivotTable, drag Branch to Rows, Month to Columns, Total to Values.]`,
        `Two tips. The source must be a tidy table, which is why we did all that work in Module 2. And when the data changes, click Refresh. Pivot tables don't update by themselves.`,
      ],
    },
  },
  {
    id: "m5-drill",
    section: "5.0 Summarizing and Visualizing Data",
    kicker: "Pivot tables · drill-down",
    title: "Go deeper without new formulas",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Drill down", sub: "Double-click 71,950 to see every Alaminos order in March", icon: "search" },
          { label: "Show values as", sub: "% of grand total, % of row, difference from previous month", icon: "gauge" },
          { label: "Group", sub: "Group dates by month or quarter; products into categories", icon: "layers" },
          { label: "Sort & filter", sub: "Top 5 products; only weekends; only online orders", icon: "filter" },
        ],
      },
      {
        type: "callout",
        tone: "ask",
        text: "Ate Rose asks: “Is Alaminos dropping in every product, or just one?” What do you change in the pivot?",
        answer: "Filter Branch = Alaminos and put Product in Rows (Month stays in Columns).",
      },
    ],
    notes: {
      script: [
        `The real power of a pivot table is how fast you can follow your curiosity. Double-click any number and Excel shows you every row behind it. That's drill-down.`,
        `You can also show values as a percentage of the total, or as the change from the previous month, without writing a single formula.`,
        `So Ate Rose asks: is Alaminos dropping in every product, or just one? How would you rearrange the pivot?`,
        `[Press → to reveal.]`,
      ],
    },
  },
  {
    id: "m5-slicers",
    section: "5.0 Summarizing and Visualizing Data",
    kicker: "Pivot charts and slicers",
    title: "Make it interactive",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "chart", title: "Pivot chart", text: "A chart linked to a pivot table; it changes when the pivot changes.", tone: "blue" },
          { icon: "filter", title: "Slicer", text: "Big clickable filter buttons: Branch, Product, Category.", tone: "violet" },
          { icon: "timer", title: "Timeline", text: "A slicer for dates: drag to pick months or quarters.", tone: "teal" },
        ],
      },
      {
        type: "flow",
        steps: [
          { label: "Click “Dagupan”", icon: "hand" },
          { label: "Slicer filters", icon: "filter" },
          { label: "Pivot + chart update together", icon: "chart" },
        ],
      },
      { type: "callout", tone: "tip", text: "Connect one slicer to several pivots (Report Connections) so the whole page filters at once." },
    ],
    notes: {
      script: [
        `Pivot charts are charts connected to a pivot table. Slicers are big, friendly filter buttons. And a timeline is a slicer for dates.`,
        `The magic is when they work together. Ate Rose clicks 'Dagupan' on the slicer, and the pivot table and the chart both update instantly. No formulas, no new sheets. That's what makes a report feel like an app.`,
      ],
    },
  },
  {
    id: "m5-choose",
    section: "5.0 Summarizing and Visualizing Data",
    kicker: "Creating and customizing charts",
    title: "Pick the chart that matches the question",
    blocks: [
      {
        type: "minicharts",
        items: [
          { kind: "bar", title: "Bar / column", text: "Compare categories: revenue by branch", ok: true },
          { kind: "line", title: "Line", text: "Trend over time: weekly sales", ok: true },
          { kind: "pie", title: "Pie (use sparingly)", text: "Part of a whole, 2–4 slices only", ok: true },
          { kind: "scatter", title: "Scatter", text: "Relationship: temperature vs iced drinks sold", ok: true },
          { kind: "histogram", title: "Histogram", text: "Distribution: how order sizes spread out", ok: true },
          { kind: "column3d", title: "3D effects", text: "Distort sizes and hide values: avoid", ok: false },
        ],
      },
    ],
    notes: {
      script: [
        `Choosing a chart is about the question, not about what looks cool. Comparing categories, like branches? Bar chart. Change over time? Line chart. Part of a whole? A pie, but only with a few slices. Relationship between two numbers? Scatter. How values are spread out? Histogram.`,
        `And please, no 3D charts. The tilt makes slices in front look bigger than slices in the back. It literally changes what people see.`,
      ],
      ask: [{ q: "Ate Rose wants to see if hot days sell more iced drinks. Which chart?", a: "Scatter: temperature on one axis, iced drinks sold on the other." }],
    },
  },
  {
    id: "m5-design",
    section: "5.0 Summarizing and Visualizing Data",
    kicker: "Chart design",
    title: "Make the point obvious",
    blocks: [
      {
        type: "compare",
        left: {
          title: "Do",
          icon: "check",
          items: ["Title that states the insight: “Alaminos sales fell 13% in Q1”", "Label axes and units (₱, %)", "Start bar charts at zero", "Highlight the one bar that matters; grey the rest", "Sort bars from largest to smallest"],
        },
        right: {
          title: "Avoid",
          icon: "alert",
          items: ["3D, shadows, heavy gridlines", "Rainbow colors with no meaning", "A cut-off axis that exaggerates differences", "Too many series in one chart", "A legend when direct labels would do"],
        },
      },
    ],
    notes: {
      script: [
        `A good chart makes the point obvious in a few seconds. Start with the title: instead of 'Sales by Branch', write the finding: 'Alaminos sales fell 13% in Q1'. Now nobody has to guess what to look at.`,
        `Start bar charts at zero; cutting off the axis makes small differences look huge. Use color on purpose: highlight the one bar that matters and make the rest grey.`,
      ],
    },
  },
  {
    id: "m5-dash",
    section: "5.0 Summarizing and Visualizing Data",
    kicker: "Assembling interactive dashboards",
    title: "A dashboard is a story on one page",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "KPI cards on top", sub: "Q1 revenue ₱717K · orders · average ticket · vs target", icon: "gauge" },
          { label: "Trend in the middle", sub: "Weekly revenue line, one line per branch", icon: "activity" },
          { label: "Breakdown below", sub: "Top products bar chart; share by category", icon: "chart" },
          { label: "Slicers on the side", sub: "Branch, month, product category", icon: "filter" },
        ],
      },
      {
        type: "cards",
        cols: 3,
        items: [
          { title: "Audience first", text: "What does Ate Rose need to decide on Monday?", tone: "blue" },
          { title: "Less is more", text: "5–7 visuals, consistent colors, no decoration", tone: "violet" },
          { title: "One page", text: "If it needs scrolling, it's a report, not a dashboard", tone: "teal" },
        ],
      },
    ],
    notes: {
      script: [
        `A dashboard puts it all together on one page. The layout most good dashboards follow: the headline numbers, the KPIs, at the top. The trend in the middle. The breakdown below. And slicers on the side so people can explore.`,
        `Three rules. Audience first: what decision does this person need to make? Less is more: five to seven visuals, not twenty. And keep it to one page.`,
      ],
      ask: [{ q: "Sketch Bayan Coffee's dashboard on paper in 3 minutes. What's in your top row?", a: "Usually KPIs: total revenue, orders, average order value, change vs last month." }],
    },
  },
  {
    id: "m5-check",
    section: "5.0 Summarizing and Visualizing Data",
    kicker: "Module 5.0 check",
    title: "Quick check: summarizing and visualizing",
    blocks: [{ type: "quiz", start: 1, questions: [] }],
    notes: { script: [`Three questions on pivots and charts.`, `[30–45 seconds each, then press → to reveal.]`] },
  },

  // ─────────────── Module 6.0 ───────────────
  {
    id: "m6-section",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    variant: "section",
    kicker: "Module 6.0",
    title: "Data Integrity, Ethics and Sharing Results",
    subtitle: "Validation rules · error checks · privacy · ethics · documentation · archiving & sharing",
    icon: "shield",
    notes: {
      script: [`The last module is about trust. A beautiful dashboard is worthless if the numbers are wrong, or if it exposes someone's private information. Let's make our work trustworthy and reusable.`],
    },
  },
  {
    id: "m6-validation",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    kicker: "Validating data accuracy",
    title: "Stop bad data at the door",
    blocks: [
      {
        type: "cards",
        cols: 4,
        items: [
          { icon: "list", title: "List", text: "Branch must be Alaminos, Dagupan, or Lingayen (dropdown)", tone: "blue" },
          { icon: "gauge", title: "Whole number", text: "Qty between 1 and 50", tone: "violet" },
          { icon: "timer", title: "Date range", text: "Order date within the current quarter", tone: "teal" },
          { icon: "pen", title: "Custom rule", text: "OrderID must be unique: =COUNTIF(A:A, A2)=1", tone: "amber" },
        ],
      },
      { type: "callout", tone: "tip", text: "Data → Data validation. Add an input message and an error alert, then use “Circle invalid data” to find old mistakes." },
    ],
    notes: {
      script: [
        `Remember 'alaminos ' with a space at the end? The best way to clean data is to stop it from getting dirty in the first place. That's data validation.`,
        `A dropdown list so people pick the branch instead of typing it. A whole-number rule so nobody types 300 cups by accident. A date range. Even a custom rule, like 'order ID must be unique'.`,
        `And there's a handy button, Circle Invalid Data, that draws red circles around existing entries that break the rules.`,
      ],
    },
  },
  {
    id: "m6-checks",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    kicker: "Error checks",
    title: "Check your work before anyone else does",
    blocks: [
      {
        type: "bullets",
        numbered: true,
        items: [
          { text: "Reconcile totals", sub: ["Does your Q1 revenue match the POS system's own Q1 report?"] },
          { text: "Count rows before and after", sub: ["Removed 37 duplicates? The numbers should add up exactly"] },
          { text: "Check MIN and MAX", sub: ["Negative quantities or ₱0 prices signal problems"] },
          { text: "Spot-check a sample", sub: ["Trace 5 random rows back to the source"] },
          { text: "Cross-check two methods", sub: ["The pivot total should equal SUM(Sales[Total])"] },
        ],
      },
    ],
    notes: {
      script: [
        `Before you send anything, run these five checks. They take ten minutes and they'll save you from the most embarrassing moment in data work: your boss finding the mistake first.`,
        `Does your total match the source system's total? Do your row counts add up? Any impossible values, like negative quantities? Pick five random rows and trace them back to the source. And calculate the same number two ways: if the pivot and the SUM disagree, something is off.`,
      ],
    },
  },
  {
    id: "m6-privacy",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    kicker: "Privacy safeguards",
    title: "Protect the people behind the data",
    blocks: [
      {
        type: "cards",
        cols: 4,
        items: [
          { icon: "filter", title: "Minimize", text: "Collect and share only the fields you need", tone: "blue" },
          { icon: "scan", title: "Anonymize", text: "Remove names, mask phone numbers, use IDs", tone: "violet" },
          { icon: "layers", title: "Aggregate", text: "Share totals per branch, not per customer", tone: "teal" },
          { icon: "key", title: "Restrict access", text: "Share with specific people; avoid “anyone with the link”", tone: "amber" },
        ],
      },
      {
        type: "table",
        revealCol: 1,
        compact: true,
        head: ["Can we share this with the whole company?", "Answer"],
        rows: [
          ["Revenue per branch per month", "Yes: aggregated, no personal data"],
          ["Loyalty customers with names and mobile numbers", "No: PII. Anonymize or restrict"],
          ["Average order value by age group", "Usually yes, if groups are large enough"],
        ],
      },
      { type: "callout", tone: "warn", text: "In the Philippines, the Data Privacy Act of 2012 (RA 10173) applies to personal data you collect, store, and share." },
    ],
    notes: {
      script: [
        `Bayan Coffee has a loyalty program, so the data includes names and mobile numbers. That's personal information, PII.`,
        `Four safeguards. Minimize: only include the fields you need. Anonymize: remove names, mask numbers. Aggregate: share totals, not individual rows. And restrict access: share with specific people, never 'anyone with the link'.`,
        `Let's practice. For each of these, can we share it with the whole company?`,
        `[Go row by row; press → to reveal.]`,
        `And remember, here in the Philippines this isn't just good manners; it's the law, under the Data Privacy Act.`,
      ],
    },
  },
  {
    id: "m6-ethics",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    kicker: "Ethical safeguards",
    title: "Honest analysis",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "eye", title: "No cherry-picking", text: "Show the months that don't support your story too.", tone: "pink" },
          { icon: "chart", title: "Honest visuals", text: "No cut-off axes or 3D tricks that exaggerate.", tone: "blue" },
          { icon: "alert", title: "State limitations", text: "“37 orders had missing quantities and were excluded.”", tone: "amber" },
          { icon: "users", title: "Watch for bias", text: "Survey only regulars? You'll miss why others don't come back.", tone: "violet" },
          { icon: "link", title: "Correlation ≠ causation", text: "Iced drinks and sunburn rise together; one doesn't cause the other.", tone: "teal" },
          { icon: "scale", title: "Consider who is affected", text: "Will this analysis be used to judge staff? Be careful and fair.", tone: "green" },
        ],
      },
    ],
    notes: {
      script: [
        `Ethics in data isn't only about privacy. It's about honesty.`,
        `Don't cherry-pick the months that make you look good. Don't use chart tricks. Say clearly what you left out and why. Watch out for bias in who's in your data. And remember: just because two things move together doesn't mean one causes the other.`,
        `Finally, think about who's affected. If this report will be used to decide which branch staff get cut, you owe them extra care that the numbers are right and fair.`,
      ],
      ask: [{ q: "Alaminos sales fell. Can we conclude the new barista caused it?", a: "No: correlation isn't causation. Check other factors: road works, a new competitor, seasonality." }],
    },
  },
  {
    id: "m6-docs",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    kicker: "Documenting analysis steps",
    title: "Leave a trail someone else can follow",
    blocks: [
      {
        type: "columns",
        ratio: "1.3fr 1fr",
        cols: [
          [
            {
              type: "sheet",
              title: "Data dictionary",
              head: ["Field", "Type", "Meaning", "Source"],
              rows: [
                ["OrderID", "Text", "Unique order number per branch", "POS export"],
                ["Qty", "Whole number", "Cups sold in the line (1–50)", "POS export"],
                ["Total", "Currency", "Qty × Unit price, before VAT", "Calculated"],
                ["Branch", "Text (list)", "Alaminos / Dagupan / Lingayen", "Cleaned"],
              ],
            },
          ],
          [
            {
              type: "bullets",
              title: "Also document",
              items: ["Change log: what you cleaned and why", "Assumptions: “blank qty excluded”", "Formulas and named ranges used", "Date of data extract"],
            },
          ],
        ],
      },
    ],
    notes: {
      script: [
        `Six months from now, someone, maybe you, will open this workbook and ask 'where did this number come from?' Documentation answers that.`,
        `A data dictionary lists every field: its type, what it means, where it came from. A change log lists every cleaning step. And write down your assumptions, like 'orders with blank quantities were excluded'. A simple 'README' sheet at the front of the workbook does the job.`,
      ],
    },
  },
  {
    id: "m6-share",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    kicker: "Archiving and sharing",
    title: "Package it so it can be reused",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Version", sub: "Clear names: 2026-04-03_bayan_q1_sales_v2.xlsx", icon: "pen" },
          { label: "Archive", sub: "Keep raw data + final workbook in a dated folder", icon: "folders" },
          { label: "Package", sub: "Workbook + README + key chart + 3-sentence summary", icon: "boxes" },
          { label: "Share safely", sub: "Right people, right permissions, no PII", icon: "lock" },
        ],
      },
      { type: "callout", tone: "tip", text: "Reproducible means another person can take your raw file and your notes and get exactly the same numbers." },
    ],
    notes: {
      script: [
        `Last step: sharing. Name files so they sort by date and show the version. Archive the raw data and the final workbook together. Package the results: the workbook, a README, the key chart, and a short summary in plain language.`,
        `The goal is reproducibility: someone else can take your raw file and your notes and get exactly the same answer. That's the difference between a one-off spreadsheet and professional work.`,
      ],
    },
  },
  {
    id: "m6-check",
    section: "6.0 Data Integrity, Ethics and Sharing Results",
    kicker: "Module 6.0 check",
    title: "Quick check: integrity, ethics and sharing",
    blocks: [{ type: "quiz", start: 1, questions: [] }],
    notes: { script: [`Last module check. Three questions.`, `[30–45 seconds each, then press → to reveal.]`] },
  },

  // ─────────────── Close ───────────────
  {
    id: "synthesis",
    section: "Review & close",
    kicker: "Putting it all together",
    title: "Bayan Coffee, start to finish",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Ask", sub: "Which branch dropped most, Jan → Mar?", icon: "target" },
          { label: "Import", sub: "3 monthly CSVs as tables, correct types", icon: "database" },
          { label: "Clean & combine", sub: "Dedupe, TRIM/PROPER, append months, XLOOKUP prices", icon: "filter" },
          { label: "Analyze", sub: "SUMIFS by branch & month; % change", icon: "cpu" },
          { label: "Visualize", sub: "Pivot + line chart: “Alaminos fell 12.7%”", icon: "chart" },
          { label: "Share", sub: "Validated, documented, no customer PII", icon: "shield" },
        ],
      },
      { type: "callout", tone: "say", text: "Answer for Ate Rose: Alaminos revenue fell 12.7% from January to March while Dagupan grew 4.1%. Next question: why?" },
    ],
    notes: {
      script: [
        `Let's look back at the whole journey with Bayan Coffee. We started with a vague 'sales feel slow'. We turned it into a precise question. We imported three monthly files, cleaned them, stacked them, and looked up prices. We calculated revenue by branch and month and the percent change. We showed it in one clear chart. And we made sure it was checked, documented, and safe to share.`,
        `And here's the answer: Alaminos fell 12.7% while Dagupan grew 4.1%. Notice the answer leads to the next question: why? That's how real analysis works: good answers create better questions.`,
      ],
      deeper: ["Dagupan Jan → Mar: (99,200 − 95,300) ÷ 95,300 = +4.1%."],
    },
  },
  {
    id: "discussion",
    section: "Review & close",
    kicker: "Discussion questions",
    title: "Think, pair, share",
    blocks: [
      {
        type: "bullets",
        numbered: true,
        items: [
          "Your manager says “just make the numbers look good.” How do you respond while keeping your analysis honest?",
          "When is it acceptable to fill in a missing value, and when must you leave it blank?",
          "Why do most #N/A lookup errors turn out to be cleaning problems?",
          "You can report the mean or the median salary. Which do you choose for a company with a few very high earners, and why?",
          "What belongs on a one-page dashboard for your school, barangay, or workplace?",
          "A colleague shares a sheet of customer names and numbers with “anyone with the link.” What do you do?",
        ],
      },
    ],
    notes: {
      script: [`Pick two of these with the person next to you. Three minutes to discuss, then we'll hear from a few pairs.`],
      ask: [
        { q: "Mean or median salary?", a: "Median: a few very high earners pull the mean up so it no longer represents a typical employee." },
        { q: "Shared with 'anyone with the link'?", a: "Restrict access immediately, remove or anonymize PII, and inform the data owner. Privacy law applies." },
      ],
    },
  },
  {
    id: "final-1",
    section: "Review & close",
    kicker: "Final review · situational items",
    title: "What would you do?",
    blocks: [{ type: "quiz", start: 1, questions: [] }],
    notes: { script: [`These are situational questions, just like the hands-on assessment: real workplace scenarios. Choose the best action, not just a correct fact.`, `[45 seconds each, then press → to reveal.]`] },
  },
  {
    id: "final-2",
    section: "Review & close",
    kicker: "Final review · situational items",
    title: "What would you do? (continued)",
    blocks: [{ type: "quiz", start: 4, questions: [] }],
    notes: { script: [`Three more scenarios.`, `[45 seconds each, then press → to reveal.]`] },
  },
];
