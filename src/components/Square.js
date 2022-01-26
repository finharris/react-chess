import React from "react";
import Piece from "./Piece";

export default function Square(props) {
  const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let className = "";
  if (
    (["a", "c", "e", "g"].includes(columns[props.column]) &&
      (props.row + 1) % 2 !== 0) ||
    (!["a", "c", "e", "g"].includes(columns[props.column]) &&
      (props.row + 1) % 2 === 0)
  ) {
    // black
    className += "black square";
  } else {
    // white
    className += "white square";
  }

  let before;
  let after;
  if (columns[props.column] === "a") {
    before = props.row + 1;
  }
  if (props.row === 0) {
    after = columns[props.column];
  }

  let p;
  for (const piece of props.pieces) {
    if (
      piece.position.x === props.column + 1 &&
      piece.position.y === props.row + 1
    ) {
      p = <Piece content={piece.content}></Piece>;
    }
  }

  let isFocused = "false";
  if (props.focused !== null) {
    if (
      props.focused.position.x === props.column &&
      props.focused.position.y === props.row
    ) {
      isFocused = "true";
    }
  }

  return (
    <>
      <div
        className={className}
        before={before}
        after={after}
        data-focused={isFocused}
        onClick={() => props.handleFocusEvent(props.column, props.row)}
      >
        {p}
      </div>
    </>
  );
}
