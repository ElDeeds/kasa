import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '../pages/index';
import Logements from '../pages/logements';
import About from '../pages/about';
import NotFound from '../pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/kasa" element={<Index />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
