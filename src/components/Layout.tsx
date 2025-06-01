import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from '../assets/logo/authly-nobg.png';
import '../pages/style/Navbar.css';

const rotatingTexts = [
  'Secure your desktop apps effortlessly',
  'License keys, cloud vars, and more',
  'Designed for modern developers',
  'Forget KeyAuth. Build Authly.',
];

const titles: Record<string, string> = {
  '': 'Home',
  login: 'Login',
  register: 'Register',
  dashboard: 'Dashboard',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [currentText, setCurrentText] = useState(rotatingTexts[0]);
  const [textIndex, setTextIndex] = useState(0);

  // ✅ Fix title lag using window.location + rAF
  useEffect(() => {
    requestAnimationFrame(() => {
      const rawPath = window.location.pathname.split('/')[1];
      const path = rawPath === '' ? '' : rawPath.toLowerCase();
      const title = titles[path] || 'App';
      document.title = `Authly – ${title}`;
    });
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(rotatingTexts[textIndex]);
  }, [textIndex]);

  return (
    <div className="layout">
      <div className="auth-container animate">
        <div className="auth-left">
          {children}
        </div>
        <div className="auth-right">
          <div className="brand">
            <img src={logo} alt="Authly logo" />
            <h1>Authly</h1>
          </div>
          <p className="rotating-text" key={currentText}>{currentText}</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
