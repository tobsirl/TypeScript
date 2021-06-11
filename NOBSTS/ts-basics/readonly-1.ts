interface Cat {
  name: string;
  breed: string;
}

type ReadonlyCat = Readonly<Cat>;

function makeCat(name: string, breed: string): Cat {
  return {
    name,
    breed,
  };
}

const usul = makeCat('Usul', 'Tabby');
usul.name = 'Piter';
