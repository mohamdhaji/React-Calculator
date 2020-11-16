import React from "react";
import { AiOutlinePercentage as Reminder } from "react-icons/ai";
import { AiOutlineClose as Mul } from "react-icons/ai";
import { RiDivideLine as Div } from "react-icons/ri";
import { FaEquals as Equal } from "react-icons/fa";
import { FaPlus as Plus } from "react-icons/fa";
import { FaMinus as Minus } from "react-icons/fa";

export default function Operation(props) {
  const lightBlueIndexs = ["AC", "+/-", "%"];

  let getIcon = (item) => {
    let template = null;
    switch (item) {
      case "%":
        template = <Reminder />;
        break;
      case "*":
        template = <Mul size="20px" />;
        break;
      case "/":
        template = <Div size="20px" />;
        break;
      case "=":
        template = <Equal />;
        break;
      case "+":
        template = <Plus />;
        break;
      case "-":
        template = <Minus />;
        break;
      default:
        template = item;
    }
    return template;
  };

  return (
    <div
      onClick={() => props.onClick(props.item)}
      className={`operation-item ${
        lightBlueIndexs.includes(props.item) ? "lightBlue" : null
      }`}
    >
      {getIcon(props.item)}
    </div>
  );
}
