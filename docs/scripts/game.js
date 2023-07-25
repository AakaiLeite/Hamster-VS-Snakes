// Create class, set parameters and add following functions:
// Gameboard initialization and termination:  initializeBoard(), gameLoop(), countTime(), stopGame()
// Gameplay: updateGame(), spawn() (food, obstacles and snakes) ,checkCollisions(), clear() (food, obstacles and snakes), adjustSnakeSpeed()

class Game {
  // Gameplay initialization and termination
  constructor() {
    // Constructor will set base properties and corresponding values
    this.gameIntro = document.getElementById("game-intro-container");
    this.startScreen = document.getElementById("game-intro");
    this.gameInstructions = document.getElementById("game-instructions");
    this.gameScreen = document.getElementById("game-screen");
    this.gameBoard = document.getElementById("game-board");
    this.uiScreen = document.getElementById("ui-screen");
    this.gameEndScreen = document.getElementById("game-end");

    // Style the game board variables
    this.width = 1100;
    this.height = 618;

    // Player
    this.player = new Hamster(this.gameBoard, 50, 50, 75, 50);

    // Obstacles
    this.obstacles = [];
    this.numberOfObstacles = Math.floor(Math.random() * 2 + 1);
    // Snakes
    this.snakes = [];
    this.numberOfSnakes = Math.floor(Math.random() * 2 + 1);
    // Food
    this.food = [];
    this.numberOfFood = Math.floor(Math.random() * 2 + 1);

    // Flag to give info about pushing entity
    this.pushingObstacle = false;
    this.pushingSnake = false;
    this.pushingFood = false;

    // Score
    this.score = 0;

    // Lives
    this.lives = 5;

    // gameOver flag
    this.gameIsOver = false;
  }

  // Set parameters for game screen. Start the game loop
  initializeBoard() {
    // Swap Screens
    this.gameIntro.style.display = "none";
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "flex";
    this.gameBoard.style.display = "block";
    this.uiScreen.style.display = "block";
    // this.gameEndScreen.style.disply = "none";

    // Style the game board in CSS
    this.gameBoard.style.height = `${this.height}px`;
    this.gameBoard.style.width = `${this.width}px`;

    // Start the Game Loop
    this.gameLoop();
  }

  // Start the game: requestAnimationFrame and check if game is over to interrupt the game loop
  gameLoop() {
    // Check if the game is over to interrupt the game loop
    if (this.gameIsOver) {
      return;
    }

    this.updateGame();

    window.requestAnimationFrame(() => this.gameLoop());
  }

  // Update
  updateGame() {
    if (this.lives === 0) {
      this.stopGame();
    }

    // Move the Hamster
    this.player.move();

    this.spawnObstacle();
    this.spawnSnake();
    this.spawnFood();

    // Check for collision and if an obstacle is still on screen
    for (let i = 0; i < this.obstacles.length; i++) {
      // Move the obstacle
      const obstacle = this.obstacles[i];
      obstacle.move();
    }
    for (let i = 0; i < this.snakes.length; i++) {
      // Move the obstacle
      const snake = this.snakes[i];
      snake.move();
    }
    for (let i = 0; i < this.food.length; i++) {
      // Move the obstacle
      const food = this.food[i];
      food.move();
    }
  }

  // End the game
  stopGame() {
    // Remove the player
    this.player.element.remove();
    // Remove all obstacles
    this.obstacles.forEach((obstacle) => {
      obstacle.element.remove();
    });
    // End the game
    this.gameIsOver = true;
    // Hide the game screen
    this.gameScreen.style.display = "none";
    // Show end game screen
    this.gameEndScreen.style.display = "block";
    // Clear the entities
    this.obstacles = [];
    this.snakes = [];
  }

  // Create a function to spawn obstacles. Should spawn a random amount of obstacles between set boundaries
  spawnObstacle() {
    if (
      this.obstacles.length !== this.numberOfObstacles &&
      !this.pushingObstacle
    ) {
      this.pushingObstacle = true;
      setTimeout(() => {
        this.obstacles.push(new Obstacle(this.gameBoard));
        this.pushingObstacle = false;
      }, Math.floor(Math.random() * 1000 + 500));
    }
  }

  // Create a function that spawn snakes. Should spawn more snakes based in time passed
  spawnSnake() {
    if (this.snakes.length !== this.numberOfSnakes && !this.pushingSnake) {
      this.pushingSnake = true;
      setTimeout(() => {
        this.snakes.push(new Snake(this.gameBoard));
        this.pushingSnakes = false;
      }, Math.floor(Math.random() * 1000 + 500));
    }
  }
  // Create a function to spawn food
  spawnFood() {
    if (this.food.length !== this.numberOfFood && !this.pushingFood) {
      this.pushingFood = true;
      setTimeout(() => {
        this.food.push(new Food(this.gameBoard));
        this.pushingFood = false;
      }, Math.floor(Math.random() * 1000 + 500));
    }
  }

  // Create a function that checks collisions

  showInstructions() {
    this.gameIntro.style.display = "none";
    this.startScreen.style.display = "none";
    this.gameInstructions.style.display = "block";
    this.gameScreen.style.display = "none";
    this.gameBoard.style.display = "none";
    this.uiScreen.style.display = "none";
    this.gameEndScreen.style.display = "none";
  }
}
/*
// Count time in min:sec
countTime()

// Create a function that clears food, obstacles and snakes
clearEntity()
*/
