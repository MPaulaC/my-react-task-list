import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css'; 
import Menu from './Menu'; 
function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Menu />
      </div>
    </ChakraProvider>
  );
}

export default App;

