// FACTS
const facts = [
  "Water expands when it freezes.",
  "Helium is lighter than air.",
  "Carbon is the basis of life.",
  "Oxygen makes up 21% of Earth's atmosphere.",
  "Neon lights glow due to electron excitation.",
  "Gold is very unreactive chemically.",
  "Diamond and graphite are both carbon."
];

// QUIZ QUESTIONS (HARDER)
const quiz = [
  {
    q: "What is the atomic number of Carbon?",
    options: ["2", "4", "6", "8"],
    answer: 2
  },
  {
    q: "Which gas is most abundant in Earth's atmosphere?",
    options: ["Oxygen", "Nitrogen", "CO2", "Helium"],
    answer: 1
  },
  {
    q: "What is the pH of a neutral solution?",
    options: ["5", "7", "10", "14"],
    answer: 1
  },
  {
    q: "Which element is a noble gas?",
    options: ["Oxygen", "Neon", "Iron", "Hydrogen"],
    answer: 1
  }
];

let current = 0;

// FACT SYSTEM
function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("factBox").innerText = facts[random];
}

setInterval(showFact, 5000);
showFact();

// QUIZ SYSTEM
function loadQuestion() {
  const q = quiz[current];
  document.getElementById("question").innerText = q.q;

  const buttons = document.querySelectorAll(".button-row button");

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
  }, 1500);
}

loadQuestion();
