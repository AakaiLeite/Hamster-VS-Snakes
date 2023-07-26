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

class Food {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.top = Math.floor(Math.random() * 380 + 90);
    this.left = this.gameScreen.clientWidth;
    this.width = 55;
    this.height = 40;
    
    this.element = document.createElement("img");
    this.element.src = "/docs/images/food-berries.png";
    this.element.style.position = "absolute";
    this.element.style.top = `${this.top}px`;
    this.element.style.left = `${this.right}px`;
    this.element.style.height = `${this.height}px`;
    this.element.style.width = `${this.width}px`;
    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left -= 2;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }
}
