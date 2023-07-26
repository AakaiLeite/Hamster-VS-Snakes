class Snake {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.top = Math.floor(Math.random() * 300 + 90);
    this.left = 0;
    this.width = 50;
    this.height = 150;

    this.element = document.createElement("div");
    this.element.className = "snake";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.left}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;

    this.gameScreen.appendChild(this.element);

}
updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
}
move() {
    this.left += 1;
    this.element.style.animation = "snake-animation 0.3s steps(16) infinite";
    this.updatePosition();
  }
}
