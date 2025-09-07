import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import { Link } from 'react-router-dom';
import LogoV from '../../assets/images/v-logo.svg';
import './index.scss';

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="container home-page">
                <div className="loading-container">
                    <Loader type="pacman" />
                    <p className="loading-text">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container home-page">
            <div className="content-wrapper">
                <div className="text-section">
                    <div className="logo-container">
                        <img src={LogoV} alt="Vishwas Logo" className="logo" />
                    </div>
                    
                    <h1 className="main-title">
                        Hi, I'm Vishwas
                    </h1>
                    
                    <h2 className="subtitle">
                        AI/ML & Cybersecurity Specialist
                    </h2>
                    
                    <p className="description">
                        Computer Science student at UC Davis passionate about machine learning, 
                        deep learning, and cybersecurity. Building innovative solutions for 
                        tomorrow's challenges.
                    </p>
                    
                    <div className="button-group">
                        <Link to="/portfolio" className="primary-button">
                            View My Work
                        </Link>
                        <Link to="/contact" className="secondary-button">
                            Get In Touch
                        </Link>
                    </div>
                </div>
                
                <div className="visual-section">
                    <div className="feature-grid">
                        <div className="feature-item">
                            <h3>AI/ML</h3>
                            <p>Machine Learning & Deep Learning</p>
                        </div>
                        <div className="feature-item">
                            <h3>Cybersecurity</h3>
                            <p>Security & Protection</p>
                        </div>
                        <div className="feature-item">
                            <h3>Development</h3>
                            <p>Full-Stack Solutions</p>
                        </div>
                        <div className="feature-item">
                            <h3>Research</h3>
                            <p>Innovation & Discovery</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home