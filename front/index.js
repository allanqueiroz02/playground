"use strict";
function showUserInfos(name, color) {
    return `Hey, ${name}, I see you like ${color}`;
}
function showId(id) {
    if (typeof id === "number")
        console.log(`O id é um número, ${id}`);
    else
        console.log(`Ixi, é uma string.. ${id}`);
}
function isArrayOrString(arr) {
    console.log(".--------.");
    if (Array.isArray(arr))
        console.log(`sim, é array, ${arr.join(" - ")}`);
    else
        console.log(`Nop, string, ${arr.toUpperCase()}`);
    console.log(".--------.");
}
const userName = "Jon";
const favouriteColors = "red";
const otherInfos = {
    age: 41,
    country: "Brazil",
};
const fruitsILike = ["orange", "lemon", "grape"];
console.log(showUserInfos(userName, favouriteColors));
console.log(otherInfos.age);
showId("313");
isArrayOrString(["1", "2", "3"]);
isArrayOrString("abc");
