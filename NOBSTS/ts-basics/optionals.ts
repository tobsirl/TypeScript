// optional parameters
function printIngredient(
  quantity: string,
  ingredient: string,
  extra?: string,
  required?: string
) {
  console.log(
    `${quantity} ${ingredient} ${extra ? ` ${extra}` : ''} ${
      required ? ` ${required}` : ''
    }`
  );
}

printIngredient('1C', 'Floor');
printIngredient('1C', 'Floor', 'something more');
printIngredient('1C', 'Floor', 'something more', 'another something');

// optional fields
interface User {
  id: string;
  info?: {
    email?: string;
  };
}

function getEmail(user: User): string {
  if (user.info) {
    return user.info.email!;
  }
  return '';
}

function getEmailEasy(user: User): string {
  return user?.info?.email ?? '';
}

// optional callbacks
function addWithCallback(x: number, y: number, callback?: () => void) {
  console.log([x, y]);
  if (callback) {
    callback?.();
  }
}
