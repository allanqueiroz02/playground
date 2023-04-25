"use strict";
const fruitsILike = ["orange", "lemon", "grape"];
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
function showConsole(fn) {
    fn(69);
}
function firstElement(arr) {
    return arr[1];
}
function mergeObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const userName = "Jon";
const favouriteColors = "red";
const otherInfos = {
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
console.log(">Merged", mergeObj({ a: 1231, b: 333 }, { c: "testt", b: "333" }));
