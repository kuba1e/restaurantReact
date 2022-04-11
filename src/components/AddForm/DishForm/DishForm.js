import React, { useContext } from "react";
import * as Yup from 'yup'
import { useSelector, useDispatch } from "react-redux";
import { sendDish, updateDish } from "../../../features/dishes";
import { setActiveForm } from "../../../features/dishes";
import AppContext from "../../../AppContext";
import AddForm from "../AddForm";

export const DishForm = () => {
  const  editedValues  = useSelector(
    ({ dishes: { editedValues } }) => editedValues
  );
  const dispatch = useDispatch();
  const { dishesOptions, imgFileFormatArray, dishesLabels } = useContext(AppContext);

  const editedValuesLength = Object.keys(editedValues).length;

  let initValues = editedValuesLength
    ? editedValues
    : {
        country: "-",
        type: "-",
        description: "",
        price: 0,
        img: "",
      };
  let submitHandler = editedValuesLength ? updateDish : sendDish;


  const onSubmitHandler = (data) => dispatch(submitHandler(data))
  const onToggleForm =() => dispatch(setActiveForm())

  const validation = Yup.object({
    price: Yup.number()
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

  const textInputField={label:"Price", name:"price"}

  return <AddForm 
  initValues={initValues}
  validation={validation}
  onSubmitHandler={onSubmitHandler}
  onToggleForm={onToggleForm}
  options={dishesOptions}
  labelsObj={dishesLabels}
  textInputField={textInputField}
  />;
};

export default DishForm
