import TextInput from "../../Inputs/TextInput";
import { useField, ErrorMessage } from "formik";

const FormikTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <TextInput
      label={label}
      field={field}
      className={`input ${meta.touched && meta.error && "is-invalid"}`}
      errorComponent={
        <ErrorMessage component="div" name={field.name} className="error" />
      }
    />
  );
};

export default FormikTextInput