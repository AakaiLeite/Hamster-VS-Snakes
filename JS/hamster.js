// Create Hamster Class and add following functions
// Hamster Class: move(), (increaseDifficulty()), checkCollision()

class Hamster {
    //Create a constructor with properties and starting values
    constructor(gameScreen, imgSrc){
        this.gameScreen = gameScreen;
        this.left = 50;
        this.top = 50;
        this.width = 50;
        this.height = 50;
        this.directionX = 0;
        this.directionY = 0;
        // Create the hamster img tag in HTML
        this.element = document.createElement("img");
        // Set up imgSrc
        this.element.src = imgSrc;
        // Style and append to htlm
        this.element.style.position = "absolute";
        this.element.style.width = `${width}px`;
        this.element.style.height = `${height}px`;
        this.element.style.left = `${left}px`;
        this.element.style.top = `${top}px`;
        this.gameScreen.appendChild(this.element);
    }

    // Move the player
    move()

    // Updates the position of the player
    updatePosition()

    // Check for collisions
    // Must check for collisions with obstacles and get pushed back and check for collisions with snakes and lose 1HP
    checkCollision()

    //Optional: animate the Hamster
    animate()
}