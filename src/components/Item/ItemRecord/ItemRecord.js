import React from "react";

export const ItemRecord = (props) => {
  const { label, field, item } = props
  return (
    <div className="list__item-subtitle">
      <h6 className="list__item-subtitle-text">
        {label}: {item[field]}
      </h6>
    </div>
  );
};
