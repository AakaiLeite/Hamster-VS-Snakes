class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
  
    this.top = Math.floor(Math.random() * 380 + 90);
    this.right = this.gameScreen.clientWidth;
    this.width = 80;
    this.height = 80;

    this.element = document.createElement("img");
    this.element.src = "/docs/images/rock-dark.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.right = `${this.right}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }

  updatePosition() {
    this.element.style.left = `${this.right}px`;
    this.element.style.top = `${this.top}px`;
  }
  move() {
    this.right -= 2;
    this.updatePosition();
  }
}
