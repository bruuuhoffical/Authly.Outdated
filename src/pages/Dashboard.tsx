import Layout from '../components/Layout';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const Dashboard = () => {
  const navigate = useNavigate();

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      navigate('/login');
    }
  };

  return (
    <Layout>
      <div className="dashboard-box">
        <h1>Welcome to your <br /> Developer Dashboard</h1>
        <p className="dashboard-subtext">
          Here’s where you’ll manage your apps, users, keys, and more.
        </p>
        <button className="auth-btn" onClick={logout}>Logout</button>
      </div>
    </Layout>
  );
};

export default Dashboard;
