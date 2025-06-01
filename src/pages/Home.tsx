import React, { useState } from 'react';
import { FaUsers, FaBook, FaDollarSign, FaGavel } from 'react-icons/fa';
import './style/Home.css';

const Home = () => {
  const [annual, setAnnual] = useState(true);

  const togglePlan = () => {
    setAnnual(prev => !prev);
  };

  return (
    <div data-theme="dark">
      {/* NAVBAR */}
      <nav className="authly-navbar">
        <div className="nav-left">
          <img src="/assets/logo/authly-nobg.png" className="authly-logo" alt="Authly" />
          <span className="logo-text">Authly</span>
        </div>
        <ul className="nav-center">
          <a href="#team"><FaUsers /> Team</a>
          <a href="#docs"><FaBook /> Docs</a>
          <a href="#pricing"><FaDollarSign /> Pricing</a>
          <a href="#terms"><FaGavel /> Terms</a>
        </ul>
        <div className="nav-right">
          <a href="/login" className="btn outline">Sign In</a>
          <a href="/register" className="btn primary">Get Started</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h2>Effortless, Next-Level Authentication</h2>
            <p>Get up and running fast with cloud-native subscriptions, granular access controls and automated workflows—all driven by a single API.</p>
            <div className="hero-buttons">
              <a href="/register" className="btn primary">Get Started</a>
              <a href="/dashboard" className="btn outline">Client Panel</a>
            </div>
          </div>
          <div className="hero-image">
            <img src="/assets/dashboard-preview.png" alt="Preview" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section" id="docs">
        <div className="container">
          <h3>Why Choose Authly</h3>
          <p>From instant license setup to secure cloud variables, Authly has everything to scale your app securely.</p>
          <div className="features-row">
            <div>🔐 <strong>License Keys:</strong> HWID locking, expiry, max device</div>
            <div>🧩 <strong>Subscription Tags:</strong> Flexible access grouping</div>
            <div>📦 <strong>File Delivery:</strong> Serve updates via CDN links</div>
            <div>🌐 <strong>Cloud Variables:</strong> Live-updated server configs</div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <h3>Pricing Options</h3>
          <p>All plans start with free usage. Upgrade anytime.</p>
          <div className="pricing-toggle">
            <label className="switch">
              <input type="checkbox" onChange={togglePlan} checked={annual} />
              <span className="slider"></span>
            </label>
            <span className="switch-label">Annual Pricing (save 50%)</span>
          </div>

          <div className="pricing-cards">
            <div className="pricing-card">
              <h4>Free</h4>
              <p className="price">{annual ? '$0 / year' : '$0 / month'}</p>
              <ul>
                <li>✅ 2 Apps</li>
                <li>✅ 25 Users / Keys</li>
                <li>✅ 15 Cloud Vars</li>
                <li>🚫 No custom logic</li>
              </ul>
              <button className="btn primary">Start for Free</button>
            </div>

            <div className="pricing-card">
              <h4>Developer</h4>
              <p className="price">{annual ? '$12 / year' : '$1.50 / month'}</p>
              <ul>
                <li>✅ 20 Apps</li>
                <li>✅ 300 Users / Keys</li>
                <li>✅ 100 Cloud Vars</li>
                <li>✅ Priority updates</li>
              </ul>
              <button className="btn outline">Purchase</button>
            </div>

            <div className="pricing-card">
              <h4>Enterprise</h4>
              <p className="price">{annual ? 'Custom / One-time' : 'Custom'}</p>
              <ul>
                <li>✅ Unlimited Everything</li>
                <li>✅ Full Source Code</li>
                <li>✅ Custom API Logic</li>
                <li>✅ Discord + Email Support</li>
              </ul>
              <button className="btn outline">Contact Us</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Authly</h4>
            <p>Authly is a developer-first platform for modern licensing, login and updates.</p>
          </div>
          <div>
            <h5>Links</h5>
            <a href="#">Docs</a>
            <a href="#">GitHub</a>
            <a href="#">Discord</a>
          </div>
          <div>
            <h5>Support</h5>
            <a href="#">Contact</a>
            <a href="#">Demo Accounts</a>
            <a href="#">Telegram</a>
          </div>
          <div>
            <h5>Legal</h5>
            <a href="#">Terms</a>
            <a href="#">Privacy</a>
            <a href="#">Licensing</a>
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Authly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
