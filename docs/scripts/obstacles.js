// Create Obstacles class and add following functions
// Obstacle Class: updatePosition(), move(),

class Obstacle {
  // Create constructor with base properties and values
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    // Random position for the appearance of the obstacle
    this.top = Math.floor(Math.random * 450 + 150);
    // Appear from the top (right side)
    this.right = 0;
    // Have the following width and height
    this.width = 80;
    this.height = 110;
    // Create the HTML element and default styling
    this.element = document.createElement("img");
    this.element.src = "/docs/images/rock-clay.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.right = `${this.right}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }
  // Move the obstacle (drop down)
  move() {
    // Drop the obstacle to the bottom
    this.left -= 5;
    this.updatePosition();
  }
  // Updates the position of the obstacle
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
