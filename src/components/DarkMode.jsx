/* eslint-disable react/prop-types */
import propTypes from 'prop-types';

const DarkMode = ({ darkMode, handleClick }) => {
  return (
    <div className="page">
      <button
        className={`${darkMode ? 'light-mode-button' : 'dark-mode-button'}`}
        onClick={() => handleClick(false)}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default DarkMode;

DarkMode.propTypes = {
  darkMode: propTypes.bool,
  handleClick: propTypes.func,
};
