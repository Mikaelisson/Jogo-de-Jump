const gameBoard = document.getElementById("gameBoard");
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const JUMP = "jump";
const SAVE_RECORD = "save_record";
var score = null;
const ANIMATION_PIPE = "pipe-animation 2s infinite linear"
const ANIMATION_CLOUDS = "clouds-animation 10s linear infinite"

function teste() {
  pipe.style.animation = ANIMATION_PIPE;
  pipe.style.left = "";

  mario.style.animation = "";
  mario.style.bottom = "0";
  mario.src = "./assets/img/mario.gif";
  mario.style.width = "100px";
  mario.style.marginLeft = "";

  clouds.style.animation = ANIMATION_CLOUDS;
  clouds.style.left = "";

  const jump = (event) => {
    if (event.keyCode === 32 || event.keyCode === 38) {
      mario.classList.add(JUMP);

      setTimeout(() => {
        mario.classList.remove(JUMP);
      }, 500);
    }
  };

  const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
      .getComputedStyle(mario)
      .bottom.replace("px", "");
    const cloudsPosition = clouds.offsetLeft;

    if (pipePosition <= 80 && pipePosition > 0 && marioPosition <= 65) {
      pipe.style.animation = "none";
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = "none";
      mario.style.bottom = `${marioPosition}px`;
      mario.src = "./assets/img/game-over.png";
      mario.style.width = "55px";
      mario.style.marginLeft = "40px";

      clouds.style.animation = "none";
      clouds.style.left = `${cloudsPosition}px`;
      if (score === null) {
        score = 0;
        localStorage.setItem(SAVE_RECORD, score);
      } else {
        localStorage.setItem(SAVE_RECORD, score);
      }
      config.style.display = "flex";
      clearInterval(loop);
    } else {
      if (pipePosition < 0) return score++;
    }
  }, 10);

  document.addEventListener("keydown", jump);
}

const scoreboard = () => {
  const classificationElement = document.createElement("div");
  classificationElement.classList.add("classification");
  setInterval(() => {
    classificationElement.innerHTML = score;
  }, 200);
  gameBoard.appendChild(classificationElement);
};

document.addEventListener("DOMContentLoaded", scoreboard);
