import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import Layout from '../components/Layout';
import { useAuth } from '../hooks/useAuth';
import { FaGoogle, FaGithub, FaDiscord } from 'react-icons/fa';
import { useNotification } from '../context/NotificationContext';

const Register = () => {
  const { session } = useAuth();
  const navigate = useNavigate();
  const { notify } = useNotification();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (session) navigate('/dashboard');
  }, [session]);

  const register = async () => {
    if (password !== confirm) {
      setErrorMsg('Passwords do not match');
      notify('Passwords do not match');
      return;
    }

    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      setErrorMsg(error.message);
      notify(error.message);
    } else {
      notify('Registration successful');
    }
  };

  const oauth = async (provider: 'google' | 'github' | 'discord') => {
    await supabase.auth.signInWithOAuth({ provider });
  };

  return (
    <Layout>
      <h1>Create your account</h1>
      <p>Join the Authly developer platform</p>
      <input className="auth-input" type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input className="auth-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <input className="auth-input" type="password" placeholder="Confirm Password" value={confirm} onChange={e => setConfirm(e.target.value)} />
      <button className="auth-btn" onClick={register}>Sign Up</button>

      <div className="oauth-icons">
        <button onClick={() => oauth('google')}><FaGoogle /></button>
        <button onClick={() => oauth('discord')}><FaDiscord /></button>
        <button onClick={() => oauth('github')}><FaGithub /></button>
      </div>

      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}

      <p style={{ marginTop: '1rem', fontSize: '1rem' }}>
        Already have an account?{' '}
        <Link to="/login" style={{ color: '#0d70f8', fontWeight: 'bold', textDecoration: 'none' }}>
          Login
        </Link>
      </p>
    </Layout>
  );
};

export default Register;
