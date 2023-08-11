import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Index from '../pages/index';
import Logements from '../pages/logements';
import About from '../pages/about';
import NotFound from '../pages/NotFound';
import logementsData from '../logements.json';

function App() {
  return (
    <Router>
      <Routes>
        {/* Due à GitHub */}
        <Route path="/kasa" element={<Index />} />
        <Route path="/kasa/" element={<Index />} />
        {/* Routes */}
        <Route path="/" element={<Index />} />
        <Route path="/logements/:id" element={<LogementsID />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

const LogementsID = () => {
  const { id } = useParams();
  const logement = logementsData.find(logement => logement.id === id);

  if (!logement) {
    return <Navigate to="/not-found" />;
  }

  return <Logements logement={logement} />;
}

export default App;
