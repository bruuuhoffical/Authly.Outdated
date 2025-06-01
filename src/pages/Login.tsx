import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import { FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa';
import { useNotification } from '../context/NotificationContext';

const Login = () => {
  const { session } = useAuth();
  const navigate = useNavigate();
  const { notify } = useNotification();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (session) navigate('/dashboard');
  }, [session]);

  const login = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setErrorMsg(error.message);
      notify('Incorrect Password');
    }
  };

  const oauth = async (provider: 'google' | 'github' | 'discord') => {
    await supabase.auth.signInWithOAuth({ provider });
  };

  return (
    <Layout>
      <h1>Welcome back</h1>
      <p>Login to your developer account</p>
      <input className="auth-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="auth-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button className="auth-btn" onClick={login}>Sign In</button>

      <div className="oauth-icons">
        <button onClick={() => oauth('google')}><FaGoogle /></button>
        <button onClick={() => oauth('discord')}><FaDiscord /></button>
        <button onClick={() => oauth('github')}><FaGithub /></button>
      </div>

      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
        Don’t have an account?{' '}
        <Link to="/register" style={{ color: '#0d70f8', fontWeight: 'bold', textDecoration: 'none' }}>
          Sign up
        </Link>
      </p>
    </Layout>
  );
};

export default Login;
