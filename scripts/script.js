const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const clouds = document.querySelector(".clouds");
const SAVE_RECORD = "save_record";
var score = null;
let LOAD_RECORD = null;

const game = () => {
  const ANIMATION_PIPE = "pipe-animation 2s infinite linear";
  const ANIMATION_CLOUDS = "clouds-animation 10s linear infinite";
  const JUMP = "jump";

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
      config.style.zIndex = "1";
      gameBoard.style.zIndex = "-1";
      tableElement.style.display = "none";
      clearInterval(loop);
    } else {
      if (pipePosition < 0) return score++;
      tableElement.style.display = "inline-block";
    }
  }, 10);

  document.addEventListener("keydown", jump);
};

setInterval(() => {
  LOAD_RECORD =
    localStorage.getItem(SAVE_RECORD) === null
      ? 0
      : localStorage.getItem(SAVE_RECORD);
}, 100);

const startGame = (e) => {
  if (e.keyCode === 13 && config.style.zIndex !== "-1") {
    restart();
  }
};

const restart = () => {
  config.style.zIndex = "-1";
  gameBoard.style.zIndex = "1";
  score = 0;
  game();
};

const lastScoreAnimation = (h2Title) => {
  if (config.style.zIndex === "-1") {
    h2Title.classList.add("last-score");
  } else {
    h2Title.classList.remove("last-score");
  }
};

document.addEventListener("keydown", startGame);
