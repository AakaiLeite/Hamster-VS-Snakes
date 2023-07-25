// Create Food class and add following functions
// Obstacle Food: updatePosition(), move(),

class Food {
    // Create constructor with base properties and values
    constructor(gameScreen){
        this.gameScreen = gameScreen;
        // Random position for the appearance of the obstacle
        this.topSpawn = Math.floor(Math.random() * 380 + 90);
        this.top = this.topSpawn;
        // Appear from the top (right side)
        this.right = 0;
        // Have the following width and height
        this.width = 50;
        this.height = 50;
        // Create the HTML element and default styling
        this.element = document.createElement("img");
        this.element.src = "/docs/images/food-berries.png"
        this.element.style.position = "absolute";
        this.element.style.top = `${this.top}px`;
        this.element.style.right = `${this.right}px`;
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.gameScreen.appendChild(this.element);
    }

    
    // Move the food (drop down)
    move() {
        this.right -= 5;
        this.updatePosition();
    }

    // Updates the position of the obstacle
    updatePosition(){
        this.element.style.left = `${this.right}px`;
        this.element.style.top = `${this.top}px`;
    }
}