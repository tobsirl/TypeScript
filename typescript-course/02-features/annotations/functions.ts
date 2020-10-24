// basic function
const add = (a: number, b: number): number => {
  return a + b;
};

function divide(a: number, b: number): number {
  return a / b;
}

// anonymous function
const multiply = function (a: number, b: number): number {
  return a * b;
};

const subtract = (a: number, b: number): number => {
  return a - b;
};

// void when nothing is returned from the function
const logger = (message: string): void => {
  console.log(message);
};

// never when the function will never return a value
const throwError = (message: string): never => {
  throw new Error(message);
};

const todayWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log('date', date);
  console.log('weather', weather);
};

