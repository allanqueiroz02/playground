interface InfoFabricante {
  nomeEmpresa: string;
  cnpjEmpresa: number;
}

interface Produto {
  nome: string;
  garantia: number;
  qtdDisponivel?: number;
  fabricante: InfoFabricante;
}

function showProduct(produto: Produto): void {
  console.log(`
    Produto: ${produto.nome}, feito pela ${produto.fabricante.nomeEmpresa}, possui garantia de ${produto.garantia} anos.
    Possui em estoque ${produto.qtdDisponivel} unidades.
  `);
}

const notebook: Produto = {
  nome: "legion 5i",
  garantia: 2,
  qtdDisponivel: 22,
  fabricante: {
    nomeEmpresa: "Lenovo",
    cnpjEmpresa: 1532180001,
  },
};

showProduct(notebook);
