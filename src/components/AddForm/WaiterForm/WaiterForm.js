import React, { useContext } from "react";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { sendWaiter, updateWaiter } from "../../../features/waiters";
import { setActiveForm } from "../../../features/waiters";
import AppContext from "../../../AppContext";
import AddForm from "../AddForm";

export const WaiterForm = () => {
  const editedValues = useSelector(
    ({ waiters: { editedValues } }) => editedValues
  );
  const dispatch = useDispatch();
  const { waitersOptions, imgFileFormatArray, waitersLabels } =
    useContext(AppContext);

  const editedValuesLength = Object.keys(editedValues).length;

  let initValues = editedValuesLength
    ? editedValues
    : {
        position: "-",
        appRole: "-",
        description: "",
        firstName: "",
        lastName: "",
        img: "",
      };
  let submitHandler = editedValuesLength ? updateWaiter : sendWaiter;

  const onSubmitHandler = (data) => dispatch(submitHandler(data));
  const onToggleForm = () => dispatch(setActiveForm());

  const validation = Yup.object({
    description: Yup.string()
      .min(2, "Please fill more description")
      .required("Required"),
    firstName: Yup.string()
      .min(2, "Please fill more description")
      .required("Required"),
    lastName: Yup.string()
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

  const textInputField = { label: "First Name", name: "firstName" };

  return (
    <AddForm
      initValues={initValues}
      validation={validation}
      onSubmitHandler={onSubmitHandler}
      onToggleForm={onToggleForm}
      options={waitersOptions}
      labelsObj={waitersLabels}
      textInputField={textInputField}
    />
  );
};

export default WaiterForm;
