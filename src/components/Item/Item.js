import React, { Children, useState } from "react";
import "./Item.css";
import noImg from "./img/no-image.jpg";
import ButtonsControl from "../ButtonsControl";

const Item = (props) => {
  const [hover, setHover] = useState(false);

 const {
    item,
    leftBtnHandler,
    rightBtnHandler,
  } = props
const { img = noImg, sitsQuantity, location, description, tableNumber } = item
  const btnGroup = hover ? (
    <ButtonsControl
      leftBtn={<i className="fa-solid fa-pen-to-square"></i>}
      rightBtn={<i className="fa-solid fa-trash-can"></i>}
      leftBtnHandler={leftBtnHandler}
      rightBtnHandler={rightBtnHandler}
    />
  ) : null;

    const children = Children.map(props.children, (child)=>{
      return React.cloneElement(child, {item})
    })

  return (
    <div
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
    >
      <div className="list__item-img">
        <img src={img} />
      </div>
      <div className="list__item-description">
        {children}
      </div>
      <div className="btns-container">
        <div className="btns-group">{btnGroup}</div>
      </div>
    </div>
  );
};

export default Item;
/*
<div className="list__item-subtitle">
<h6 className="list__item-subtitle-text">Table num: {tableNumber}</h6>
</div>
<div className="list__item-subtitle">
<h6 className="list__item-subtitle-text">
  Sits quantity: {sitsQuantity}
</h6>
</div>
<div className="list__item-subtitle">
<h6 className="list__item-subtitle-text">Location: {location}</h6>
</div>
<div className="list__item-subtitle">
<h6 className="list__item-subtitle-text">
  Description: {description}
</h6>
</div>
*/
