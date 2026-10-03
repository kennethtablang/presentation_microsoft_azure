import type { Slide } from "@/lib/types";

const P = "Part 1" as const;

export const part1: Slide[] = [
  {
    id: "p1-section",
    part: P,
    section: "Part 1 · AI Concepts",
    variant: "section",
    kicker: "Part 1 · Sessions 1–3",
    title: "AI concepts for developers and technology professionals",
    subtitle: "Seven Microsoft Learn modules · beginner level · no programming required",
    icon: "brain",
    notes: {
      time: "Session 1 · 0:00–0:03",
      say: [
        "Good morning, class. Today we start a new module: AI concepts for developers and technology professionals. It's based on a Microsoft Learn learning path, the same foundation used for the AI-900 / AI-901 certification.",
        "By the end of three sessions, you should be able to talk about AI like an IT professional, not like a social media post.",
      ],
      deeper: [
        "Set expectations: Part 1 is concepts, Part 2 is hands-on in Microsoft Foundry. The concepts outlast any tool or button name.",
      ],
    },
  },
  {
    id: "s1-objectives",
    part: P,
    section: "Session 1 · Foundations",
    kicker: "Session 1 · Today's objectives",
    title: "What we'll cover today",
    blocks: [
      {
        type: "cards",
        cols: 4,
        items: [
          { icon: "brain", title: "Define AI & ML", text: "What AI is, and how machine learning differs from rules.", tone: "blue" },
          { icon: "boxes", title: "AI workloads", text: "The six categories of problems AI solves.", tone: "teal" },
          { icon: "sparkles", title: "Generative AI & LLMs", text: "How large language models actually produce text.", tone: "violet" },
          { icon: "bot", title: "Chatbot vs agent", text: "Why an agent acts while a chatbot only answers.", tone: "pink" },
        ],
      },
      {
        type: "callout",
        tone: "board",
        text: "Session 1 budget: opening 15 min · Module 1 45 min · Module 2 50 min · wrap-up 10 min",
      },
    ],
    notes: {
      time: "0:03–0:06",
      say: ["Write the four objectives on the board and leave them up all session. Tick each off as you finish it."],
      deeper: ["Ask students to rate their confidence 1–5 on each objective now; repeat at the end of the session to show progress."],
    },
  },
  {
    id: "s1-hook",
    part: P,
    section: "Session 1 · Foundations",
    kicker: "Hook",
    title: "You already use AI every day",
    subtitle: "Raise your hand if you used AI today. Keep it up if you used any of these…",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "map", title: "Google Maps", text: "Route and arrival-time estimates", tone: "blue" },
          { icon: "video", title: "YouTube & Facebook", text: "Recommendations and feeds", tone: "pink" },
          { icon: "filter", title: "Spam filters", text: "Junk mail sorted automatically", tone: "amber" },
          { icon: "phone", title: "GCash", text: "Fraud and anomaly alerts", tone: "teal" },
          { icon: "eye", title: "Face unlock", text: "Recognizing you to open your phone", tone: "violet" },
          { icon: "audio", title: "Auto-captions", text: "Speech turned into text", tone: "green" },
        ],
      },
      {
        type: "callout",
        tone: "ask",
        text: "Name one app on your phone that uses AI. What do you think the AI is doing?",
      },
    ],
    notes: {
      time: "0:06–0:10",
      say: [
        "Everyone's hand should be up. AI is not new to you. Recommendations, route estimates, fraud alerts: all AI.",
        "What is new is that you will now build with it.",
      ],
      ask: [
        {
          q: "Name one app on your phone that you think uses AI, and what you think the AI is doing.",
          a: "Take 3–4 answers. Write them on the board; you will sort them into workloads later in the session.",
        },
      ],
      deeper: ["Keep the board list. It becomes the input for the workload-sorting and responsible-AI questions later."],
    },
  },
  {
    id: "s1-rules-vs-ml",
    part: P,
    section: "Session 1 · Foundations",
    kicker: "Traditional programming vs machine learning",
    title: "A program that follows rules vs a program that learns",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "flow",
              caption: "Traditional program",
              steps: [
                { label: "Rules", icon: "pen" },
                { label: "Data", icon: "database" },
                { label: "Answers", icon: "check" },
              ],
            },
            {
              type: "flow",
              caption: "Machine learning",
              steps: [
                { label: "Data", icon: "database" },
                { label: "Answers", icon: "check" },
                { label: "Rules (a model)", icon: "brain" },
              ],
            },
          ],
          [
            {
              type: "table",
              compact: true,
              caption: "Thumbs up = rule-based · thumbs down = needs learning",
              head: ["Task", "Answer"],
              revealCol: 1,
              rows: [
                ["Computing your GWA", "👍 Rule-based"],
                ["Recognizing your face to unlock your phone", "👎 Needs learning"],
                ["Checking if a password has 8 characters", "👍 Rule-based"],
                ["Recommending a song you might like", "👎 Needs learning"],
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      time: "0:10–0:15",
      say: [
        "In traditional programming, a person writes the rules, for example 'if a grade is below 75, mark it failing.'",
        "In machine learning, we show the computer thousands of examples with their correct answers, and it figures out the rules by itself. That learned logic is called a model.",
        "Think of a model like a recipe that was never written down by a cook; it was worked out by tasting thousands of dishes.",
      ],
      ask: [
        { q: "What is the difference between a program that follows rules and a program that learns?" },
        { q: "Thumbs check on the four tasks.", a: "Up, down, up, down. Press → to reveal." },
      ],
      deeper: [
        "Push further: when would you prefer rules even if ML is possible? (When the logic is known, must be auditable, or data is scarce, such as tax computation.)",
      ],
    },
  },
  {
    id: "m1-section",
    part: P,
    section: "Module 1 · Intro to AI",
    variant: "section",
    kicker: "Module 1 · 45 min",
    title: "Introduction to AI concepts",
    subtitle: "Intro to AI · workloads preview · responsible AI · exercise · assessment",
    icon: "bulb",
    notes: {
      time: "0:15",
      say: ["Now that we know what a model is, let's look at what AI models are actually used for."],
      deeper: ["Each workload gets a 3–4 minute preview here; Modules 2–7 go deep."],
    },
  },
  {
    id: "m1-what-is-ai",
    part: P,
    section: "Module 1 · Intro to AI",
    kicker: "Unit 1 · Introduction to AI",
    title: "AI is software that imitates human capabilities",
    subtitle: "It does not think like a person. It recognizes patterns in data very, very well.",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "text", title: "Understanding language", tone: "blue" },
          { icon: "eye", title: "Seeing", tone: "teal" },
          { icon: "mic", title: "Hearing", tone: "violet" },
          { icon: "volume", title: "Speaking", tone: "pink" },
          { icon: "brain", title: "Reasoning", tone: "amber" },
          { icon: "wand", title: "Creating", tone: "green" },
        ],
      },
    ],
    notes: {
      time: "0:15–0:18",
      say: [
        "Artificial intelligence is software that imitates human capabilities: understanding language, seeing, hearing, speaking, reasoning, and creating.",
        "Notice the word imitates. AI does not think like a person. It recognizes patterns in data very, very well.",
      ],
      deeper: [
        "A good misconception to address: 'AI understands me.' It models statistical patterns of language; understanding is an appearance, which explains later issues like hallucination.",
      ],
    },
  },
  {
    id: "m1-training",
    part: P,
    section: "Module 1 · Intro to AI",
    kicker: "Unit 1 · How machine learning works",
    title: "Training, then inferencing",
    blocks: [
      {
        type: "flow",
        steps: [
          { label: "Training data", icon: "database" },
          { label: "Algorithm", icon: "cpu" },
          { label: "Model", icon: "brain" },
          { label: "New input", icon: "file" },
          { label: "Prediction", icon: "target" },
        ],
      },
      {
        type: "columns",
        cols: [
          [
            {
              type: "cards",
              cols: 2,
              items: [
                { title: "Features", text: "The inputs. House price: floor area, location, number of rooms.", tone: "blue", tag: "inputs" },
                { title: "Label", text: "The known answer the model learns to predict: the price.", tone: "violet", tag: "answer" },
              ],
            },
          ],
          [
            {
              type: "callout",
              tone: "ask",
              text: "A model is trained on 10,000 mango photos marked ripe or unripe. What is the feature, and what is the label?",
              answer: "Feature: the image pixels · Label: ripe or unripe",
            },
          ],
        ],
      },
    ],
    notes: {
      time: "0:18–0:22",
      say: [
        "Almost all modern AI is built on machine learning. There are two phases. Training: we feed the model historical data and it learns patterns. Inferencing: we give the trained model new data and it makes a prediction.",
        "In training data, the inputs are called features and the known answers are called labels.",
      ],
      ask: [{ q: "Mango photos: feature vs label?", a: "Feature: the image pixels. Label: ripe or unripe." }],
      deeper: [
        "Training is expensive and done rarely; inferencing is cheap and happens every time a user clicks. That cost split matters for cloud billing in Part 2.",
        "Bad labels make bad models: 'garbage in, garbage out' is the first fairness lesson.",
      ],
    },
  },
  {
    id: "m1-workloads",
    part: P,
    section: "Module 1 · Intro to AI",
    kicker: "Units 2–6 · AI workloads",
    title: "Six AI workloads you'll see all module long",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "sparkles", title: "Generative AI & agents", text: "Creates text, code, images; agents use tools to do tasks.", tone: "violet" },
          { icon: "text", title: "Natural language processing", text: "Detects language, sentiment, names and places; summarizes, translates.", tone: "blue" },
          { icon: "audio", title: "Speech", text: "Speech-to-text (captions) and text-to-speech (GPS voice).", tone: "teal" },
          { icon: "eye", title: "Computer vision", text: "What's in a photo, where each object is, what text appears.", tone: "green" },
          { icon: "filescan", title: "Information extraction", text: "Turns forms, receipts and IDs into rows of structured data.", tone: "amber" },
          { icon: "book", title: "Retrieval-augmented generation", text: "Grounds an LLM's answers in your own documents.", tone: "pink" },
        ],
      },
    ],
    notes: {
      time: "0:22–0:37",
      say: [
        "Microsoft groups AI tasks into workloads, categories of problems AI solves.",
        "Generative AI creates; an agent goes one step further and uses tools to actually do tasks for you.",
        "NLP lets software understand written language. Speech works in two directions. Computer vision interprets images and video. Information extraction turns paper into rows in a spreadsheet or database.",
      ],
      ask: [
        { q: "Look at our board list of apps from the hook. Which workload does each one belong to?", a: "Maps → prediction/vision; YouTube → recommendations (ML); captions → speech; face unlock → vision." },
      ],
      deeper: [
        "Most AI before 2022 classified or predicted: spam or not spam, ripe or unripe. Generative AI is the shift from classifying to creating.",
      ],
    },
  },
  {
    id: "m1-rai",
    part: P,
    section: "Module 1 · Intro to AI",
    kicker: "Unit 7 · Responsible AI",
    title: "Microsoft's six principles for responsible AI",
    blocks: [
      {
        type: "table",
        head: ["Principle", "One-line meaning", "Example risk"],
        emphasisCol: 0,
        rows: [
          ["Fairness", "Treat all people equally", "Loan model rejects one province more"],
          ["Reliability and safety", "Perform consistently and safely", "Medical model fails on low-light X-rays"],
          ["Privacy and security", "Protect personal data", "Chat logs with student grades leak"],
          ["Inclusiveness", "Empower everyone", "Speech app fails on regional accents"],
          ["Transparency", "Users understand how it works and its limits", "Users not told an answer is AI-generated"],
          ["Accountability", "People are answerable for the system", "No one owns a wrong automated decision"],
        ],
      },
    ],
    notes: {
      time: "0:37–0:45",
      say: ["Every one of these workloads can hurt people if built carelessly. Microsoft defines six principles for responsible AI."],
      ask: [{ q: "Pick one app from the list we wrote at the start. Which principle is most at risk in that app?", a: "Take 2–3 answers. Any well-argued answer is fine." }],
      deeper: [
        "Fairness and inclusiveness are often confused: fairness is about equal outcomes; inclusiveness is about whether everyone can use it at all.",
        "Accountability is the 'umbrella' principle: a named human or team must own the system's decisions.",
      ],
    },
  },
  {
    id: "ex1-spam",
    part: P,
    section: "Module 1 · Intro to AI",
    kicker: "Example 1 · Rules vs learning",
    title: "Why rule-based spam filters break",
    subtitle: "Rule: mark as spam if it contains “you won”, “claim your prize”, or “free load”",
    blocks: [
      {
        type: "table",
        head: ["Message", "Rule says", "Correct?"],
        revealCol: 2,
        rows: [
          ["“Congrats! You won 50,000 pesos!”", "Spam", "✅ Yes"],
          ["“C0ngr4ts, y0u w0n a pr1ze”", "Not spam", "❌ No, the rule is fooled"],
          ["“Did you win the game last night?”", "Not spam", "✅ Yes"],
        ],
      },
      {
        type: "callout",
        tone: "tip",
        text: "Spammers change their wording faster than people can write rules. A model trained on thousands of labeled messages learns the pattern of spam, including misspellings it has never seen.",
      },
    ],
    notes: {
      say: ["Show the rule-based approach first, then ask why it breaks."],
      ask: [{ q: "Why does the second message slip through?", a: "The rule matches exact words. Character swaps defeat it." }],
      deeper: ["Rules can still complement ML: e.g., always block known malicious domains (rule) and score everything else with a model."],
    },
  },
  {
    id: "act1",
    part: P,
    section: "Module 1 · Intro to AI",
    kicker: "Unit 8 · Activity 1 · pairs · 15 min",
    title: "Rules or learning?",
    subtitle: "Label each task “rule-based is enough” or “needs AI”, then defend one choice.",
    blocks: [
      {
        type: "table",
        revealCol: 1,
        compact: true,
        head: ["Task", "Suggested answer"],
        rows: [
          ["Compute GWA from grades", "Rule-based"],
          ["Detect cheating in typed essays", "Needs AI"],
          ["Validate a student number format", "Rule-based"],
          ["Recommend electives", "Needs AI"],
          ["Sort enrollees by last name", "Rule-based"],
          ["Read handwritten enrollment forms", "Needs AI"],
          ["Send due-date reminders", "Rule-based"],
          ["Translate announcements to Ilocano", "Needs AI"],
        ],
      },
    ],
    notes: {
      time: "0:45–0:52",
      say: ["Run in pairs. If lab time allows, students also open the Microsoft Learn exercise linked in the module and try one workload demo."],
      deeper: [
        "'Detect cheating' is a great debate item: AI detectors have high false-positive rates. This links to fairness and accountability: never punish on a detector score alone.",
      ],
    },
  },
  {
    id: "m1-check",
    part: P,
    section: "Module 1 · Intro to AI",
    kicker: "Unit 9 · Module assessment",
    title: "Quick check: answer on paper",
    blocks: [
      { type: "callout", tone: "ask", text: "1. What is the difference between training and inferencing?", answer: "Inferencing uses the trained model on new data." },
      { type: "callout", tone: "ask", text: "2. Which workload reads a receipt and returns the total?", answer: "Information extraction" },
      { type: "callout", tone: "ask", text: "3. Which principle requires that users know they are talking to an AI?", answer: "Transparency" },
    ],
    notes: {
      time: "0:52–0:57",
      say: ["Ask aloud; students answer on paper. Press → to reveal all three answers."],
      deeper: [
        "Recap (0:57–1:00): AI imitates human capabilities by learning patterns from data. A model is trained, then used for inferencing. We group AI into workloads. Every workload must follow the six responsible AI principles.",
      ],
    },
  },

  // ───────── Module 2 ─────────
  {
    id: "m2-section",
    part: P,
    section: "Module 2 · Generative AI & agents",
    variant: "section",
    kicker: "Module 2 · 50 min",
    title: "Introduction to generative AI and agents",
    subtitle: "Core concepts · how LLMs work · effective prompts · agents and agentic solutions",
    icon: "sparkles",
    notes: { time: "1:00", say: ["Next, the workload everyone is talking about: generative AI."] },
  },
  {
    id: "m2-genai",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Part A · What generative AI is",
    title: "AI that produces new, original content",
    subtitle: "You describe what you want in everyday words, and the model creates it.",
    blocks: [
      {
        type: "flow",
        steps: [
          { label: "Prompt", sub: "natural-language input", icon: "pen" },
          { label: "Generative model", sub: "foundation model", icon: "brain" },
          { label: "Output", sub: "text · code · image · audio", icon: "sparkles" },
        ],
      },
      {
        type: "cards",
        cols: 3,
        items: [
          { title: "Foundation models", text: "Trained once on enormous data, then reused for many tasks.", tone: "blue", icon: "layers" },
          { title: "LLMs", text: "Large language models: the text-focused foundation models.", tone: "violet", icon: "text" },
          { title: "SLMs", text: "Small language models: cheaper, can even run on a laptop or phone.", tone: "teal", icon: "phone" },
        ],
      },
    ],
    notes: {
      time: "1:00–1:08",
      say: [
        "Generative AI is AI that produces new, original content in response to natural-language input.",
        "The big models behind this are called foundation models. They are trained once on enormous data, then reused for writing, summarizing, translating, coding.",
      ],
      ask: [
        {
          q: "What is one task in your daily student life where generative AI could save you time? And one where using it would be dishonest?",
          a: "Push for both sides: drafting and brainstorming vs submitting AI work as your own.",
        },
      ],
      deeper: ["SLMs matter for privacy and cost: data never leaves the device. Phones now run SLMs for on-device summarization."],
    },
  },
  {
    id: "m2-llm-steps",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Part B · How LLMs work",
    title: "Opening the black box in four steps",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Tokenization", sub: "Split text into tokens with number IDs. 'Programming' → 'Program' + 'ming'. ~1 token ≈ ¾ of a word.", icon: "scan" },
          { label: "Embeddings", sub: "Each token becomes a vector capturing meaning. 'King' ≈ 'queen'; 'king' is far from 'kangkong'.", icon: "network" },
          { label: "Attention", sub: "Transformers let each word look at the others. Is 'bank' money or river?", icon: "eye" },
          { label: "Next-token prediction", sub: "Score every possible next token, pick one, repeat until done.", icon: "target" },
        ],
      },
    ],
    notes: {
      time: "1:08–1:18",
      say: [
        "Step 1, tokenization: the model cannot read letters. It splits text into tokens and assigns each a number ID.",
        "Step 2, embeddings: each token is turned into a list of numbers, a vector, that captures its meaning. Similar meanings get similar vectors.",
        "Step 3, attention: in 'I deposited money at the bank' versus 'We sat on the river bank', attention is how the model knows which bank you mean.",
        "Step 4, next-token prediction: compute a probability for every possible next token, pick one, repeat.",
      ],
      ask: [
        { q: "Put these in order: embeddings, next-token prediction, tokenization, attention.", a: "Tokenization → embeddings → attention → prediction." },
      ],
      deeper: ["Tokens are also the billing unit for cloud LLMs, and Filipino/Taglish text often uses more tokens per word than English, so it costs more."],
    },
  },
  {
    id: "m2-prediction",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Part B · Next-token prediction",
    title: "The model picks the likely next word, not the true one",
    blocks: [
      {
        type: "columns",
        ratio: "1.2fr 1fr",
        cols: [
          [
            {
              type: "probability",
              prompt: "Ang ganda ng …",
              items: [
                { token: "araw", p: 0.62 },
                { token: "buhay", p: 0.21 },
                { token: "bundok", p: 0.09 },
                { token: "code", p: 0.01 },
              ],
            },
          ],
          [
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "gauge", title: "Temperature", text: "Controls randomness: low for facts, high for creative writing.", tone: "amber" },
                { icon: "layers", title: "Context window", text: "Tokens the model can consider at once: prompt + history + reply.", tone: "blue" },
              ],
            },
            {
              type: "callout",
              tone: "ask",
              text: "If it only predicts the likely next word, why can it sound confident while being wrong?",
              answer: "Hallucination: fluent, plausible, false. It optimizes for likely, not for true.",
            },
          ],
        ],
      },
    ],
    notes: {
      time: "1:18–1:25",
      say: [
        "Two settings matter for developers. Temperature controls randomness: low for factual answers, high for creative writing.",
        "The context window is how many tokens the model can consider at once: your prompt, the history, and its reply all share it.",
      ],
      ask: [{ q: "Why can it sound confident while being wrong?", a: "Lead to hallucination: fluent, plausible, false." }],
      deeper: [
        "Temperature 0 doesn't make a model correct, only consistent. A wrong answer at temperature 0 is wrong every time.",
        "When a chat gets too long for the context window, the oldest messages are dropped, which is why long chats 'forget' early instructions.",
      ],
    },
  },
  {
    id: "m2-prompts",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Part C · Prompts",
    title: "Two layers of prompts, six habits of good ones",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "lock", title: "System prompt", text: "Hidden developer instructions: role, tone, rules.", tone: "violet" },
                { icon: "pen", title: "User prompt", text: "What the user actually types.", tone: "blue" },
              ],
            },
            {
              type: "callout",
              tone: "tip",
              text: "No examples = zero-shot. One or a few examples of the output you want = few-shot, which dramatically improves consistency.",
            },
          ],
          [
            {
              type: "bullets",
              numbered: true,
              title: "Tips for effective prompts",
              items: [
                "State the goal clearly",
                "Give a role and an audience",
                "Provide context or source content (grounding)",
                "Specify the output format and length",
                "Show examples (one-shot or few-shot)",
                "Iterate: refine based on the output",
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      time: "1:25–1:30",
      say: [
        "A prompt is the input you give the model. In real apps there are two layers: the system prompt, hidden instructions from the developer that set role, tone, and rules; and the user prompt, what the user types.",
      ],
      deeper: ["Prompt injection: users may type 'ignore your rules'. That's why system prompts alone are not a security boundary; we revisit this with agents."],
    },
  },
  {
    id: "ex2-makeover",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Example 2 · Demo",
    title: "Prompt makeover",
    subtitle: "Run all three in any AI chat tool and compare side by side.",
    blocks: [
      {
        type: "table",
        head: ["Prompt style", "Prompt", "What to notice"],
        emphasisCol: 0,
        rows: [
          ["Vague", "“Explain budgeting.”", "Generic, long, no target audience"],
          ["Role + audience", "“You are a financial coach. Explain budgeting to a first-time employee in 5 sentences.”", "Shorter, fits the reader"],
          [
            "Role + format + example",
            "“You are a financial coach. Explain budgeting to a first-time employee. Give one real-life analogy, a sample monthly budget for a ₱20,000 salary, and one common mistake. Use headings.”",
            "Structured, usable as a handout",
          ],
        ],
      },
    ],
    notes: {
      time: "1:30–1:34",
      say: ["Run Example 2 live. Let students predict how the output will change before each run."],
      ask: [{ q: "Which tip from the previous slide did each version add?", a: "Version 2 adds role + audience + length. Version 3 adds format and concrete content requirements." }],
      deeper: ["Activity 2 (homework if short on time): students rewrite 'Make a quiz' in 3 rounds, adding role, audience, format, and constraints, then compare round 1 vs round 3."],
    },
  },
  {
    id: "ex3-same-q",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Example 3 · Demo",
    title: "Same question, three answers",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            { type: "callout", tone: "board", text: "Ask three times in new chats: “Suggest a name for a small coffee shop in Alaminos.”" },
            {
              type: "bullets",
              items: [
                "Answers differ each time: generation is based on probability, not lookup",
                "Higher temperature → more variety",
              ],
            },
          ],
          [
            { type: "callout", tone: "warn", text: "Now ask: “What is the Wi-Fi password policy of our office?”" },
            {
              type: "bullets",
              items: [
                "A confident but invented answer is a hallucination",
                "The model has never seen our private data. This sets up RAG in Session 3",
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      time: "1:34–1:38",
      say: ["The answers differ each time because generation is based on probability, not lookup."],
      deeper: ["Activity: ask students to spot one plausible-sounding detail in the Wi-Fi answer that is pure invention."],
    },
  },
  {
    id: "m2-agents",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Part D · Agents",
    title: "A chatbot answers. An agent acts.",
    blocks: [
      {
        type: "equation",
        result: "Agent",
        parts: [
          { label: "Model", sub: "the reasoning", icon: "brain" },
          { label: "Instructions", sub: "its job and rules", icon: "list" },
          { label: "Tools", sub: "search, database, APIs, code", icon: "wrench" },
          { label: "Memory", sub: "conversation and state", icon: "database" },
        ],
      },
      {
        type: "flow",
        caption: "Registrar agent: “Am I cleared to enroll?”",
        steps: [
          { label: "Understand goal", icon: "brain" },
          { label: "Query accounts", icon: "database" },
          { label: "Check library", icon: "book" },
          { label: "Reply / book appointment", icon: "check" },
        ],
      },
    ],
    notes: {
      time: "1:38–1:45",
      say: [
        "An agent is an application that uses a generative model to understand a goal, decide what to do, and carry out tasks using tools.",
        "The LLM decides which tool to call; the app's own systems actually carry it out.",
        "Complex systems use multi-agent solutions: a researcher, a writer, and a reviewer coordinated by an orchestrator. This is called agentic AI.",
      ],
      deeper: ["Key insight: the model never touches the database directly. It emits a structured 'call this tool with these arguments' request that your code executes, which is where you enforce permissions."],
    },
  },
  {
    id: "m2-agent-risk",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Part D · Multi-agent & risk",
    title: "Agentic AI raises the stakes",
    blocks: [
      {
        type: "flow",
        caption: "Multi-agent solution",
        steps: [
          { label: "Orchestrator", icon: "network" },
          { label: "Researcher", icon: "search" },
          { label: "Writer", icon: "pen" },
          { label: "Reviewer", icon: "usercheck" },
        ],
      },
      {
        type: "callout",
        tone: "ask",
        text: "A student portal assistant checks your grades in the database and emails your adviser. Chatbot or agent? What could go wrong if its tools have too many permissions?",
        answer: "Agent. Risks: wrong email sent, data exposed. Apply least privilege, plus human approval for sensitive actions.",
      },
    ],
    notes: {
      time: "1:45–1:50",
      ask: [{ q: "Chatbot or agent? What could go wrong?", a: "Agent. Wrong email sent, data exposed. Least privilege + human approval." }],
      deeper: ["Discussion: what's the practical difference between a chatbot and an agent, and why do agents raise the stakes for security?"],
    },
  },
  {
    id: "s1-wrap",
    part: P,
    section: "Module 2 · Generative AI & agents",
    kicker: "Session 1 wrap-up · 1:50–2:00",
    title: "What we learned today",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "brain", title: "AI learns patterns", text: "Models are trained, then used for inferencing.", tone: "blue" },
          { icon: "boxes", title: "Six workloads", text: "GenAI & agents, NLP, speech, vision, extraction, RAG.", tone: "teal" },
          { icon: "network", title: "LLMs predict tokens", text: "Using embeddings and attention.", tone: "violet" },
          { icon: "pen", title: "Prompts steer them", text: "System + user prompts; few-shot helps.", tone: "amber" },
          { icon: "bot", title: "Agents act", text: "Model + instructions + tools + memory.", tone: "pink" },
          { icon: "quote", title: "Exit ticket", text: "Explain an LLM to a non-IT relative in one sentence, plus one question you still have.", tone: "green" },
        ],
      },
    ],
    notes: {
      time: "1:50–2:00",
      say: ["Next session: language, speech, and vision."],
      deeper: ["Collect exit tickets and read 2–3 aloud at the start of Session 2. Correct gently: an LLM predicts, it does not look things up."],
    },
  },

  // ───────── Session 2 · Module 3 ─────────
  {
    id: "s2-open",
    part: P,
    section: "Module 3 · NLP",
    kicker: "Session 2 opening · 10 min",
    title: "Review, then today's plan",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "bullets",
              title: "Rapid-fire review",
              items: ["Training vs inferencing?", "Token?", "Embedding?", "Chatbot vs agent?"],
            },
          ],
          [
            {
              type: "flow",
              variant: "steps",
              steps: [
                { label: "How software understands text", icon: "text" },
                { label: "How it hears and speaks", icon: "audio" },
                { label: "How it sees", icon: "eye" },
              ],
            },
          ],
        ],
      },
      { type: "callout", tone: "board", text: "Session 2 budget: opening 10 · Module 3 40 · Module 4 30 · Module 5 35 · wrap-up 5 (minutes)" },
    ],
    notes: {
      time: "0:00–0:10",
      ask: [{ q: "Who can read their exit-ticket sentence explaining an LLM?", a: "Take 2–3. Correct gently: an LLM predicts, it does not look things up." }],
    },
  },
  {
    id: "m3-section",
    part: P,
    section: "Module 3 · NLP",
    variant: "section",
    kicker: "Module 3 · 40 min",
    title: "Introduction to natural language processing",
    subtitle: "Why text is hard · preparing text · statistics · semantic models · common tasks",
    icon: "text",
    notes: { time: "0:10" },
  },
  {
    id: "m3-hard",
    part: P,
    section: "Module 3 · NLP",
    kicker: "Parts A–B · Preparing text",
    title: "Human language is messy",
    subtitle: "Slang, typos, Taglish, sarcasm. “Ang galing mo talaga” can be a compliment or an insult.",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "bullets",
              title: "Normalization steps",
              items: [
                { text: "Lowercasing", sub: ["'Enroll' and 'enroll' become one token"] },
                { text: "Remove punctuation that adds no meaning" },
                { text: "Stop-word removal", sub: ["drop 'the', 'is', 'ang', 'ng'"] },
                { text: "Stemming / lemmatization", sub: ["enrolled, enrolling, enrollment → enroll"] },
                { text: "N-grams", sub: ["keep 'student portal' together (a bigram)"] },
              ],
            },
          ],
          [
            {
              type: "callout",
              tone: "ask",
              text: "Tokenize and normalize: “The students ARE enrolling in the new AI course!”",
              answer: "students · enroll · new · ai · course",
            },
          ],
        ],
      },
    ],
    notes: {
      time: "0:10–0:22",
      say: [
        "NLP is the area of AI that analyzes text to infer meaning.",
        "Before any analysis, text is broken into tokens, the same idea you saw with LLMs. Then we usually clean it up. This is called normalization.",
      ],
      deeper: ["Modern LLMs skip most of this cleanup; they learn from raw text. Normalization still matters for classic search indexes and keyword features."],
    },
  },
  {
    id: "m3-stats",
    part: P,
    section: "Module 3 · NLP",
    kicker: "Parts C–D · Statistical and semantic models",
    title: "From counting words to capturing meaning",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "cards",
              cols: 2,
              items: [
                { title: "Frequency analysis", text: "Count terms to see what a document is about.", tone: "blue" },
                { title: "TF-IDF", text: "Boost words frequent here but rare elsewhere. 'computer' scores low; 'recursion' high.", tone: "violet" },
                { title: "Text classification", text: "Labeled examples (spam / not spam) train Naive Bayes or logistic regression.", tone: "teal" },
                { title: "Semantic models", text: "Embeddings: 'cheap' and 'affordable' land close together.", tone: "pink" },
              ],
            },
          ],
          [
            {
              type: "scatter",
              caption: "Embedding space: similar meanings cluster",
              points: [
                { label: "dog", x: 18, y: 28, group: 0 },
                { label: "puppy", x: 26, y: 20, group: 0 },
                { label: "cat", x: 14, y: 40, group: 0 },
                { label: "laptop", x: 74, y: 70, group: 1 },
                { label: "keyboard", x: 84, y: 80, group: 1 },
                { label: "mouse?", x: 50, y: 52, group: 2 },
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      time: "0:22–0:35",
      say: [
        "Early NLP was mostly counting. TF-IDF boosts words that are frequent in this document but rare across all documents.",
        "Counting words misses meaning. Modern NLP uses semantic language models that represent words as embeddings. That's the same technology behind LLMs, and it's why RAG works later.",
      ],
      ask: [{ q: "Where should 'mouse' go on this plot?", a: "It depends on context: near 'cat' (animal) or near 'keyboard' (device). Contextual embeddings solve this." }],
    },
  },
  {
    id: "m3-tasks",
    part: P,
    section: "Module 3 · NLP",
    kicker: "Part E · Common NLP tasks",
    title: "What NLP returns, with campus examples",
    blocks: [
      {
        type: "table",
        compact: true,
        head: ["Task", "What it returns", "Campus example"],
        emphasisCol: 0,
        rows: [
          ["Language detection", "Language name + confidence", "Route Ilocano vs English inquiries"],
          ["Sentiment analysis", "Positive / negative / neutral / mixed + scores", "Faculty evaluation comments"],
          ["Key phrase extraction", "Main talking points", "Top issues in student feedback"],
          ["Named entity recognition", "Entities with categories", "Names, dates, places in incident reports"],
          ["PII detection", "Personal data found and masked", "Hide student numbers before sharing logs"],
          ["Summarization", "Short version of long text", "Condense a 20-page memo"],
          ["Translation", "Text in another language", "Announcements in Filipino and English"],
        ],
      },
    ],
    notes: {
      time: "0:35–0:40",
      ask: [
        {
          q: "Which tasks would you chain to build a dashboard of student complaints?",
          a: "Language detection → translation if needed → sentiment → key phrases → aggregate in SQL.",
        },
      ],
    },
  },
  {
    id: "ex4-sentiment",
    part: P,
    section: "Module 3 · NLP",
    kicker: "Example 4 · Demo",
    title: "Sentiment and entities",
    subtitle: "Paste into a text analysis playground; let students predict before running.",
    blocks: [
      {
        type: "table",
        head: ["Input text", "Sentiment", "Entities found"],
        revealCol: 1,
        rows: [
          ["“The staff at the Alaminos branch were friendly and fast.”", "Positive", "Alaminos → Location"],
          ["“Maria waited two hours on Monday and nobody helped her.”", "Negative", "Maria → Person; Monday → DateTime"],
          ["“The food was great, but the parking was terrible.”", "Mixed", "(none)"],
        ],
      },
      { type: "callout", tone: "tip", text: "“Mixed” shows the model scores each sentence, not just the whole text. Rewrite the third review so it becomes fully Positive." },
    ],
    notes: {
      time: "0:40–0:45",
      say: ["NLP pipelines tokenize and normalize text, then analyze it. The output is structured: labels, scores, entities, which we can store and query like any other data."],
      deeper: ["Try sarcasm live: 'Great, another two-hour line. Love it.' Most models struggle, which is a good reliability discussion."],
    },
  },

  // ───────── Module 4 · Speech ─────────
  {
    id: "m4-section",
    part: P,
    section: "Module 4 · Speech",
    variant: "section",
    kicker: "Module 4 · 30 min",
    title: "Introduction to AI speech concepts",
    subtitle: "Recognition · synthesis · SSML · voice agents",
    icon: "audio",
    notes: { time: "0:50", say: ["Imagine AI apps and agents you can simply talk to. That needs two capabilities."] },
  },
  {
    id: "m4-directions",
    part: P,
    section: "Module 4 · Speech",
    kicker: "Parts A–B · Speech recognition",
    title: "Two directions, one pipeline",
    blocks: [
      {
        type: "compare",
        left: { title: "Speech recognition (STT)", icon: "mic", items: ["audio → text", "Voice search, captions, transcribed voice messages"] },
        right: { title: "Speech synthesis (TTS)", icon: "volume", items: ["text → audio", "GPS voice, screen readers, TikTok voiceovers"] },
      },
      {
        type: "flow",
        caption: "How recognition works",
        steps: [
          { label: "Audio wave" },
          { label: "Spectrogram", sub: "features" },
          { label: "Acoustic model", sub: "→ phonemes" },
          { label: "Language model", sub: "→ words" },
          { label: "Text" },
        ],
      },
    ],
    notes: {
      time: "0:50–1:04",
      say: [
        "Sound is a wave. A microphone samples it thousands of times per second. The model converts the audio into features, often a spectrogram, a picture of which frequencies are loud at each moment.",
        "The acoustic model maps sound features to phonemes, like /k/ or /a/. The language model decides which words those phonemes most likely form. 'Recognize speech' and 'wreck a nice beach' sound almost identical.",
        "Recognition can run in real time (live captions) or in batch (recorded lectures, call-center audio).",
      ],
      ask: [
        { q: "Where have you already used each one today?" },
        {
          q: "Why might a model trained mostly on American English struggle in our classroom?",
          a: "Accents, Taglish code-switching, background noise like jeepneys and electric fans. That's inclusiveness; custom models trained on local speech help.",
        },
      ],
    },
  },
  {
    id: "m4-tts",
    part: P,
    section: "Module 4 · Speech",
    kicker: "Part C · Speech synthesis",
    title: "Text-to-speech, controlled with SSML",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "flow",
              variant: "steps",
              steps: [
                { label: "Text normalization", sub: "'₱245' → 'two hundred forty-five pesos'; 'Dr.' → 'Doctor'" },
                { label: "Linguistic analysis", sub: "Words → phonemes" },
                { label: "Prosody", sub: "Rhythm, stress, pitch, pauses" },
                { label: "Audio generation", sub: "A neural voice produces the waveform" },
              ],
            },
          ],
          [
            {
              type: "code",
              label: "SSML",
              code: `<speak version="1.0" xml:lang="en-US">
  <voice name="en-US-JennyNeural">
    Good morning, students.
    <break time="500ms"/>
    <prosody rate="slow" pitch="low">
      Enrollment closes on Friday.
    </prosody>
  </voice>
</speak>`,
            },
            { type: "callout", tone: "ask", text: "What do the break and prosody tags change?", answer: "A 500 ms pause; slower, lower delivery for emphasis." },
          ],
        ],
      },
    ],
    notes: {
      time: "1:04–1:14",
      say: ["Text-to-speech runs in roughly the reverse order.", "Developers control the voice with SSML. It uses tags, a bit like HTML, so it is readable even without coding experience."],
    },
  },
  {
    id: "m4-voice-agent",
    part: P,
    section: "Module 4 · Speech",
    kicker: "Part D · Speech-enabled apps and agents",
    title: "Listen, think, talk back",
    blocks: [
      {
        type: "flow",
        steps: [
          { label: "Voice in", icon: "mic" },
          { label: "STT", icon: "scan" },
          { label: "LLM / agent", icon: "bot" },
          { label: "TTS", icon: "audio" },
          { label: "Voice out", icon: "volume" },
        ],
      },
      { type: "callout", tone: "tip", text: "Add speech translation and a speaker in Filipino can be heard in Japanese." },
      {
        type: "callout",
        tone: "ask",
        text: "Design a voice feature for our school kiosk in one sentence. Which responsible AI principles must it respect?",
        answer: "Inclusiveness for accents and disabilities · privacy for recorded voices · transparency that it's an AI voice",
      },
    ],
    notes: {
      time: "1:14–1:20",
      say: ["Recap: recognition turns sound into phonemes into words. Synthesis turns words into phonemes into natural audio, controlled with SSML. Together with an LLM, they make conversational agents."],
      deeper: ["Voice cloning raises deepfake concerns; many providers require consent verification before creating a custom neural voice."],
    },
  },

  // ───────── Module 5 · Vision ─────────
  {
    id: "m5-section",
    part: P,
    section: "Module 5 · Computer vision",
    variant: "section",
    kicker: "Module 5 · 35 min",
    title: "Introduction to computer vision concepts",
    subtitle: "Pixels · convolution · CNNs · vision transformers · common tasks",
    icon: "eye",
    notes: { time: "1:20" },
  },
  {
    id: "m5-pixels",
    part: P,
    section: "Module 5 · Computer vision",
    kicker: "Parts A–B · Images are numbers",
    title: "An image is a grid of pixels; filters find patterns",
    blocks: [
      {
        type: "columns",
        ratio: "1fr 1fr 1.1fr",
        cols: [
          [
            {
              type: "pixels",
              title: "5×5 grayscale image",
              matrix: [
                [0, 0, 255, 0, 0],
                [0, 0, 255, 0, 0],
                [0, 0, 255, 0, 0],
                [0, 0, 255, 0, 0],
                [0, 0, 255, 0, 0],
              ],
            },
          ],
          [
            {
              type: "pixels",
              kernel: true,
              title: "Edge-detection kernel (Laplace)",
              matrix: [
                [-1, -1, -1],
                [-1, 8, -1],
                [-1, -1, -1],
              ],
            },
          ],
          [
            {
              type: "bullets",
              items: [
                "Grayscale: one number per pixel, 0 (black) to 255 (white)",
                "Color: three numbers, red, green, blue",
                "A 1920×1080 photo is over 6 million numbers",
                "Convolution: slide the filter, multiply, sum",
                "Flat areas → near zero; edges → big numbers",
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      time: "1:20–1:32",
      say: [
        "To a computer, an image is a grid of pixels.",
        "Vision models find patterns by sliding small grids called filters or kernels over the image. Each filter multiplies its numbers with the pixels under it and sums them. This operation is convolution.",
        "Flat areas cancel out to near zero; edges, where values change sharply, produce big numbers. Apply it to our grid and the line lights up.",
      ],
      deeper: ["Work one cell on the board: center of the bright column = 8×255 − 2×255 (the two neighbors above/below) = 1530; a dark pixel next to the line gives −3×255 = −765. Big magnitude = edge."],
    },
  },
  {
    id: "m5-cnn",
    part: P,
    section: "Module 5 · Computer vision",
    kicker: "Part C · Convolutional neural networks",
    title: "The network learns its own filters",
    blocks: [
      {
        type: "flow",
        steps: [
          { label: "Image", icon: "image" },
          { label: "Edges", sub: "early layers" },
          { label: "Shapes", sub: "middle layers" },
          { label: "Object parts", sub: "deep layers" },
          { label: "Class probabilities", sub: "mango 0.91 · papaya 0.06" },
        ],
      },
      {
        type: "cards",
        cols: 2,
        items: [
          { icon: "layers", title: "Vision transformers", text: "The same attention idea from LLMs, applied to image patches.", tone: "violet" },
          { icon: "sparkles", title: "Multimodal models", text: "Vision encoder + language model: “What's wrong with this circuit board?”", tone: "teal" },
        ],
      },
    ],
    notes: {
      time: "1:32–1:38",
      say: [
        "A CNN stacks many layers of filters, but the key is that the network learns the filter values during training.",
        "Combine a vision encoder with a language model and you get multimodal models that can take a photo and a question together.",
      ],
    },
  },
  {
    id: "m5-tasks",
    part: P,
    section: "Module 5 · Computer vision",
    kicker: "Part D · Common vision tasks",
    title: "Which question is the image answering?",
    blocks: [
      {
        type: "table",
        compact: true,
        emphasisCol: 0,
        head: ["Task", "Question it answers", "Output", "Example"],
        rows: [
          ["Image classification", "What is this image of?", "One label", "Ripe vs unripe mango"],
          ["Object detection", "What objects, and where?", "Labels + bounding boxes", "Count tricycles at a crossing"],
          ["Semantic segmentation", "Which pixels belong to what?", "A pixel mask", "Measure flooded area in a satellite photo"],
          ["Image analysis", "Describe the image", "Caption + tags", "Auto alt-text for a website"],
          ["OCR", "What text is in it?", "Text + positions", "Read plate numbers, scanned forms"],
          ["Face detection", "Where are faces?", "Face boxes + attributes", "Blur faces in event photos"],
        ],
      },
    ],
    notes: {
      time: "1:38–1:44",
      deeper: ["Classification gives one label for the whole image; detection gives a label per object plus where it is; segmentation goes down to every pixel."],
    },
  },
  {
    id: "m5-faces",
    part: P,
    section: "Module 5 · Computer vision",
    kicker: "Part D · Careful distinctions",
    title: "Detection ≠ recognition, and images can be generated",
    blocks: [
      {
        type: "compare",
        left: { title: "Face detection", icon: "eye", items: ["Finds that a face exists, and where", "Blur faces, count people"] },
        right: { title: "Facial recognition", icon: "lock", items: ["Identifies who it is", "Heavily restricted: privacy and fairness risks"] },
      },
      {
        type: "columns",
        cols: [
          [{ type: "callout", tone: "tip", text: "Image generation models usually use diffusion: start from random noise and refine it step by step." }],
          [
            {
              type: "callout",
              tone: "ask",
              text: "A parking system that reads plate numbers combines which two tasks?",
              answer: "Object detection to find the plate, then OCR to read it.",
            },
          ],
        ],
      },
    ],
    notes: { time: "1:44–1:48" },
  },
  {
    id: "ex5-matching",
    part: P,
    section: "Module 5 · Computer vision",
    kicker: "Example 5 · Activity 3 · groups of 4",
    title: "Workload matching cards",
    blocks: [
      {
        type: "table",
        compact: true,
        revealCol: 1,
        head: ["Scenario", "AI workload", "Specific task"],
        rows: [
          ["Sort product photos by category", "Computer vision", "Image classification"],
          ["Count vehicles passing a street camera", "Computer vision", "Object detection"],
          ["Read plate numbers at a parking gate", "Computer vision", "OCR"],
          ["Flag angry comments on a Facebook page", "NLP", "Sentiment analysis"],
          ["Voice commands for a self-service kiosk", "Speech", "Speech recognition"],
          ["Read announcements aloud for visually impaired users", "Speech", "Speech synthesis"],
          ["Encode application forms automatically", "Information extraction", "Form field extraction"],
          ["Answer employee questions from the handbook", "RAG", "Retrieval + grounded generation"],
          ["Draft a product description from notes", "Generative AI", "Text generation"],
          ["Book an appointment and send a confirmation", "Agent", "Tool use"],
        ],
      },
    ],
    notes: {
      time: "1:48–1:55",
      say: ["Print the scenarios on cards, shuffle, and have groups sort them under the six workload headings. First group with all correct, plus one new scenario of their own per workload, wins."],
    },
  },
  {
    id: "s2-wrap",
    part: P,
    section: "Module 5 · Computer vision",
    kicker: "Session 2 wrap-up · 1:55–2:00",
    title: "Text, speech, and vision in one picture",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "text", title: "Text", text: "Tokenized, normalized, analyzed for sentiment, entities and more.", tone: "blue" },
          { icon: "audio", title: "Speech", text: "Moves between audio and text through phonemes.", tone: "teal" },
          { icon: "eye", title: "Vision", text: "Pixel grids read by CNNs through layers of learned filters.", tone: "violet" },
        ],
      },
      { type: "callout", tone: "board", text: "Exit ticket: name one NLP, one speech, and one vision feature you would add to a system you are building." },
    ],
    notes: { say: ["Next session: turning documents into data, and grounding LLMs in your own data with RAG."] },
  },

  // ───────── Session 3 · Module 6 ─────────
  {
    id: "m6-section",
    part: P,
    section: "Module 6 · Information extraction",
    variant: "section",
    kicker: "Session 3 · Module 6 · 30 min",
    title: "AI-powered information extraction",
    subtitle: "Turn documents into database rows",
    icon: "filescan",
    notes: {
      time: "Session 3 · 0:00–0:10",
      ask: [{ q: "Rapid-fire: Stop words? TF-IDF? Acoustic model? SSML? Convolution? Detection vs classification?" }],
      say: ["Today: (1) turn documents into database rows, (2) ground LLMs in our own data with RAG, (3) design responsibly."],
    },
  },
  {
    id: "m6-pipeline",
    part: P,
    section: "Module 6 · Information extraction",
    kicker: "Parts A–B · The extraction pipeline",
    title: "From unstructured paper to structured data",
    subtitle: "Scanned forms, receipts, invoices, IDs, contracts, emails, even audio and video",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Capture", sub: "Scan or photograph the document", icon: "phone" },
          { label: "OCR", sub: "Read every character, with its position", icon: "scan" },
          { label: "Layout analysis", sub: "Paragraphs, tables, checkboxes, key-value regions", icon: "layers" },
          { label: "Field extraction", sub: "The fields you care about and their values", icon: "filescan" },
          { label: "Validate", sub: "Confidence scores and business rules", icon: "check" },
          { label: "Store", sub: "Insert into the database or next system", icon: "database" },
        ],
      },
      {
        type: "cards",
        cols: 2,
        items: [
          { title: "Prebuilt models", text: "Already know invoices, receipts, IDs, business cards.", tone: "blue" },
          { title: "Custom models", text: "Trained on 5–10 labeled samples of your own form.", tone: "violet" },
        ],
      },
    ],
    notes: {
      time: "0:10–0:26",
      say: [
        "Most of the world's data is unstructured. Information extraction bridges unstructured and structured.",
        "OCR alone gives you a pile of text. The magic is in steps 3 and 4: the model understands that the number near 'TOTAL' at the bottom of a receipt is the total, not the TIN or the date.",
        "Newer services go beyond documents into general content understanding: speaker, topic, and action items from a recorded meeting.",
      ],
      ask: [{ q: "How many paper forms does a student fill out from enrollment to graduation? Who encodes them?", a: "Let them realize how much manual encoding happens." }],
    },
  },
  {
    id: "ex6-receipt",
    part: P,
    section: "Module 6 · Information extraction",
    kicker: "Example 6 · From receipt to table",
    title: "Fields, confidence, and two tables",
    blocks: [
      {
        type: "columns",
        ratio: "1fr 1.25fr",
        cols: [
          [
            {
              type: "bars",
              title: "Extracted fields · confidence",
              max: 1,
              items: [
                { label: "Merchant · Jollibee Alaminos", value: 0.98 },
                { label: "Date · 2026-10-01", value: 0.95 },
                { label: "Total · ₱245.00", value: 0.42, highlight: true, note: "Review" },
              ],
            },
            {
              type: "callout",
              tone: "ask",
              text: "The total is read with 0.42 confidence. What should the system do?",
              answer: "Don't auto-save. Route to a human review queue; a threshold like 0.80 decides (human-in-the-loop).",
            },
          ],
          [
            {
              type: "table",
              compact: true,
              caption: "Receipts",
              head: ["Receipt no.", "Merchant", "Date", "Total"],
              rows: [["1", "Jollibee Alaminos", "2026-10-01", "₱245.00"]],
            },
            {
              type: "table",
              compact: true,
              caption: "Receipt items",
              head: ["Receipt no.", "Item", "Qty", "Price"],
              rows: [
                ["1", "Chickenjoy 1pc", "2", "₱198.00"],
                ["1", "Coke Float", "1", "₱47.00"],
              ],
            },
          ],
        ],
      },
    ],
    notes: {
      time: "0:26–0:35",
      ask: [{ q: "Why are the items kept in a separate table from the receipt details?", a: "One receipt has many items. Separate tables mean the store name and date aren't repeated on every line." }],
      deeper: ["Low confidence on the total connects to reliability and accountability: a person checks before saving."],
    },
  },
  {
    id: "m6-responsible",
    part: P,
    section: "Module 6 · Information extraction",
    kicker: "Part D · Responsible extraction",
    title: "Easier to use means easier to misuse",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "filter", title: "Collect only what you need", text: "Data minimization.", tone: "blue" },
          { icon: "lock", title: "Secure it", text: "Encrypt at rest and in transit.", tone: "violet" },
          { icon: "key", title: "Control access", text: "Only the right roles can see PII.", tone: "teal" },
        ],
      },
      { type: "callout", tone: "warn", text: "IDs and forms are full of PII. The Data Privacy Act of 2012 (RA 10173) applies to everything you extract." },
      {
        type: "callout",
        tone: "say",
        text: "OCR reads the text, layout analysis understands the structure, extraction returns fields with confidence, and validation plus human review keep bad data out of your tables.",
      },
    ],
    notes: { time: "0:35–0:40" },
  },

  // ───────── Module 7 · RAG ─────────
  {
    id: "m7-section",
    part: P,
    section: "Module 7 · RAG",
    variant: "section",
    kicker: "Module 7 · 40 min",
    title: "Retrieval-augmented generation",
    subtitle: "How a RAG solution prepares, retrieves, and uses data to generate answers",
    icon: "book",
    notes: { time: "0:40" },
  },
  {
    id: "m7-why",
    part: P,
    section: "Module 7 · RAG",
    kicker: "Part A · Why LLMs need RAG",
    title: "An open-book exam for the model",
    subtitle: "Demo: “What is the attendance policy of STI College Alaminos for 2026?”",
    blocks: [
      {
        type: "cards",
        cols: 3,
        items: [
          { icon: "timer", title: "Knowledge cutoff", text: "The model only knows its training data.", tone: "amber", tag: "Problem 1" },
          { icon: "lock", title: "No private data", text: "It has never seen our handbooks, memos, databases.", tone: "violet", tag: "Problem 2" },
          { icon: "alert", title: "Hallucination", text: "When it doesn't know, it may invent.", tone: "pink", tag: "Problem 3" },
        ],
      },
      {
        type: "flow",
        steps: [
          { label: "Retrieve", sub: "relevant facts from our data", icon: "search" },
          { label: "Augment", sub: "the prompt with them", icon: "layers" },
          { label: "Generate", sub: "a grounded answer", icon: "sparkles" },
        ],
      },
    ],
    notes: {
      time: "0:40–0:46",
      say: ["Show the vague or invented answer first.", "Think of it as an open-book exam. The model is still the student, but now we hand it the right pages."],
    },
  },
  {
    id: "m7-pipeline",
    part: P,
    section: "Module 7 · RAG",
    kicker: "Part B · Preparing the data",
    title: "The RAG pipeline in two phases",
    blocks: [
      {
        type: "columns",
        ratio: "4fr 3fr",
        cols: [
          [
            {
              type: "flow",
              variant: "steps",
              caption: "Indexing phase · ahead of time",
              steps: [
                { label: "Ingest", sub: "PDFs, web pages, database rows" },
                { label: "Chunk", sub: "Passages that fit the context window" },
                { label: "Embed", sub: "Each chunk → a vector" },
                { label: "Index", sub: "Vectors + text + metadata" },
              ],
            },
          ],
          [
            {
              type: "flow",
              variant: "steps",
              caption: "Query phase · every question",
              steps: [
                { label: "Retrieve", sub: "Embed the question; find similar chunks" },
                { label: "Augment", sub: "Insert chunks into a prompt template" },
                { label: "Generate", sub: "Answer from context, with citations" },
              ],
            },
          ],
        ],
      },
      {
        type: "callout",
        tone: "ask",
        text: "Our student handbook is 80 pages. How would you chunk it?",
        answer: "By section heading, with page numbers as metadata.",
      },
    ],
    notes: {
      time: "0:46–0:56",
      say: [
        "Chunking matters more than students expect. Too big, and you waste tokens and dilute relevance. Too small, and a chunk loses its context.",
        "Common strategies: fixed size, such as 500 tokens with some overlap; or split by structure, such as one chunk per handbook section. Store metadata like title, page, and date.",
      ],
    },
  },
  {
    id: "ex7-retrieval",
    part: P,
    section: "Module 7 · RAG",
    kicker: "Part C · Example 7 · Retrieval",
    title: "How retrieval finds the right passage",
    subtitle: "Question: “How is my final grade computed?”",
    blocks: [
      {
        type: "bars",
        max: 1,
        items: [
          { label: "“Grading: prelim 20%, midterm 20%, pre-final 20%, final 40%.”", value: 0.94, highlight: true, note: "Retrieved" },
          { label: "“Uniform policy: wear the prescribed uniform Monday to Thursday.”", value: 0.18 },
          { label: "“Library hours: 7:00 AM to 6:00 PM.”", value: 0.11 },
        ],
      },
      {
        type: "cards",
        cols: 3,
        items: [
          { title: "Vector search", text: "Cosine similarity matches meaning, not spelling.", tone: "blue" },
          { title: "Keyword search", text: "Exact terms like course code 'IT2503'.", tone: "amber" },
          { title: "Hybrid + semantic ranking", text: "Combine both, re-rank, keep the top-k (3–5).", tone: "violet" },
        ],
      },
    ],
    notes: {
      time: "0:56–1:06",
      say: [
        "Analogy: a librarian does not read every book to answer you. They go to the shelf whose topic matches your question.",
        "The question and the grading passage share almost no exact words ('computed' vs 'grading'), yet score highest because the system compares meaning. That's the 'R' in RAG.",
      ],
    },
  },
  {
    id: "m7-augment",
    part: P,
    section: "Module 7 · RAG",
    kicker: "Part D · Augment and generate",
    title: "The prompt is just text",
    blocks: [
      {
        type: "columns",
        ratio: "1.4fr 1fr",
        cols: [
          [
            {
              type: "code",
              label: "Grounded prompt",
              code: `SYSTEM: You are the STI Alaminos student assistant.
Answer ONLY from the sources below. If the answer
is not in the sources, say "I don't know."
Cite the source title and page for each fact.

SOURCES:
[1] Student Handbook, p. 34: Grading: prelim 20%,
    midterm 20%, ...
[2] Student Handbook, p. 35: A final grade below
    75 is failing ...

USER: How is my final grade computed?`,
            },
          ],
          [
            {
              type: "bullets",
              items: [
                { text: "“Answer only from the sources”", sub: ["keeps the answer grounded"] },
                { text: "“Say I don't know”", sub: ["prevents invented answers"] },
                { text: "Citations", sub: ["let users verify, which supports transparency"] },
              ],
            },
          ],
        ],
      },
    ],
    notes: { time: "1:06–1:13", say: ["Now we build the prompt. It is just text: instructions, the retrieved passages, and the question, joined together."] },
  },
  {
    id: "m7-vs-ft",
    part: P,
    section: "Module 7 · RAG",
    kicker: "Part E · Evaluating and choosing RAG",
    title: "RAG vs fine-tuning",
    blocks: [
      {
        type: "columns",
        ratio: "1.6fr 1fr",
        cols: [
          [
            {
              type: "table",
              head: ["", "RAG", "Fine-tuning"],
              emphasisCol: 0,
              rows: [
                ["What changes", "The data you supply at query time", "The model's weights"],
                ["Updating knowledge", "Re-index documents", "Retrain the model"],
                ["Cost to update", "Low", "High"],
                ["Citations", "Natural", "Not built in"],
                ["Best for", "Facts that change; private documents", "Style, tone, specialized formats"],
              ],
            },
          ],
          [
            {
              type: "cards",
              cols: 2,
              items: [
                { title: "Groundedness", text: "Is the answer supported by the retrieved sources?", tone: "teal" },
                { title: "Relevance", text: "Were the right chunks retrieved? Does it address the question?", tone: "blue" },
              ],
            },
            { type: "callout", tone: "tip", text: "RAG is often exposed as a tool for an agent: the agent decides when to search the knowledge base." },
          ],
        ],
      },
    ],
    notes: {
      time: "1:13–1:20",
      say: ["RAG = prepare data (chunk, embed, index) once; then for each question retrieve, augment, generate. It turns a general LLM into an assistant that knows your data and can prove it."],
      ask: [{ q: "When would you choose RAG over fine-tuning a model on your data?", a: "When facts change often, data is private, or you need citations." }],
    },
  },

  // ───────── Closing · Responsible AI ─────────
  {
    id: "rai-practice",
    part: P,
    section: "Closing · Responsible AI",
    kicker: "Closing · Responsible AI revisited",
    title: "A four-stage practice for generative AI",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Map", sub: "Potential harms: what could this system produce or do wrong?", icon: "map" },
          { label: "Measure", sub: "Test with real and adversarial prompts (red teaming).", icon: "gauge" },
          { label: "Mitigate", sub: "Suitable model, content filters, safe system prompt, RAG, clear UI.", icon: "shield" },
          { label: "Operate", sub: "Monitor, log, collect feedback, have an incident plan.", icon: "activity" },
        ],
      },
      { type: "callout", tone: "board", text: "Fairness · Reliability and safety · Privacy and security · Inclusiveness · Transparency · Accountability" },
    ],
    notes: { time: "1:20–1:25", say: ["In Session 1 we listed six principles. Now that you know every workload, let's apply them."] },
  },
  {
    id: "rai-rapid",
    part: P,
    section: "Closing · Responsible AI",
    kicker: "Rapid round",
    title: "Call out the principle",
    blocks: [
      {
        type: "table",
        revealCol: 1,
        head: ["Scenario", "Principle"],
        rows: [
          ["A loan model rejects more applicants from one province", "Fairness"],
          ["A chatbot gives dangerous medicine dosages", "Reliability and safety"],
          ["Uploaded IDs are stored unencrypted", "Privacy and security"],
          ["A voice kiosk fails for speakers with strong accents", "Inclusiveness"],
          ["Students aren't told feedback was AI-generated", "Transparency"],
          ["No one can explain or reverse an automated denial", "Accountability"],
        ],
      },
    ],
    notes: { time: "1:25–1:30", say: ["Read each scenario; students call out the principle. Press → to reveal all."] },
  },
  {
    id: "act4",
    part: P,
    section: "Closing · Responsible AI",
    kicker: "Activity 4 · 20 min in class",
    title: "Design-an-AI-feature challenge",
    subtitle: "Pick a system: sari-sari store POS, barangay records, clinic appointments, or your capstone",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        caption: "Your 1-slide proposal",
        steps: [
          { label: "Problem + workload", sub: "The problem and the AI workload that solves it", icon: "target" },
          { label: "Data", sub: "What it needs; tables or vector index", icon: "database" },
          { label: "Risk", sub: "One risk → a principle → a mitigation", icon: "shield" },
          { label: "Human in the loop", sub: "Where a person stays in control", icon: "usercheck" },
        ],
      },
      { type: "callout", tone: "board", text: "12 min to design · 8 min for 3–4 groups to present 2 minutes each" },
    ],
    notes: { time: "1:30–1:50" },
  },
  {
    id: "p1-synthesis",
    part: P,
    section: "Closing · Responsible AI",
    kicker: "Final synthesis",
    title: "One enrollment assistant, every workload",
    blocks: [
      {
        type: "flow",
        variant: "steps",
        steps: [
          { label: "Speech recognition", sub: "A student speaks a question", icon: "mic" },
          { label: "Agent", sub: "Decides what to do", icon: "bot" },
          { label: "Information extraction", sub: "Reads the uploaded Form 138", icon: "filescan" },
          { label: "NLP", sub: "Checks the tone of the message", icon: "text" },
          { label: "RAG", sub: "Answers policy questions from the handbook", icon: "book" },
          { label: "Speech synthesis", sub: "Replies out loud", icon: "volume" },
        ],
      },
      { type: "callout", tone: "say", text: "Every step is checked against the six principles." },
    ],
    notes: {
      time: "1:58–2:00",
      say: [
        "A modern AI system rarely uses just one workload.",
        "Whatever your field, AI is now part of the professional toolkit, like spreadsheets and the internet. The professionals who stand out know which workload fits a problem, can use or build it well, and can explain why it is safe.",
      ],
      deeper: ["Homework: complete the remaining Microsoft Learn modules and submit badge screenshots, plus the full Activity 4 slide for groups that didn't present."],
    },
  },
  {
    id: "p1-discussion",
    part: P,
    section: "Closing · Responsible AI",
    kicker: "Discussion questions",
    title: "Think, pair, share",
    blocks: [
      {
        type: "bullets",
        numbered: true,
        items: [
          "Is a calculator app AI? Is autocorrect? Where do you draw the line, and why?",
          "Why can an LLM write a convincing essay but give a wrong answer about this semester's enrollment dates?",
          "What is the practical difference between a chatbot and an agent, and why do agents raise the stakes for security?",
          "Speech recognition struggles with Taglish and regional accents. Which principle does that touch, and who is affected?",
          "When would you choose RAG over fine-tuning a model on your data?",
          "An extraction model reads a total as 2,450 instead of 245.00. Where in your system should that error be caught?",
          "Should students be told when feedback on their work was AI-generated? Connect to transparency and accountability.",
        ],
      },
    ],
    notes: {
      ask: [
        { q: "Calculator / autocorrect?", a: "Calculator: rules, not AI. Autocorrect: modern versions use language models, so it's AI." },
        { q: "Essay vs enrollment dates?", a: "Fluency comes from patterns; facts after the cutoff or private facts aren't in training data → hallucination." },
        { q: "2,450 vs 245.00?", a: "At validation: confidence threshold + business rules (total = sum of items) → human review." },
      ],
    },
  },
];
