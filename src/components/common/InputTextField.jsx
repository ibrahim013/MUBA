import React from "react";
import PropTypes from "prop-types";

const InputTextField = ({
  type,
  label,
  value,
  onChange,
  error,
  name,
  placeholder,
  id,
  disabled,
  className,
  cLabel
}) => (
  <div className="form-content">
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      className={className}
      placeholder={placeholder}
      id={id}
      disabled={disabled}
    />
      <label className={cLabel} htmlFor={id}>
      {label}
    </label>
    {error && <span className="invalid-feedback">{error}</span>}
  </div>
);

InputTextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  className: PropTypes.string.isRequired
};

InputTextField.defaultProps = {
  type: "text"
};

export default InputTextField;
