"use strict";
function showUserInfos(name, color) {
    return `Hey, ${name}, I see you like ${color}`;
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
console.log(fruitsILike.push("passion fruit"));
