import React from "react";
import Operation from "./operation";
import Number from "./number";
export default function Item(props) {
  const getTemplate = () => {
    let template = null;
    if (isNaN(props.item) && props.item !== ".") {
      template = (
        <Operation onClick={props.onClick} item={props.item}></Operation>
      );
    } else {
      template = <Number onClick={props.onClick} item={props.item}></Number>;
    }
    return template;
  };

  return <>{getTemplate()}</>;
}
