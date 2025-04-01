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
    selectedAvatarSrc = avatar.querySelector("img").src; 
    screen2.classList.add("gayab");
    screen3.classList.remove("gayab");

    startTimer();
  });
});

function startTimer() {
  score = 0;
  timeLeft = 6;
  scoreElement.innerText = score;
  timerElement.textContent = timeLeft;
  imagesArea.innerHTML = ""; 

 
  timerInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      alert(`Time's up! Your score is ${score}`);
      resetGame();
    }
  }, 1000);
  setInterval(generateRandomImages, 1000);

}


function   generateRandomImages(){
  if (!selectedAvatarSrc) return;

  const img = document.createElement("img");
  img.src = selectedAvatarSrc;
  img.addEventListener("click", () => {
    score += 1;
    scoreElement.innerText = score;
    img.remove();
  });

  imagesArea.appendChild(img);

console.log(selectedAvatarSrc);

}


function resetGame() {
  clearInterval(timerInterval);
  imagesArea.innerHTML = "";
  score = 0;
  timeLeft = 60;
  scoreElement.innerText = score;
  timerElement.textContent = timeLeft;
  screen3.classList.add("gayab");
  screen1.classList.remove("gayab");
}

 





