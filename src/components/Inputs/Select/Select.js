import React from "react";

const Select = ({ label, options, field = {}, ...props }) => {
  return (
    <div className="filter">
      <label className="filter-label" htmlFor={field.name}>
        {label}
      </label>
      <select className="filter-select" {...field} {...props}>
        <option className="filter-option" value="-">
          -
        </option>
        {options.map((option) => {
          return (
            <option
              key={option.id}
              className="filter-option"
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Select;
