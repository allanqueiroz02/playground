import React from "react";
import { somaNumeros } from "./utils/";

const App = () => {
  const [list, setList] = React.useState([]);
  const [text, setText] = React.useState("");

  const handleAddText = React.useCallback(
    (e) => {
      e.preventDefault();
      setList((oldV) => [...oldV, text]);
      setText("");
    },
    [setList, text]
  );

  return (
    <div>
      <h1>What a nice day</h1>
      <form>
        <input
          id="text"
          placeholder="Digita"
          value={text}
          onChange={(e) => setText(e.target.value)}
          title="Um input"
        />
        <button type="button" onClick={handleAddText}>ADD</button>
        <button type="button" onClick={() => setList([])}>Clear</button>
      </form>
      <hr />
      {list.length ? (
        <ul>
          {list.map((item) => (
            <li key={item}>
              <h3>{item}</h3>
            </li>
          ))}
        </ul>
      ) : (
        <h2>Sem ítens para exibir</h2>
      )}
      <hr />
      <h4>Resultado com TS: {somaNumeros(1, 3, 4)}</h4>
    </div>
  );
};
export default App;
