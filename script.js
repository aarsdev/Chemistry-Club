const facts = [
  "Water is made of hydrogen and oxygen.",
  "Helium is lighter than air.",
  "Carbon is the basis of all life.",
  "Oxygen makes up 21% of Earth's atmosphere.",
  "Neon lights glow when electrons get excited.",
  "Gold is very unreactive chemically.",
  "Salt is also known as sodium chloride (NaCl)."
];

// RANDOM FACT
function showFact() {
  const random = Math.floor(Math.random() * facts.length);
  document.getElementById("factBox").innerText = facts[random];
}

// QUIZ
function checkAnswer(answer) {
  if (answer === "correct") {
    document.getElementById("quizResult").innerText = "Correct! 🎉 Great job!";
  } else {
    document.getElementById("quizResult").innerText = "Wrong ❌ Try again!";
  }
}
