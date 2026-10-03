import type { Block, Slide } from "@/lib/types";
import { part1 } from "./part1";
import { part2 } from "./part2";
import { extraNotes } from "./extraNotes";
import { notesV2 } from "./notesV2";
import { glossary1, glossary2 } from "./glossary";

type Q = { q: string; options: string[]; answer: number; why: string };

const A = 0, B = 1, C = 2, D = 3;

const quiz1: Q[] = [
  { q: "What does an AI model learn during training?", options: ["The syntax rules of a programming language", "Patterns that map input features to labels", "The fastest network path to a database", "The hardware specs of the training computer"], answer: B, why: "Training finds the relationship between features and labels." },
  { q: "Using a trained model to make predictions on new data is called:", options: ["Tokenization", "Labeling", "Chunking", "Inferencing"], answer: D, why: "Inferencing is applying the trained model to unseen data." },
  { q: "How does a large language model generate text?", options: ["It predicts the most probable next token", "It searches the web for an exact answer", "It copies whole sentences from training files", "It runs if-else rules written by developers"], answer: A, why: "LLMs generate one token at a time by probability." },
  { q: "A fluent but factually false output from an LLM is called:", options: ["An embedding", "A token overflow", "A hallucination", "A system prompt"], answer: C, why: "Hallucination: confident output not supported by facts." },
  { q: "What makes an AI agent different from a basic chatbot?", options: ["It displays responses in a richer interface", "It always runs offline on the user's device", "It can call tools to take actions toward a goal", "It works without any instructions or prompts"], answer: C, why: "Agents combine an LLM with tools, instructions, and memory." },
  { q: "Determining whether a product review is positive or negative is:", options: ["Sentiment analysis", "Object detection", "Speech synthesis", "Key phrase extraction"], answer: A, why: "Sentiment analysis scores positive, negative, neutral, or mixed." },
  { q: "Identifying “Alaminos” as a Location in a sentence is:", options: ["Language detection", "Summarization", "Image classification", "Named entity recognition"], answer: D, why: "NER classifies entities such as Person, Location, Date." },
  { q: "Converting a recorded lecture into written captions is:", options: ["Speech synthesis", "Speech recognition", "Text translation", "Semantic segmentation"], answer: B, why: "Speech recognition is speech-to-text." },
  { q: "Locating every car in a photo and drawing a box around each is:", options: ["Object detection", "Image classification", "Semantic segmentation", "Optical character recognition"], answer: A, why: "Object detection returns class plus bounding box." },
  { q: "Which markup language controls pitch and speed in text-to-speech?", options: ["HTML", "XAML", "SSML", "JSON"], answer: C, why: "SSML is the Speech Synthesis Markup Language." },
  { q: "What does information extraction typically return from a scanned invoice?", options: ["A generated summary paragraph", "A new synthetic invoice image", "A spoken audio reading of it", "Key-value pairs of field data"], answer: D, why: "Extraction outputs structured fields ready for a database." },
  { q: "In a RAG solution, what happens during the retrieval step?", options: ["The model is retrained on the new files", "Relevant chunks are found by similarity", "The final answer is translated to English", "Scanned pages are converted to text by OCR"], answer: B, why: "Retrieval uses vector similarity to find relevant chunks." },
  { q: "What is the main benefit of grounding an LLM's response?", options: ["Faster training on the GPU", "Smaller model file sizes", "Answers traceable to sources", "No need to write any prompts"], answer: C, why: "Grounded answers cite the supplied source content." },
  { q: "A model approves fewer loans for applicants of one gender. Which principle is violated?", options: ["Fairness", "Inclusiveness", "Transparency", "Privacy and security"], answer: A, why: "Unequal outcomes across groups violate fairness." },
  { q: "Users are told how an AI system reaches decisions and what its limits are. Which principle is this?", options: ["Reliability and safety", "Accountability", "Inclusiveness", "Transparency"], answer: D, why: "Transparency means users understand how and how well it works." },
];

