type TiposAreas =
  | string
  | null
  | "triangulo"
  | "retangulo"
  | "trapezio"
  | "circulo";
function calculaArea(tipo: TiposAreas, valorA: number, valorB: number) {
  let res: number = 0;
  switch (tipo) {
    case "triangulo":
      res = (valorA * valorB) / 2;
      console.log("> Resultado:", res);
      break;
    case "retangulo":
      res = valorA * valorB;
      console.log("> Resultado:", res);
      break;
    case "trapezio":
      res = ((valorA + valorA) * valorB) / 2;
      console.log("> Resultado:", res);
      break;
    case "circulo":
      res = 3.14 * (valorA * valorA);
      console.log("> Resultado:", res);
      break;
    default:
      alert("Digita algo certo ae caraio!!");
      break;
  }
}

const tipo = prompt("Digite o tipo: ");
const valorA = prompt("Valor A: ");
const valorB = prompt("Valor B: ");

calculaArea(tipo, Number(valorA), Number(valorB));
