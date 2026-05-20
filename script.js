
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
    q: "What is atomic number of Carbon?",
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

// FACT SYSTEM
function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("factBox").innerText = facts[random];
}

setInterval(showFact, 4000);
showFact();

// QUIZ
function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.q;

  const buttons = document.querySelectorAll(".button-grid button");

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

// AI BOT (CHEMISTRY CHATBOT)
function askBot() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let reply = "";

  if (input.includes("water")) {
    reply = "Water is H₂O made of hydrogen and oxygen.";
  }
  else if (input.includes("atom")) {
    reply = "An atom is the smallest unit of matter.";
  }
  else if (input.includes("acid")) {
    reply = "Acids have pH less than 7 and release H⁺ ions.";
  }
  else if (input.includes("base")) {
    reply = "Bases have pH greater than 7.";
  }
  else if (input.includes("carbon")) {
    reply = "Carbon is the basis of all organic life.";
  }
  else {
    reply = "I don't know that yet — try asking about atoms, acids, water, or carbon.";
  }

  document.getElementById("botReply").innerText = reply;
}
