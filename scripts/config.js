const config = document.getElementById("config");
const gameBoard = document.getElementById("gameBoard");
const tableElement = document.createElement("div");

const createConfig = () => {
  const configElement = document.createElement("div");
  configElement.classList.add("config-element");
  configElement.innerHTML = `
    <h1>
        <span style="color: green">S</span><span style="color: aqua">u</span
        ><span style="color: rgb(255, 217, 0)">p</span
        ><span style="color: red">e</span><span style="color: rgb(255, 217, 0)">r</span
        >
    </h1>
    <h1>
      <span style="color: green">J</span><span style="color: aqua">u</span
      ><span style="color: rgb(255, 217, 0)">m</span
      ><span style="color: red">p</span>
      <span style="color: rgb(255, 217, 0)">M</span
      ><span style="color: aqua">a</span><span style="color: green">r</span
      ><span style="color: red">i</span><span style="color: green">o</span>
    </h1>
     <button id="start" onclick="restart()">Iniciar</button>
     <p class="text-key-shortcut">Clique ou pressione a tecla ENTER</p>
    `;

  configElement.appendChild(punctuation());
  config.appendChild(configElement);
};

const scoreboard = () => {
  const classificationElement = document.createElement("div");
  classificationElement.classList.add("classification");
  setInterval(() => {
    classificationElement.innerHTML = score;
  }, 200);
  gameBoard.appendChild(classificationElement);
};

const punctuation = () => {
  const pontuacao = document.createElement("div");
  pontuacao.classList.add("pontuacao");

  const h2Title = document.createElement("h2");
  setInterval(() => {
    lastScoreAnimation(h2Title);
  }, 500);
  h2Title.innerHTML = "Última Pontuação";

  const h2Value = document.createElement("h2");
  setInterval(() => {
    h2Value.innerHTML = LOAD_RECORD;
  }, 500);

  pontuacao.appendChild(h2Title);
  pontuacao.appendChild(h2Value);
  return pontuacao;
};

const initializeContent = () => {
  createConfig();
  scoreboard();

  const scoreTable = setInterval(() => {
    tableElement.classList.add("table-element");
    tableElement.appendChild(punctuation());
    gameBoard.appendChild(tableElement);
    clearInterval(scoreTable);
  }, 100);
};

document.addEventListener("DOMContentLoaded", initializeContent);
