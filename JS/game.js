// Create class, set parameters and add following functions:
// Gameboard initialization and termination:  initializeBoard(), startGame(), stopGame()
// Gameplay: updateGame(), handleInput(), spawn(), checkLevelUp() ,checkCollisions(), clearObstacle(), adjustSnakeSpeed()

class Game {
  // Gameplay initialization and termination
  constructor() {
    // Constructor will set base properties and corresponding values
    // Set parameters for game screen. Start the game loop
    intializeBoard()

    // Start the game: the animation function and check if game is over to interrupt the game loop
    startGame()

    // Update
    updateGame()
  }
  // End the game
  stopGame()

  // Gameplay functions
  // Create a function to handle user input
  handleInput()
  // Create a function to spawns obstacles
  spawnObstacle()
  // Create a function that spawns snakes
  spawnSnake()
  // Create a function that checks if player points = levelUp
  checkLevelUp()
  // Create a function that checks collisions
  checkCollisions()
  // Create a function that clears obstacles
  clearObstacle()
  // Create a function that adjusts snake spead based on level
  adjustSnakeSpeed()
}
