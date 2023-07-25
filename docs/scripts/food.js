// Create Food class and add following functions
// Obstacle Food: updatePosition(), move(),

class Food {
    // Create constructor with base properties and values
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        // Random position for the appearance of the obstacle
        this.top = Math.floor(Math.random() * 380 + 90);
        // Appear from the top (right side)
        this.left = this.gameScreen.clientWidth;
        // Have the following width and height
        this.width = 50;
        this.height = 50;
        // Create the HTML element and default styling
        this.element = document.createElement("img");
        this.element.src = "/docs/images/food-berries.png"
        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.left = `${this.right}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.gameScreen.appendChild(this.element);
    }

    
    // Move the food (drop down)
    move() {
        this.left -= 2;
        this.updatePosition();
    }

    // Updates the position of the obstacle
    updatePosition(){
        this.element.style.left = `${this.left}px`;
        this.element.style.top = `${this.top}px`;
    }
}