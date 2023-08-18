import PropTypes from 'prop-types';
import './button.css';
const Button = ({ children, variant = 'none', ...restProps }) => {
  return (
    <button className={variant} {...restProps}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf([
    'none',
    'tertiary',
    'primary',
    'secondary',
    'four',
  ]),
};

export default Button;
