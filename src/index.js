import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'

import './utils/index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Cafe from './pages/Cafe';
import Boulangerie from './pages/Boulangerie';
import Equipe from './pages/Equipe';
import Error from './pages/Error';

const StyledRouter = styled(Router)`
    position: relative;
    min-height: 100%;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/boulangerie" element={<Boulangerie />} />
        <Route path="/equipe" element={<Equipe />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </StyledRouter>
  </React.StrictMode>
);