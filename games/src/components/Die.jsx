import React from "react";

export default function Die(props) {
  return (
    <button
      className={`die-face ${props.isheld ? "held" : ""}`} 
      onClick={props.handleClicks}
    >
      {props.value}
    </button>
  );
}