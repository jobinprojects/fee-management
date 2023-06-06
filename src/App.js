import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import './App.css';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import ContactPage from './components/ContactPage';
import FAQ from './components/Faq';


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li><Link to="./">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/faq">FAQ</Link></li> 
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li><a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a></li>
        <li><a href="https://www.twitter.com"><i className="fab fa-twitter"></i></a></li>
        <li><a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a></li>
        <li><a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </footer>
  );
};

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<SignUpForm />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};


export default App;
