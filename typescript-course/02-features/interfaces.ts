interface Vehicle {
  name: string;
  year: Date;
  broken: boolean;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Year: ${vehicle.year}`);
  console.log(`Broken: ${vehicle.broken}`);
};

printVehicle(oldCivic);
