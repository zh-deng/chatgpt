import React from "react";
import { PdfCreator, BehaviourSelector } from "../../containers/index";
import "./chatbox.css";

const Chatbox = () => {
    return (
        <div className="chatbox">
            <BehaviourSelector />
            Chatbox
            <PdfCreator />
        </div>
    );
};

export default Chatbox;