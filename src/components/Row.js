import React from "react";
import Square from "./Square";
import "./Row.css";

const Row = ({ row, rowNum }) => {
  let rowIsEven = rowNum % 2 === 0 ? true : false;

  return (
    <div className="row">
      {row.map((square, i) => (
        <Square key={i} parity={rowIsEven ? i : i + 1} code={square} />
      ))}
    </div>
  );
};

export default Row;