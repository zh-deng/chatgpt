import React from "react";
import "./hero.css";

const heroText = "Das Projekt ChatWithAI wurde entwickelt um die neuen Technologien im Sektor der künstlichen Intelligenz vorzustellen. Hierfür wurde ChatGPT, ein Chatsystem mit künstlicher Intelligenz über die API von OpenAI integriert. Zusätzlich wurden ein paar Features wie das Aussuchen des Antwortverhalten des Chat-Bots eingebaut. Viel Spaß beim rumexperimentieren :)";

const Hero = () => {
    return (
        <div className="hero" id="about">
            <div className="hero__content">
                <h1>
                    Über dieses Project
                </h1>
                <p>
                    {heroText}
                </p>
            </div>
        </div>
    );
};

export default Hero;