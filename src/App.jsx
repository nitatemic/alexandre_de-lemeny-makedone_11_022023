import React from 'react';
import './scss/_main.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import LogementDetails from './components/LogementDetails';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/logement/:id" component={<LogementDetails />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