const quiz2: Q[] = [
  { q: "What is Microsoft Foundry?", options: ["A Python library for training models", "A database service for storing images", "A platform that unites models, tools, and agents", "A web browser built for chatting with AI"], answer: C, why: "Foundry brings models, Foundry Tools, and agents into one platform." },
  { q: "In Foundry, the workspace that holds your models, agents, and files is a:", options: ["Project", "Subscription", "Analyzer", "Knowledge source"], answer: A, why: "A project is the workspace for models, agents, and files." },
  { q: "Before you can use a model from the catalog, you must:", options: ["Train it on your own data first", "Download it to your own laptop", "Convert it into an agent", "Deploy it to your project"], answer: D, why: "Deploying makes a model available to your project." },
  { q: "Lowering a model's temperature generally produces:", options: ["Longer and more detailed answers", "More consistent, predictable answers", "Answers in more languages", "Faster responses from the model"], answer: B, why: "Low temperature reduces randomness." },
  { q: "What makes a Foundry agent different from a plain chat model?", options: ["It chooses and uses tools to complete tasks", "It always runs on a larger, costlier model", "It responds only in structured table format", "It works without any instructions at all"], answer: A, why: "Agents decide which tools to use to complete tasks." },
  { q: "Which is best for masking phone numbers the same way across a million logs?", options: ["An image-generation model", "Azure Speech transcription", "Azure Language PII detection", "A Foundry IQ knowledge base"], answer: C, why: "PII detection gives consistent, structured masking." },
  { q: "Which Foundry Tool turns recorded lectures into captions?", options: ["Azure Language", "Content Understanding", "Foundry IQ", "Azure Speech"], answer: D, why: "Azure Speech does speech to text." },
  { q: "Which kind of model can answer questions about an uploaded photo?", options: ["Speech model", "Multimodal model", "Translation model", "Embedding model"], answer: B, why: "Multimodal models accept images as input." },
  { q: "Hidden labels showing that an image was made by AI are called:", options: ["Content filters", "Confidence scores", "Content credentials", "Access roles"], answer: C, why: "Content credentials label AI-generated media." },
  { q: "In Content Understanding, the reusable recipe that defines what to extract is the:", options: ["Analyzer", "Playground", "Deployment", "Knowledge base"], answer: A, why: "An analyzer holds the schema of fields to extract." },
  { q: "A field the AI works out rather than copies, such as a category, is:", options: ["Extracted", "Masked", "Indexed", "Generated"], answer: D, why: "Generated fields are inferred, not copied." },
  { q: "What is the main purpose of Foundry IQ?", options: ["Create images for marketing campaigns", "Ground agent answers in organizational data", "Translate live speech between languages", "Train custom computer vision models"], answer: B, why: "Foundry IQ gives agents grounded, cited answers." },
  { q: "In agentic retrieval, a complex question is first broken into:", options: ["Smaller sub-questions", "Separate image files", "Short audio segments", "Individual billing units"], answer: A, why: "Sub-questions each retrieve their best passages." },
  { q: "An agent must not quote files the user cannot open. Which principle is this?", options: ["Fairness", "Inclusiveness", "Transparency", "Privacy and security"], answer: D, why: "Permission-aware retrieval protects private data." },
  { q: "What is the best practice at the end of each lab?", options: ["Upgrade to the largest model", "Share the project link publicly", "Delete unused resources to save credit", "Turn off content filters for speed"], answer: C, why: "Deleting resources avoids using up credit." },
];

function quizSlides(prefix: string, part: "Part 1" | "Part 2", section: string, label: string, qs: Q[]): Slide[] {
  const out: Slide[] = [];
  for (let i = 0; i < qs.length; i += 3) {
    const chunk = qs.slice(i, i + 3);
    const block: Block = { type: "quiz", start: i + 1, questions: chunk };
    out.push({
      id: `${prefix}-${i / 3 + 1}`,
      part,
      section,
      kicker: `${label} · items ${i + 1}–${i + chunk.length} of ${qs.length}`,
      title: i === 0 ? `${label}: choose the best answer` : `${label}, continued`,
      blocks: [block],
      notes: {
        say: ["Read each item aloud. Give students 30–45 seconds per item, then press → to reveal the answers and rationale."],
        ask: chunk.map((q, k) => ({
          q: `${i + k + 1}. ${q.q}`,
          a: `${"ABCD"[q.answer]}. ${q.options[q.answer]}: ${q.why}`,
        })),
      },
    });
  }
  return out;
}

