class Hamster {
  constructor(gameBoard, left, top, width, height) {
    this.gameBoard = gameBoard;
    this.left = left;
    this.top = top;
    this.width = width;
    this.height = height;
    this.directionX = 0;
    this.directionY = 0;

    this.element = document.createElement("img");
    this.element.src = "/docs/images/hamster.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${width}px`;
    this.element.style.height = `${height}px`;
    this.element.style.left = `${left}px`;
    this.element.style.top = `${top}px`;
    this.element.style.transform = "scaleX(-1)";
    this.gameBoard.appendChild(this.element);
  }

  move() {
    this.left += this.directionX;
    this.top += this.directionY;

    if (this.top + this.height > this.gameBoard.offsetHeight - 150) {
      this.top = this.gameBoard.offsetHeight - this.height - 150;
    } else if (this.top < 130) {
      this.top = 130;
    }

    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

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
