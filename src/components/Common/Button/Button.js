import React from 'react';
import { PropTypes } from 'prop-types';

const Button = props => {
  const { buttonText, onButtonClick, isDisabled } = props;

  return (
    <button onClick={onButtonClick} disabled={isDisabled}>
      {buttonText}
    </button>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool
};

Button.defaultProps = {
  isDisabled: false
};

export default Button;
