const fs = require("fs"),
  path = require("path");

const filePath = path.join(__dirname, "input.txt");
const input = fs.readFileSync(filePath).toString();

const getInput = () => input.split(",").map(Number);

const run = (noun, verb, state) => {
  state[1] = noun;
  state[2] = verb;

  for (let address = 0; address < state.length; address += 4) {
    const [opcode, input1Pos, input2Pos, outputPos] = state.slice(
      address,
      address + 4
    );

    if (opcode === 99) break;
    const input1 = state[input1Pos];
    const input2 = state[input2Pos];

    state[outputPos] = opcode === 1 ? input1 + input2 : input1 * input2;
  }

  return state[0];
};

//Part 1
console.log(run(12, 2, getInput()));

//Part 2
for (let noun = 0; noun <= 99; noun++) {
  for (let verb = 0; verb <= 99; verb++) {
    const output = run(noun, verb, getInput());
    if (output === 19690720) console.log(100 * noun + verb);
  }
}
