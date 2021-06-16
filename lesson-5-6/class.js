// Create a Car object using the class syntax
class Car {
    // Your code
    constructor(brand,model,speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    };
    accelerate(amount) {
        this.speed += amount;
    };
    brake(amount) {
        this.speed -= amount;
    };
    status(){
        return `${this.brand} ${this.model} running at ${this.speed} km/h`;
    };
}

const car = new Car("Renault", "Scenic", 60); // should dispay new object

console.log(car); // Should return new object
console.log(car.accelerate());  // validate parameters
console.log(car.brake());  // validate parameters
console.log(car.status()); // Renault Scenic running at 60 km/h

// Ex.2 Create additinal class CarColor, exteds it from the Car class and add new method carColor() into this class
// Then return brand model and car color

class CarColor extends Car{
    constructor(brand,model,color) {
        super(brand,model); // speed
        this.color = color;
    }
    carColor(){
        return this.brand + this.model + "has " + this.color + "color"; // template string
    }
}




const carColor = new CarColor("Renault", "Scenic", "Red");

console.log(carColor); // should display new object
console.log(carColor.carColor()); // Should display string "Renault Scenic has Red color"