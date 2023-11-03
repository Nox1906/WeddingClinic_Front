import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { 
  Home, 
  Vestidos,  
  Acessorios, 
  Appointments, 
  Location, 
  Parcerias, 
  AboutPage, 
  TestPage,
  PrivacyPolicyPage 
} from './container'
import './App.scss';
import {privacyPolicyLink} from './constants/index'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vestidos-noiva" element={<Vestidos />} />
          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/marcacoes" element={<Appointments />} />
          <Route path="/localizacao" element={<Location />} />
          <Route path="/parceiros" element={<Parcerias />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/test" element={<TestPage />} />
          <Route path={privacyPolicyLink} element={<PrivacyPolicyPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App