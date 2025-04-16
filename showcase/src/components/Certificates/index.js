import React, { useEffect, useState } from "react"; 
import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import certificates from "../../data/certificates.json";

const Certificates = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 3000); 

        return () => clearTimeout(timer);
    }, []);

    const renderCertificates = (certificates) => { 
        return (
            <div className="images-container">
                {
                    certificates.map((port, idx) => {
                        return (
                            <div
                                key={idx}
                                className="image-box fade-up"
                                style={{ animationDelay: `${idx * 0.2}s` }}
                            >
                                <img src={port.cover} alt="Certificates" className="Certificates-image" />
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
        <div className="container Certificates-page">
            <h1 className="page-title">
                <AnimatedLetters
                    letterClass={letterClass}
                    strArray={"Certificates".split("")}
                    idx={15}
                />
            </h1>
            <div>{renderCertificates(certificates.Certificate)}</div>
        </div>
    );
};

export default Certificates;