function glossarySlides(prefix: string, part: "Part 1" | "Part 2", section: string, label: string, terms: string[][]): Slide[] {
  const per = 15;
  const out: Slide[] = [];
  for (let i = 0; i < terms.length; i += per) {
    out.push({
      id: `${prefix}-${i / per + 1}`,
      part,
      section,
      kicker: `${label} · ${i / per + 1} of ${Math.ceil(terms.length / per)}`,
      title: label,
      blocks: [{ type: "glossary", terms: terms.slice(i, i + per).map(([term, def]) => ({ term, def })) }],
      notes: { say: ["Use as a reference. Ask students to explain any term in their own words with a campus example."] },
    });
  }
  return out;
}

const intro: Slide[] = [
  {
    id: "title",
    part: "Intro",
    section: "Welcome",
    variant: "title",
    kicker: "AI-901 · Azure AI Fundamentals",
    title: "AI Concepts & AI Applications on Azure",
    subtitle: "From “What is AI?” to grounded agents in Microsoft Foundry",
    icon: "sparkles",
    notes: {
      say: [
        "This discussion has two parts. Part 1 builds the concepts; Part 2 puts them into practice in Microsoft Foundry.",
        "It covers 14 Microsoft Learn modules across 6 sessions of about 2 hours each, at beginner level, aligned with the AI-900 / AI-901 fundamentals scope.",
      ],
      deeper: [
        "Presenter shortcuts: → / Space next · ← previous · F fullscreen · P presenter view · N notes · S sidebar · G overview · T theme · ? help.",
      ],
    },
  },
  {
    id: "overview",
    part: "Intro",
    section: "Welcome",
    kicker: "Module overview",
    title: "Two parts, six sessions, fourteen modules",
    blocks: [
      {
        type: "columns",
        cols: [
          [
            {
              type: "table",
              compact: true,
              head: ["Item", "Detail"],
              emphasisCol: 0,
              rows: [
                ["Source", "Two Microsoft Learn learning paths (7 modules each)"],
                ["Learners", "Mixed backgrounds, IT and non-IT; no programming"],
                ["Prerequisites", "Basic computing concepts and math"],
                ["Delivery", "6 sessions × 2 hours: lecture, live demo, activity"],
                ["Tools", "Browser, any AI chat tool, Microsoft Foundry portal"],
              ],
            },
          ],
          [
            {
              type: "cards",
              cols: 2,
              items: [
                { icon: "brain", title: "Part 1 · Concepts", text: "Sessions 1–3: AI, generative AI, NLP, speech, vision, extraction, RAG, responsible AI.", tone: "violet", tag: "S1–S3" },
                { icon: "cloud", title: "Part 2 · Azure", text: "Sessions 4–6: Foundry models, agents, Language, Speech, vision, Content Understanding, Foundry IQ.", tone: "blue", tag: "S4–S6" },
              ],
            },
          ],
        ],
      },
    ],
    notes: { say: ["Each session follows the same rhythm: hook (5 min), discussion, live demo, activity, and exit check. Adjust times to your class period."] },
  },
  {
    id: "outcomes",
    part: "Intro",
    section: "Welcome",
    kicker: "Learning outcomes · Part 1",
    title: "By the end of Part 1 you can…",
    blocks: [
      {
        type: "bullets",
        numbered: true,
        items: [
          "Define artificial intelligence and distinguish it from traditional rule-based programming",
          "Identify the six AI workloads: generative AI and agents, NLP, speech, computer vision, information extraction, and RAG",
          "Explain how an LLM generates text using tokens, prompts, and probability",
          "Differentiate a chatbot from an AI agent in terms of tools, memory, and autonomy",
          "Match a business scenario to the correct AI workload and service category",
          "Describe how a RAG pipeline grounds an LLM's answers in an organization's own data",
          "Apply Microsoft's six responsible AI principles to a given AI solution",
        ],
      },
    ],
    notes: {},
  },
  {
    id: "flow",
    part: "Intro",
    section: "Welcome",
    kicker: "Session flow · Part 1",
    title: "Hook, discuss, demo, activity, exit check",
    blocks: [
      {
        type: "table",
        head: ["Session", "Modules", "Demo", "Activity"],
        emphasisCol: 0,
        rows: [
          ["1", "M1 Intro to AI concepts · M2 Generative AI and agents", "Three prompt styles; same question asked three times", "Rule-based vs AI sorting; prompt makeover"],
          ["2", "M3 NLP · M4 Speech · M5 Computer vision", "Sentiment + entities on reviews; image tagging", "Workload matching cards"],
          ["3", "M6 Information extraction · M7 RAG · Responsible AI", "Receipt extraction into a table; RAG on a school handbook", "Design-an-AI-feature challenge + quiz"],
        ],
      },
    ],
    notes: { say: ["The speaker notes follow the v2 script: plain paragraphs are what you say; bracketed lines are cues for what to do, write, or expect. Use your own words wherever they come more naturally."] },
  },
];

