import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateTramite from './pages/CreateTramites';
import ShowTramite from './pages/ShowTramite';
import EditTramite from './pages/EditTramite';
import DeleteTramite from './pages/DeleteTramite';

const App = () => {
  return (
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/tramites/create' element={<CreateTramite />} />
      <Route path='/tramites/details/:id' element={<ShowTramite />} />
      <Route path='/tramites/edit/:id' element={<EditTramite />} />
      <Route path='/tramites/delete/:id' element={<DeleteTramite />} />
    </Routes>
  );
};

export default App;
