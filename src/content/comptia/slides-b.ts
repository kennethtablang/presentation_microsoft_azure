import type { Slide } from "@/lib/types";

/** Module 3 (Cleaning and Combining Data) and Module 4 (Core Analyses and Calculations). */
export const slidesB: Slide[] = [
  // ─────────────── Module 3.0 ───────────────
  {
    id: "m3-section",
    section: "3.0 Cleaning and Combining Data",
    variant: "section",
    kicker: "Module 3.0",
    title: "Cleaning and Combining Data",
    subtitle: "Duplicates · missing values · consistent text · split & merge · lookups · append",
    icon: "filter",
    notes: {
      time: "Session 2 · 0:00",
      script: [
        `Welcome back! Last time we set up the project and got the data in. Quick recap: what's the very first step of any analysis?`,
        `[Expect: define the question.]`,
        `Exactly. Today is the part that takes the most time in real life: cleaning the data, and then combining tables. Remember Bayan Coffee's messy rows? Today we fix them.`,
      ],
    },
  },
  {
    id: "m3-dirty",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Why clean?",
    title: "Garbage in, garbage out",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "layers", title: "Duplicates", text: "The same order counted twice inflates revenue.", tone: "pink" },
          { icon: "question", title: "Missing values", text: "Blank quantities make totals and averages wrong.", tone: "amber" },
          { icon: "text", title: "Inconsistent text", text: "“Alaminos”, “alaminos ”, “ALAMINOS” become three branches.", tone: "violet" },
          { icon: "scan", title: "Wrong data types", text: "Numbers stored as text are skipped by SUM.", tone: "blue" },
          { icon: "alert", title: "Outliers & typos", text: "A quantity of 300 instead of 3 skews everything.", tone: "teal" },
          { icon: "filter", title: "Mixed formats", text: "Dates and phone numbers written five different ways.", tone: "green" },
        ],
      },
    ],
    notes: {
      script: [
        `Why do we clean? Because a chart built on dirty data looks just as confident as one built on clean data. It's just wrong.`,
        `Here are the usual suspects. Duplicates that double-count. Blanks. The same branch spelled three ways, so a pivot table shows three Alaminos branches. Numbers stored as text. And typos, like someone typing 300 cups instead of 3.`,
      ],
      ask: [{ q: "If 'Alaminos' appears three different ways, what will a pivot table by branch show?", a: "Three separate rows for what is really one branch, splitting its total." }],
    },
  },
  {
    id: "m3-dupes",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Removing duplicate rows",
    title: "Find and remove duplicates",
    blocks: [
      {
        type: "columns",
        ratio: "1.2fr 1fr",
        cols: [
          [
            {
              type: "sheet",
              formula: "=COUNTIF($A$2:A2, A2)",
              head: ["OrderID", "Branch", "Product", "Qty", "Seen"],
              rows: [
                ["1003", "Lingayen", "Americano", "3", "1"],
                ["1004", "Alaminos", "Iced Latte", "1", "1"],
                ["1004", "Alaminos", "Iced Latte", "1", "2"],
                ["1005", "Dagupan", "Ube Frappe", "2", "1"],
              ],
              mark: { "2:0": "bad", "2:4": "bad" },
              caption: "“Seen” > 1 flags a repeat before you delete anything",
            },
          ],
          [
            {
              type: "flow",
              variant: "steps",
              steps: [
                { label: "Decide the key", sub: "What makes a row unique? Here: OrderID + Product" },
                { label: "Flag first", sub: "COUNTIF or conditional formatting → Duplicate values" },
                { label: "Remove", sub: "Data → Remove Duplicates (on a copy!)" },
                { label: "Re-count", sub: "Compare row counts before and after" },
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      script: [
        `Let's start with duplicates. The big question isn't how to delete them; it's what counts as a duplicate. Two orders for an Iced Latte at Alaminos on the same day might be two different customers!`,
        `So step one: decide the key, the columns that make a row unique. For Bayan Coffee, the order ID plus the product.`,
        `Step two: flag before you delete. This COUNTIF trick counts how many times each order ID has appeared so far. Anything above 1 is a repeat.`,
        `Then use Remove Duplicates, on a copy, and always compare the row count before and after so you know exactly how many you removed.`,
      ],
    },
  },
  {
    id: "m3-missing",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Handling blank or missing values",
    title: "Blank is not zero",
    blocks: [
      {
        type: "table",
        compact: true,
        head: ["Strategy", "When to use it", "Bayan Coffee example"],
        emphasisCol: 0,
        rows: [
          ["Go back to the source", "The value exists somewhere", "Check the paper receipt for order 1005"],
          ["Leave blank and flag", "It's genuinely unknown", "Add a column: QtyMissing = TRUE"],
          ["Fill with a rule", "There's a safe, documented default", "Missing branch → use the cashier's assigned branch"],
          ["Exclude the row", "Few rows, and the field is essential", "Drop it from the revenue total, and note it"],
        ],
      },
      { type: "code", label: "Find and flag blanks", code: `=COUNTBLANK(E2:E500)             ← how many quantities are missing?
=IF(ISBLANK(E2), "Missing", "OK")` },
      { type: "callout", tone: "warn", text: "Never auto-fill blank sales with 0. Zero means “sold nothing”; blank means “we don't know”." },
    ],
    notes: {
      script: [
        `Missing values. Order 1005 has no quantity. What should we do?`,
        `[Let a few students answer. Someone usually says 'put zero'.]`,
        `Here's the most important sentence of this slide: blank is not zero. Zero means we sold nothing. Blank means we don't know. If you fill blanks with zero, you just made the average lower than reality.`,
        `So you have four choices. Best is to go back to the source and find the real value. If it's truly unknown, leave it blank and add a flag column. Fill it only if there's a safe, documented rule. Or exclude the row, but write down that you did.`,
      ],
    },
  },
  {
    id: "m3-text",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Standardizing text fields",
    title: "Make the same thing look the same",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "sheet",
              formula: "=PROPER(TRIM(B2))",
              head: ["Raw branch", "Clean branch"],
              rows: [
                ["  alaminos", "Alaminos"],
                ["ALAMINOS ", "Alaminos"],
                ["Dagupan  city", "Dagupan City → Dagupan"],
                ["lingayen", "Lingayen"],
              ],
              mark: { "0:1": "good", "1:1": "good", "3:1": "good", "2:1": "focus" },
            },
          ],
          [
            {
              type: "table",
              compact: true,
              head: ["Tool", "What it does"],
              emphasisCol: 0,
              rows: [
                ["TRIM", "Removes extra spaces"],
                ["PROPER / UPPER / LOWER", "Fixes capitalization"],
                ["CLEAN", "Removes hidden non-printing characters"],
                ["SUBSTITUTE / Find & Replace", "Maps variants: “Dagupan City” → “Dagupan”"],
                ["Data validation list", "Stops new variants at the source"],
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      script: [
        `Text is the messiest. People type the same branch in a dozen ways: extra spaces, all caps, all lowercase, 'Dagupan City' instead of 'Dagupan'.`,
        `The everyday toolkit: TRIM removes extra spaces, including the invisible ones at the end. PROPER, UPPER, and LOWER fix capitalization. CLEAN removes hidden characters that sneak in from system exports. And SUBSTITUTE or Find and Replace map the variants to one standard name.`,
        `This formula, PROPER of TRIM, fixes three of our four rows in one go. And the best long-term fix? A dropdown list so people can't type it wrong in the first place. We'll see that in Module 6.`,
      ],
    },
  },
  {
    id: "m3-split",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Reshaping: splitting and merging",
    title: "Split one column into many, or merge many into one",
    blocks: [
      {
        type: "compare",
        left: { title: "Split", icon: "scan", items: ["“Dela Cruz, Juan” → Last | First", "Data → Text to Columns (by comma)", "=TEXTSPLIT(A2, \", \")  or LEFT / RIGHT / MID with FIND"] },
        right: { title: "Merge (concatenate)", icon: "link", items: ["Branch + “-” + OrderID → “ALA-1004”", "=CONCAT(B2, \"-\", A2)  or  =B2 & \"-\" & A2", "=TEXTJOIN(\", \", TRUE, C2:E2) skips blanks"] },
      },
      { type: "code", label: "Examples", code: `=LEFT(A2, FIND(",", A2) - 1)        → "Dela Cruz"
=UPPER(LEFT(B2, 3)) & "-" & A2       → "ALA-1004"` },
    ],
    notes: {
      script: [
        `Sometimes one column holds two things, like 'Dela Cruz, Juan', and you need them apart. That's splitting. The quickest way is Text to Columns, splitting at the comma. Newer versions also have TEXTSPLIT, and the classic way is LEFT, RIGHT, and MID with FIND.`,
        `Other times you need the opposite: combine columns into one, like a readable order code. That's merging, or concatenation. CONCAT, the ampersand, or TEXTJOIN, which can skip blanks for you.`,
      ],
      ask: [{ q: "Why might we create 'ALA-1004' instead of keeping OrderID alone?", a: "To make IDs unique across branches when each branch numbers its own orders." }],
    },
  },
  {
    id: "m3-calc",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Creating calculated fields",
    title: "Add columns, don't overwrite them",
    blocks: [
      {
        type: "sheet",
        formula: "=E2*F2",
        head: ["Date", "Branch", "Product", "", "Qty", "Unit price", "Total", "Month"],
        rows: [
          ["2026-01-03", "Alaminos", "Iced Latte", "", "2", "120", "240", "Jan"],
          ["2026-01-04", "Lingayen", "Americano", "", "3", "95", "285", "Jan"],
          ["2026-02-11", "Dagupan", "Ube Frappe", "", "2", "150", "300", "Feb"],
        ],
        mark: { "0:6": "focus", "1:6": "good", "2:6": "good", "0:7": "focus", "1:7": "good", "2:7": "good" },
        caption: "Total = Qty × Unit price · Month = TEXT(Date, \"mmm\")",
      },
      { type: "callout", tone: "tip", text: "Keep the raw columns and add calculated ones beside them. If a rule changes, you fix one formula instead of re-typing data." },
    ],
    notes: {
      script: [
        `Calculated fields are new columns built from existing ones. The most common: Total equals Qty times Unit price. Another useful one: Month, using the TEXT function, so we can group sales by month later.`,
        `The rule: add columns, don't overwrite. Keep the original data and put the calculation next to it. If you made a mistake, you fix one formula and it flows through every row.`,
      ],
    },
  },
  {
    id: "m3-lookup-why",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Combining datasets",
    title: "Related tables share a key",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "sheet",
              title: "Sales (many rows)",
              head: ["OrderID", "ProductID", "Qty"],
              rows: [
                ["1001", "P01", "2"],
                ["1002", "P03", "1"],
                ["1003", "P02", "3"],
              ],
              mark: { "0:1": "focus", "1:1": "focus", "2:1": "focus" },
            },
          ],
          [
            {
              type: "sheet",
              title: "Products (one row per product)",
              head: ["ProductID", "Product", "Category", "Price"],
              rows: [
                ["P01", "Iced Latte", "Coffee", "120"],
                ["P02", "Americano", "Coffee", "95"],
                ["P03", "Ube Frappe", "Frappe", "150"],
              ],
              mark: { "0:0": "focus", "1:0": "focus", "2:0": "focus" },
            },
          ],
        ],
      },
      { type: "callout", tone: "tip", text: "The lookup key (ProductID) must match exactly in both tables, and be unique in the lookup table." },
    ],
    notes: {
      script: [
        `Now combining. Real data is usually split across tables. The sales export only has a product ID. The product names, categories, and prices live in a separate price list.`,
        `What connects them? The key: ProductID. It appears in both tables. In the Products table, each ID appears once. In Sales, it repeats every time someone buys that product.`,
        `To bring Category into the sales table, we look up each ProductID in the Products table. That's exactly what VLOOKUP and XLOOKUP do.`,
      ],
    },
  },
  {
    id: "m3-vlookup",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Joining data with VLOOKUP",
    title: "VLOOKUP: the classic",
    blocks: [
      { type: "code", label: "Syntax", code: `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])

=VLOOKUP(B2, Products!$A$2:$D$50, 3, FALSE)   → "Coffee"` },
      {
        type: "table",
        compact: true,
        head: ["Argument", "Meaning"],
        emphasisCol: 0,
        rows: [
          ["lookup_value", "What you're looking for: the ProductID in this row"],
          ["table_array", "Where to look; the key must be the FIRST column. Lock it with $"],
          ["col_index_num", "Which column to bring back: 3 = Category"],
          ["range_lookup", "FALSE = exact match. Leave it out and it guesses (approximate)!"],
        ],
      },
      { type: "callout", tone: "warn", text: "Limits: it only looks to the right, and inserting a column silently breaks the column number." },
    ],
    notes: {
      script: [
        `VLOOKUP has been around forever, so you'll see it everywhere. Four parts. What am I looking for? Where do I look? Which column do I want back? And exact match or not.`,
        `Read this one out loud with me: look up B2, in the Products table, bring back column 3, exact match.`,
        `Two traps. First, always type FALSE at the end. If you leave it out, VLOOKUP does an approximate match and can quietly return the wrong product. Second, it can only look to the right, and if someone inserts a column in the Products table, your '3' now points to the wrong column.`,
      ],
    },
  },
  {
    id: "m3-xlookup",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Joining data with XLOOKUP",
    title: "XLOOKUP: the modern way",
    blocks: [
      { type: "code", label: "Syntax", code: `=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found])

=XLOOKUP(B2, Products[ProductID], Products[Category], "Not found")` },
      {
        type: "table",
        compact: true,
        head: ["", "VLOOKUP", "XLOOKUP"],
        emphasisCol: 0,
        rows: [
          ["Match type default", "Approximate (risky)", "Exact (safe)"],
          ["Direction", "Right only", "Any direction"],
          ["Inserting columns", "Breaks the column number", "Keeps working"],
          ["Not found", "#N/A", "Your own message"],
          ["Availability", "Every version", "Excel 365/2021+, Google Sheets"],
        ],
      },
    ],
    notes: {
      script: [
        `XLOOKUP fixes everything annoying about VLOOKUP. You tell it: look for this, in this column, and give me back that column. No counting columns, no first-column rule.`,
        `It does an exact match by default, it can look left or right, inserting columns doesn't break it, and you can choose what to show when there's no match instead of the ugly #N/A.`,
        `If your version has it, use XLOOKUP. But learn VLOOKUP too, because you'll find it in every old workbook at work.`,
      ],
    },
  },
  {
    id: "m3-na",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Troubleshooting lookups",
    title: "Why am I getting #N/A?",
    blocks: [
      {
        type: "table",
        revealCol: 2,
        head: ["Cause", "Example", "Fix"],
        emphasisCol: 0,
        rows: [
          ["Key really missing", "P07 isn't in the price list yet", "Add it, or show “Not found”"],
          ["Extra spaces", "“P01 ” vs “P01”", "TRIM both keys"],
          ["Number vs text", "1004 (number) vs “1004” (text)", "Convert one side: VALUE or TEXT"],
          ["Different case or format", "“user@mail.com” vs “USER@MAIL.COM”", "Standardize with LOWER first"],
          ["Approximate match", "Wrong row returned, no error", "Use FALSE / exact match"],
        ],
      },
    ],
    notes: {
      script: [
        `The number one question in every spreadsheet class: why am I getting #N/A? Let's diagnose. For each cause, what's the fix?`,
        `[Go row by row; ask before pressing → to reveal.]`,
        `Notice that most #N/A errors are actually cleaning problems. Extra spaces, numbers stored as text, different capitalization. That's why we clean before we combine.`,
      ],
    },
  },
  {
    id: "m3-append",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Appending or stacking tables",
    title: "Append: same columns, more rows",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "sheet",
              title: "January + February → Q1",
              head: ["Source", "OrderID", "Branch", "Total"],
              rows: [
                ["Jan", "1001", "Alaminos", "240"],
                ["Jan", "1002", "Dagupan", "135"],
                ["Feb", "2001", "Lingayen", "285"],
                ["Feb", "2002", "Alaminos", "300"],
              ],
              mark: { "0:0": "focus", "1:0": "focus", "2:0": "focus", "3:0": "focus" },
            },
          ],
          [
            {
              type: "bullets",
              title: "Before you stack",
              items: ["Same columns, same order, same names", "Same data types in each column", "Add a Source column so you know where each row came from", "Re-check for duplicates after stacking"],
            },
          ],
        ],
      },
      { type: "callout", tone: "tip", text: "Lookups add columns (join). Appending adds rows (stack). Know which one your question needs." },
    ],
    notes: {
      script: [
        `The last way to combine: appending, or stacking. Bayan Coffee exports one file per month. To analyze the quarter, we stack January, February, and March into one table.`,
        `It only works if the tables have the same columns in the same order with the same types. And always add a Source column, so you can tell which file each row came from.`,
        `Here's the summary to remember: lookups add columns, appending adds rows.`,
      ],
    },
  },
  {
    id: "m3-check",
    section: "3.0 Cleaning and Combining Data",
    kicker: "Module 3.0 check",
    title: "Quick check: cleaning and combining",
    blocks: [{ type: "quiz", start: 1, questions: [] }],
    notes: { script: [`Three questions on cleaning and lookups. These are classic exam traps, so read every option.`, `[30–45 seconds each, then press → to reveal.]`] },
  },

  // ─────────────── Module 4.0 ───────────────
  {
    id: "m4-section",
    section: "4.0 Core Analyses and Calculations",
    variant: "section",
    kicker: "Module 4.0",
    title: "Core Analyses and Calculations",
    subtitle: "Aggregates · conditional totals · percentages · descriptive statistics · IF logic · reliable formulas",
    icon: "cpu",
    notes: {
      time: "Session 3 · 0:00",
      script: [`Our data is clean and combined. Now the fun part: answering questions with it. Module 4 is all about calculations you'll use every single week.`],
    },
  },
  {
    id: "m4-aggregates",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Common aggregates",
    title: "Sum, average, count: and the counting trap",
    blocks: [
      {
        type: "table",
        compact: true,
        head: ["Function", "Returns", "Bayan Coffee example"],
        emphasisCol: 0,
        rows: [
          ["SUM", "Total of the numbers", "=SUM(Sales[Total]) → Q1 revenue"],
          ["AVERAGE", "Mean of the numbers", "=AVERAGE(Sales[Total]) → average order value"],
          ["COUNT", "How many cells contain numbers", "=COUNT(Sales[Qty])"],
          ["COUNTA", "How many cells are not empty", "=COUNTA(Sales[OrderID]) → number of orders"],
          ["COUNTBLANK", "How many cells are empty", "=COUNTBLANK(Sales[Qty]) → missing quantities"],
          ["MIN / MAX", "Smallest / largest value", "=MAX(Sales[Total]) → biggest single order"],
        ],
      },
      { type: "callout", tone: "warn", text: "COUNT ignores text. Counting order IDs stored as text with COUNT gives 0. Use COUNTA." },
    ],
    notes: {
      script: [
        `These are the workhorses. SUM, AVERAGE, COUNT, MIN, MAX. You probably know most of them.`,
        `But here's the trap that shows up in every assessment: COUNT versus COUNTA. COUNT only counts cells with numbers. COUNTA counts anything that isn't empty. So if your order IDs are text, COUNT says zero orders. Not a great report for Ate Rose!`,
      ],
      ask: [{ q: "You want to know how many survey responses have a name filled in. COUNT or COUNTA?", a: "COUNTA: names are text." }],
    },
  },
  {
    id: "m4-ifs",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Conditional aggregates",
    title: "Totals for just the rows you care about",
    blocks: [
      {
        type: "code",
        label: "SUMIFS · COUNTIFS · AVERAGEIFS",
        code: `=SUMIFS(Sales[Total], Sales[Branch], "Alaminos", Sales[Month], "Jan")
                         → Alaminos revenue in January

=COUNTIFS(Sales[Product], "Ube Frappe")          → number of Ube Frappe orders
=AVERAGEIFS(Sales[Total], Sales[Branch], "Dagupan") → Dagupan average order`,
      },
      {
        type: "sheet",
        title: "Revenue by branch and month",
        formula: "=SUMIFS(Sales[Total], Sales[Branch], $A2, Sales[Month], B$1)",
        head: ["Branch", "Jan", "Feb", "Mar"],
        rows: [
          ["Alaminos", "82,400", "79,100", "71,950"],
          ["Dagupan", "95,300", "97,800", "99,200"],
          ["Lingayen", "61,200", "63,450", "66,900"],
        ],
        mark: { "0:3": "bad", "1:3": "good" },
      },
    ],
    notes: {
      script: [
        `Most real questions aren't 'what's the total?' They're 'what's the total for Alaminos in January?' That's SUMIFS. The pattern: what to add up, then pairs of 'which column' and 'what value'.`,
        `COUNTIFS counts rows that match, and AVERAGEIFS averages them.`,
        `Look at this little table. One SUMIFS formula, copied across, built the whole thing. And look at Alaminos: sales dropping every month while Dagupan grows. That's our answer to Ate Rose's question starting to appear.`,
      ],
    },
  },
  {
    id: "m4-percent",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Percentages",
    title: "Percent of total and percent change",
    blocks: [
      {
        type: "cards",
        cols: 2,
        items: [
          { icon: "pie", title: "% of total", text: "part ÷ whole · Dagupan Q1 ÷ all branches = 292,300 ÷ 717,300 = 40.7%", tone: "blue" },
          { icon: "activity", title: "% change", text: "(new − old) ÷ old · Alaminos Jan → Mar = (71,950 − 82,400) ÷ 82,400 = −12.7%", tone: "pink" },
        ],
      },
      {
        type: "callout",
        tone: "ask",
        text: "A branch's share grows from 30% to 35%. Did it grow by 5% or by 5 percentage points?",
        answer: "5 percentage points, which is a 16.7% increase in share (5 ÷ 30).",
      },
      { type: "callout", tone: "tip", text: "Store percentages as decimals (0.407) and apply the % format. Never type “40.7%” as text." },
    ],
    notes: {
      script: [
        `Percentages are how we compare things of different sizes. Two you'll use constantly.`,
        `Percent of total: part divided by whole. Dagupan made 40.7% of all Q1 revenue.`,
        `Percent change: new minus old, divided by old. Alaminos dropped 12.7% from January to March. That's a number Ate Rose will care about.`,
        `Now a tricky one. If a share goes from 30% to 35%, did it grow by 5%?`,
        `[Press → to reveal.]`,
        `It grew by 5 percentage points, which is actually a 16.7% increase. News reports mix these up all the time.`,
      ],
    },
  },
  {
    id: "m4-stats",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Basic descriptive statistics",
    title: "When the average lies",
    blocks: [
      {
        type: "columns",
        ratio: "1fr 1fr",
        cols: [
          [
            {
              type: "bars",
              title: "Daily orders, one week at Lingayen",
              max: 400,
              items: [
                { label: "Mon", value: 52 },
                { label: "Tue", value: 48 },
                { label: "Wed", value: 55 },
                { label: "Thu", value: 50 },
                { label: "Fri (town fiesta)", value: 380, highlight: true, note: "Outlier" },
              ],
            },
          ],
          [
            {
              type: "table",
              compact: true,
              head: ["Statistic", "Value", "Function"],
              emphasisCol: 0,
              rows: [
                ["Mean", "117", "AVERAGE"],
                ["Median", "52", "MEDIAN"],
                ["Mode", "(no repeats)", "MODE"],
                ["Range", "48 → 380", "MAX − MIN"],
                ["Std deviation", "147", "STDEV.S"],
              ],
            },
            { type: "callout", tone: "tip", text: "One outlier pulls the mean far up. The median shows a typical day." },
          ],
        ],
      },
    ],
    notes: {
      script: [
        `Descriptive statistics describe your data in a few numbers. Mean is the average. Median is the middle value when sorted. Mode is the most common value. Range is from smallest to biggest. Standard deviation tells you how spread out the values are.`,
        `Now look at Lingayen's week. Normal days around 50 orders, then Friday was the town fiesta: 380 orders. The mean says 117 orders a day. Is that a typical day?`,
        `[Let them answer: no.]`,
        `The median says 52, which is much more honest. Rule of thumb: when there are outliers or the data is lopsided, like salaries, report the median.`,
      ],
    },
  },
  {
    id: "m4-logic",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Applying conditional logic",
    title: "IF, IFS, AND, OR",
    blocks: [
      {
        type: "code",
        label: "Decisions in formulas",
        code: `=IF(G2 >= 500, "Big order", "Regular")

=IFS(G2 >= 1000, "Platinum",
     G2 >= 500,  "Gold",
     TRUE,       "Standard")          ← TRUE = everything else

=IF(AND(C2 = "Alaminos", E2 >= 5), "Bulk – Alaminos", "")
=IF(OR(D2 = "Ube Frappe", D2 = "Matcha Frappe"), "Frappe", "Other")`,
      },
      {
        type: "callout",
        tone: "ask",
        text: "Flag orders that are from Dagupan AND over ₱300, OR any order on a Sunday. Which functions do you need?",
        answer: "IF with OR(AND(Branch=\"Dagupan\", Total>300), WEEKDAY(Date)=1)",
      },
    ],
    notes: {
      script: [
        `Sometimes you need the spreadsheet to make a decision. That's IF: if this is true, show this; otherwise show that. Over 500 pesos? 'Big order.' Otherwise, 'Regular.'`,
        `When you have more than two outcomes, use IFS instead of nesting IFs inside IFs. It checks each condition in order and stops at the first true one. The TRUE at the end means 'everything else'.`,
        `AND means all conditions must be true. OR means at least one. You'll usually see them inside an IF.`,
      ],
    },
  },
  {
    id: "m4-refs",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Absolute references and named ranges",
    title: "Formulas that survive copy and paste",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "sheet",
              formula: "=G2*$J$1",
              head: ["Product", "Total", "VAT (12%)"],
              rows: [
                ["Iced Latte", "240", "28.80"],
                ["Americano", "285", "34.20"],
                ["Ube Frappe", "300", "36.00"],
              ],
              mark: { "0:2": "good", "1:2": "good", "2:2": "good" },
              caption: "$J$1 holds 12%. The $ keeps it fixed when the formula is copied down",
            },
          ],
          [
            {
              type: "table",
              compact: true,
              head: ["Reference", "When copied…"],
              emphasisCol: 0,
              rows: [
                ["A1 (relative)", "Row and column both shift"],
                ["$A$1 (absolute)", "Never moves"],
                ["$A1 / A$1 (mixed)", "Column or row locked"],
              ],
            },
            { type: "code", label: "Named range", code: `=G2 * VAT_Rate        ← same as $J$1, but readable` },
          ],
        ],
      },
    ],
    notes: {
      script: [
        `This is where a lot of spreadsheets quietly break. You write a formula in row 2 that uses the VAT rate in J1. You copy it down. Row 3 now looks at J2, which is empty. Every VAT after the first row is zero.`,
        `The fix: dollar signs. $J$1 means 'always this cell, no matter where I copy the formula'. The shortcut is F4 while your cursor is on the reference.`,
        `Even better: give the cell a name, like VAT_Rate. Now the formula reads 'Total times VAT rate'. It's locked automatically, and anyone can understand it.`,
      ],
    },
  },
  {
    id: "m4-errors",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Building reliable formulas",
    title: "Read the error, don't hide it",
    blocks: [
      {
        type: "table",
        compact: true,
        head: ["Error", "It means", "Typical fix"],
        emphasisCol: 0,
        rows: [
          ["#DIV/0!", "Dividing by zero or a blank", "Check the denominator; IF(B2=0, \"\", A2/B2)"],
          ["#N/A", "A lookup found no match", "Clean the keys; use if_not_found"],
          ["#VALUE!", "Wrong type, e.g. text in math", "Convert text to numbers"],
          ["#REF!", "A referenced cell was deleted", "Rebuild the reference"],
          ["#NAME?", "Misspelled function or name", "Fix the spelling"],
        ],
      },
      { type: "callout", tone: "warn", text: "IFERROR(… , 0) makes errors disappear, and can hide real problems. Use it only when you know why the error happens." },
    ],
    notes: {
      script: [
        `Errors aren't your enemy; they're messages. #DIV/0! means you divided by zero, often because a cell is blank. #N/A is a lookup with no match. #VALUE! means text sneaked into a calculation. #REF! means you deleted a cell a formula needed. #NAME? is usually a typo.`,
        `A warning about IFERROR. It's tempting to wrap everything in IFERROR, zero, and make the errors vanish. But then a broken lookup quietly turns into zero pesos of sales, and nobody notices. Fix the cause first.`,
      ],
    },
  },
  {
    id: "m4-check",
    section: "4.0 Core Analyses and Calculations",
    kicker: "Module 4.0 check",
    title: "Quick check: analyses and calculations",
    blocks: [{ type: "quiz", start: 1, questions: [] }],
    notes: { script: [`Calculator out if you need it. Three questions.`, `[30–45 seconds each, then press → to reveal.]`] },
  },
];
