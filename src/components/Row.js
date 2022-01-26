import React from "react";
import Square from "./Square";

export default function Row(props) {
  const columns = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <>
      <div className='row'>
        {columns.map((c) => (
          <Square
            row={props.row}
            column={c}
            key={props.row + 1 * c + 1}
            pieces={props.pieces}
            focused={props.focused}
            handleFocusEvent={props.handleFocusEvent}
          ></Square>
        ))}
      </div>
    </>
  );
}
