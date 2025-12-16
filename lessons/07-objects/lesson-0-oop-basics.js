// Starter: OOP Basics — Quick intro and demo
// Analogy: "Blueprint vs House" (class vs instance)
console.log("📚 Lesson 0: OOP Basics — Quick Starter");
console.log("====================================");

// Minimal example: a simple class and instance
class Car {
	constructor(make, model) {
		this.make = make;
		this.model = model;
		this.isRunning = false;
	}

	start() {
		this.isRunning = true;
		return `${this.make} ${this.model} started`;
	}

	stop() {
		this.isRunning = false;
		return `${this.make} ${this.model} stopped`;
	}
}

const car = new Car('Toyota', 'Corolla');
console.log(car.start());
console.log(car.stop());

// Hands-on: Ask students to add `fuelLevel` and a `drive(miles)` method that consumes fuel.
