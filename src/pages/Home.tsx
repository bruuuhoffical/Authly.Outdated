import React, { useState } from "react";
import { FaUsers, FaBook, FaDollarSign, FaGavel } from "react-icons/fa";
import './style/Home.css';

const Home = () => {
  const [annual, setAnnual] = useState(true);

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
            <h2>Welcome to Authly</h2>
            <p>
              Effortless authentication, licensing, and user management for your SaaS, desktop, or web app.
              <br />
              <strong>Secure, scalable, and easy to integrate.</strong>
            </p>
            <a href="/register" className="btn primary">Start Free</a>
          </div>
          <div className="hero-image showcase">
            <img src="/assets/dashboard-preview.png" alt="Authly Dashboard Preview" />
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
        <div className="container pricing-header">
          <h3>Plan</h3>
          <div className="toggle-group">
            <span
              className={annual ? "active" : ""}
              onClick={() => setAnnual(true)}
            >
              Annual
            </span>
            <span
              className={!annual ? "active" : ""}
              onClick={() => setAnnual(false)}
            >
              Monthly
            </span>
          </div>
        </div>

        <div className="container pricing-cards">
          <div className="pricing-card glassy">
            <h4>Starter</h4>
            <div className="plan-desc">For small projects and testing</div>
            <h2>$0 <span>/mo</span></h2>
            <ul>
              <li><span className="check-icon" />Up to 50 users</li>
              <li><span className="check-icon" />Basic API access</li>
              <li><span className="check-icon" />Community support</li>
            </ul>
            <a href="/register" className="btn outline">Get Started</a>
          </div>

          <div className="pricing-card glassy popular">
            <p className="plan-type">Premium</p>
            {/* <span className="badge">POPULAR</span> */}
            <p className="plan-desc">As you scale your tools</p>
            <h2>${annual ? '12' : '1.50'} <span>/ {annual ? 'year' : 'month'}</span></h2>
            <button className="btn primary">Get Developer</button>
            <ul>
              <li><span className="check-icon"></span><strong>20 Apps</strong></li>
              <li><span className="check-icon"></span><strong>300 Keys</strong></li>
              <li><span className="check-icon"></span><strong>100 Cloud Vars</strong></li>
              <li><span className="check-icon"></span><strong>Discord / Telegram Control</strong></li>
              <li><span className="check-icon"></span><strong>Priority updates</strong></li>
            </ul>
          </div>

          <div className="pricing-card glassy popular">
            <p className="plan-type">Developer</p>
            <span className="badge">POPULAR</span>
            <p className="plan-desc">As you scale your tools</p>
            <h2>${annual ? '30' : '5'} <span>/ {annual ? 'year' : 'month'}</span></h2>
            <button className="btn primary">Get Developer</button>
            <ul>
              <li><span className="check-icon"></span><strong>50 Apps</strong></li>
              <li><span className="check-icon"></span><strong>600 Keys</strong></li>
              <li><span className="check-icon"></span><strong>200 Cloud Vars</strong></li>
              <li><span className="check-icon"></span><strong>Priority updates</strong></li>
              <li><span className="check-icon"></span><strong>Discord / Telegram Control</strong></li>
            </ul>
          </div>

          <div className="pricing-card glassy popular">
            <p className="plan-type">Developer</p>
            {/* <span className="badge">POPULAR</span> */}
            <p className="plan-desc">As you scale your tools</p>
            <h2>${annual ? '50' : '10'} <span>/ {annual ? 'year' : 'month'}</span></h2>
            <button className="btn primary">Get Developer</button>
            <ul>
              <li><span className="check-icon"></span><strong>Maximum Apps</strong></li>
              <li><span className="check-icon"></span><strong>Maximum Keys</strong></li>
              <li><span className="check-icon"></span><strong>Maximum Cloud Vars</strong></li>
              <li><span className="check-icon"></span><strong>Priority updates</strong></li>
              <li><span className="check-icon"></span><strong>Discord / Telegram Control</strong></li>
              <li><span className="check-icon"></span><strong>Customer Support</strong></li>
              <li><span className="check-icon"></span><strong>Discord + Email Support</strong></li>
              <li><span className="check-icon"></span><strong>Custom Database</strong></li>
            </ul>
          </div>

          <div className="pricing-card glassy">
            <p className="plan-type">Enterprise</p>
            <p className="plan-desc">For serious infrastructure</p>
            <h2>Custom <span>/ one-time</span></h2>
            <button className="btn outlined">Contact Us</button>
            <ul>
              <li><span className="check-icon"></span><strong>Custom Hosting</strong></li>
              <li><span className="check-icon"></span><strong>Full Source Code</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <h4>Product</h4>
            <a href="#docs">Docs</a>
            <a href="#pricing">Pricing</a>
            <a href="#team">Team</a>
          </div>
          <div>
            <h4>Legal</h4>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </div>
        </div>
        <p className="copyright">© Authly. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
