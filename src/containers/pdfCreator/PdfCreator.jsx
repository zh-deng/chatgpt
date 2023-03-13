import React from "react";
import "./pdfCreator.css";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

const PdfCreator = () => {
    return (
        <div className="pdfCreator">
            <BsFillFileEarmarkPdfFill className="pdfCreator__icon"/>
            <p>
                Konversation als PDF runterladen
            </p>
        </div>
    );
};

export default PdfCreator;