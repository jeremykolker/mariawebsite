import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import OtherPage from './pages/OtherPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/other" component={OtherPage} />
        {/* Add a 404 Not Found page for any other unrecognized route */}
        <Route component={NotFoundPage} />
      </Routes>
    </Router>
  );
};

export default App;
