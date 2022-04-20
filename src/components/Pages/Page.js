import React, { Children } from "react";

import ButtonsControl from "../ButtonsControl";
import Select from "../Inputs/Select";
import TextInput from "../Inputs/TextInput";
import TableItemList from "../ItemList/TableItemList";

const Page = ({
  form,
  onToggleForm,
  onSelectChange,
  onTextChange,
  preparedData,
  options,
  labelsObj: { select, textInput },
  children,
}) => {
  return (
    <section className="section">
      <div className="section__inner">
        <div className="items-control">
          {form}
          <ButtonsControl
            leftBtn={<i className="fa-solid fa-plus"></i>}
            leftBtnHandler={onToggleForm}
          />
        </div>
        <div className="filter__control">
          <Select
            label={select[0].label}
            name={select[0].name}
            options={options[0]}
            onChange={({ target: { value } }) => onSelectChange[0](value)}
          />
          <Select
            label={select[1].label}
            name={select[1].name}
            options={options[1]}
            onChange={({ target: { value } }) => onSelectChange[1](value)}
          />
          <TextInput
            label={textInput.label}
            field={{ ...textInput }}
            onChange={({ target: { value } }) => onTextChange(value)}
          />
        </div>
        {Children.map(children, (child) => {
          return React.cloneElement(child, { preparedData });
        })}
      </div>
    </section>
  );
};

export default Page;
