import React from 'react';
import './scss/_main.scss';
import { BrowserRouter as Router, } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ListRoutes from './components/ListRoutes';

function App() {
  return (
    <div>
      <Router>
        <div className="headerAndMain">
          <Header/>
          <main className="main">
            <ListRoutes/>
          </main>
        </div>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
