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
  //optional chaining with ?.
  setTimeout(() => {
    const myVar = user.street?.name;
    if (!myVar) return console.log("não é verdadeiro, ", myVar);

    return console.log("é true, ", myVar);
  }, 4000);
  //optional chaining with ?.()
  setTimeout(() => {
    user.myStreet?.();
  }, 2000);

  let userAdmin = {
    admin() {
      return "I am admin";
    },
  };
  let userGuest = {};

  //optional chaining with ?.()
  console.log(userAdmin.admin?.());
  console.log(userGuest.admin?.());

  //optional chaining with ?.[]
  const KEY = "name";
  const user1 = { name: "José" };
  const user2 = null;
  const user3 = { address: { street: "Rua 01" } };

  setTimeout(() => {
    console.log(">>> ",user1?.[KEY]);
    console.log(">>> ",user1?.["name"]);
    console.log(">>> ",user2?.[KEY]);
    console.log("-", user3?.address?.["street"]);
    console.log("-", user3?.address?.[KEY]);
  }, [3000]);

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
