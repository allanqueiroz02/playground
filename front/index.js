"use strict";
function greeting(firstName, lastName) {
    if (lastName !== undefined)
        return `Ah vtnc, ${firstName} ${lastName}, com carinho é claro`;
    return `Tomar no cu, ${firstName}`;
}
console.log(greeting("Carlão", "Delas"));
console.log(greeting("Josias"));
// 0-1
const t = "MARIA";
function showNameInLower(name) {
    return name.toLowerCase();
}
console.log(showNameInLower(t));
// 2.
function mostraNome(nome, sobrenome) {
    return `${nome} ${sobrenome}`;
}
function saudacoesPara(fn, nomeFn, sobrenFn) {
    console.log("Olá, td bem?");
    console.log(fn(nomeFn, sobrenFn));
}
saudacoesPara(mostraNome, "Tomas", "Turbando");
//Generic functions
function mergeObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const obj1 = {
    n1: 1,
    n2: 2,
};
const obj2 = {
    n6: 6,
    n7: 7,
};
console.log("MERGED", mergeObj(obj1, obj2));
function getPosition(arr, index) {
    return arr[index];
}
console.log("Item =", getPosition([1, 2, 3], 2));
// 4
function verificaMaior(v1, v2) {
    let maior;
    if (+v1 > +v2)
        maior = v1;
    else
        maior = v2;
    return maior;
}
console.log("MAIORAL", verificaMaior("12312", "33"));
