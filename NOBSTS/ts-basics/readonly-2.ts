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

  public addDog(dog: Doggy) {
    this.doggies.push(dog);
  }
}

DogList.instance.addDog(rex);

// const dl = new DogList();
