import React, { useState } from 'react';

const ToggleButton = () => {
  const [text, setText] = useState('Początkowy tekst');

  const handleChangeText = () => {
    setText(
      text === 'Początkowy tekst' ? 'Zmieniony tekst' : 'Początkowy tekst'
    );
  };

  return (
    <div>
      <p>{text}</p>
      <button onClick={handleChangeText}>Zmień tekst</button>
    </div>
  );
};

export default ToggleButton;
