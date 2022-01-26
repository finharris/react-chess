import "./App.css";
import React, { useState } from "react";
import Grid from "./components/Grid";

function App() {
  const [pieces, setPieces] = useState([]);

  const addPiece = () => {
    const x = parseInt(document.querySelector("#x").value);
    const y = parseInt(document.querySelector("#y").value);

    setPieces([...pieces, { content: "P", position: { x: x, y: y } }]);
  };

  return (
    <>
      <input type='number' id='x' placeholder='x' step={1} />
      <input type='number' id='y' placeholder='y' step={1} />
      <button onClick={() => addPiece()}>click</button>
      <Grid pieces={pieces}></Grid>
    </>
  );
}

export default App;
