
// FACTS
const facts = [
  "Water is H2O.",
  "Carbon is the basis of life.",
  "Oxygen supports combustion.",
  "Atoms are extremely small.",
  "Neon lights glow due to electrons."
];

// QUIZ
const quiz = [
  {
    q: "What is H2O?",
    options: ["Oxygen", "Water", "Hydrogen", "Carbon"],
    answer: 1
  },
  {
    q: "Atomic number of Carbon?",
    options: ["2", "4", "6", "8"],
    answer: 2
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

// FACTS
function showFact() {
  document.getElementById("factBox").innerText =
    facts[Math.floor(Math.random() * facts.length)];
}

showFact();

// QUIZ FIXED
function loadQuiz() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.q;

  const buttons = document.querySelectorAll("#options button");

  buttons.forEach((btn, i) => {
    btn.innerText = q.options[i];
  });
}

function checkAnswer(i) {
  const result = document.getElementById("quizResult");

  if (i === quiz[current].answer) {
    result.innerText = "Correct! 🎉";
  } else {
    result.innerText = "Wrong ❌";
  }

  current = (current + 1) % quiz.length;

  setTimeout(() => {
    result.innerText = "";
    loadQuiz();
  }, 1000);
}

loadQuiz();

// CHATBOT
function sendMessage() {
  const input = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const text = input.value.trim().toLowerCase();
  if (!text) return;

  chatBox.innerHTML += `<div class="msg user">You: ${text}</div>`;

  let reply = "";

  if (text.includes("water")) reply = "Water is H2O.";
  else if (text.includes("atom")) reply = "Atoms are the smallest unit of matter.";
  else if (text.includes("acid")) reply = "Acids have pH below 7.";
  else if (text.includes("base")) reply = "Bases have pH above 7.";
  else if (text.includes("carbon")) reply = "Carbon is the basis of life.";
  else reply = "Ask about atoms, water, acids, bases, or carbon.";

  chatBox.innerHTML += `<div class="msg bot">Bot: ${reply}</div>`;

  input.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
}
