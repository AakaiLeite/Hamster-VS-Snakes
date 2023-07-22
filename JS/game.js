// Create class, set parameters and add following functions:
// Gameboard initialization and termination:  initializeBoard(), startGame(), countTime(), stopGame()
// Gameplay: updateGame(), spawn() (food, obstacles and snakes) ,checkCollisions(), clear() (food, obstacles and snakes), adjustSnakeSpeed()

class Game {
  // Gameplay initialization and termination
  constructor() {
    // Constructor will set base properties and corresponding values
        
}
// Set parameters for game screen. Start the game loop
intializeBoard()
// Start the game: the animation function and check if game is over to interrupt the game loop
startGame()
// Count time in min:sec
countTime()
// Update
updateGame()
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
clear()
// Optional: Create a function that adjusts snake spead based on time passed
// Should, based on time, spawn more and more fast snakes and less slow snakes
adjustSnakeSpeed()
}
