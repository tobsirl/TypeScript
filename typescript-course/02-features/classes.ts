class Vehicle {
  drive(): void {
    console.log(`chugga chugga`);
  }
  
  honk(): void {
    console.log(`honk`);
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
