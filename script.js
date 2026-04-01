const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const warning = document.getElementById("warning");

yesBtn.onclick = () => {
  showScreen("screen2");
};

noBtn.onmouseover = () => {
  const x = Math.random() * window.innerWidth - 100;
  const y = Math.random() * window.innerHeight - 100;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  warning.innerText = "Wait... are you sure? 🥺 Try again!";
};

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showPage(id) {
  showScreen(id);
}

function goBack() {
  showScreen("screen2");
}
