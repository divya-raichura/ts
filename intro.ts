interface Person {
  name?: string; // optional but if it is there it must be a string
  value: number; // required and must be a number
  [key: string]: any; // any other key if added, can be anything
}

let n1:Person = {
  value: +"1",
};

let n2 = {
  value: "2",
};

function add(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add(+n1.value, +n2.value));

type Style = 'bold' | 'italic' | 23;

let font: Style;

font = 'bold'; // or 'italic' or 23

const arr: number[] = []
const arrOfObjects: Person[] = []


type MyList =   [number?, string?, boolean?];

let arr2: MyList = [1, '2', true];