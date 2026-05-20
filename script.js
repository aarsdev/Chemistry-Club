// Chemistry facts
const facts = [
  "Water is made of hydrogen and oxygen.",
  "Helium is lighter than air.",
  "Gold is chemically stable.",
  "Carbon is the basis of life.",
  "Neon glows in lights.",
  "Oxygen makes up about 21% of Earth's atmosphere."
];

// Show random fact
function showFact() {
  let randomIndex = Math.floor(Math.random() * facts.length);
  document.getElementById("factBox").innerText = facts[randomIndex];
}

// Quiz system
function checkAnswer(answer) {

  if (answer === "correct") {
    document.getElementById("quizResult").innerText = "Correct! 🎉";
  } else {
    document.getElementById("quizResult").innerText = "Try again ❌";
  }

}
