
// FACTS
const facts = [
  "Water is H2O.",
  "Carbon is life basis.",
  "Oxygen supports fire.",
  "Helium is lighter than air.",
  "Neon glows in lights."
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
  }
];

let current = 0;

// FACTS
function showFact() {
  document.getElementById("factBox").innerText =
    facts[Math.floor(Math.random() * facts.length)];
}

showFact();

// QUIZ
function loadQuiz() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.q;

  const buttons = document.querySelectorAll("#options button");

  buttons.forEach((btn, i) => {
    btn.innerText = q.options[i];
  });
}

function checkAnswer(i) {
  if (i === quiz[current].answer) {
    document.getElementById("quizResult").innerText = "Correct! 🎉";
  } else {
    document.getElementById("quizResult").innerText = "Wrong ❌";
  }

  current = (current + 1) % quiz.length;
  setTimeout(() => {
    document.getElementById("quizResult").innerText = "";
    loadQuiz();
  }, 1000);
}

loadQuiz();

// CHATBOT
function askBot() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "";

  if (input.includes("water")) reply = "H2O is water.";
  else if (input.includes("atom")) reply = "Atom is smallest unit of matter.";
  else if (input.includes("acid")) reply = "Acids have pH < 7.";
  else if (input.includes("base")) reply = "Bases have pH > 7.";
  else reply = "Ask about atoms, water, acids, or carbon.";

  document.getElementById("botReply").innerText = reply;
}
