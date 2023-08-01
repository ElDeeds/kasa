import Index from '../pages/index'
import Logements from '../pages/logements'
import About from '../pages/about'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}/>
        <Route path='/logements' element={<Logements />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
