// Create Obstacles class and add following functions
// Obstacle Class: updatePosition(), move(),

class Obstacle {
    // Create constructor with base properties and values
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        // Random position for the appearance of the obstacle
        this.top = //add random and boundaries;
        // Appear from the top (right side)
        this.right = 0;
        // Have the following width and height
        this.width = 50;
        this.height = 50;
        // Create the HTML element and default styling
        this.element = document.createElement("img");
        this.element.src = // add img path
        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.right = `${this.right}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.gameScreen.appendChild(this.element);
    }
/*
    // Move the obstacle (drop down)
    move()

    // Updates the position of the obstacle
    updatePosition()
*/
}