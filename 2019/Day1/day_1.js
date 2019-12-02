const fs = require("fs"),
  path = require("path");

const filePath = path.join(__dirname, "input.txt");
const inputs = fs
  .readFileSync(filePath)
  .toString()
  .split("\n");

const calcFuel = mass => Math.floor(mass / 3) - 2;

// Part 1
console.log(inputs.reduce((acc, cur) => acc + calcFuel(cur), 0));

// Part 2
console.log(
  inputs.reduce((acc, cur) => {
    let totalFuel = 0;
    let fuel = calcFuel(cur);

    while (fuel > 0) {
      totalFuel += fuel;
      fuel = calcFuel(fuel);
    }

    return acc + totalFuel;
  }, 0)
);
