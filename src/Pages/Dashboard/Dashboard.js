import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../../Components/Dashboard/Header';
import MainSection from '../../Components/Dashboard/MainSection/MainSection';
import Footer from '../../Components/Global/Footer/Footer';
const Dashboard = () => {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const JWT = localStorage.getItem('JWTTOKEN') || sessionStorage.getItem('JWTTOKEN');
        if (!JWT) {
            setRedirect(true);
        }
    }, []);

    if (redirect) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <Header />
            <MainSection />
            <Footer />
        </div>
    );
}

export default Dashboard;