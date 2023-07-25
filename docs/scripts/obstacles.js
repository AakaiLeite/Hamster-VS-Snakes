// Create Obstacles class and add following functions
// Obstacle Class: updatePosition(), move(),

class Obstacle {
  // Create constructor with base properties and values
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    // Random position for the appearance of the obstacle
    this.topSpawn = Math.floor(Math.random() * 380 + 90);;
    this.top = this.topSpawn;
    // Appear from the top (right side)
    this.right = this.gameScreen.clientWidth;
    // Have the following width and height
    this.width = 80;
    this.height = 110;
    // Create the HTML element and default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/rock-dark.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.right = `${this.right}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }
  // Updates the position of the obstacle
  updatePosition() {
    this.element.style.left = `${this.right}px`;
    this.element.style.top = `${this.top}px`;
  }
  // Move the obstacle (drop down)
  move() {
    // Drop the obstacle to the bottom
    this.right -= 3;
    this.updatePosition();
  }
}
