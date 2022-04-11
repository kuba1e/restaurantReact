import { ErrorMessage } from "formik";

const FileInput = ({ label, name, ...props }) => {
  return (
    <label>
      {label}
      <input
        className="file-input"
        type="file"
        accept=".png, .jpg, .jpeg"
        name={props.name}
        onChange={props.onChange}
      />
      <ErrorMessage component="div" name={name} className="error" />
    </label>
  );
};

export default FileInput