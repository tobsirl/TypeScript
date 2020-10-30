class Vehicle {
  protected honk(): void {
    console.log(`honk`);
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log(`vroom`);
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
car.honk();
