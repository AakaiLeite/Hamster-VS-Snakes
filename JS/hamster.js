// Create Hamster Class and add following functions
// Hamster Class: move(), (increaseDifficulty()), checkCollision()

class Hamster {
    //Create a constructor with properties and starting values
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        this.left = 50;
        this.top = 50;
        this.width = 50;
        this.height = 50;
        this.imgSrc = this.animate();
        this.directionX = 0;
        this.directionY = 0;
        // Create the hamster img in HTML
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
    checkCollision()

    //Animalte the Hamster
    animate()
}