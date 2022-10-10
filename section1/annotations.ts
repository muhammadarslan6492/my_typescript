const apples: number = 10;
const speed: string = 'fast';
const hasName: boolean = true;
let notingMatch: null = null;

// build in objects
const now: Date = new Date();

// arrays
const colors: string[] = ['red', 'greeen'];
const numbers: number[] = [1, 2, 3];
const truths: boolean[] = [true, false];

// classes
class Car {}

const car: Car = new Car();

// object literals
const point: { x: number; y: number } = {
  x: 5,
  y: 5,
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(1);
};

// when to use annotations

// 1) function that returns the 'any' type
const json = '{"x": 5, "y": 10}';
const coordinates = JSON.parse(json);
console.log(coordinates);

// 3) variable whose type cannot be referred correctly

const nums = [-10, -1, 20];

let numberAboveZero: boolean | number = false;

for (let i = 0; i <= numbers.length; i++) {
  if (nums[i] > 0) {
    numberAboveZero = nums[i];
  }
}
