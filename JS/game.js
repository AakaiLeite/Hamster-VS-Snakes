// Create class, set parameters and add following functions:
// Gameboard initialization and termination:  initializeBoard(), gameLoop(), countTime(), stopGame()
// Gameplay: updateGame(), spawn() (food, obstacles and snakes) ,checkCollisions(), clear() (food, obstacles and snakes), adjustSnakeSpeed()

class Game {
  // Gameplay initialization and termination
  constructor() {
    // Constructor will set base properties and corresponding values
    this.gameIntro = document.getElementById("game-intro-container")
    this.startScreen = document.getElementById("game-intro");
    this.gameScreen = document.getElementById('game-screen');
    this.gameBoard = document.getElementById("game-board");
    this.uiScreen = document.getElementById("ui-screen");
    this.gameEndScreen = document.getElementById("game-end");

    // Player
    this.player = new Hamster(this.gameBoard);

     // Obstacles
     this.obstacles = [];
     this.snakes = [];
 
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
  this.gameIntro.style.display = "none"
  this.startScreen.style.display = "none";
  this.gameScreen.style.display = "flex";
  this.gameBoard.style.display = "block";
  this.uiScreen.style.display = "block";
  this.gameEndScreen.style.disply = "none"

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
updateGame(){

}

/*
// Count time in min:sec
countTime()
// End the game
stopGame()

// Gameplay functions. Should spawn a random amount of food between set boundaries
// Create a function to spawn food
spawnFood()
// Create a function to spawn obstacles. Should spawn a random amount of obstacles between set boundaries
spawnObstacle()
// Create a function that spawn snakes. Should spawn more snakes based in time passed
spawnSnake()
// Create a function that checks collisions
checkCollisions()
// Create a function that clears food, obstacles and snakes
clearEntity()
}
*/