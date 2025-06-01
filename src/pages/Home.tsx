import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo/authly-nobg.png';

const sections = [
  { id: 'about', title: 'About Authly', content: 'Authly is a futuristic authentication system...' },
  { id: 'features', title: 'Core Features', content: 'Licensing, user systems, cloud variables and more.' },
  { id: 'team', title: 'About the Developers', content: 'Built by developers for developers.' },
  { id: 'docs', title: 'Documentation & SDK', content: 'Easy-to-follow guides, SDKs and API references.' },
];

const Home = () => {
  return (
    <div className="homepage">
      {/* Top Bar */}
      <nav className="navbar">
        <div className="navbar-left">
          <img src={logo} alt="Authly logo" className="logo" />
          <h1 className="logo-text">Authly</h1>
        </div>
        <ul className="navbar-center">
          <li><a href="#team">Team</a></li>
          <li><a href="#docs">Documentation</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#terms">Terms</a></li>
        </ul>
        <div className="navbar-right">
          <Link to="/register" className="btn primary">Get Started</Link>
          <Link to="/login" className="btn outline">Sign In</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h2>Authentication Reimagined for Developers</h2>
        <p>Simple. Secure. Scalable. Protect your apps like never before.</p>
        <Link to="/register" className="btn primary">Start Building →</Link>
      </section>

      {/* Sliding Sections */}
      {sections.map((sec, i) => (
        <motion.section
          key={sec.id}
          id={sec.id}
          className="section"
          initial={{ x: i % 2 === 0 ? -100 : 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3>{sec.title}</h3>
          <p>{sec.content}</p>
        </motion.section>
      ))}

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Authly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
