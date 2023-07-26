// Create Snake class and add following functions
// Snake Class: updatePosition(), move()
// Optional: adjustSpeed()

class Snake {
  // Create constructor with base properties and values
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    // Random position for the appearance of the obstacle
    this.top = Math.floor(Math.random() * 300 + 90);
    // Appear from the top (right side)
    this.left = 0;
    // Have the following width and height
    this.width = 50;
    this.height = 150;
    // Create the HTML element and default styling
    this.element = document.createElement("div");
    this.element.className = "snake";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);

    // Move the snake
  }
  // Updates the position of the snake
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    // Drop the obstacle to the bottom
    this.left += 1;
    this.element.style.animation = "snake-animation 0.3s steps(4) infinite";
    this.updatePosition();
  }

  /* animate() {
    let snakeArray = [1, 2];
    setInterval(() => {
      snakeArray.forEach((index) => {
        switch (index) {
          case "1":
            return "/docs/images/snake-moving-1.png";

          case "2":
            return "/docs/images/snake-moving-2.png";
        }
      });
    }, 500);
  } */
}
