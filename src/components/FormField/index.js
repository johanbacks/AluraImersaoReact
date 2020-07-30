/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
// eslint-disable-next-line linebreak-style
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React from 'react';

// eslint-disable-next-line import/no-unresolved
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
function FormField({
  label, type, name, value, onChange,
}) {
  const fildId = `id_${name}`;
  return (
    <div>
      <label
      // eslint-disable-next-line no-undef
        htmlFor={fildId}
      >
        {label}:
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
FormField.defaultProps = {
  type: 'text',
  value: '',
};
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default FormField;
