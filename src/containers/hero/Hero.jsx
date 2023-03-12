import React from "react";
import "./hero.css";

const heroText = "Das Projekt ChatWithAI wurde entwickelt um die neuen Technologien im Sektor der künstlichen Intelligenz vorzustellen. Hierfür wurde ChatGPT, ein Chatsystem mit künstlicher Intelligenz über die API von OpenAI integriert. Zusätzlich wurden ein paar Features wie Antwortverhalten des Chat-Bots und xx eingebaut. Viel Spaß beim rumexperimentieren :)";

const Hero = () => {
    return (
        <div className="hero" id="about">
            <h1>
                Über dieses Project
            </h1>
            <p>
                {heroText}
            </p>
        </div>
    );
};

export default Hero;