import React from 'react';
import PlusAccount from './pages/PlusAccount';
import Regcard from './pages/Regcard';
import Header from './shared/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Resultitself from './pages/Resultitself';
import Accountdirect from './pages/Accountdirect';
import Accountl2direct from './pages/Accountl2direct';
import Footer from './shared/Footer';
function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/Regcard" element={<Regcard />} />
          <Route path="/PlusAccount" element={<PlusAccount />} />
          <Route path="/Resultitself" element={<Resultitself />} />
          <Route path="/Accountdirect" element={<Accountdirect />} />
          <Route path="/Accountl2direct" element={<Accountl2direct />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
