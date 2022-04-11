import React, { useContext } from "react";
import "./TableForm.css";
import * as Yup from "yup";
import AddForm from "../AddForm";
import { useDispatch, useSelector } from "react-redux";
import {
  sendTable,
  updateTable,
  setActiveForm,
} from "../../../features/tables";
import AppContext from "../../../AppContext";

const TableForm = (props) => {
  const { editedValues } = useSelector(({ tables: { editedValues } }) => ({
    editedValues,
  }));
  const dispatch = useDispatch();
  const { tableOptions, imgFileFormatArray, tableLabels } = useContext(AppContext);

  const editedValuesLength = Object.keys(editedValues).length;

  let initValues = editedValuesLength
    ? editedValues
    : {
        sitsQuantity: "-",
        location: "-",
        description: "",
        tableNumber: "",
        img: "",
      };
  let submitHandler = editedValuesLength ? updateTable : sendTable;

  const validation = Yup.object({
    tableNumber: Yup.number()
      .min(1, "The table number should be more then num 1")
      .max(1000, "The table number should be less then 1000")
      .required("Required"),
    description: Yup.string()
      .min(2, "Please fill more description")
      .required("Required"),
    img:
      Yup.mixed().test(
        "type",
        "only images with formats png, jpeg, jpg",
        (file) => {
          return imgFileFormatArray.includes(file?.type);
        }
      ) && Yup.string(),
  });

  const onSubmitHandler = (data) => dispatch(submitHandler(data))
  const onToggleForm =() => dispatch(setActiveForm())
  const textInputField={label:"Table number", name:"tableNumber"}


  return (
    <AddForm
      initValues={initValues}
      validation={validation}
      onSubmitHandler={onSubmitHandler}
      onToggleForm={onToggleForm}
      options={tableOptions}
      labelsObj = {tableLabels}
      textInputField={textInputField}
    />
  );
};

export default TableForm;
