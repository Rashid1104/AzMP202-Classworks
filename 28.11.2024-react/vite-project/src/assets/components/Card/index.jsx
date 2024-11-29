import React from "react";
import "./index.css";
const Card = (props) => {
  console.log(props);

  return (
    <div className="card">
      <h2>{props.name}</h2>
      <p>{props.grup}</p>
      <h4>Price: {props.ball}</h4>
    </div>
  );
};

export default Card;