// difficult to add new fields
interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}

// partial
// Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
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

// required
// Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
type RequiredMyUser = Required<MyUser>;
