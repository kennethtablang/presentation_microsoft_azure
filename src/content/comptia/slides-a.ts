import type { Slide } from "@/lib/types";

/** Intro, Module 1 (Course Introduction) and Module 2 (Setting Up Your Data Project). */
export const slidesA: Slide[] = [
  {
    id: "title",
    section: "Welcome",
    variant: "title",
    kicker: "CompTIA · Data Analysis Essentials",
    title: "Data Analysis Essentials",
    subtitle: "Turn messy spreadsheets into clear answers, honest charts, and better decisions",
    icon: "chart",
    meta: ["6 modules", "Hands-on in Excel or Google Sheets", "CompTIA CompCert"],
    notes: {
      script: [
        `[How to use these notes: plain paragraphs are what you say; bracketed lines are cues for what to do, write, or expect. Use your own words wherever they come more naturally.]`,
        `Good morning, everyone! Today we start CompTIA Data Analysis Essentials. Quick show of hands: who here has ever opened a spreadsheet and thought, 'I have no idea what to do with this'?`,
        `[Wait for hands. Usually most of the room.]`,
        `Perfect, that's exactly who this course is for. By the end, you'll be able to take a messy file, clean it up, answer a real question with it, and show the answer in a way people actually understand.`,
      ],
      deeper: ["Suggested delivery: 4 sessions × 2 hours. Session 1: Intro + Module 2 · Session 2: Module 3 · Session 3: Module 4 · Session 4: Modules 5–6 + review."],
    },
  },
  {
    id: "about",
    section: "Welcome",
    kicker: "About the program",
    title: "A short, hands-on program, not a cram exam",
    blocks: [
      {
        type: "cards",
        cols: 4,
        items: [
          { icon: "timer", title: "6–8 hours", text: "Guided learning in CertMaster Learn: videos, readings, interactive exercises.", tone: "blue" },
          { icon: "wrench", title: "Hands-on projects", text: "AI-graded practice with real datasets, not just multiple choice.", tone: "teal" },
          { icon: "check", title: "30-min assessment", text: "A competency check where you actually do the tasks.", tone: "violet" },
          { icon: "cap", title: "CompTIA CompCert", text: "A competency certificate proving you can perform core analysis tasks.", tone: "amber" },
        ],
      },
      {
        type: "compare",
        left: { title: "Data Analysis Essentials", icon: "users", items: ["For people who use data in their job but aren't full-time analysts", "Tool-agnostic: Excel or Google Sheets", "Foundational, practical skills"] },
        right: { title: "CompTIA Data+", icon: "cap", items: ["A full job-role certification for data analysts", "Proctored, high-rigor exam", "A natural next step after this course"] },
      },
    ],
    notes: {
      script: [
        `So what exactly is this? It's a short learning program from CompTIA, about six to eight hours, delivered through CertMaster Learn. You watch, you read, and most importantly you practice on real data.`,
        `At the end there's a 30-minute assessment. And here's the nice part: it's hands-on. You won't just pick A, B, C, or D; you'll actually clean data, build a formula, make a chart. Pass it, and you earn a CompTIA CompCert, a competency certificate.`,
        `Some of you may have heard of CompTIA Data+. That's the big, proctored certification for full-time data analysts. Think of this course as the foundation. If you enjoy it, Data+ is a natural next step.`,
      ],
      ask: [{ q: "Who already uses spreadsheets at work or in school projects? For what?", a: "Use the answers to connect later examples to their real tasks." }],
    },
  },
  {
    id: "audience",
    section: "Welcome",
    kicker: "Who this is for",
    title: "Data skills for every job, not just analysts",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "megaphone", title: "Marketing", text: "Track campaigns, segment audiences, compare channels.", tone: "pink" },
          { icon: "users", title: "Human resources", text: "Hiring pipelines, retention trends, time-to-fill.", tone: "violet" },
          { icon: "activity", title: "Operations", text: "Throughput, bottlenecks, comparing sites and shifts.", tone: "teal" },
          { icon: "cap", title: "Education", text: "Student performance, program outcomes, resource planning.", tone: "blue" },
          { icon: "store", title: "Small business", text: "Sales by product and branch, inventory, pricing.", tone: "amber" },
          { icon: "building", title: "Government & health", text: "Service requests, patient flow, budget tracking.", tone: "green" },
        ],
      },
    ],
    notes: {
      script: [
        `Who uses these skills? Honestly, almost everyone now. Marketing teams track which campaign worked. HR looks at how long it takes to hire. Operations finds where things slow down. Teachers look at which students need help.`,
        `Notice none of these people have 'data analyst' as their job title. That's the point. This course is for people who work with data as part of their job.`,
        `Let me ask you: which of these is closest to the job you want?`,
        `[Take 3–4 answers. Promise to use examples from those fields.]`,
      ],
    },
  },
  {
    id: "outline",
    section: "Welcome",
    kicker: "Course outline · CertMaster Learn",
    title: "Six modules, one complete workflow",
    blocks: [
      {
        type: "columns",
        ratio: "0.62fr 1.38fr",
        cols: [
          [{ type: "image", src: "/comptia/course-outline.png", alt: "CertMaster Learn outline for CompTIA Data Analysis Essentials showing modules 1.0 to 6.0 and the glossary", width: 424, height: 719 }],
          [
            {
              type: "table",
              compact: true,
              head: ["Module", "What you'll be able to do"],
              emphasisCol: 0,
              rows: [
                ["1.0 Course Introduction", "Navigate the course and take the pre-assessment"],
                ["2.0 Setting Up Your Data Project", "Define the question; import and structure the data"],
                ["3.0 Cleaning and Combining Data", "Fix messy data; join tables with lookups; append"],
                ["4.0 Core Analyses and Calculations", "Aggregates, percentages, statistics, IF logic"],
                ["5.0 Summarizing and Visualizing Data", "Pivot tables, charts, slicers, dashboards"],
                ["6.0 Data Integrity, Ethics and Sharing", "Validate, protect privacy, document, share"],
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      script: [
        `This is what the course looks like inside CertMaster Learn. Six modules, plus a glossary at the end.`,
        `[Point to the outline screenshot, then walk down the table.]`,
        `And here's what I want you to notice: the modules follow the same order you'd actually work in. First you figure out the question and get the data in. Then you clean it and combine it. Then you calculate, then you summarize and visualize, and finally you make sure it's trustworthy and share it.`,
      ],
    },
  },
  {
    id: "workflow",
    section: "Welcome",
    kicker: "The big picture",
    title: "The data analysis workflow",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Ask", sub: "Turn a vague request into a clear, measurable question", icon: "target" },
          { label: "Import & structure", sub: "Bring data in as clean, typed tables", icon: "database" },
          { label: "Clean", sub: "Remove duplicates, handle blanks, standardize text", icon: "filter" },
          { label: "Combine", sub: "Join related tables with lookups; stack similar ones", icon: "link" },
          { label: "Analyze", sub: "Totals, averages, percentages, conditional logic", icon: "cpu" },
          { label: "Visualize & share", sub: "Pivot tables, charts, dashboards, documented and safe", icon: "chart" },
        ],
      },
      { type: "callout", tone: "tip", text: "Most of the time in real projects goes to steps 2–4. Clean, well-structured data makes the analysis itself the easy part." },
    ],
    notes: {
      script: [
        `If you remember only one slide from today, make it this one. Every data project, big or small, follows roughly these six steps.`,
        `Ask. Import and structure. Clean. Combine. Analyze. Visualize and share.`,
        `Here's a secret from people who do this for a living: most of the time goes into the middle steps, getting the data in and cleaning it. The fancy chart at the end takes ten minutes. Getting the data ready can take days.`,
      ],
      ask: [{ q: "Why do you think cleaning takes so long in real projects?", a: "Real data is entered by many people, in many systems, with typos, blanks, and different formats." }],
    },
  },
  {
    id: "case",
    section: "Welcome",
    kicker: "Our running example",
    title: "Meet Bayan Coffee",
    subtitle: "A three-branch coffee shop in Pangasinan. We'll analyze its sales in every module.",
    blocks: [
      {
        type: "sheet",
        title: "sales_q1.csv (first rows)",
        head: ["OrderID", "Date", "Branch", "Product", "Qty", "Unit price"],
        rows: [
          ["1001", "2026-01-03", "Alaminos", "Iced Latte", "2", "120"],
          ["1002", "2026-01-03", "Dagupan", "Spanish Latte", "1", "135"],
          ["1003", "2026-01-04", "Lingayen", "Americano", "3", "95"],
          ["1004", "2026-01-04", "alaminos ", "Iced Latte", "1", "120"],
          ["1004", "2026-01-04", "alaminos ", "Iced Latte", "1", "120"],
          ["1005", "2026-01-05", "Dagupan", "Ube Frappe", "", "150"],
        ],
        mark: { "3:2": "bad", "4:0": "bad", "4:1": "bad", "4:2": "bad", "4:3": "bad", "4:4": "bad", "4:5": "bad", "5:4": "bad" },
        caption: "Spot the problems? We'll fix every one of them in Module 3.",
      },
    ],
    notes: {
      script: [
        `To keep things real, we'll follow one business all course long: Bayan Coffee, a small coffee shop with three branches, in Alaminos, Dagupan, and Lingayen.`,
        `The owner, Ate Rose, exported her sales from the cash register system. Here are the first few rows. Look closely. Do you see anything wrong?`,
        `[Let students find: 'alaminos ' with lowercase and a trailing space, a duplicated order 1004, a missing quantity on 1005.]`,
        `Exactly. And this is a tiny sample. Imagine this times ten thousand rows. By the end of Module 3, you'll know how to fix all of these.`,
      ],
    },
  },
  {
    id: "outcomes",
    section: "Welcome",
    kicker: "Learning outcomes",
    title: "By the end of this course you can…",
    blocks: [
      {
        type: "bullets",
        numbered: true,
        items: [
          "Turn a vague business request into a clear, measurable analysis question with success criteria",
          "Import data from files and system exports into structured tables with correct data types",
          "Remove duplicates, handle missing values, standardize text, and create calculated fields",
          "Combine datasets with VLOOKUP and XLOOKUP, and append similar tables",
          "Calculate aggregates, percentages, descriptive statistics, and conditional results with IF, IFS, AND, OR",
          "Summarize with pivot tables and communicate with charts, slicers, and dashboards",
          "Validate data, protect privacy, document your steps, and share results responsibly",
        ],
      },
    ],
    notes: {
      script: [
        `Here's the promise. Seven things you'll be able to do by the end. Each one matches a skill area in CompTIA's official course.`,
        `I'm not going to read them all. Instead, pick the one that sounds hardest to you right now and remember it. At the end of the course, we'll come back and see if it still feels hard.`,
      ],
    },
  },

  // ─────────────── Module 1.0 ───────────────
  {
    id: "m1-section",
    section: "1.0 Course Introduction",
    variant: "section",
    kicker: "Module 1.0",
    title: "Course Introduction",
    subtitle: "1.1 Getting started · How to use this course · Pre-assessment",
    icon: "rocket",
    notes: {
      script: [`[Module 1.0 mirrors the CertMaster Learn unit "1.1 Getting Started": course introduction, how to use the course, and a pre-assessment.]`, `Let's start the way the course does: getting oriented, then a quick check of what you already know.`],
    },
  },
  {
    id: "m1-how",
    section: "1.0 Course Introduction",
    kicker: "1.1.2 How to use this course",
    title: "Learn it, try it, prove it",
    blocks: [
      {
        type: "flow",
        steps: [
          { label: "Watch & read", sub: "short videos and readings", icon: "eye" },
          { label: "Try it", sub: "interactive exercises", icon: "hand" },
          { label: "Practice", sub: "hands-on projects", icon: "wrench" },
          { label: "Prove it", sub: "30-min assessment", icon: "check" },
        ],
      },
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "pen", title: "Follow along", text: "Keep a spreadsheet open and repeat every step yourself.", tone: "blue" },
          { icon: "bulb", title: "Break things", text: "Mistakes in practice files are free. That's how you learn the fixes.", tone: "amber" },
          { icon: "book", title: "Use the glossary", text: "New term? Check it right away instead of guessing.", tone: "violet" },
        ],
      },
    ],
    notes: {
      script: [
        `Here's how the course works, and how I want you to work in class. First you watch or read. Then you try a small exercise. Then you practice on a real project. And finally you prove it in the assessment.`,
        `Three tips. Always have a spreadsheet open and follow along; watching someone else do it is not the same as doing it. Don't be afraid to break things in practice files. And when you see a new word, look it up in the glossary right away.`,
      ],
    },
  },
  {
    id: "m1-pre",
    section: "1.0 Course Introduction",
    kicker: "1.1.3 Activity · Pre-assessment",
    title: "What do you already know?",
    blocks: [{ type: "quiz", start: 1, questions: [] }],
    notes: {
      script: [
        `Before we learn anything, let's see where you're starting from. Three questions, no pressure. This isn't graded; it just helps me know where to slow down.`,
        `[Give 30 seconds per item, then press → to reveal the answers. Ask who got all three.]`,
      ],
    },
  },

  // ─────────────── Module 2.0 ───────────────
  {
    id: "m2-section",
    section: "2.0 Setting Up Your Data Project",
    variant: "section",
    kicker: "Module 2.0",
    title: "Setting Up Your Data Project",
    subtitle: "Define the analysis objective · Import and structure the data",
    icon: "target",
    notes: {
      time: "Session 1 · 0:20",
      script: [`Module 2 is about starting right. Two parts: first, figuring out exactly what question we're answering. Second, getting the data in and organized so we can actually work with it.`],
    },
  },
  {
    id: "m2-vague",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Defining the analysis objective",
    title: "From a vague request to a measurable question",
    blocks: [
      {
        type: "table",
        revealCol: 1,
        head: ["What the boss says", "A measurable analysis question"],
        rows: [
          ["“Our sales feel slow. Look into it.”", "Which branch had the largest drop in weekly sales from January to March?"],
          ["“Is the new Ube Frappe doing well?”", "What share of February revenue came from Ube Frappe, and is it above our 10% target?"],
          ["“Find something interesting in the data.”", "(Push back.) What decision are we trying to make? Then write a question for it."],
        ],
      },
      { type: "callout", tone: "tip", text: "A good question names the metric, the group, the time period, and the decision it supports." },
    ],
    notes: {
      script: [
        `Here's where most beginners go wrong. Someone says, 'Look into our sales,' and they immediately open the file and start making charts. Two hours later, they have twelve charts and no answer.`,
        `The very first step is to turn the vague request into a clear question. Let's try it. Ate Rose says, 'Our sales feel slow.' How would you turn that into a question we can actually answer with data?`,
        `[Take 2–3 attempts, then press → to reveal.]`,
        `Notice what makes it good: it names the metric, weekly sales; the group, branch; the time period, January to March; and you can see what decision it supports.`,
        `And if someone says, 'Find something interesting,' the professional move is to politely push back and ask what decision they're trying to make.`,
      ],
    },
  },
  {
    id: "m2-toolkit",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Defining the analysis objective",
    title: "Six things to pin down before touching the data",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "users", title: "Stakeholders", text: "Who will use the result, and what will they decide with it?", tone: "blue" },
          { icon: "question", title: "Business question", text: "One specific, answerable question.", tone: "violet" },
          { icon: "gauge", title: "Metrics & KPIs", text: "What exactly will we measure? Revenue, orders, average ticket?", tone: "teal" },
          { icon: "check", title: "Success criteria", text: "How will we know we've answered it? e.g. 'ranked list of branches by % change'.", tone: "green" },
          { icon: "layers", title: "Unit of analysis", text: "What is one row? One order, one day, one branch?", tone: "amber" },
          { icon: "map", title: "Scope", text: "Which period, branches, products are in, and which are out?", tone: "pink" },
        ],
      },
    ],
    notes: {
      script: [
        `Before you open the data, pin down these six things. I like to write them at the top of the workbook, on a sheet called 'Plan'.`,
        `Stakeholders: who's going to use this? For Bayan Coffee, it's Ate Rose deciding where to send more staff.`,
        `Metric: what are we measuring? Revenue? Number of orders? They can tell different stories.`,
        `Success criteria: how do we know we're done? Unit of analysis: what does one row represent? And scope: what's in, and what's out?`,
      ],
      ask: [{ q: "In Bayan Coffee's file, what is the unit of analysis?", a: "One order line (one product in one order)." }],
    },
  },
  {
    id: "m2-kpi",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Metrics vs KPIs",
    title: "Every KPI is a metric; not every metric is a KPI",
    blocks: [
      {
        type: "compare",
        left: { title: "Metric", icon: "gauge", items: ["Any value you can measure", "Number of orders, average cup price, foot traffic", "Useful context"] },
        right: { title: "KPI (key performance indicator)", icon: "target", items: ["A metric tied directly to a goal", "“Weekly revenue per branch vs ₱80,000 target”", "Tells you if you're winning"] },
      },
      {
        type: "callout",
        tone: "ask",
        text: "Bayan Coffee's goal is to grow online orders. Which is the better KPI: total cups sold, or online orders as a % of all orders?",
        answer: "Online orders as a % of all orders: it is tied directly to the goal.",
      },
    ],
    notes: {
      script: [
        `Two words people mix up: metric and KPI. A metric is anything you can measure. A KPI, key performance indicator, is a metric that's tied directly to a goal. It tells you whether you're winning.`,
        `So if Ate Rose's goal is to grow online orders, which one is the better KPI?`,
        `[Press → to reveal.]`,
        `Right. Total cups is a fine metric, but it doesn't tell us if the online goal is working.`,
      ],
    },
  },
  {
    id: "m2-plan",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Outline the analysis plan",
    title: "A one-page analysis plan",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Question", sub: "Which branch had the biggest sales drop, Jan → Mar?" },
          { label: "Metric", sub: "Weekly revenue = Qty × Unit price, summed per week" },
          { label: "Data sources", sub: "POS export (sales_q1.csv) + product price list" },
          { label: "Method", sub: "Clean → total by branch and week → % change" },
          { label: "Deliverable", sub: "One chart + a 3-sentence summary for Ate Rose" },
          { label: "Deadline", sub: "Friday, before the staffing meeting" },
        ],
      },
      { type: "callout", tone: "warn", text: "Scope creep: “While you're at it, can you also check…” Write new questions down for later instead of quietly expanding the project." },
    ],
    notes: {
      script: [
        `Put it all together and you get an analysis plan. It fits on one page. Question, metric, data sources, method, deliverable, and deadline.`,
        `And watch out for scope creep. That's when someone says, 'Oh, while you're at it, can you also check the delivery times? And the coffee bean costs?' Suddenly your one-day task is a two-week project and the original question never gets answered.`,
        `The fix isn't to say no. It's to write the new question down, finish the first one, and then decide together what's next.`,
      ],
    },
  },
  {
    id: "m2-sources",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Importing and structuring data",
    title: "Where data comes from",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "file", title: "CSV files", text: "Plain text, commas between values. The universal export format.", tone: "blue" },
          { icon: "layers", title: "Excel workbooks", text: "Multiple sheets, formats, and formulas already inside.", tone: "green" },
          { icon: "store", title: "System exports", text: "Point-of-sale, HR, inventory, or school systems.", tone: "amber" },
          { icon: "cloud", title: "SaaS exports", text: "Google Forms, online shops, CRM and survey tools.", tone: "violet" },
          { icon: "database", title: "Databases", text: "Tables queried and exported by IT or a report tool.", tone: "teal" },
          { icon: "link", title: "Web & APIs", text: "Published data, such as PSA statistics or weather data.", tone: "pink" },
        ],
      },
      { type: "callout", tone: "tip", text: "Always keep the original export untouched. Work on a copy, so you can start over if something goes wrong." },
    ],
    notes: {
      script: [
        `Now, getting the data in. Data comes from lots of places. The most common is the humble CSV file: plain text with commas between the values. Almost every system can export one.`,
        `You'll also get Excel workbooks, exports from systems like the cash register or the HR system, downloads from online tools like Google Forms, and sometimes data straight from a database.`,
        `Golden rule number one: never edit the original export. Save it, put it in a folder called 'raw', and work on a copy.`,
      ],
    },
  },
  {
    id: "m2-csv",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Importing CSV and exports",
    title: "Common import traps, and how to avoid them",
    blocks: [
      {
        type: "table",
        compact: true,
        head: ["Trap", "What happens", "Fix"],
        emphasisCol: 0,
        rows: [
          ["Leading zeros", "Student no. 000123 becomes 123", "Import that column as Text"],
          ["Date confusion", "03/04/2026: March 4 or April 3?", "Set the date format (locale) during import"],
          ["Wrong delimiter", "Everything lands in column A", "Choose the right delimiter: comma, tab, semicolon"],
          ["Encoding", "“Parañaque” shows as “ParaÃ±aque”", "Import as UTF-8"],
          ["Numbers as text", "“1,200” won't add up", "Remove the comma, convert to Number"],
          ["Extra header rows", "Report titles sit above the real headers", "Skip rows so the header is row 1"],
        ],
      },
    ],
    notes: {
      script: [
        `Importing sounds easy: just double-click the file, right? Here's what can go wrong.`,
        `Leading zeros disappear: student number 000123 turns into 123. Dates get confused: is 03/04 March 4th or April 3rd? Everything lands in column A because the file uses semicolons instead of commas. And Filipino names like Parañaque come out as gibberish because of the encoding.`,
        `The fix for most of these: don't just double-click. Use the import tool, Data, then From Text/CSV, so you can choose the delimiter, the encoding, and the type of each column.`,
      ],
      ask: [{ q: "Why should a phone number or student number be stored as text, not a number?", a: "You never do math on it, and storing it as a number drops leading zeros." }],
    },
  },
  {
    id: "m2-tidy",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Structuring data",
    title: "Tidy data: one row, one record",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "sheet",
              title: "Messy: months as columns, merged headers",
              head: ["Branch", "Jan", "Feb", "Mar"],
              rows: [
                ["Alaminos", "82,400", "79,100", "71,950"],
                ["Dagupan", "95,300", "97,800", "99,200"],
                ["TOTAL", "177,700", "176,900", "171,150"],
              ],
              mark: { "2:0": "bad", "2:1": "bad", "2:2": "bad", "2:3": "bad" },
            },
          ],
          [
            {
              type: "sheet",
              title: "Tidy: one row per branch per month",
              head: ["Branch", "Month", "Revenue"],
              rows: [
                ["Alaminos", "Jan", "82400"],
                ["Alaminos", "Feb", "79100"],
                ["Alaminos", "Mar", "71950"],
                ["Dagupan", "Jan", "95300"],
              ],
              mark: { "0:0": "good", "0:1": "good", "0:2": "good" },
            },
          ],
        ],
      },
      {
        type: "bullets",
        items: ["Each row = one record · each column = one variable · each cell = one value", "One header row, no merged cells, no blank rows, no totals mixed into the data"],
      },
    ],
    notes: {
      script: [
        `Let's talk structure. On the left is how people like to type data: months across the top, a total row at the bottom. It looks nice for printing. But it's hard to analyze.`,
        `On the right is tidy data. Every row is one record, here one branch in one month. Every column is one variable. Every cell holds one value.`,
        `Why does it matter? Because tools like pivot tables, filters, and charts expect this shape. With tidy data, adding April is just adding rows, not redesigning the whole sheet.`,
        `And notice the total row on the left. Totals mixed into the data are a trap: if you sum the column, you count everything twice.`,
      ],
    },
  },
  {
    id: "m2-tables",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Ranges vs tables",
    title: "Turn ranges into tables",
    blocks: [
      {
        type: "compare",
        left: { title: "Plain range", icon: "layers", items: ["Just cells A1:F500", "Formulas break when you add rows", "Filters and formats applied by hand"] },
        right: { title: "Formatted table (Ctrl+T)", icon: "database", items: ["Grows automatically when you add rows", "Built-in filters, banded rows, totals row", "Readable formulas: =SUM(Sales[Total])"] },
      },
      { type: "code", label: "Structured reference", code: `=SUM(Sales[Total])          ← adds the whole Total column, even after new rows
=AVERAGE(Sales[Unit price])  ← reads like English` },
    ],
    notes: {
      script: [
        `One small habit that makes a huge difference: turn your data into a table. Click anywhere in the data and press Ctrl+T. In Google Sheets, it's Format, then Convert to table.`,
        `Now when you add new rows, the table grows automatically, and every formula that uses it updates. You get filters for free. And formulas become readable: equals SUM of Sales, Total. Anyone can understand that.`,
      ],
    },
  },
  {
    id: "m2-types",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Assigning data types and formats",
    title: "The right type for every column",
    blocks: [
      {
        type: "table",
        compact: true,
        head: ["Data type", "Example", "Why it matters"],
        emphasisCol: 0,
        rows: [
          ["Text", "Product name, Branch, Student no.", "Matched and grouped, never calculated"],
          ["Number", "Qty = 3", "Can be summed and averaged"],
          ["Currency", "₱120.00", "Number with a money format"],
          ["Date", "2026-01-03", "Enables sorting by time, months, weekdays"],
          ["Percentage", "12.5%", "Stored as 0.125, shown as a percent"],
          ["True/False", "IsOnline = TRUE", "Perfect for filters and counts"],
        ],
      },
      { type: "callout", tone: "warn", text: "Format is not value. A cell can look like a number but be stored as text, and then SUM quietly ignores it." },
    ],
    notes: {
      script: [
        `Last thing in Module 2: data types. Every column should have the right type. Text for names and IDs. Numbers for things you calculate. Dates for dates. Currency and percentages are just numbers with a special format.`,
        `And here's a trap that catches everyone at least once: format is not value. A cell can look like 1,200 but actually be stored as text. Then SUM just skips it, and your total is wrong without any error message.`,
        `Quick test: numbers stored as text usually sit on the left side of the cell, and real numbers sit on the right. Look for that little green triangle too.`,
      ],
    },
  },
  {
    id: "m2-check",
    section: "2.0 Setting Up Your Data Project",
    kicker: "Module 2.0 check",
    title: "Quick check: setting up the project",
    blocks: [{ type: "quiz", start: 1, questions: [] }],
    notes: { script: [`Let's see what stuck. Three questions from the course reviewer.`, `[30–45 seconds each, then press → to reveal answers and rationale.]`] },
  },
];