const closing: Slide[] = [
  {
    id: "review-center",
    part: "Close",
    section: "Close",
    kicker: "Review · on your own or in class",
    title: "Practice test and flashcards",
    subtitle: "Built from the 200-item AI-901 practice exam and both glossaries. Everything reshuffles on every start.",
    blocks: [
      {
        type: "launch",
        items: [
          {
            href: "/review/test",
            icon: "list",
            title: "Practice test",
            text: "Choose how many questions (1–200) and which domains. Practice mode explains every answer; exam mode scores you at the end.",
            cta: "Start a practice test",
            tone: "blue",
          },
          {
            href: "/review/flashcards",
            icon: "layers",
            title: "Flashcards",
            text: "Flip through glossary terms and exam questions. Sort cards into “got it” and “still learning”, then drill the ones you missed.",
            cta: "Open flashcards",
            tone: "violet",
          },
        ],
      },
    ],
    notes: {
      say: ["Before we close: everything you need to review is in one place. The practice test draws from the 200-question AI-901 practice exam, and the flashcards cover both glossaries plus the exam questions."],
      ask: [{ q: "How many questions will you try tonight?", a: "Suggest 25 in practice mode first, then a 50-question run in exam mode before the real exam." }],
      deeper: [
        "Press E at any time during the deck to open the review center in a new tab.",
        "Questions and answer choices are reshuffled on every start, so retakes test understanding rather than memorized positions.",
      ],
    },
  },
  {
    id: "thanks",
    part: "Close",
    section: "Close",
    variant: "end",
    kicker: "Salamat!",
    title: "Learn the concepts, and you can learn any tool.",
    subtitle: "Homework: finish both Microsoft Learn paths, submit badge screenshots, and a one-page plan for an AI feature at a real organization.",
    icon: "cap",
    notes: {
      say: ["Thank the class. Remind them to delete any Azure resource groups they created."],
      deeper: ["Sources: Microsoft Learn: AI concepts for developers and technology professionals; Get started with AI applications and agents on Azure."],
    },
  },
];

const allSlides: Slide[] = [
  ...intro,
  ...part1,
  ...quizSlides("quiz1", "Part 1", "Part 1 · Quiz & glossary", "Part 1 exit quiz", quiz1),
  ...glossarySlides("gloss1", "Part 1", "Part 1 · Quiz & glossary", "Part 1 glossary", glossary1),
  ...part2,
  ...quizSlides("quiz2", "Part 2", "Part 2 · Quiz & glossary", "Part 2 quiz", quiz2),
  ...glossarySlides("gloss2", "Part 2", "Part 2 · Quiz & glossary", "Part 2 glossary", glossary2),
  ...closing,
];

/**
 * Final notes per slide: the v2 conversational script where one exists (it replaces the
 * v1 "Say"/"Ask" lines), plus the supplementary discussion notes from extraNotes.
 */
export const slides: Slide[] = allSlides.map((s) => {
  const v2 = notesV2[s.id];
  const extra = extraNotes[s.id] ?? {};
  const old = s.notes;
  return {
    ...s,
    notes: {
      time: v2?.time ?? old.time ?? extra.time,
      script: v2?.script,
      say: v2 ? [] : [...(old.say ?? []), ...(extra.say ?? [])],
      ask: v2 ? [...(v2.ask ?? []), ...(extra.ask ?? [])] : [...(old.ask ?? []), ...(extra.ask ?? [])],
      deeper: [...(v2?.deeper ?? old.deeper ?? []), ...(extra.deeper ?? [])],
    },
  };
});

/** Whether a slide contains content hidden until the presenter reveals it. */
export function hasReveal(slide: Slide): boolean {
  const check = (blocks: Block[] | undefined): boolean =>
    !!blocks?.some((b) => {
      if (b.type === "columns") return b.cols.some(check);
      if (b.type === "quiz") return true;
      if (b.type === "table") return b.revealCol !== undefined;
      if (b.type === "callout") return !!b.answer;
      return false;
    });
  return check(slide.blocks);
}
