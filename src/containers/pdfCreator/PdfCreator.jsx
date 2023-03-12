import React from "react";
import "./pdfCreator.css";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

const PdfCreator = () => {
    return (
        <div className="pdfCreator">
            <BsFillFileEarmarkPdfFill />
            <p>
                Konversation als PDF runterladen
            </p>
        </div>
    );
};

export default PdfCreator;