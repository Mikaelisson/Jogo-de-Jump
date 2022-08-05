const gameBoard = document.getElementById("gameBoard");
const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const JUMP = "jump";
let score = 0;

const jump = (event) => {
  if (event.keyCode === 32) {
    mario.classList.add(JUMP);

    setTimeout(() => {
      mario.classList.remove(JUMP);
    }, 500);
  }
};


const attScore = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

    if(pipePosition < 0){
        score++; 
    }
    
  if (pipePosition <= 80 && pipePosition > 0 && marioPosition <= 65) {
    clearInterval(attScore);
  }
}, 200);

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

    clearInterval(loop);
  }
}, 10);

const scoreboard = () => {
  const classificationElement = document.createElement("div");
  classificationElement.classList.add("classification");
  setInterval(() => {
    classificationElement.innerHTML = score;
  }, 200);
  gameBoard.appendChild(classificationElement);
};


const inicializar = () => {
    scoreboard();
};

document.addEventListener("keydown", jump);

document.addEventListener("DOMContentLoaded", inicializar);
