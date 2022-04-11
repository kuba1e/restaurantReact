import React, {Fragment} from "react";

const ButtonsControl = ({
  leftBtnType = "button",
  rightBtnType = "button",
  leftBtn,
  leftBtnHandler,
  rightBtn,
  rightBtnHandler,
}) => {
  const left = leftBtn ? (
    <div onClick={leftBtnHandler}>
      <button className="btn btn--edit" type={leftBtnType}>
        {leftBtn}
      </button>
    </div>
  ) : null;

  const right = rightBtn ? (
    <div onClick={rightBtnHandler}>
      <button className="btn btn--delete" type={rightBtnType}>
        {rightBtn}
      </button>
    </div>
  ) : null;

  return (
    <Fragment>
      {left}
      {right}
    </Fragment>
  );
};

export default ButtonsControl