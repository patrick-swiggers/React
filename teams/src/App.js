import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';
import Header from './components/Header';
import Employees from './pages/Employees';
import Customers from './pages/Customers';
import Dictionary from './pages/Dictionary';
import Definition from './pages/Definition';
import Error from './components/Error';

import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (

    <BrowserRouter>
      <Header>
        <Routes>
          <Route path='/employees' element={<Employees />} />
          <Route path='/definition' element={<Definition />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/dictionary/:search' element={<Definition />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/*' element = {<Error />}/>
        </Routes>
      </Header>
    </BrowserRouter>

  )
}

export default App;
