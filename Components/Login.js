
import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';

 function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const projectID = '702e2973-e506-449f-afc8-c3212d6645d1';
  let user = localStorage.getItem('username');
  const handleSubmit = async (e) => {
        e.preventDefault();
        const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };
        try {
          await axios.get('https://api.chatengine.io/chats', { headers: authObject });
    
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
          if(username == 'Poonam') {
            localStorage.setItem('admin', true);
          } else {
            localStorage.setItem('admin', false);
          }
    
          window.location.reload();
          setError('');
        } catch (err) {
          setError('Oops, incorrect credentials.');
        }
      };
      const logout = () => {
        localStorage.removeItem('username')
        setUsername(null)
      }
      useEffect(() => {
      },[username]);
  return (
    <div className="wrapper">
      <div>
        {user && <div className="loggedIn">
        <Home/>
        <button className="logout"onClick={logout}>Logout</button>
        
        </div>
        }
        {user === null && <form onSubmit={handleSubmit} className="loginform">
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Login</span>
            </button>
          </div>
        </form>}
        <h1>{error}</h1>
      </div>
    </div>

  );
};

export default Login;
