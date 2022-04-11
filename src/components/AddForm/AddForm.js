import { Formik, Form } from "formik";
import FormikTextInput from "../FormikInputs/FormikTextInput";
import FormikSelectInput from "../FormikInputs/FormikSelectInput";
import FileInput from "../Inputs/FileInput";
import ButtonsControl from "../ButtonsControl";

const AddForm = ({
  initValues,
  validation,
  onSubmitHandler,
  onToggleForm,
  options,
  labelsObj: { select, textlabel },
  textInputField
}) => {
  return (
    <Formik
      initialValues={initValues}
      validationSchema={validation}
      onSubmit={(values) => {
        let data = new FormData();
        for (let key in values) {
          if (key === "img") {
            continue;
          }
          data.append(key, values[key]);
        }
        data.append("image", values.img);
        onSubmitHandler(data);
        onToggleForm();
      }}
    >
      {(formik) => (
        <div className="form__container">
          <Form className="form__control">
            <div className="form__inputs">
              <FormikSelectInput
                label={select[0].label}
                name={select[0].name}
                options={options[0]}
              />
              <FormikSelectInput
                label={select[1].label}
                name={select[1].name}
                options={options[1]}
              />
              <FormikTextInput
                label={textInputField.label}
                name={textInputField.name}
                type="text"
              />
              <FormikTextInput
                label="Description"
                name="description"
                type="text"
              />
              <FileInput
                label="Attach the photo"
                name="img"
                onChange={(event) =>
                  formik.setFieldValue("img", event.target.files[0])
                }
              />
            </div>
            <div className="form__btns-group">
              <ButtonsControl
                leftBtnType="submit"
                rightBtnType="reset"
                leftBtn={<i className="fa-solid fa-check"></i>}
                rightBtn={<i className="fa-solid fa-ban"></i>}
                rightBtnHandler={onToggleForm}
              />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default AddForm;
