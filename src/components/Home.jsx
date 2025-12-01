import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Perform logout logic here (clear tokens, etc.)
        navigate('/');
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <h1>Dashboard</h1>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </header>
            <main className="home-content">
                <div className="card">
                    <h2>Welcome to your Dashboard</h2>
                    <p>You have successfully logged in.</p>
                </div>
            </main>
        </div>
    );
};

export default Home;
