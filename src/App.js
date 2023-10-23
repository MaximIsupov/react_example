import './App.css';
import { useState } from 'react';
import Header from './components/header/Header.jsx'
import Home from './views/Home/Home.jsx'
import Work from './views/Work/Work.jsx'
import Pages from './views/Pages/Pages.jsx'
import Services from './views/Services/Services.jsx'
import Contacts from './views/Contacts/Contacts.jsx'
import { Route, Routes } from "react-router-dom"


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />"
      <Route path="/work" element={<Work />} />"
      <Route path="/pages" element={<Pages />} />"
      <Route path="/services" element={<Services />} />"
      <Route path="/contacts" element={<Contacts />} />"
    </Routes>
  );
}

export default App;
