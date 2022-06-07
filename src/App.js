import React from 'react';
import MyProvider from './context/MyProvider';
import Home from './pages/Home';

function App() {
  return (
    <MyProvider>
      <Home />
    </MyProvider>
  );
}

export default App;
