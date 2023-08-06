import React from 'react';
import Index from '../pages/index';
import Logements from '../pages/logements';
import About from '../pages/about';
import NotFound from '../pages/NotFound'; // Importe le composant NotFound
//import logementsData from '../logements.json';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <Router>
      <Routes>
                    <Route element={<Navigate replace to="/accueil" />} path="/" />
                    <Route path="/accueil" element={<Index />}/>
                    <Route path="/logement/:id" element={<Logements />}/>
                    <Route path="/a-propos" element={<About />}/>
                    <Route path="*" element={<NotFound />}/>
                </Routes>
    </Router>
  );
}

export default App;
