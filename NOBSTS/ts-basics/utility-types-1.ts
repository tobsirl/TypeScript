// difficult to add new fields
interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

type MyUserOptionals = Partial<MyUser>;

const merge = (user: MyUser, overrides: MyUserOptionals): MyUser => {
  return {
    ...user,
    ...overrides,
  };
};

merge(
  { name: 'Jack', id: 'foo', email: 'jack@gmail.com' },
  { name: 'notJack', id: 'notFoo', email: 'notjack@gmail.com' }
);

// partial
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
