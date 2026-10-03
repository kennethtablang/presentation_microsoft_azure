import type { Notes } from "@/lib/types";

/**
 * Extra talk-track and discussion material, merged into a slide's notes by id.
 * Keeps the main slide files focused on on-screen content.
 */
export const extraNotes: Record<string, Notes> = {
  overview: {
    ask: [{ q: "Who here has already used an AI tool for school or work this week? For what?", a: "Use answers to gauge the room's starting point; mixed IT and non-IT is expected." }],
    deeper: ["Frame the split: Part 1 gives vocabulary that survives product changes; Part 2 proves the concepts are real by building with them."],
  },
  outcomes: {
    say: ["These are the seven outcomes for Part 1. The exit quiz in Session 3 maps one-to-one to them, so nothing on the quiz is a surprise."],
    ask: [{ q: "Which outcome sounds hardest to you right now?", a: "Usually 'how an LLM generates text' or RAG. Promise both get a full demo." }],
    deeper: ["Outcome 5 (matching scenarios to workloads) is the single most tested skill on the AI-900/AI-901 fundamentals exam."],
  },
  flow: {
    ask: [{ q: "What do you expect to be able to build by the end of Session 3?", a: "Steer toward: design an AI feature, choose the right workload, explain its risks." }],
    deeper: ["Exit checks every session give you quick formative data; review them before the next session's opening."],
  },
  "m2-section": {
    deeper: ["Transition hook: 'Everything you've seen so far classifies or predicts. Now we look at AI that creates — and why that changes the risks.'"],
  },
  "s2-open": {
    say: ["Today we move from how AI thinks to how it perceives: reading, hearing, and seeing."],
    deeper: ["If exit tickets showed confusion between tokens and embeddings, re-draw the 'king/queen/kangkong' plot before moving on."],
  },
  "m3-section": {
    say: ["Text is the most common data in any organization: emails, chat logs, feedback forms, reports. NLP is how software makes sense of it at scale."],
    ask: [{ q: "How much written feedback does our school collect each semester? Who reads all of it?", a: "Usually nobody reads all of it, which is exactly the problem NLP solves." }],
  },
  "m3-tasks": {
    say: ["Every row here returns structured output — a label, a score, a list — which means you can store it in a table and query it."],
    deeper: ["PII detection is often the first NLP task a real organization deploys, because it reduces risk before any data is shared or analyzed."],
  },
  "m4-section": {
    ask: [{ q: "When was the last time you talked to a machine and it understood you?", a: "Voice assistants, voice search, car infotainment, call-center IVRs." }],
  },
  "m5-section": {
    say: ["Vision is AI's oldest success story: from reading zip codes on envelopes in the 1990s to self-checkout cameras today."],
    ask: [{ q: "Where on campus could a camera plus AI genuinely help, without becoming surveillance?", a: "Counting library occupancy, reading equipment serial numbers, flood monitoring. Push on where the line is." }],
  },
  "m5-tasks": {
    ask: [{ q: "A flood-response team wants to know how much of a barangay is underwater. Which task?", a: "Semantic segmentation: it labels every pixel, so you can measure area." }],
  },
  "m5-faces": {
    say: [
      "Be careful with the difference between face detection, finding that a face exists, and facial recognition, identifying who it is. Recognition is heavily restricted because of privacy and fairness risks.",
      "Generative AI also works for images: diffusion models start from random noise and refine it step by step.",
    ],
    ask: [{ q: "A parking system that reads plate numbers: which two tasks does it combine?", a: "Object detection to find the plate, OCR to read it." }],
    deeper: ["Microsoft restricts access to facial recognition features behind an application and use-case review — a concrete example of accountability in practice."],
  },
  "ex5-matching": {
    ask: [{ q: "Which card was most argued about in your group, and why?", a: "Often 'agent vs generative AI' or 'OCR vs information extraction'. Both are fair debates: the line is whether it acts, or whether it understands fields." }],
  },
  "s2-wrap": {
    ask: [{ q: "Which of today's three workloads would you trust least without a human check? Why?", a: "Any answer works if justified; speech on Taglish and vision on faces are common picks." }],
  },
  "m6-responsible": {
    say: [
      "IDs and forms are full of personally identifiable information. Under the Data Privacy Act of 2012, you must collect only what you need, secure it, and control who can see it.",
      "Extraction makes data easier to use, and that also makes it easier to misuse.",
    ],
    ask: [{ q: "We extract data from 5,000 student IDs. Name one thing that must happen before anyone can query that table.", a: "Access control by role, encryption, a retention policy, and a lawful purpose for each field." }],
  },
  "m7-section": {
    say: ["Remember the confident Wi-Fi password answer from Session 1? This module is the fix."],
    ask: [{ q: "If you could give an AI one document to make it useful for students, which would it be?", a: "Student handbook, enrollment guide, course catalog. We'll use the handbook as our running example." }],
  },
  "m7-augment": {
    ask: [{ q: "What happens if we remove the line 'If the answer is not in the sources, say I don't know'?", a: "The model falls back on training data and may hallucinate a plausible policy." }],
    deeper: ["Notice the sources are numbered: that's what lets the model cite '[1]' and lets the app turn citations into clickable links."],
  },
  "rai-practice": {
    ask: [{ q: "For a campus chatbot, name one harm at each stage: map, measure, mitigate, operate.", a: "E.g., map: gives wrong deadlines · measure: test 50 deadline questions · mitigate: ground on the calendar · operate: log and review flagged answers weekly." }],
    deeper: ["Red teaming is a job: companies hire people to deliberately break AI systems before attackers or users do."],
  },
  "rai-rapid": {
    deeper: ["Several scenarios touch more than one principle (unencrypted IDs is also accountability). Accept second answers if students justify them."],
  },
  act4: {
    say: ["Run Activity 4 in a 20-minute version: 12 minutes to design, 8 minutes for 3–4 groups to present 2 minutes each."],
    ask: [{ q: "Feedback prompt for each group: where exactly does a human stay in the loop, and what triggers it?", a: "Look for a concrete trigger such as a confidence threshold, a sensitive action, or a complaint." }],
    deeper: ["Groups that don't present submit the full slide as homework."],
  },
  "gloss1-1": { deeper: ["Quick game: read a definition aloud; first student to name the term picks the next one."] },
  "gloss1-2": { deeper: ["Ask students to group terms by workload. Which terms belong to more than one workload? (Embedding, token, model.)"] },
  "p2-overview": {
    ask: [{ q: "Who already has an Azure for Students account?", a: "Sort out sign-ups before Session 4's lab to avoid losing lab time." }],
  },
  "p2-outcomes": {
    say: ["Each outcome matches one Part 1 concept. If you understood the concept, the tool is just buttons."],
    deeper: ["Outcome 8 (Foundry IQ) is the capstone: it combines agents (Session 4) with RAG (Session 3)."],
  },
  "s4-recall": {
    say: ["Every workload you studied has a real tool in Microsoft Azure, and you will use them through a website, no coding needed."],
    ask: [{ q: "Name the six AI workloads from Part 1.", a: "Generative AI and agents, NLP, speech, computer vision, information extraction, RAG." }],
  },
  "p2m1-azure": {
    deeper: ["Make cloud cost tangible: an idle deployed resource can keep billing. That's why every lab ends with cleanup."],
  },
  "p2m1-secure": {
    say: ["Microsoft promises three things when you build here: the latest technology, security, and scale."],
  },
  "p2m2-deploy": {
    ask: [{ q: "After adding the instructions, what changed in the answer?", a: "Shorter, on-topic, consistent tone: the system prompt from Part 1 at work." }],
    deeper: ["Lab (pairs): each pair deploys a model, writes instructions for a role of their choice, and tests three questions."],
  },
  "p2m2-agent": {
    ask: [{ q: "Why not just let the model do the math itself?", a: "LLMs predict tokens and can get arithmetic wrong; a code tool computes it exactly." }],
  },
  "ex1p2-reviews": {
    ask: [{ q: "Which output would you feed into a nightly dashboard, and why?", a: "Azure Language: same structure every run, with confidence scores." }],
  },
  "p2m5-vision": {
    say: ["Computer vision in Foundry centers on three kinds of models: multimodal models that understand images, image-generation models, and video-generation models."],
    deeper: ["Compare with Part 1: one multimodal model now does what used to need separate classification, detection and OCR services."],
  },
  "ex7p2-prompts": {
    ask: [{ q: "Adding 'diverse group of' changed the people in the image. What does that tell us about the model's defaults?", a: "Defaults reflect training data biases; inclusiveness sometimes needs to be asked for explicitly." }],
  },
  "act7-stations": {
    deeper: ["Assign a timekeeper per group. The 'one failure per station' rule matters: it trains students to evaluate AI, not just admire it."],
  },
  "ex6p2-schema": {
    deeper: ["Good field descriptions are prompts: vague descriptions give vague extractions. Rewrite 'Course' as 'Degree program code, e.g. BSIT' and compare."],
  },
  "ex5p2-threshold": {
    say: ["Set a confidence threshold, for example 0.80. Anything below it goes to human review."],
    ask: [{ q: "What's the cost of setting the threshold too high? Too low?", a: "Too high: humans review almost everything. Too low: wrong values slip into the database." }],
  },
  "p2m7-iq": {
    say: ["Your Session 4 agent searched one uploaded file. Real organizations have thousands of files in many places. Foundry IQ is the knowledge layer that connects agents to all of that."],
  },
  "p2m7-perm": {
    say: ["An important feature: retrieval can respect permissions. If an employee cannot open a file in SharePoint, the agent should not quote it to them."],
  },
  "gloss2-1": { deeper: ["Pair each Part 2 term with the Part 1 concept it implements (e.g., Foundry IQ ↔ RAG, Analyzer ↔ information extraction schema)."] },
  "gloss2-2": { deeper: ["Final check: ask students which three terms they would explain to a manager deciding whether to adopt AI."] },
};
