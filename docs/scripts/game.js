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
    this.gameEndScreen = document.getElementById("game-over");

    // Style the game board variables
    this.width = 1100;
    this.height = 618;

    // Player
    this.player = new Hamster(this.gameBoard, 250, 50, 75, 50);

    // Obstacles
    this.obstacles = [];
    this.numberOfObstacles = 2;
    // Snakes
    this.snakes = [];
    this.numberOfSnakes = 2;
    // Food
    this.food = [];
    this.numberOfFood = 2;

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
    let score = document.getElementById("score");
    let lives = document.getElementById("lives");

    score.innerHTML = this.score;
    lives.innerHTML = this.lives;

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
      if (this.player.checkCollision(obstacle)) {
        // Remove the obstacle from the Dom
        obstacle.element.remove();
        // Remove the obstacle from thhe Array
        this.obstacles.splice(i, 1);
        //Redduce player's lives b 1
        this.lives--;
      }
      // Check if the obstacle is still on screen
      else if (obstacle.left > this.left) {
        // Remove the obstacle from the DOM
        obstacle.element.remove();
        // Remove the obstacle from the array
        this.obstacles.splice(i, 1);
      }
    }
    // Check for collisions and move the snake
    for (let i = 0; i < this.snakes.length; i++) {
      // Move the snake
      const snake = this.snakes[i];
      snake.move();
      if (this.player.checkCollision(snake)) {
        // Remove the snake from the Dom
        snake.element.remove();
        // Remove the snake from the Array
        this.snakes.splice(i, 1);
        //Redduce player's lives b 1
        this.lives--;
      }
      // Check if the snake is still on screen
      else if (snake.right > this.right) {
        // Remove the snake from the DOM
        snake.element.remove();
        // Remove the snake from the array
        this.snakes.splice(i, 1);
      }
    }
    // Check for collisions and move the foo
    for (let i = 0; i < this.food.length; i++) {
      // Move the food
      const food = this.food[i];
      food.move();
      if (this.player.checkCollision(food)) {
        // Remove the food from the Dom
        food.element.remove();
        // Remove the food from thhe Array
        this.food.splice(i, 1);
        //Gain Score
        this.score=+10;
      }
      // Check if the food is still on screen
      else if (food.left > this.left) {
        // Remove the food from the DOM
        food.element.remove();
        // Remove the food from the array
        this.food.splice(i, 1);
      }
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
