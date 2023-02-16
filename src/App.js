import React, {useState}  from 'react';
import { Routes, Route } from 'react-router-dom'
import Dashboard from './pages/dashboard'


function App() {

  
  return (
    <div className='App'>
    <Routes>
      <Route path='/' 
       element={<h1>Hello</h1>}/>
      <Route path='/dashboard' element={<Dashboard/>} />
      {/* <Route path='/loginForm' element={<LoginForm/>} /> */}
      {/* <Route path='/register' element={<Register/>} /> */}
    </Routes>
   
    </div>
  );
}

export default App
