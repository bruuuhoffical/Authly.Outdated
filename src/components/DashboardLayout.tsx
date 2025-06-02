import React, { useState } from 'react';
import './style/DashboardLayout.css';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard-root">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="logo-section">
          <img src="/assets/logo/authly-nobg.png" alt="Authly" />
          <span>Authly</span>
        </div>
        <nav>
          <a href="/dashboard">Overview</a>
          <a href="/dashboard/apps">Apps</a>
          <a href="/dashboard/users">Users</a>
          <a href="/dashboard/keys">Keys</a>
          <a href="/dashboard/variables">Cloud Vars</a>
          <a href="/dashboard/files">File Delivery</a>
          <a href="/dashboard/settings">Settings</a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="main">
        {/* Topbar */}
        <header className="topbar">
          <button className="menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            ☰
          </button>
          <div className="topbar-right">
            <span className="user-name">👤 Developer</span>
          </div>
        </header>

        <main className="dashboard-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
