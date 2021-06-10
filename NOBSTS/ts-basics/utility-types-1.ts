// difficult to add new fields
interface MyUser {
  name: string;
  id: string;
  email?: string;
  phone?: string;
}
/**
 * Partial
 * Constructs a type with all properties of Type set to optional.
 * This utility will return a type that represents all subsets of a given type.
 */
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

/**
 * Required
 * Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
 */
type RequiredMyUser = Required<MyUser>;

/**
 * Pick
 * Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
 */
type JustNameAndEmail = Pick<MyUser, 'name' | 'email'>;

/**
 * Record
 * Constructs an object type whose property keys are Keys and whose property values are Type.
 * This utility can be used to map the properties of a type to another type.
 */
const mapById = (users: MyUser[]): Record<string, Omit<MyUser, 'id'>> => {
  return users.reduce((accum, user) => {
    const { id, ...other } = user;
    return {
      ...accum,
      [id]: other,
    };
  }, {});
};

mapById([
  {
    id: 'foo',
    name: 'Mr. Foo',
  },
  {
    id: 'baz',
    name: 'Mr. Baz',
  },
]);

/**
 * Omit
 * Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals).
 */
