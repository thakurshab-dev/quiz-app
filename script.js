let current = 0;
let score = 0;
let selectedQuestions = [];
let timer;
let timeLeft = 15;

function startQuiz() {
  const cat = document.getElementById("category").value;
  selectedQuestions = [...questions[cat]].sort(() => 0.5 - Math.random());

  document.getElementById("home").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  loadQuestion();
}

function loadQuestion() {
  clearInterval(timer);
  timeLeft = 15;

  document.getElementById("timer").innerText = timeLeft;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = timeLeft;

    if (timeLeft === 0) {
      nextQuestion();
    }
  }, 1000);

  let q = selectedQuestions[current];
  document.getElementById("question").innerText = q.q;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    let btn = document.createElement("div");
    btn.className = "option";
    btn.innerText = opt;

    btn.onclick = () => checkAnswer(i);

    optionsDiv.appendChild(btn);
  });

  updateProgress();
}

function checkAnswer(i) {
  if (i === selectedQuestions[current].answer) {
    score++;
  }
  nextQuestion();
}

function nextQuestion() {
  current++;
  if (current >= selectedQuestions.length) {
    showResult();
  } else {
    loadQuestion();
  }
}

function updateProgress() {
  let progress = (current / selectedQuestions.length) * 100;
  document.getElementById("progress").style.width = progress + "%";
}

function showResult() {
  clearInterval(timer);

  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");

  document.getElementById("score").innerText = score;

  let msg = "";
  if (score > 1) msg = "🔥 Excellent!";
  else msg = "👍 Good! Keep practicing";

  document.getElementById("message").innerText = msg;
}

function restartQuiz() {
  current = 0;
  score = 0;

  document.getElementById("result").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}