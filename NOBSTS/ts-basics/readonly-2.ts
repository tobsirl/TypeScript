class Doggy {
  constructor(public readonly name: string, public age: number) {}
}

const rex = new Doggy('Rex', 13);
rex.name = 'foo';
rex;
