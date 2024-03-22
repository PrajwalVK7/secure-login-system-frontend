import React, { useEffect, useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { Route, Routes, Navigate } from 'react-router';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    setIsLoggedIn(!!token); 
  }, [sessionStorage.getItem("token")]);

  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route
        path='/home'
        element={isLoggedIn ? <Home /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default App;
