import React from 'react';
import './scss/_main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LogementDetails from './components/LogementDetails';
import Header from './components/Header';
import Error from './components/Error';
import About from './components/About.jsx';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logement/:id" element={<LogementDetails />} />
          <Route exact path="/about" element={<About />} />
          {/* Route 404 */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
