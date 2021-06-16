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
}

DogList.instance;

const dl = new DogList();
