const TextInput = ({
  label,
  className = "input",
  field = {},
  errorComponent = null,
  ...props
}) => {
  return (
    <div className="text-filter">
      <label className="text-label" htmlFor={field.name}>
        {label}
      </label>
      <div className="text-input">
        <input className={className} {...field} {...props} />
        {errorComponent}
      </div>
    </div>
  );
};

export default TextInput