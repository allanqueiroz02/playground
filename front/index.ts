function showUserInfos(name: string, color: string) {
  return `Hey, ${name}, I see you like ${color}`;
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
