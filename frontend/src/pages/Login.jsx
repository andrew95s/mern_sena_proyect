import React, { useState, useEffect } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const Login = () => {
    const navigate = useNavigate();
    const { enqueueSnackbar } = useSnackbar();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(false);
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const savedUsername = localStorage.getItem('username');
        const savedPassword = localStorage.getItem('password');

        if (savedUsername && savedPassword) {
            setUsername(savedUsername);
            setPassword(savedPassword);
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post('http://localhost:5555/login', {
                username,
                password,
            });

            if (response.data.success) {
                if (remember) {
                    localStorage.setItem('username', username);
                    localStorage.setItem('password', password);
                }

                navigate('/');
            } else {
                enqueueSnackbar('Usuario o contraseña incorrectos', {
                    variant: 'error',
                });
            }
        } catch (error) {
            enqueueSnackbar('Error al iniciar sesión', {
                variant: 'error',
            });
        }

        setLoading(false);
    };

    const handleVisibleChange = () => {
        setVisible(!visible);
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Usuario</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type={visible ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="visible">Mostrar contraseña</label>
                <input
                    type="checkbox"
                    id="visible"
                    checked={visible}
                    onChange={handleVisibleChange}
                />
                <label htmlFor="remember">Recordar</label>
                <input
                    type="checkbox"
                    id="remember"
                    checked={remember}
                    onChange={(e) => setRemember(e.target.checked)}
                />
                <button type="submit">Iniciar sesión</button>
            </form>
            {loading && <Spinner />}
        </div>
    );
};

export default Login;