interface Coordinate {
  x: number;
  y: number;
}

function parseCoordinateFromObject(obj: Coordinate): Coordinate {
  return {
    ...obj,
  };
}

function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
  return { x, y };
}
