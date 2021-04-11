import React from 'react';
import { PropTypes } from 'prop-types';

const TextInput = props => {
  const { id, type, name, value, onChange } = props;
  return (
    <div>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

TextInput.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  type: PropTypes.string
};

TextInput.defaultProps = {
  type: 'text'
};

export default TextInput;
