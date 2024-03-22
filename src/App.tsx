import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <>

    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    
    </>
  );
}

export default App;
