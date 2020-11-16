import React from "react";

export default function Number(props) {
  console.log(props.item);
  return (
    <div
      onClick={() => props.onClick(props.item)}
      className={`number-item ${props.item === "0" ? "zero" : null} ${
        props.item === "." ? "dot" : null
      }`}
    >
      {props.item}
    </div>
  );
}
