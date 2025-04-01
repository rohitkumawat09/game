let score = 0;
const scoreElement = document.querySelector(".score span");
let timeLeft = 60;
let timerInterval;
let selectedAvatarSrc = null; 

const startGameBtn = document.getElementById("startGame");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const screen3 = document.querySelector(".screen3");
const avatars = document.querySelectorAll(".avatar");
const timerElement = screen3.querySelector(".timer span");
let imagesArea = document.querySelector(".imagesArea");

startGameBtn.addEventListener("click", () => {
  screen1.classList.add("gayab");
  screen2.classList.remove("gayab");
});
avatars.forEach(avatar => {
  avatar.addEventListener("click", () => {
    avatars.forEach(av => av.classList.remove("selected"));
    avatar.classList.add("selected");
    screen2.classList.add("gayab");
    screen3.classList.remove("gayab");
    startTimer();
  });
});

function startTimer() {
  timerElement.textContent = timeLeft;
  timerInterval = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert(`Time's up! Your score is ${score}`);
      resetGame();
    } else {
      timerElement.textContent = timeLeft;
      timeLeft--;
    }
  },   1000);
}




