import "./App.css";
import React, { useState, useEffect } from "react";
import Grid from "./components/Grid";

function App() {
  const [pieces, setPieces] = useState([]);

  useEffect(() => {
    loadFen("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR");
  }, []);

  const loadFen = (fenInput) => {
    fenInput = fenInput || null;
    if (fenInput === null) {
      fenInput = document.querySelector("#fen").value;
    }
    setPieces([]);
    let fen = fenInput.split(" ");
    let piecePositions = fen[0].split("");

    // upper white lower black

    // parse piece positions
    let index = 0;
    for (const piece of piecePositions) {
      // can be white, black, piece, new row, skip spaces

      if (piece === "/") {
        continue;
      }

      // if skip
      if (Number.isInteger(parseInt(piece))) {
        let skipAmt = parseInt(piece);
        index += skipAmt;
        continue;
      }

      let x = (index % 8) + 1;
      let y = 8 - Math.floor(index / 8);

      setPieces((oldPieces) => [
        ...oldPieces,
        { position: { x: x, y: y }, content: piece },
      ]);

      index++;
    }
  };

  return (
    <>
      <input
        type='text'
        name=''
        id='fen'
        // value='rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
      />
      <button onClick={() => loadFen()}>click</button>
      <Grid pieces={pieces}></Grid>
    </>
  );
}

export default App;
