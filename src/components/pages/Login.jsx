import { useState } from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='container'>
            <div className="login-form">
                <h3>Login</h3>
                <div className="username-form">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="password-form">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className='btn btn-primary'>
                    <Link to='/dashboard/123' state={
                        {
                            name: username,
                            username: username,
                            password: password
                        }
                    }>Login</Link>
                </button>
            </div>
        </div>
    );
}

export default Login;