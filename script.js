let cat = document.getElementById("cat");
let gameArea = document.getElementById("game-area");
let scoreDisplay = document.getElementById("score");
let message = document.getElementById("message");

let score = 0;
let falling = false;
let fallInterval;

function resetCat() {
  cat.style.top = "0px";
  cat.style.left = Math.floor(Math.random() * (gameArea.clientWidth - 80)) + "px";
}

function startFalling() {
  let topPos = 0;
  falling = true;

  fallInterval = setInterval(() => {
    topPos += 5;
    cat.style.top = topPos + "px";

    if (topPos >= gameArea.clientHeight - 80) {
      clearInterval(fallInterval);
      falling = false;
      message.textContent = "ضاعت البسّة 😿";
      setTimeout(() => {
        message.textContent = "";
        resetCat();
        startFalling();
      }, 1500);
    }
  }, 50);
}

cat.addEventListener("click", () => {
  if (falling) {
    clearInterval(fallInterval);
    falling = false;
    score++;
    scoreDisplay.textContent = "النقاط: " + score;
    message.textContent = "أنقذتها! 😻";
    setTimeout(() => {
      message.textContent = "";
      resetCat();
      startFalling();
    }, 1000);
  }
});

resetCat();
startFalling();
