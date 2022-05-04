import React from "react";
import * as yup from "yup";

const App = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwd, setPasswd] = React.useState("");

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    passwd: yup.string().min(4).required("AA"),
  });

  const data = React.useMemo(() => {
    return {
      name,
      email,
      passwd,
    };
  }, [name, email, passwd]);

  const submit = (e) => {
    e.preventDefault();
    schema.isValid(data).then((valido) => {
      valido ? alert("AEW, ta tudo certo") : alert("Tá errado carai");
    });
  };

  const arrayTest = [['aUmValor', 'testado'], ['novovalor', 99], ['finalValue', 33, 'carro']];
  const foiConvertido = Object.fromEntries(arrayTest);
  const novoFoiConvertido = {...foiConvertido}
  console.log(foiConvertido);
  console.log('>', novoFoiConvertido);

  return (
    <React.Fragment>
      <h1>Hello World</h1>
      <form>
        <input
          type="text"
          placeholder="nome"
          title="insira seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="senha"
          value={passwd}
          onChange={(e) => setPasswd(e.target.value)}
        />
        <hr />
        <button onClick={submit}>GO!</button>
      </form>
    </React.Fragment>
  );
};
export default App;
