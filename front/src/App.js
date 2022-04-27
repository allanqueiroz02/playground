import React from "react";
import * as yup from "yup";

const App = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [passwd, setPasswd] = React.useState("");

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    passwd: yup.string(),
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

  const user = {
    streett: {
      name: "Street of exemple",
    },
    myStreet() {
      console.log("My street is Mr. Fuck Me YEAH");
    },
  };
  setTimeout(() => {
    const myVar = user.street?.name;
    if (!myVar) return console.log("não é verdadeiro, ", myVar);

    return console.log("é true, ", myVar);
  }, 4000);
  setTimeout(() => {
    user.myStreet?.();
  }, 2000);

  let userAdmin = {
    admin() {
      return "I am admin";
    },
  };
  let userGuest = {};

  console.log(userAdmin.admin?.());
  console.log(userGuest.admin?.());

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
