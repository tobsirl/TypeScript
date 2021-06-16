class Doggy {
  constructor(public readonly name: string, public readonly age: number) {}
}

const rex = new Doggy('Rex', 13);
// rex.name = 'foo';
rex;

class DogList {
  private doggies: Doggy[] = [];

  public instance: DogList = new DogList();
}

DogList.instance;
