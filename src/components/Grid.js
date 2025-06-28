import React, { useState } from "react";
import Row from "./Row";

export default function Grid(props) {
  const [focused, setFocused] = useState(null);

  const rows = [0, 1, 2, 3, 4, 5, 6, 7];

  const handleFocusEvent = (x, y) => {
    const previouslyFocusedPos = focused;

    // check something was selected before
    if (previouslyFocusedPos !== null) {
      const grid = document.querySelector(".grid");
      const previouslyFocused =
        grid.children[previouslyFocusedPos.position.y].children[
          previouslyFocusedPos.position.x
        ];

      // check if the previously focused square had a piece
      if (previouslyFocused.children.length > 0) {
        props.handleMovePiece(
          {
            x: previouslyFocusedPos.position.x,
            y: previouslyFocusedPos.position.y,
          },
          { x: x, y: y }
        );
      }
    }

    setFocused({ position: { x: x, y: y } });
  };

  document.addEventListener("mousedown", (event) => {
    if (!event.target.classList.contains("square")) {
      setFocused(null);
    }
    return;
  });

  const pieceIcons = {
    pb: require("../assets/images/pieces/pb.png"),
    pw: require("../assets/images/pieces/pw.png"),
    bb: require("../assets/images/pieces/bb.png"),
    bw: require("../assets/images/pieces/bw.png"),
    nb: require("../assets/images/pieces/nb.png"),
    nw: require("../assets/images/pieces/nw.png"),
    rb: require("../assets/images/pieces/rb.png"),
    rw: require("../assets/images/pieces/rw.png"),
    kb: require("../assets/images/pieces/kb.png"),
    kw: require("../assets/images/pieces/kw.png"),
    qb: require("../assets/images/pieces/qb.png"),
    qw: require("../assets/images/pieces/qw.png"),
  };

  return (
    <>
      <div className='grid'>
        {rows.map((r) => (
          <Row
            row={r}
            key={r}
            pieces={props.pieces}
            focused={focused}
            handleFocusEvent={handleFocusEvent}
            pieceIcons={pieceIcons}
          ></Row>
        ))}
      </div>
    </>
  );
}
