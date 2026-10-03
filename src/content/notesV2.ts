import type { Notes } from "@/lib/types";

/**
 * Version 2 of the teaching script (materials/…(2).docx), mapped to slides by id.
 * Plain lines are what you say; lines in [brackets] are cues for what to do, write, or expect.
 * A slide listed here uses this script instead of its v1 "Say" lines.
 */
export const notesV2: Record<string, Notes> = {
  // ─────────────── Intro ───────────────
  title: {
    script: [
      `[How to use these notes: the script is written the way you'd actually talk to a class. Plain paragraphs are what you say; bracketed lines are cues for what to do, write, or expect. Use your own words wherever they come more naturally.]`,
      `This discussion has two parts. Part 1 builds the concepts; Part 2 puts them into practice in Microsoft Foundry.`,
    ],
  },

  // ─────────────── Session 1 ───────────────
  "p1-section": {
    time: "Session 1 · Getting started · 0:00–0:06",
    script: [
      `Good morning, everyone! Okay, settle in, because I think you're going to enjoy this one. For the next three sessions, we're talking about artificial intelligence. And I know, you hear 'AI' everywhere now: on the news, on TikTok, from your tito who just discovered ChatGPT. But by the end of this, I want you to be the person in the room who actually understands what's going on underneath. Not just 'AI is magic,' but 'here's how it works, and here's what it's good and bad at.'`,
      `This is based on a Microsoft Learn course, the same foundation they use for the AI-900 certification. So if any of you want a cert later, this is a head start.`,
    ],
    deeper: [],
  },
  "s1-objectives": {
    time: "0:00–0:06",
    script: [
      `Here's where we're going today.`,
      `[Write on the board: (1) What AI and machine learning are · (2) The kinds of things AI does · (3) How generative AI and LLMs work · (4) Chatbots vs agents]`,
      `[Session 1 budget: opening 15 min · Module 1 45 min · Module 2 50 min · wrap-up 10 min.]`,
    ],
  },
  "s1-hook": {
    time: "Hook · 0:06–0:10",
    script: [
      `Quick question. Raise your hand if you used AI today.`,
      `[Wait. Usually only a few hands go up.]`,
      `Okay, now keep your hand up, or raise it, if you used Google Maps, Facebook, YouTube, your email spam folder, or GCash today.`,
      `[Nearly everyone's hand goes up.]`,
      `See? Everybody. The traffic estimate on Maps, the videos YouTube picks for you, GCash flagging a weird transaction: that's all AI. You've been using it for years without noticing. What's new is that now you're going to understand it, and maybe even build with it.`,
      `So tell me: what's one app on your phone that you think uses AI, and what do you think the AI is actually doing in it?`,
      `[Take 3–4 answers and write them on the side of the board. You'll come back to them later.]`,
    ],
  },
  "s1-rules-vs-ml": {
    time: "Rules vs learning · 0:10–0:15",
    script: [
      `Let me ask you something that sounds simple but isn't. What's the difference between a program that follows rules and a program that learns?`,
      `[Let a couple of students try.]`,
      `Here's how I like to picture it.`,
      `[Write on the board: Traditional program: Rules + Data → Answers · Machine learning: Data + Answers → Rules (a model)]`,
      `In the traditional way, a person writes the rules. Someone sits down and decides, 'If the grade is below 75, mark it failing.' Done. The computer just follows orders.`,
      `Machine learning flips that around. Instead of writing the rules, we show the computer thousands of examples, along with the correct answers, and we let it figure out the rules on its own. Whatever it figures out, we call that a model.`,
      `Think of a cook who never wrote down a recipe but has tasted thousands of dishes and just knows what works. That's a model. Nobody typed out the recipe; it was learned.`,
      `Let's test that. Thumbs up if a simple rule is enough, thumbs down if it needs learning. Computing your GWA? [up] Recognizing your face to unlock your phone? [down] Checking if a password has at least 8 characters? [up] Recommending a song you'll probably like? [down] Nice, you've got it.`,
      `[Press → to reveal the answers on the slide.]`,
      `Okay, so now that we know what a model is, let's look at what AI is actually used for out there.`,
    ],
  },

  // ─────────────── Module 1 ───────────────
  "m1-section": {
    time: "Module 1 · 0:15",
    script: [
      `[Follows the module's units: Introduction to AI · Generative AI and agents · Text and natural language · Speech · Computer vision · Information extraction · Responsible AI · Exercise · Assessment · Summary. Each workload gets a quick preview here; the later modules go deep.]`,
    ],
    deeper: [],
  },
  "m1-what-is-ai": {
    time: "What AI actually is · 0:15–0:18",
    script: [
      `So, what is artificial intelligence? The simplest way I can put it: it's software that imitates things humans can do. Understanding language, seeing, hearing, talking, making predictions, even creating stuff.`,
      `Notice I said imitates. AI doesn't think the way you and I do. What it's really, really good at is spotting patterns in data. Huge amounts of data.`,
    ],
  },
  "m1-training": {
    time: "0:18–0:22",
    script: [
      `And almost all modern AI runs on machine learning, which happens in two stages. First there's training: we feed the model a lot of past examples, and it learns the patterns. Then there's inferencing, which is just a fancy word for using it: we give the trained model something new, and it makes a prediction.`,
      `[Write on the board: Training data → model → new input → prediction]`,
      `Two more words you'll hear a lot. In the training data, the inputs are called features, and the correct answers are called labels. Say we want to predict house prices. The features would be things like floor area, location, number of rooms. The label is the actual price.`,
      `Your turn. Imagine I train a model on ten thousand photos of mangoes, each marked 'ripe' or 'unripe.' What's the feature, and what's the label?`,
      `[Expect: the feature is the photo itself; the label is ripe or unripe.]`,
    ],
  },
  "m1-workloads": {
    time: "Quick tour of the workloads · 0:22–0:37",
    script: [
      `Exactly. Now, Microsoft sorts all the things AI can do into groups they call workloads. Just think of a workload as a category of job. You'll hear these six all module long, so let's put them up.`,
      `[Write on the board: Generative AI and agents · Natural language processing · Speech · Computer vision · Information extraction · Retrieval-augmented generation (RAG)]`,
      `Let's take a quick tour of each one. We'll go deeper later, so for now just get a feel for them.`,
      `[Generative AI and agents · 0:22–0:26]`,
      `For a long time, most AI was about sorting or predicting. Is this email spam or not? Is this mango ripe or not? Generative AI is different: it creates. You give it a request, which we call a prompt, and it writes text, code, pictures, even music.`,
      `And an agent takes it one step further. It doesn't just answer you; it can actually do things, like look something up or book an appointment for you.`,
      `[Text and natural language · 0:26–0:29]`,
      `Next is natural language processing, or NLP. That's how software makes sense of written text. It can tell what language something is in, whether a review is happy or angry, pick out names and places, summarize long stuff, and translate.`,
      `[Speech · 0:29–0:31]`,
      `Speech AI goes both ways. Speech-to-text, like YouTube's auto-captions. And text-to-speech, like the GPS voice telling you to turn left in 200 meters.`,
      `[Computer vision · 0:31–0:34]`,
      `Computer vision is AI that looks at pictures and video. What's in this photo? Where exactly is each object? Is there any text in the image?`,
      `[Information extraction · 0:34–0:37]`,
      `And information extraction is the one that reads documents for you: forms, receipts, IDs. It pulls out exactly the details you need. Basically, it turns piles of paper into neat rows in a spreadsheet or database. Anyone here who's ever had to encode forms by hand will appreciate this one.`,
    ],
    deeper: [],
  },
  "m1-rai": {
    time: "Responsible AI · 0:37–0:45",
    script: [
      `Now, here's the serious part. Every single thing I just described can hurt people if it's built carelessly. So Microsoft lays out six principles for what they call responsible AI. Let's go through them together.`,
      `[Show this table on the board or screen.]`,
      `Go back to the list of apps you gave me at the start. Pick one. Which of these principles do you think is most at risk in that app?`,
      `[Take 2–3 answers. Push them to explain why.]`,
    ],
  },
  act1: {
    time: "Quick exercise · 0:45–0:52",
    script: [`[Run Activity 1, Rules or learning?, in pairs. If there's lab time, students can also try the exercise linked in the Microsoft Learn module.]`, `[Press → to reveal the suggested answers.]`],
  },
  "m1-check": {
    time: "Quick check · 0:52–1:00",
    script: [
      `Okay, grab a piece of paper. Three quick ones.`,
      `One: what's the difference between training and inferencing?`,
      `Two: which workload would read a receipt and give you the total?`,
      `Three: which principle says people should know they're talking to an AI?`,
      `[Answers: inferencing is using the trained model on new data · information extraction · transparency. Press → to reveal them.]`,
      `[Wrapping up Module 1 · 0:57–1:00]`,
      `So, quick recap. AI imitates what humans can do by learning patterns from data. A model gets trained first, then used for inferencing. We group what AI does into six workloads. And all of it has to follow those six responsible AI principles.`,
      `Next up is the one everybody's talking about: generative AI.`,
    ],
    deeper: [],
  },

  // ─────────────── Module 2 ───────────────
  "m2-section": {
    time: "Module 2 · 1:00",
    script: [`[Follows the module's four objectives: what generative AI is · how LLMs work · writing good prompts · agents.]`],
  },
  "m2-genai": {
    time: "What generative AI is · 1:00–1:08",
    script: [
      `Alright, generative AI. This is the stuff that's been all over the news since ChatGPT came out. So what makes it 'generative'? It makes new things. You describe what you want in normal, everyday language, and it produces text, code, images, even audio that didn't exist before.`,
      `[Write on the board: Prompt → generative model → text · code · image · audio]`,
      `The big models behind all this are called foundation models. They're trained once on a mind-blowing amount of data, and then they can be reused for all sorts of jobs: writing, summarizing, translating, coding. The ones that focus on text are called large language models, or LLMs. There are also smaller, lighter ones, small language models, that can run on a laptop or even a phone.`,
      `Let me ask you two things, and be honest. What's one task in your daily life where generative AI could genuinely save you time? And what's one where using it would actually be dishonest?`,
      `[Get both sides: drafting an email, brainstorming, studying vs. passing off AI work as your own.]`,
    ],
  },
  "m2-llm-steps": {
    time: "How LLMs work · 1:08–1:18",
    script: [
      `Okay, let's open the black box. I promise this isn't as scary as it sounds. Four steps.`,
      `Step one: tokenization. The model can't actually read letters the way we do. It chops your text into small pieces called tokens, which are whole words or parts of words, and gives each one a number. 'Programming' might become 'Program' plus 'ming.' Roughly, one token is about three-quarters of an English word.`,
      `Step two: embeddings. Each token gets turned into a long list of numbers, a vector, that captures what it means. Words with similar meanings end up with similar numbers. So 'king' and 'queen' are close together. 'King' and 'kangkong'? Very far apart.`,
      `[Pause for the laugh.]`,
      `Step three: attention. The model uses a design called a transformer, and its secret weapon is attention. Attention lets every word look at the other words around it to figure out context. Think about the word 'bank.' 'I deposited money at the bank' versus 'We sat on the river bank.' Same word, totally different meaning. Attention is how the model tells them apart.`,
      `And step four: it predicts the next token. The model calculates how likely each possible next word is, picks one, and then does it again, and again, one token at a time, until the answer is done.`,
    ],
  },
  "m2-prediction": {
    time: "1:18–1:25",
    script: [
      `[Write on the board: "Ang ganda ng…" → araw 62% · buhay 21% · bundok 9% · code 1%]`,
      `So when you finish the phrase 'Ang ganda ng…', most of us would say 'araw' or 'buhay,' right? Nobody says 'code.' The model does the same thing; it just goes with what's most likely.`,
      `Two settings worth knowing. Temperature controls how random it gets. Low temperature, it plays it safe and gives steady answers. High temperature, it gets more creative, and sometimes weird. And the context window is how much text it can keep in mind at once: your question, the conversation so far, and its answer all have to fit.`,
      `Now here's a question for you. If it's just predicting the most likely next word, why can it sound so confident when it's completely wrong?`,
      `[Let them think. Guide them to it.]`,
      `Right. That's called a hallucination. The model is aiming for what sounds likely, not what's actually true. So it can give you a perfectly fluent, very confident answer that's just made up. Always keep that in mind.`,
      `Quick check: put these in order for me. Embeddings, predicting the next token, tokenization, attention.`,
      `[Answer: tokenization → embeddings → attention → prediction.]`,
    ],
  },
  "m2-prompts": {
    time: "Writing good prompts · 1:25–1:30",
    script: [
      `So how do you get better answers out of these things? It comes down to the prompt, what you type in. And in real apps there are actually two layers. There's a hidden system prompt that the people who built the app wrote, which tells the AI its role and its rules. Then there's your user prompt, whatever you type in the box.`,
      `Here are a few tips that make a huge difference.`,
      `[Write on the board: Be clear about what you want · Give it a role and an audience · Give it context or material to work from · Say what format and length you want · Show an example or two · Don't stop at the first try; refine it]`,
      `If you just ask with no examples, that's called zero-shot. If you show it one or a few examples of what you want, that's few-shot, and it makes the answers way more consistent.`,
    ],
  },
  "ex2-makeover": {
    time: "1:30–1:34",
    script: [
      `Let me show you what I mean.`,
      `[Run Example 2, Prompt makeover, live. Run all three prompts in any AI chat tool and compare the outputs side by side.]`,
      `[If there's time, run Activity 2, Prompt makeover. Otherwise, assign it as homework.]`,
    ],
    deeper: [],
  },
  "ex3-same-q": {
    time: "1:34–1:38",
    script: [
      `[Run Example 3, Same question, three answers, to show the outputs change and can be confidently wrong.]`,
      `[In any AI chat tool, ask the same question three times in new chats: "Suggest a name for a small coffee shop in Alaminos."]`,
      `See? Different answer every time. That's because it's generating from probability, not looking anything up.`,
      `[Then ask: "What is the Wi-Fi password policy of our office?" A confident but invented answer is a hallucination, which sets up RAG in Session 3.]`,
    ],
  },
  "m2-agents": {
    time: "Agents · 1:38–1:45",
    script: [
      `Last big idea for today: agents. Here's the simplest way to remember it. A chatbot answers. An agent acts.`,
      `An agent uses a generative model to understand what you want, decide what to do about it, and then actually go do it using tools.`,
      `[Write on the board: Agent = Model (the brain) + Instructions (its job and rules) + Tools (search, databases, apps) + Memory (what's happened so far)]`,
      `Let me paint you a picture. Say our school had a registrar agent. You type, 'Am I cleared to enroll?' The agent goes, okay, let me check the accounts system for unpaid fees. Then, let me check the library for books you haven't returned. Then it comes back and tells you, and if you ask, it books you an appointment. The AI decides which tool to use; the school's own systems actually do the work.`,
    ],
  },
  "m2-agent-risk": {
    time: "1:45–1:50",
    script: [
      `And bigger setups use several agents working together, like a team: one researches, one writes, one double-checks. That's what people mean by multi-agent systems, or agentic AI.`,
      `So here's one for you. A student portal assistant that checks your grades and then emails your adviser. Chatbot or agent? And what could go wrong if it had too much access?`,
      `[Expect: agent. Risks: emails the wrong person, exposes private data. Lesson: give agents only the access they need, and have a human approve sensitive actions.]`,
    ],
    ask: [],
  },
  "s1-wrap": {
    time: "Session 1 wrap-up · 1:50–2:00",
    script: [
      `Alright, that was a lot, so let's pull it together. AI learns patterns from data. Models get trained, then used. There are six workloads. LLMs predict the next token using embeddings and attention. Good prompts steer them. And agents use tools to actually get things done.`,
      `Next time, we'll look at how AI handles language, speech, and images.`,
      `Before you go, on a piece of paper: explain what an LLM is in one sentence, like you're telling a relative who isn't into tech. And write down one question you still have.`,
    ],
  },

  // ─────────────── Session 2 ───────────────
  "s2-open": {
    time: "Session 2 · Looking back · 0:00–0:10",
    script: [
      `[Session 2 budget: opening 10 min · Module 3 40 min · Module 4 30 min · Module 5 35 min · wrap-up 5 min.]`,
      `Welcome back! Before we jump in, who wants to read their one-sentence explanation of an LLM from last time?`,
      `[Take 2–3. If someone says it 'looks things up,' gently correct: it predicts; it doesn't search.]`,
      `Nice. Let's warm up fast. Just shout it out. Training versus inferencing? What's a token? What's an embedding? Chatbot versus agent?`,
      `[Keep it quick and energetic.]`,
      `[Today's plan · 0:07–0:10]`,
      `Today is all about the senses. How AI reads, how it hears and speaks, and how it sees.`,
    ],
  },
  "m3-section": {
    time: "Module 3 · 0:10",
    script: [
      `Let's start with reading. Natural language processing, or NLP, is the part of AI that tries to understand written text.`,
    ],
  },
  "m3-hard": {
    time: "Why language is hard · 0:10–0:22",
    script: [
      `And honestly? Human language is a mess. We use slang, we make typos, we mix English and Tagalog in one sentence, and we're sarcastic.`,
      `Take 'Ang galing mo talaga.' Is that a compliment? [pause] Depends on the tone, right? Could be sincere, could be sarcastic. Now imagine teaching a computer to tell the difference.`,
      `[Cleaning up the text · 0:14–0:22]`,
      `So before a computer can analyze text, it has to prep it, kind of like washing and chopping vegetables before you cook. First, it breaks the text into tokens, same idea you saw with LLMs. Then it tidies things up. We call that normalization. Here are the usual steps.`,
      `[Write the normalization steps on the board.]`,
      `Try one with me. 'The students ARE enrolling in the new AI course!' After cleaning, what's left?`,
      `[Expect something like: students · enroll · new · ai · course.]`,
    ],
  },
  "m3-stats": {
    time: "Counting words → meaning · 0:22–0:35",
    script: [
      `Early NLP was mostly just counting. Frequency analysis means counting how often each word shows up. If a document says 'tuition' twenty times, it's probably about tuition, right?`,
      `A smarter version is called TF-IDF. Don't worry about the long name. The idea is: a word matters more if it shows up a lot in this document but rarely in other documents. Like, if you had a bunch of IT course outlines, the word 'computer' would be in all of them, so it doesn't tell you much. But 'recursion' only shows up in one, so it really says something about that one.`,
      `Then machine learning came in. You show a model tons of labeled examples, like messages marked spam or not spam, and it learns which words tend to go with which label.`,
      `[Understanding meaning · 0:30–0:35]`,
      `But counting has a problem. 'Cheap' and 'affordable' are different words that mean almost the same thing. Counting can't see that. So modern NLP uses semantic language models that represent words as embeddings, those lists of numbers again, where words with similar meanings end up close together.`,
      `[Point to the plot: dog, puppy, cat clustered together; laptop, keyboard clustered together; the two groups far apart.]`,
      `See? Dog and puppy hang out together. Laptop and keyboard hang out together. And the two groups are nowhere near each other. Keep this picture in your head, because it's exactly what makes RAG work later.`,
    ],
  },
  "m3-tasks": {
    time: "What NLP can do · 0:35–0:40",
    script: [`So what can we actually do with all this? Quite a lot.`, `[Show this table.]`],
  },
  "ex4-sentiment": {
    time: "0:40–0:50",
    script: [
      `Let me show you a couple of these live.`,
      `[Run Example 4, sentiment and entities, in a playground or AI chat tool. Before each run, ask the class to guess the sentiment first. Press → to reveal the sentiment column.]`,
      `Here's a challenge. Say a company wants a dashboard showing what customers are complaining about. Which of these tasks would you chain together?`,
      `[Expect: detect language → translate if needed → sentiment → key phrases → count them up in a table.]`,
      `[Wrapping up NLP · 0:45–0:50]`,
      `So: NLP cleans up text, then makes sense of it, either by counting words, by learning from examples, or by understanding meaning. And what comes out is neat, organized info: labels, scores, names. Stuff you can sort and count just like any other data.`,
    ],
  },
  "m4-section": {
    time: "Module 4 · 0:50",
    script: [`Okay, from reading to listening and talking. Imagine apps you can just talk to, and that talk back. To make that happen, AI needs two skills.`],
  },
  "m4-directions": {
    time: "Two directions · How AI hears · 0:50–1:04",
    script: [
      `[Write on the board: Speech recognition (speech → text) · Speech synthesis (text → speech)]`,
      `Speech recognition turns what you say into text. Speech synthesis does the reverse: it turns text into a voice. Where have you already run into each of these today?`,
      `[Expect: voice search, auto-captions, voice messages turned into text / GPS voice, screen readers, those AI voiceovers on TikTok.]`,
      `So how does a computer actually 'hear'? Sound is just a wave in the air. A microphone measures that wave thousands of times every second and stores it as numbers. Then the AI turns those numbers into a sort of picture of the sound, called a spectrogram, which shows which pitches are loud at each moment.`,
      `[Write on the board: Sound → spectrogram → acoustic model → speech sounds → language model → words]`,
      `Then two models work together. The acoustic model figures out the basic speech sounds, which we call phonemes, like the 'k' sound or the 'a' sound. The language model then figures out which words those sounds most likely make.`,
      `Here's my favorite example. Say 'recognize speech' out loud. Now say 'wreck a nice beach.' [pause] Sounds almost the same, right? The language model is what picks the one that makes sense in context.`,
      `This can happen in real time, like live captions or voice commands, or in batches, like transcribing a whole recorded meeting later.`,
      `Now, think about this. If a model was trained mostly on American English, why might it struggle in our classroom?`,
      `[Expect: accents, Taglish, background noise like electric fans or jeepneys outside.]`,
      `Exactly. And that connects right back to inclusiveness, one of our six principles. The good news is you can train custom models on local voices to fix a lot of that.`,
    ],
  },
  "m4-tts": {
    time: "How AI talks · 1:04–1:14",
    script: [
      `Text-to-speech basically runs the process backwards. Four steps.`,
      `[Walk through the four steps on the slide. Prosody is the music of speech, and it's what keeps it from sounding like a robot.]`,
      `And if you want control over how it speaks, there's a language for that called SSML, Speech Synthesis Markup Language. It uses tags, a bit like HTML, so even if you've never coded, you can follow along. Take a look.`,
      `Just by reading it, what do you think the break and prosody parts do?`,
      `[Expect: a short pause; then slower, lower speech for emphasis.]`,
    ],
  },
  "m4-voice-agent": {
    time: "Putting it together · 1:14–1:20",
    script: [
      `Now here's where it gets fun. Put speech recognition, an LLM, and text-to-speech together, and you've got a voice agent. It listens, thinks, and talks back. Add speech translation, and someone speaking Filipino can be heard in Japanese.`,
      `[Write on the board: Your voice → speech-to-text → AI / agent → text-to-speech → its voice]`,
      `Your turn. In one sentence, design a voice feature for a kiosk at a mall or a school. And which of our responsible AI principles does it need to watch out for?`,
      `[Expect: inclusiveness for accents and disabilities; privacy for recorded voices; transparency, so people know it's an AI voice.]`,
      `So, short version: speech recognition turns sounds into words, speech synthesis turns words into a natural voice, and SSML lets you fine-tune it. Pair them with an LLM, and you can have a real conversation with a machine.`,
    ],
  },
  "m5-section": {
    time: "Module 5 · 1:20",
    script: [`Last one for today: how AI sees.`],
  },
  "m5-pixels": {
    time: "Pictures are just numbers · 1:20–1:32",
    script: [
      `Here's something that surprises a lot of people. To a computer, a photo isn't a photo. It's a grid of tiny squares called pixels, and every pixel is just a number. In black and white, 0 means black and 255 means white. In color, each pixel has three numbers, for red, green, and blue.`,
      `So a normal phone photo? That's millions of numbers. That's all the computer 'sees.'`,
      `[Point to the 5×5 grid: mostly 0s, with a column of 255s down the middle. Ask: "What shape is this?" A white vertical line.]`,
      `[Finding patterns · 1:25–1:32]`,
      `So how does it find anything in all those numbers? It slides a tiny grid over the picture, called a filter, and checks each small patch, one at a time. That sliding-and-checking process is called convolution. Here's a filter that's really good at finding edges.`,
      `When it passes over a flat area where all the numbers are the same, everything cancels out to about zero. Nothing interesting. But when it hits an edge, where the numbers suddenly jump, it lights up. Run it over our grid, and boom, the line pops out.`,
    ],
  },
  "m5-cnn": {
    time: "How it learns to see · 1:32–1:38",
    script: [
      `Now, the clever part. In a convolutional neural network, or CNN, nobody hand-writes these filters. The network learns them during training. And it stacks them in layers. The first layers pick up simple edges. The middle layers combine those into shapes, like circles and corners. And the deep layers recognize whole things, like a wheel, a face, or a mango.`,
      `[Write on the board: Photo → edges → shapes → parts → "mango: 91%, papaya: 6%…"]`,
      `Newer models borrow the attention idea from LLMs and apply it to patches of the image. Those are called vision transformers. And when you combine vision with a language model, you get multimodal models, where you can show it a photo and ask, 'What's wrong with this circuit board?' and it'll actually tell you.`,
    ],
  },
  "m5-tasks": {
    time: "What vision can do · 1:38–1:44",
    script: [`So what can we use all this for? Let's go through the main tasks.`, `[Show this table.]`],
  },
  "m5-faces": {
    time: "1:44–1:48",
    script: [
      `One thing I really want you to remember. Face detection just finds that there's a face. Facial recognition figures out who it is. Big difference. Recognition is heavily restricted because of the privacy and fairness risks.`,
      `And of course, AI can also create images now. Image generation models make brand-new pictures from a text description, usually using a method called diffusion. It starts from random noise, like TV static, and cleans it up step by step until a picture appears.`,
      `Quick one: a parking system that reads plate numbers. Which two tasks is it using?`,
      `[Expect: object detection to find the plate, then OCR to read it.]`,
    ],
  },
  "ex5-matching": {
    time: "Activity · 1:48–1:55",
    script: [
      `[Run Activity 3, Workload matching cards. It now covers NLP, speech, and vision together.]`,
      `[Print the scenarios on cards, shuffle, and have groups sort them under the six workload headings. First group with all correct, plus one new scenario of their own per workload, wins. Press → to reveal the workload column.]`,
    ],
  },
  "s2-wrap": {
    time: "Session 2 wrap-up · 1:55–2:00",
    script: [
      `Great work today. Let's recap. Text gets cleaned up and analyzed for things like mood and names. Speech goes from sound to words and back again. And images are grids of numbers that AI reads layer by layer.`,
      `Next session: getting data out of documents, and making AI answer from your own information.`,
      `Before you leave, write down one reading feature, one speech feature, and one vision feature you'd add to an app or system you use every day.`,
    ],
  },

  // ─────────────── Session 3 ───────────────
  "m6-section": {
    time: "Session 3 · Looking back · 0:00–0:10",
    script: [
      `[Session 3 budget: opening 10 min · Module 6 30 min · Module 7 40 min · closing, activity, and quiz 40 min.]`,
      `Last session for this part, everyone! Let's see what stuck. Rapid-fire, just call it out. What are stop words? What's TF-IDF about? What does the acoustic model do? What's SSML for? What's convolution? Detection versus classification?`,
      `[Keep it moving. Praise good answers, and fill gaps quickly.]`,
      `[Today's plan · 0:07–0:10]`,
      `Today we close the loop. First, how AI turns paper documents into usable data. Second, how we make AI answer using our own information instead of guessing. And third, how to do all of it responsibly.`,
    ],
  },
  "m6-pipeline": {
    time: "The paperwork problem · How it works · 0:10–0:26",
    script: [
      `Let's be honest about something. Most information in the real world is messy. Scanned forms, receipts, invoices, IDs, contracts, emails. Even recordings and videos. We call that unstructured data.`,
      `But spreadsheets and databases want structured data: neat columns, every value in its proper place. Information extraction is the AI that bridges that gap.`,
      `Think about this. From the day you enrolled until the day you graduate, how many paper forms do you fill out? And who has to type all of that into the system?`,
      `[Let them react. Most have never thought about how much manual encoding happens behind the scenes.]`,
      `Here's the step-by-step of how AI handles a document.`,
      `[Walk through the six steps on the slide.]`,
      `Here's the thing. OCR alone just gives you a big pile of text. The real magic is steps 3 and 4. The AI understands that the number next to 'TOTAL' at the bottom of a receipt is the total, not the date and not the TIN.`,
      `What comes out are key-value pairs, basically a label and its value, like 'Total: 245 pesos.' And each one usually comes with a confidence score from 0 to 1, which is how sure the AI is.`,
      `There are two kinds of models. Prebuilt models already know common documents: receipts, invoices, IDs. Custom models are ones you train yourself. You give them five or ten filled-out samples of, say, your own registration form, and they learn where everything goes.`,
      `And newer tools go way beyond paper. They can pull details out of photos, audio, and video too. For example, from a recorded meeting, who spoke, what the topic was, and what the action items were.`,
    ],
  },
  "ex6-receipt": {
    time: "From fields to tables · 0:26–0:35",
    script: [
      `Let's look at a real one.`,
      `[Walk through Example 6: the extracted fields first, then the two tables.]`,
      `Why do you think the items are kept in a separate table from the receipt details?`,
      `[Expect: one receipt has many items. Keeping them separate means you're not repeating the store name and date on every single line.]`,
      `Now, look at the total. The AI is only 42% sure about it. What should the system do?`,
      `[Expect: don't save it automatically. Send it to a person to check.]`,
      `Exactly. Usually you set a cutoff, say 80%. Anything below that goes to a human. We call that keeping a human in the loop.`,
    ],
    ask: [],
  },
  "m6-responsible": {
    time: "Doing it responsibly · 0:35–0:40",
    script: [
      `One more thing, and it's important. IDs and forms are full of personal information, what we call PII. Here in the Philippines, the Data Privacy Act says you should only collect what you really need, keep it secure, and control who sees it. And here's the irony: extraction makes data easier to use, which also makes it easier to misuse. So be careful with it.`,
      `Quick summary. OCR reads it, layout analysis understands it, extraction pulls out the details with a confidence score, and human review keeps the bad data out.`,
    ],
  },
  "m7-section": {
    time: "Module 7 · 0:40",
    script: [`[Follows the module's flow: how a RAG solution prepares, retrieves, and uses data to answer.]`],
  },
  "m7-why": {
    time: "Why AI needs help · 0:40–0:46",
    script: [
      `[Live demo: ask an AI chat tool, "What is the attendance policy of STI College Alaminos for 2026?" Let the class read the vague or made-up answer.]`,
      `So... is that right? [pause] We can't even tell, can we? And that's the problem. Actually, three problems.`,
      `One, the AI only knows what it learned during training, and that training stopped at some point. That's called the knowledge cutoff. Two, it has never seen our private stuff: our handbook, our memos, our records. And three, when it doesn't know, sometimes it just makes something up. A hallucination, remember?`,
      `The fix is called retrieval-augmented generation, or RAG. Big name, simple idea. Before the AI answers, we first retrieve the right information from our own documents. Then we augment, meaning we add that info to the question. And then we let the AI generate its answer from it.`,
      `Think of it like an open-book exam. The AI is still the student taking the test, but now we hand it the right pages first.`,
    ],
  },
  "m7-pipeline": {
    time: "Getting the data ready · 0:46–0:56",
    script: [
      `So how does it work behind the scenes? There are two phases.`,
      `[Walk through the seven steps on the slide.]`,
      `Steps 1 to 4 you do ahead of time, kind of like preparing your notes before the exam. Steps 5 to 7 happen every single time someone asks a question.`,
      `Now, chunking matters more than people think. Make the pieces too big, and you waste space and the important part gets buried. Too small, and a piece loses its context, like a sentence ripped out of a paragraph. A common trick is to let the chunks overlap a little so nothing gets cut in half. Or you can split by section headings. And you attach metadata, extra labels like the title, page, and date, so you can filter and cite later.`,
      `So, our student handbook is about 80 pages. How would you chunk it?`,
      `[Expect: one chunk per section heading, with page numbers as metadata.]`,
    ],
  },
  "ex7-retrieval": {
    time: "Finding the right piece · 0:56–1:06",
    script: [
      `Now, retrieval. Remember the dog-and-puppy picture from NLP? Same idea. Vector search finds the pieces whose meaning is closest to the question. So if you ask, 'How is my grade computed?', it finds the section titled 'Grading System,' even though the words don't match exactly.`,
      `[Walk through Example 7, how retrieval picks the right passage.]`,
      `But sometimes you need an exact match, like a course code, 'IT2503,' or someone's name. That's where good old keyword search comes in. Most real systems use both together, called hybrid search, and then re-sort the results so the best ones float to the top. Then they keep only the top few, usually 3 to 5.`,
    ],
  },
  "m7-augment": {
    time: "Putting the answer together · 1:06–1:13",
    script: [
      `Then we build the prompt. And honestly, it's just text: instructions, the pieces we found, and the question, all joined together. Here's what it looks like.`,
      `See that line, 'Answer ONLY from the sources,' and 'say I don't know'? That's what keeps the AI honest. We call the answer grounded. And the citations let you check it yourself, which is transparency in action.`,
    ],
  },
  "m7-vs-ft": {
    time: "Is it working? · 1:13–1:20",
    script: [
      `How do you know if your RAG system is any good? Two big things to check. Groundedness: is the answer actually backed up by the sources? And relevance: did it grab the right pieces, and does the answer actually address the question?`,
      `You might be wondering, why not just retrain the AI on our handbook? Let's compare.`,
      `[Show this table.]`,
      `And here's how it all connects. RAG is often given to an agent as a tool, so the agent decides on its own when it needs to look something up. Remember agents from Session 1? Full circle.`,
      `So, one last time: RAG means you prep your data ahead of time, then for every question you retrieve, augment, and generate. It turns a general AI into an assistant that knows your stuff, and can prove it.`,
    ],
    ask: [],
  },
  "rai-practice": {
    time: "Responsible AI, one more time · 1:20–1:25",
    script: [
      `Remember the six principles from our very first session? Now that you've seen every type of AI, let's bring them back and actually use them.`,
      `[Write on the board: Fairness · Reliability and safety · Privacy and security · Inclusiveness · Transparency · Accountability]`,
      `For generative AI especially, Microsoft suggests a four-step habit. It's pretty common-sense, honestly.`,
      `[Walk through Map, Measure, Reduce, and Operate on the slide. Trying to break it on purpose is called red teaming.]`,
    ],
  },
  "rai-rapid": {
    time: "1:25–1:30",
    script: [
      `Let's play a quick game. I'll read a situation; you shout which principle is broken.`,
      `[Read each situation aloud and let the class answer before you reveal it. Press → to reveal all.]`,
    ],
  },
  act4: {
    time: "Design challenge · 1:30–1:50",
    script: [
      `Okay, your turn to design. In your groups, pick a real system: a sari-sari store, a barangay office, a clinic, or anything you know. Then plan one AI feature for it. You have 12 minutes, then a few groups will present for 2 minutes each.`,
      `[Run Activity 4 in its short version. Groups that don't present can submit the full slide as homework.]`,
    ],
  },
  "quiz1-1": {
    time: "Quiz · 1:50–1:58",
    script: [
      `Alright, let's see what you've learned. Fifteen questions, and take your time.`,
      `[Give the 15-item quiz from the Assessment section. Collect it, or let students check their own using the answer key. Press → on each quiz slide to reveal the answers.]`,
    ],
  },
  "p1-synthesis": {
    time: "Bringing it all together · 1:58–2:00",
    script: [
      `Before we go, let me show you how all of this fits together. Imagine an enrollment assistant. A student talks to it, and speech recognition turns that into text. An agent figures out what to do. It uses information extraction to read the student's uploaded report card. NLP checks if the student sounds frustrated. RAG answers policy questions straight from the handbook. And speech synthesis reads the answer back out loud. Every step, checked against those six principles.`,
      `So that's six workloads, working as one system.`,
      `And here's what I want you to take with you. Whatever field you end up in, AI is now part of the toolkit, just like spreadsheets or the internet. The people who stand out won't just be the ones who use it. They'll be the ones who know which kind of AI fits a problem, can use or build it well, and can explain why it's safe. After these three sessions, that can be you.`,
      `[Homework: complete the Microsoft Learn modules in the learning path and submit badge screenshots. Groups that didn't present submit the full Activity 4 slide.]`,
    ],
    deeper: [],
  },

  // ─────────────── Part 2 · Session 4 ───────────────
  "p2-section": {
    script: [
      `[Same style as Part 1: plain paragraphs are what you say; bracketed lines are cues. Portal labels change often, so describe where things are by what they do ("the model catalog," "the playground") rather than exact button names.]`,
    ],
    deeper: [],
  },
  "s4-recall": {
    time: "Session 4 · Looking back · 0:00–0:10",
    script: [
      `Welcome to Part 2! Before anything else, can anyone name all six AI workloads from Part 1?`,
      `[Expect: generative AI and agents, NLP, speech, computer vision, information extraction, RAG. Let the class help fill gaps. Press → to reveal.]`,
      `Perfect. So in Part 1, you learned what AI can do. In Part 2, you're going to actually do it. Every single one of those workloads has a real tool in Microsoft Azure, and you'll use them right from a website. No coding needed.`,
      `[Today's plan · 0:05–0:10]`,
      `Here's today. First, what Azure and Microsoft Foundry actually are. Second, you'll set up an AI model and chat with it. And third, you'll build your very first agent.`,
    ],
  },
  "p2m1-azure": {
    time: "What Azure is · 0:10–0:16",
    script: [
      `So, Microsoft Azure. You've probably heard people say 'the cloud.' Azure is Microsoft's cloud. Basically, Microsoft owns these massive buildings full of powerful computers, and you rent them by the minute. Instead of buying an expensive server to run AI yourself, you just borrow theirs. You only pay for what you use, and it can grow from one user to millions. That ability to grow is called scalability.`,
      `[Write on the board: Your browser → the internet → Azure data center (computers, storage, AI models)]`,
      `Let me ask you. Why would a small business rent AI in the cloud instead of setting up its own?`,
      `[Expect: cheaper, no hardware to maintain, access to the newest models, security handled by experts.]`,
    ],
  },
  "p2m1-foundry": {
    time: "Microsoft Foundry · 0:16–0:28",
    script: [
      `Now, inside Azure, there's Microsoft Foundry. Think of it as a one-stop workshop for building with AI. It brings three things together.`,
      `[Point to the three cards: Models · Foundry Tools · Agents.]`,
      `Your work in Foundry lives inside a project. That's your workspace, holding your models, agents, and files. And behind the scenes, it's organized like folders inside folders.`,
      `[Write on the board: Subscription (who pays) → Resource group (a folder) → Foundry resource → Project (your workspace)]`,
      `Let me show you around.`,
      `[Sign in to the Foundry portal on the projector and create a project. Point out the model catalog, the playgrounds, the agents area, and the Foundry Tools.]`,
    ],
    deeper: [],
  },
  "p2m1-secure": {
    time: "Safe and responsible · 0:28–0:40",
    script: [
      `Now, you might be thinking, 'Is it safe to put my stuff in there?' Fair question. A few things Microsoft builds in. The data in your project isn't used to train their public models. Access is controlled by role-based access control, so people can only do what their role allows. And there are built-in content filters that block harmful stuff going in and coming out.`,
      `So, connect each one to a principle from Part 1. Your data isn't used for training. Role-based access. Content filters.`,
      `[Expect: privacy and security; accountability and security; reliability and safety. Press → to reveal.]`,
      `[Quick recap · 0:35–0:40]`,
      `So: Azure is the cloud, Foundry is the workshop that brings models, tools, and agents together, and a project is your workspace. Alright, enough tour. Let's go use a model.`,
    ],
    ask: [],
  },
  "p2m2-models": {
    time: "Picking a model · 0:40–0:50",
    script: [
      `The model catalog is kind of like an app store, but for AI brains. And they're not all the same. Some can only handle text; some can also look at images. Some are big and smart, others are small and fast. They cost different amounts, and they come with different licenses.`,
      `[Filter the catalog by task, open one model's page, and read the description and what kinds of input it handles out loud.]`,
      `Here's a real decision. Say you're building an FAQ chatbot that'll get thousands of simple questions a day. Biggest model, or a small, fast one?`,
      `[Expect: usually small and fast, since it's cheaper and quicker. Just test that the answers are still good enough.]`,
    ],
    ask: [],
  },
  "p2m2-deploy": {
    time: "Setting it up and trying it out · 0:50–1:05",
    script: [
      `Before you can use a model, you have to deploy it, which basically means making a copy available in your project. Then you can try it out in the chat playground.`,
      `[Deploy a small chat model, open the playground, and ask a question. Then add instructions: "You are a friendly assistant for a school registrar. Answer in 3 sentences or fewer." Ask the same question again and compare.]`,
      `See the difference? Same question, totally different answer, just because we gave it instructions. That's the system prompt from Part 1, in real life.`,
      `And look at this settings panel. Remember temperature? It's right here. Turn it down for steady, consistent answers, and up for more creative ones.`,
      `[Lab, 0:55–1:05, in pairs: deploy a model, give it a role of your choice, like a librarian, tour guide, or nutrition coach, and test three questions.]`,
    ],
    deeper: [],
  },
  "p2m2-agent": {
    time: "Building an agent · 1:05–1:15",
    script: [
      `Remember how we said an agent is a model plus instructions plus tools? In Foundry, you can build exactly that in just a few clicks.`,
      `[Write on the board: Agent in Foundry = model + instructions + tools (+ knowledge, coming next session)]`,
      `[Create an agent, choose the deployed model, write instructions, and add a simple tool: either file search over an uploaded campus FAQ, or a code tool for calculations. Test it in the agent playground.]`,
      `Now watch this. I'll ask, 'What is 15% of 18,500?' [pause while it runs] See? It used the calculator tool on its own. Now I'll ask, 'What are the library hours?' And this time it went and searched the file. I never told it which tool to use. It decided. All we did was give it the options.`,
    ],
  },
  "ex2p2-template": {
    time: "Lab · 1:15–2:00",
    script: [
      `[Lab, 1:15–1:45, in groups of 3: build a "campus helper" agent with instructions and one uploaded file, using this template. Test 5 questions: 3 it should answer, and 2 it should politely turn down. Note what worked and what didn't.]`,
      `[Session 4 wrap-up · 1:45–2:00]`,
      `Look at what you did today. You set up a real AI model, told it how to behave, and built an agent that picks its own tools. That's not nothing!`,
      `Next time, we'll try the tools for text, speech, and images.`,
      `[Cleanup: keep the project if Session 5 will reuse it; otherwise delete the resource group.]`,
      `Before you go, write down one thing your agent did well, one thing it got wrong, and how you'd fix it.`,
    ],
    deeper: ["Each line of the template maps to a design choice: role, scope, grounding, fallback, format, tone, and a safety rule."],
  },

  // ─────────────── Session 5 ───────────────
  "p2m3-text": {
    time: "Session 5 · Two ways to do it · 0:00–0:12",
    script: [
      `[Session 5 budget: opening 5 min · P2-M3 35 min · P2-M4 30 min · P2-M5 35 min · stations lab and wrap-up 15 min.]`,
      `Hi everyone! Quick memory check: what three things did your agent have last time?`,
      `[Expect: a model, instructions, and tools.]`,
      `Exactly. Today we're going to use more specialized tools, the ones Foundry calls Foundry Tools, for text, speech, and images. And here's something to watch for: a lot of the time, you can get a job done with either a general AI model or a specialist tool. Knowing which to pick is a real skill.`,
      `Remember the text tasks from Part 1? Sentiment, picking out names, key phrases, summaries, finding personal info. In Azure, there are two ways to do them.`,
      `So here's a scenario. A bank needs to hide account numbers in a million chat logs, every night, the exact same way every time. Which one would you use?`,
      `[Expect: Azure Language's PII detection, because it's consistent and structured.]`,
    ],
    ask: [],
  },
  "ex1p2-reviews": {
    time: "Let's try both · 0:12–0:40",
    script: [
      `[Paste the reviews from Part 2 Example 1 into the chat playground with: "For each review, give the sentiment and list any people, places, and dates." Then run the same reviews through the Azure Language playground for sentiment and named entities.]`,
      `Okay, look at both results side by side. Which one would be easier to drop into a spreadsheet? And which one explained itself more?`,
      `[Expect: Azure Language is neater, with scores. The general model explains more, but its format is less predictable.]`,
      `[Run PII detection on "Juan dela Cruz, 0917 123 4567, juan@email.com" and show the masked output.]`,
      `Look at that: the name, number, and email are all hidden automatically. By the way, the official Microsoft course has learners build a small app in Python that does this. Developers just do in code what we just did by clicking.`,
      `[Quick recap · 0:30–0:40]`,
      `So: general models are flexible, and Azure Language is consistent and organized. Choose based on the job.`,
    ],
  },
  "p2m4-speech": {
    time: "Azure Speech · 0:40–1:10",
    script: [
      `Next, voices. Azure Speech is the Foundry Tool for both directions we talked about in Part 1: speech to text and text to speech. And it can also do speech translation.`,
      `[Speech to text · 0:45–0:55: open the speech playground and choose speech to text. Have a volunteer read: "Good morning. Enrollment for the second semester starts on Monday." Then have another volunteer say it in Taglish.]`,
      `So how'd it do? Where did it mess up, and why do you think that happened?`,
      `[Expect: accents, mixing languages, background noise. Tie it back to inclusiveness.]`,
      `[Text to speech · 0:55–1:05: type an announcement, try two different neural voices, and adjust speed and pitch. If the playground shows SSML, point out the tags from Part 1.]`,
      `Pretty natural, right? So where could your school or workplace use a voice like this? And what should listeners be told?`,
      `[Expect: announcements, accessibility. Listeners should be told it's an AI voice. That's transparency.]`,
      `[Quick recap · 1:05–1:10]`,
      `Azure Speech turns voices into text and text into natural voices, and you can test both without writing a single line of code.`,
    ],
  },
  "p2m5-vision": {
    time: "Vision in Foundry · 1:10–1:25",
    script: [
      `Last stop today: images. In Foundry, vision mostly comes down to three kinds of models. Multimodal models that understand images. Image-generation models that create images from a description. And video-generation models that make short video clips.`,
      `[In the chat playground with a multimodal model, upload a photo of a busy street and ask: "Describe this image. How many vehicles are there? Is there any text visible?" Then upload a photo of a handwritten note and ask it to type it out.]`,
      `Okay, think back to Part 1. How many different vision tasks did that one model just do?`,
      `[Expect: describing the image, counting objects like detection, and reading text like OCR.]`,
    ],
  },
  "ex7p2-prompts": {
    time: "Creating images · 1:25–1:35",
    script: [
      `[Generate an image from: "A watercolor poster of a beach in Pangasinan at sunset, for a tourism flyer." Then change one word and generate again.]`,
      `Fun, right? But let's be real for a second. Generated images can cause problems: fake photos of real people, copying an artist's style, misleading news pictures. That's why Foundry has content filters, and why a lot of AI images come with content credentials, hidden labels that say 'an AI made this.' That's transparency again.`,
    ],
  },
  "act7-stations": {
    time: "Workload stations · 1:35–2:00",
    script: [
      `Okay, hands-on time! There are three stations set up: text, speech, and vision. Your group gets five minutes at each, then you rotate. At every station, write down one thing that worked and one that didn't.`,
      `[Run Activity 7. Keep time and call the rotations.]`,
      `[Session 5 wrap-up · 1:50–2:00]`,
      `So today: for text, you choose between general models and specialist tools. Azure Speech goes both ways. And vision models can both understand pictures and make new ones. Next time, we'll pull data out of documents and teach agents to answer from our own information.`,
      `Before you go: which station surprised you the most, and why?`,
    ],
  },

  // ─────────────── Session 6 ───────────────
  "p2m6-cu": {
    time: "Session 6 · Meet Content Understanding · 0:00–0:12",
    script: [
      `[Session 6 budget: opening 5 min · P2-M6 35 min · P2-M7 45 min · lab, quiz, and closing 35 min.]`,
      `Last session, everyone! Let's start with a throwback. In Part 1, what were the two big problems RAG solves?`,
      `[Expect: the AI doesn't know our private information, and it can make things up.]`,
      `Exactly. Today we finish the toolkit. First, turning documents into data. Then, giving agents knowledge they can actually be trusted with.`,
      `So, Azure Content Understanding is Foundry's tool for information extraction. And it doesn't just do paper. It works on documents, photos, audio, and even video. You tell it what details you want, and it hands them back neatly organized.`,
      `The key idea here is something called an analyzer. Think of it as a reusable recipe that says what to pull out. You can start with a prebuilt analyzer, which already knows things like receipts, invoices, and IDs. Or you can make a custom analyzer by writing up a schema, which is just a list of the fields you want and what each one means.`,
      `[Write on the board: Content (PDF, photo, audio, video) → Analyzer (your list of fields) → Organized results (fields + values + confidence)]`,
    ],
    ask: [],
  },
  "ex6p2-schema": {
    time: "Let's try it · 0:12–0:30",
    script: [
      `[Run a prebuilt receipt analyzer on a phone photo of a real receipt. Show the fields, values, and confidence scores, and compare with Part 2 Example 5.]`,
      `Look at that. Merchant, date, total, items, all pulled out from a crumpled phone photo. Now let's make our own.`,
      `[Create a custom analyzer for a simple seminar registration form with the fields FullName, ContactNumber, Course, and SeminarDate. Test it on a filled-out sample.]`,
      `Notice that I just described the fields in plain words, and it found them on its own. And there are two kinds of fields. Extracted ones copy exactly what's written, like a name. Generated ones are worked out by the AI, like a one-line summary, or sorting a message into 'complaint' or 'inquiry.'`,
      `Now, it can handle audio too. So think about a recorded customer-service call. What would you want it to pull out?`,
      `[Expect: the caller's problem, how they felt, whether it got solved, and whether a follow-up is needed.]`,
    ],
  },
  "ex5p2-threshold": {
    time: "Quick recap · 0:30–0:40",
    script: [
      `[Set a confidence threshold, for example 0.80. Anything below it goes to human review.]`,
      `So the flow is: set up an analyzer, run your content through it, double-check anything with low confidence, and save the results. Paper becomes data.`,
    ],
  },
  "p2m7-iq": {
    time: "The knowledge problem · How it works · 0:40–1:00",
    script: [
      `Remember your agent from Session 4? It searched one little file you uploaded. Cute, but real organizations have thousands of files all over the place: SharePoint, cloud storage, databases, websites. Microsoft Foundry IQ is what connects agents to all of that, so they can give answers that are grounded and come with citations.`,
      `Here's what happens behind the scenes.`,
      `[Walk through the four steps on the slide. "Smart searching" is called agentic retrieval.]`,
      `Sound familiar? It's RAG from Part 1, just packaged up for you. All the chunking, embeddings, and searching happen automatically. And one knowledge base can be shared by lots of agents.`,
    ],
  },
  "p2m7-perm": {
    time: "0:52–1:00",
    script: [
      `One feature I really like: it can respect permissions. If you're not allowed to open a certain file, the agent won't quote it to you either. That's privacy and security built right in.`,
      `Here's something to think about. Say someone asks, 'Compare the leave policy for regular and probationary employees.' That needs info from two different places. Why does breaking the question into smaller ones help?`,
      `[Expect: each smaller question finds its own best answer, and then the agent combines them.]`,
    ],
  },
  "ex8-grounded": {
    time: "See it in action · Build your own · 1:00–1:45",
    script: [
      `[Create a knowledge base from a sample handbook (a school or company policy PDF), connect it to an agent, and ask: (1) one clearly answered in the handbook, (2) one that needs two sections, (3) one the handbook doesn't cover.]`,
      `Check out the citations. You can click them and see exactly where the answer came from. And look at the last question. Instead of making something up, it just says it doesn't know. Remember that confident, made-up answer we saw back in Part 1? This is the fix.`,
      `[Build your own · 1:25–1:45]`,
      `Alright, last hands-on. In your groups, pick a short real-world document: a barangay services list, a store return policy, a page from a handbook, anything. Build an agent that answers from it. Test three questions it should answer, and one it shouldn't. Then show us one answer with a citation.`,
      `[Run Activity 8. Press → to reveal the "good agent behavior" column.]`,
    ],
  },
  "quiz2-1": {
    time: "Quiz · 1:45–1:55",
    script: [`Okay, let's see what stuck. Same as before: fifteen questions, take your time.`, `[Give the Part 2 assessment. Press → on each quiz slide to reveal the answers.]`],
  },
  "p2-synthesis": {
    time: "Final words · 1:55–2:00",
    script: [
      `Think about where we started. Six sessions ago, the question was, 'What even is AI?' And today you built agents that answer from real documents and cite their sources. That's a big jump.`,
      `Every idea from Part 1 has a real tool now. Models and agents. Azure Language. Azure Speech. Vision models. Content Understanding. Foundry IQ.`,
      `And here's the honest truth: these tools will change their names and their buttons, probably within a year. But the concepts won't. So learn the concepts well, and you'll be able to pick up any tool that comes along.`,
      `Thank you, everyone. Great work.`,
      `[Cleanup: delete all resource groups created for the labs.]`,
      `[Homework: complete the Microsoft Learn path and submit the badge screenshot, plus a one-page plan for an AI feature at a real workplace or organization.]`,
    ],
    deeper: [],
  },
};
