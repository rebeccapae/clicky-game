import React from "react";
import "./style.css";

function Cards(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img src={props.image} 
        onClick = {() => props.changePicture(props.id)}/>
        <clicked attr={() => props.checkClicked(props.id)} />
      </div>
    </div>
  );
}

export default Cards;
