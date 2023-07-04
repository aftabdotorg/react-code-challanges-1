import { useState } from 'react';

import DarkMode from './components/DarkMode';
import FormValidator from './components/FormValidator';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={`App ${darkMode && 'dark-mode'}`}>
      <DarkMode
        setDarkMode={setDarkMode}
        darkMode={darkMode}
        handleClick={handleClick}
      />
      <FormValidator />
    </div>
  );
}

export default App;
