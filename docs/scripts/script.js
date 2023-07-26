window.onload = function () {
  const startButton = document.getElementById("start-button");
  const instructionButton = document.getElementById("instructions-button");
  const restartButton = document.getElementById("restart-button");
  const highscore = document.getElementById("high-score");
  highscore.innerHTML = localStorage.getItem("high-score");
  let game;

  function startGame() {
    console.log("start game");

    game = new Game();

    game.initializeBoard();
  }

  startButton.addEventListener("click", () => {
    startGame();
  });
  instructionButton.addEventListener("click", () => {
    game.showInstructions();
  });
  restartButton.addEventListener("click", () => {
    location.reload();
  });

  function handleKeyDown(event) {
    const key = event.key;
    possibleKeyStrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (possibleKeyStrokes.includes(key)) {
      event.preventDefault();
      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = -3;
            break;
          case "ArrowRight":
            game.player.directionX = 2;
            break;
          case "ArrowUp":
            game.player.directionY = -1;
            break;
          case "ArrowDown":
            game.player.directionY = 1;
            break;
        }
      }
    }
  }

  function handleKeyUp(event) {
    const key = event.key;
    possibleKeyStrokes = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];

    if (possibleKeyStrokes.includes(key)) {
      event.preventDefault();
      if (game) {
        switch (key) {
          case "ArrowLeft":
            game.player.directionX = 0;
            break;
          case "ArrowRight":
            game.player.directionX = 0;
            break;
          case "ArrowUp":
            game.player.directionY = 0;
            break;
          case "ArrowDown":
            game.player.directionY = 0;
            break;
        }
      }
    }
  }

  window.addEventListener("keydown", handleKeyDown);
  window.addEventListener("keyup", handleKeyUp);
};
