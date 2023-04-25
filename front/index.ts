type Colors = "red" | "blue";
type fnConsole = (a: number | string) => void;
interface DefaultInfos {
  age: number;
  country: string;
}

const fruitsILike: Array<number | string> = ["orange", "lemon", "grape"];

function showUserInfos(name: string, color: string) {
  return `Hey, ${name}, I see you like ${color}`;
}

function showId(id: number | string) {
  if (typeof id === "number") console.log(`O id é um número, ${id}`);
  else console.log(`Ixi, é uma string.. ${id}`);
}

function isArrayOrString(arr: string | string[]) {
  console.log(".--------.");
  if (Array.isArray(arr)) console.log(`sim, é array, ${arr.join(" - ")}`);
  else console.log(`Nop, string, ${arr.toUpperCase()}`);
  console.log(".--------.");
}

function showConsole(fn: fnConsole) {
  fn(69);
}

function firstElement<T>(arr: T[]): T {
  return arr[1];
}

function mergeObj<U, T>(obj1: U, obj2: T) {
  return { ...obj1, ...obj2 };
}

const userName = "Jon";
const favouriteColors: Colors = "red";
const otherInfos: DefaultInfos = {
  age: 41,
  country: "Brazil",
};

console.log(showUserInfos(userName, favouriteColors));
console.log(otherInfos.age);
showId("313");
isArrayOrString(["1", "2", "3"]);
isArrayOrString("abc");
showConsole(showId);
console.log(">FirstEl", firstElement(["KT", 1, 5]));
console.log(">Merged", mergeObj({ a: 1231, b: 333 }, { c: "test", b: "333" }));
