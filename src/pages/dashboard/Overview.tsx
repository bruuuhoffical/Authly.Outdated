import DashboardLayout from '../../components/DashboardLayout';
import '../style/Overview.css';

const Overview = () => {
  return (
    <DashboardLayout>
      <div className="overview-page">
        {/* Welcome */}
        <div className="welcome-card">
          <h1>Welcome back 👋</h1>
          <p>This is your Authly Developer Hub. Build. Scale. Control.</p>
        </div>

        {/* Stats */}
        <div className="stats-grid">
          <div className="stat-card">
            <h3>2</h3>
            <p>Apps</p>
          </div>
          <div className="stat-card">
            <h3>25</h3>
            <p>Keys</p>
          </div>
          <div className="stat-card">
            <h3>14</h3>
            <p>Users</p>
          </div>
          <div className="stat-card">
            <h3>8</h3>
            <p>Cloud Vars</p>
          </div>
        </div>

        {/* Current App Info */}
        <div className="app-preview">
          <h2>Current App: <span>Authly Core</span></h2>
          <p><strong>ID:</strong> app_xyz123</p>
          <p><strong>Version:</strong> 1.0.0</p>
          <p><strong>Status:</strong> 🔓 Active</p>
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <a href="/dashboard/keys">🔑 Manage Keys</a>
          <a href="/dashboard/files">📦 Upload Files</a>
          <a href="/dashboard/variables">🌐 Cloud Vars</a>
          <a href="/dashboard/settings">⚙️ App Settings</a>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Overview;
