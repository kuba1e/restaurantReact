import Select from "../../Inputs/Select";
import { useField } from "formik";


const FormikSelectInput = ({ label, value, options, ...props }) => {
  const [field, meta] = useField(props);
  return <Select label={label} options={options} field={field} />;
};

export default FormikSelectInput