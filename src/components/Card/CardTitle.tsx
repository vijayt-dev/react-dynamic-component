import React from "react";

function CardTitle({ children, tag }: any) {
  return React.createElement(tag, { className: "card-title" }, children);
}

export default CardTitle;
