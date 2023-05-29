import SignUpForm from './components/SignUpForm';
import './App.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="social-links">
        <li><a href="#"><i className="fab fa-facebook"></i></a></li>
        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
        <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
      </ul>
    </footer>
  );
};

const App = () => {
  return (
    <div className="App">
      <Header />
      {/* Other content */}
      <SignUpForm />
      <Footer />
    </div>
  );
}

export default App;
