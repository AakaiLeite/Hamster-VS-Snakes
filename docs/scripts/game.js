class Game {
  constructor() {
    this.gameIntro = document.getElementById("game-intro-container");
    this.startScreen = document.getElementById("game-intro");
    this.gameInstructions = document.getElementById("game-instructions");
    this.gameScreen = document.getElementById("game-screen");
    this.gameBoard = document.getElementById("game-board");
    this.uiScreen = document.getElementById("ui-screen");
    this.gameEndScreen = document.getElementById("game-over");

    this.width = 1100;
    this.height = 618;

    this.player = new Hamster(this.gameBoard, 50, 250, 75, 50);

    this.obstacles = [];
    this.snakes = [];
    this.food = [];

    this.pushingObstacle = false;
    this.pushingSnakes = false;
    this.pushingFood = false;

    this.score = 0;
    this.lives = 5;

    this.gameIsOver = false;
  }
  showInstructions() {
    this.gameIntro.style.display = "none";
    this.gameinstructions.style.display = "flex";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "none";
    this.gameBoard.style.display = "none";
    this.uiScreen.style.display = "none";
    this.gameEndScreen.style.disply = "none";
  }

  initializeBoard() {
    this.gameIntro.style.display = "none";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.gameBoard.style.display = "block";
    this.uiScreen.style.display = "block";
    this.gameEndScreen.style.disply = "none";

    let backgroundMusic = new Audio("/docs/sounds/background-music.mp3");
    backgroundMusic.volume = 0.2;
    backgroundMusic.play();

    this.gameBoard.style.height = `${this.height}px`;
    this.gameBoard.style.width = `${this.width}px`;

    this.gameLoop();
  }

  gameLoop() {
    if (this.gameIsOver) {
      return;
    }

    this.updateGame();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  updateGame() {
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

    if (this.lives === 0) {
      this.stopGame();
    }

    this.player.move();

    this.numberOfObstacles = Math.floor(Math.random() * 3 + 1);
    this.numberOfSnakes = 3;
    this.numberOfFood = Math.floor(Math.random() * 3 + 1);

    this.spawnObstacle();
    this.spawnSnake();
    this.spawnFood();

    if (this.player.left <= 0 - 150) {
      this.lives - 1;
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];
      obstacle.move();
      if (this.player.checkCollision(obstacle)) {
        this.player.directionX = 0;
        this.player.left -= 2;
      } else if (obstacle.right + obstacle.width <= 0) {
        obstacle.element.remove();
        this.obstacles.splice(i, 1);
      }
    }

    for (let i = 0; i < this.snakes.length; i++) {
      const snake = this.snakes[i];
      snake.move();
      if (this.player.checkCollision(snake)) {
        this.player.left = 50;
        this.player.top = 250;
        snake.element.remove();
        this.snakes.splice(i, 1);
        this.lives--;
      } else if (snake.left >= this.gameScreen.clientWidth) {
        snake.element.remove();
        this.snakes.splice(i, 1);
        console.log(this.snakes);
      }
    }

    for (let i = 0; i < this.food.length; i++) {
      const food = this.food[i];
      food.move();
      if (this.player.checkCollision(food)) {
        food.element.remove();
        this.food.splice(i, 1);
        this.score += 10;
      } else if (food.right <= 0) {
        food.element.remove();
        console.log("removed food");
        this.food.splice(i, 1);
      }
    }

    if (this.player.left <= 0) {
      this.lives--;
    }
  }

  stopGame() {
    this.player.element.remove();

    this.obstacles.forEach((obstacle) => {
      obstacle.element.remove();
    });
    this.snakes.forEach((snake) => {
      snake.element.remove();
    });
    this.food.forEach((food) => {
      food.element.remove();
    });

    this.gameIsOver = true;

    this.gameScreen.style.display = "none";
    this.gameEndScreen.style.display = "block";

    this.obstacles = [];
    this.snakes = [];
    this.food = [];

    this.setHighScore();
  }

  spawnObstacle() {
    if (
      this.obstacles.length !== this.numberOfObstacles &&
      !this.pushingObstacle
    ) {
      this.pushingObstacle = true;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameBoard));
        this.pushingObstacle = false;
      }, 2500);
    }
  }

  spawnSnake() {
    if (this.snakes.length !== this.numberOfSnakes && !this.pushingSnakes) {
      this.pushingSnakes = true;
      setTimeout(() => {
        let snakehiss = new Audio("/docs/sounds/snake-hissing.mp3");
        snakehiss.loop = false;
        snakehiss.play();
        this.snakes.push(new Snake(this.gameBoard));
        snakehiss.volume = 1;
        this.pushingSnakes = false;
        console.log("pushing snakes", this.snakes);
      }, 750);
    }
  }

  spawnFood() {
    if (this.food.length !== this.numberOfFood && !this.pushingFood) {
      this.pushingFood = true;
      setTimeout(() => {
        this.food.push(new Food(this.gameBoard));
        this.pushingFood = false;
      }, 2500);
    }
  }

  setHighScore() {
    let highscore = document.getElementById("high-score");

    if (this.score > highscore.innerHTML) {
      localStorage.setItem("high-score", this.score);
    }

    highscore.innerHTML = localStorage.getItem("high-score");
  }
}
