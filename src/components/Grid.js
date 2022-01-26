import React, { useState } from "react";
import Row from "./Row";

export default function Grid(props) {
  const [focused, setFocused] = useState(null);

  const rows = [0, 1, 2, 3, 4, 5, 6, 7];

  const handleFocusEvent = (x, y) => {
    setFocused({ position: { x: x, y: y } });
  };

  document.addEventListener("mousedown", (event) => {
    if (!event.target.classList.contains("square")) {
      setFocused(null);
    }
    return;
  });

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
          ></Row>
        ))}
      </div>
    </>
  );
}
