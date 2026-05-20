
// FACTS
const facts = [
  "Water expands when frozen.",
  "Carbon is the basis of life.",
  "Helium is lighter than air.",
  "Oxygen supports combustion.",
  "Neon glows in lights.",
  "Diamond and graphite are both carbon."
];

// QUIZ
const quiz = [
  {
    q: "Atomic number of Carbon?",
    options: ["2", "4", "6", "8"],
    answer: 2
  },
  {
    q: "Most abundant gas in atmosphere?",
    options: ["Oxygen", "Nitrogen", "CO2", "Helium"],
    answer: 1
  },
  {
    q: "pH of neutral water?",
    options: ["5", "7", "10", "14"],
    answer: 1
  },
  {
    q: "Which is a noble gas?",
    options: ["Oxygen", "Neon", "Hydrogen", "Carbon"],
    answer: 1
  }
];

let current = 0;

/* FACT SYSTEM */
function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("factBox").innerText = facts[random];
}

setInterval(showFact, 4000);
showFact();

/* QUIZ SYSTEM (FIXED) */
function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.q;

  const buttons = document.querySelectorAll("#options button");

  buttons.forEach((btn, i) => {
    btn.innerText = q.options[i];
  });
}

function checkAnswer(index) {
  if (index === quiz[current].answer) {
    document.getElementById("quizResult").innerText = "Correct! 🎉";
  } else {
    document.getElementById("quizResult").innerText = "Wrong ❌";
  }

  current = (current + 1) % quiz.length;

  setTimeout(() => {
    document.getElementById("quizResult").innerText = "";
    loadQuestion();
  }, 1200);
}

loadQuestion();

/* CHATBOT */
function askBot() {
  const input = document.getElementById("userInput").value.toLowerCase().trim();
  const output = document.getElementById("botReply");

  if (!input) {
    output.innerText = "Please ask something.";
    return;
  }

  const responses = [
    {
      keys: ["water", "h2o"],
      reply: "💧 Water is H₂O made of hydrogen and oxygen."
    },
    {
      keys: ["atom"],
      reply: "⚛️ Atoms are the smallest units of matter."
    },
    {
      keys: ["acid"],
      reply: "🧪 Acids have pH less than 7."
    },
    {
      keys: ["base"],
      reply: "⚗️ Bases have pH greater than 7."
    },
    {
      keys: ["carbon"],
      reply: "🧬 Carbon is the backbone of life."
    },
    {
      keys: ["periodic"],
      reply: "📊 The periodic table organizes 118 elements."
    }
  ];

  for (let item of responses) {
    for (let k of item.keys) {
      if (input.includes(k)) {
        output.innerText = item.reply;
        return;
      }
    }
  }

  output.innerText = "🤖 Try asking about atoms, acids, water, carbon, or periodic table.";
}
