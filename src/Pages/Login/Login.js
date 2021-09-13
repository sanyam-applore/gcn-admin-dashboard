import React, { useState, useEffect } from 'react';
import Header from '../../Components/Login/Header';
import LoginPopup from '../../Components/Login/LoginPopup/LoginPopup';
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const JWT = localStorage.getItem('JWTTOKEN') || sessionStorage.getItem('JWTTOKEN');
        if (JWT) {
            setRedirect(true);
        }
    }, []);

    if (redirect) {
        return <Redirect to="/dashboard" />
    }

    return (
        <div>
            <Header />
            <LoginPopup />
        </div>
    );
}

export default Login;