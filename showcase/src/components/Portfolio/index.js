import React, { useEffect, useState } from "react"; 
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    const renderPortfolio = (portfolio) => { 
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div
                                key={idx}
                                className="image-box fade-up"
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                                <img src={port.cover} alt="portfolio" className="portfolio-image" />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button className="btn" onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    };

    return (
        <div className="container portfolio-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Portfolio".split("")}
                    idx={15}
                />
            </h1>
            <div>{renderPortfolio(portfolioData.portfolio)}</div>
        </div>
    );
};

export default Portfolio;
