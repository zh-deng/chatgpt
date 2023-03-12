import React from "react";
import { PdfCreator, BehaviourToggle } from "../../containers/index";
import "./chatbox.css";

const Chatbox = () => {
    return (
        <div className="chatbox">
            <BehaviourToggle />
            Chatbox
            <PdfCreator />
        </div>
    );
};

export default Chatbox;