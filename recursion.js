'use strict';

let numbers = [1, 2, 2, 3, 4, 5, 5, 2];

const recursiveCounter = (list, number) => {
  if (list.length === 0) return 0;
  list.shift();
  if (list[0] === number) return 1 + recursiveCounter(list, number);
  return recursiveCounter(list, number);
};

console.log('------Numărare recursivă------ ');
console.log(recursiveCounter(numbers, 2));

let combinations = [];

const binaryCombinations = (length, combination = '') => {
  if (combination.length === length) {
    combinations.push(combination);
    return '';
  }

  for (let i = 0; i <= 1; i++) {
    binaryCombinations(length, combination + i.toString());
  }
};

console.log('-----Generare recursivă-------');
binaryCombinations(3);
console.log(combinations);

const factorial = (number) => {
  if (number <= 1) return 1;
  return number * factorial(number - 1);
};

console.log('------Factorial------ ');
console.log(factorial(5));

/// ------Generare stele------
const printRow = (n) => {
  if (n <= 0) return '';
  return '* ' + printRow(n - 1);
};

const raisingStars = (n, i = 1) => {
  if (n === 0) {
    return;
  }
  console.log(printRow(i));
  raisingStars(n - 1, i + 1);
};

const fallingStars = (n) => {
  if (n === 0) {
    return;
  }
  console.log(printRow(n));
  fallingStars(n - 1);
};

const starsTriangle = (n) => {
  if (n < 0 || n > 20) {
    console.log('Please enter maximum 20 stars.');
    return;
  }

  raisingStars(n);
  fallingStars(n - 1);
};

console.log('------Generare stele------');
starsTriangle(3);

console.log('------Fractali Pătrate------');

const drawSquare = (parent, size, x, y) => {
  const square = document.createElement('div');
  square.classList.add('square');

  const borderWidth = size / 10;

  square.style.width = `${size}px`;
  square.style.height = `${size}px`;
  square.style.borderWidth = `${borderWidth}px`;

  if (x === 0) square.style.left = `${-borderWidth}px`;
  if (x === 1) square.style.left = `calc(100% + ${borderWidth}px)`;
  if (y === 0) square.style.top = `${-borderWidth}px`;
  if (y === 1) square.style.top = `calc(100% + ${borderWidth}px)`;

  parent.appendChild(square);
  return square;
};

const createChildren = (parent, size, n = 0) => {
  if (n === 0) {
    return;
  }

  setInterval(() => {
    createChildren(drawSquare(parent, size, 0, 0), size / 2, n - 1);
    createChildren(drawSquare(parent, size, 1, 0), size / 2, n - 1);
    createChildren(drawSquare(parent, size, 0, 1), size / 2, n - 1);
    createChildren(drawSquare(parent, size, 1, 1), size / 2, n - 1);
  }, 300);
};

const recursiveSquareFractal = (container, size, steps = 1) => {
  if (steps < 0 || steps > 8) return;
  const newSquare = drawSquare(container, size, -1, -1);
  createChildren(newSquare, size / 2, steps - 1);
};

let container = document.getElementById('container');
recursiveSquareFractal(container, 250, 4);
