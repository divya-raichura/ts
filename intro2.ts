function addNos(a: number, b: number): number {
  return a + b;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(addNos(5, 12));

// let combineValues: Function;
// but with this we can't specify the type of the arguments and the return type
// so we can assign any function to this variable and it will give error only at runtime
//eg: combineValues = printResult;
// combineValues = printResult(1,2); will compile but give runtime error

// so we can use the below syntax to specify the type of the arguments and the return type

let combineValues: (a: number, b: number) => number;

combineValues = addNos;

console.log(combineValues(8, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// Unknown type
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

if (typeof userInput === "string") {
  userName = userInput;
}

// Never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

// generateError("An error occurred!", 500);

// Nullable types
let userInput1: null;
let userName1: string;

userInput1 = null;
userName1 = "Max";

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBeginning(["a", "b", "c"], "d"); // ['d', 'a', 'b', 'c']

// Decorators
function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}
