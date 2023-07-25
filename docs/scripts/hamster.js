// Create Hamster Class and add following functions
// Hamster Class: move(), (increaseDifficulty()), checkCollision()

class Hamster {
  //Create a constructor with properties and starting values
  constructor(gameBoard, left, top, width, height) {
    this.gameBoard = gameBoard;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;
    // Create the hamster img tag in HTML
    this.element = document.createElement("img");
    // Set up imgSrc
    this.element.src = "/docs/images/hamster.png";
    // Style and append to html
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.element.style.transform = "scaleX(-1)";
    this.gameBoard.appendChild(this.element);
  }

  // Move the player
  move() {
    // Update players Hamster position based on direction x and direction y
    this.left += this.directionX;
    this.top += this.directionY;

    // Ensure the players stays inside the game screen

    // Handle left and right borders
    //.offSetWidth -> returns the width of the element in data type number
    // Right Border
    if (this.left + this.width > this.gameBoard.offsetWidth) {
      this.left = this.gameBoard.offsetWidth - this.width;
    }
    // Left Border
    else if (this.left < 0) {
      this.left = 0;
    }

    // Handle top and bottom borders
    // Bottom
    if (this.top + this.height > this.gameBoard.offsetHeight - 150) {
      this.top = this.gameBoard.offsetHeight - this.height - 150;
    } else if (this.top < 130) {
      this.top = 130;
    }

    this.updatePosition();
  }

  // Updates the position of the player
  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
  // Check for collisions
  // Must check for collisions with obstacles and get pushed back and check for collisions with snakes and lose 1HP
  checkCollision(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();
  
    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}

/*
//Optional: animate the Hamster
animate()
*/
