class Sounds {
  constructor() {
    this.backgroundMusic = new Audio("./docs/sounds/background-music.mp3");
    this.hamsterSqueak = new Audio("./docs/sounds/hamster-squeak.mp3");
    this.hamsterEat = new Audio("./docs/sounds/hamster-eat.mp3");
    this.snakehiss = new Audio("./docs/sounds/snake-hissing.mp3");
  }

  playBackgroundMusic() {
    this.backgroundMusic.volume = 0.2;
    this.backgroundMusic.play();
  }

  playHamsterSqueak() {
    this.hamsterSqueak.volume = 0.3;
    this.hamsterSqueak.loop = false;
    this.hamsterSqueak.play();
  }

  playHamsterEat() {
    this.hamsterEat.volume = 0.6;
    this.hamsterEat.loop = false;
    this.hamsterEat.play();
  }

  playSnakeHiss() {
    this.snakehiss.volume = 1;
    this.snakehiss.loop = false;
    this.snakehiss.play();
  }
}
