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

type Colors = "red" | "blue";
interface DefaultInfos {
  age: number;
  country: string;
}

const userName = "Jon";
const favouriteColors: Colors = "red";
const otherInfos: DefaultInfos = {
  age: 41,
  country: "Brazil",
};

const fruitsILike: Array<number | string> = ["orange", "lemon", "grape"];

console.log(showUserInfos(userName, favouriteColors));
console.log(otherInfos.age);
showId("313");
isArrayOrString(["1", "2", "3"]);
isArrayOrString("abc");
