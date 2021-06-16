class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const rex = new Doggy('Rex', 13);
// rex.name = 'foo';
rex;

class DogList {
  private doggies: Doggy[] = [];

  static instance: DogList = new DogList();

  private constructor() {}

  static addDog(dog: Doggy) {
    DogList.instance.doggies.push(dog);
  }

  getDogs() {
    return this.doggies;
  }
}

DogList.addDog(rex);
DogList.instance.getDogs(); 

// const dl = new DogList();
