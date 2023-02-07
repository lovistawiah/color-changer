import { useState } from 'react';
import AddColor from './AddColor'
import './App.css';

function App() {
  const [colorName, setColor] = useState('')
  const [hexValue,setHexValue] = useState('')
  return (
    <AddColor
    hexValue={hexValue}
    setHexValue={setHexValue}
      colorName={colorName}
      setColor={setColor}
    />
  );
}

export default App;
