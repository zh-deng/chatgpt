import React from "react";
import "./pdfCreator.css";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { selectPdfMenu, togglePdf } from "../../redux/pdfMenuSlice";
import { selectDialog } from "../../redux/conversationSlice";
import { ImCross } from "react-icons/im";

const PdfCreator = () => {
    const { active } = useSelector(selectPdfMenu);
    const { dialog } = useSelector(selectDialog);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        (dialog.length > 0) && dispatch(togglePdf());
    };

    return (
        <div className="pdfCreator" id="download">
            <div className="pdfCreator__button" onClick={handleButtonClick}>
                <BsFillFileEarmarkPdfFill className="pdfCreator__button__icon"/>
                <p>
                    Konversation als PDF runterladen
                </p>
            </div>
            <div className={active === false ? "pdfCreator__menu invisible" : "pdfCreator__menu"}>
                <div className="pdfCreator__menu__exit">
                    <span onClick={handleButtonClick}>
                        <ImCross />
                    </span>
                </div>
                <div className="pdfCreator__menu__selection">
                    {
                        dialog.map((messageObject, index) => {
                            return (
                                <div key={messageObject.source + index}>
                                    <h4>
                                        {messageObject.source}
                                    </h4>
                                    <p>
                                        {messageObject.message}
                                    </p>
                                </div>
                            );
                        })
                    }
                </div>
                <div className="pdfCreator__menu__button">
                    <BsFillFileEarmarkPdfFill className="pdfCreator__menu__button__icon"/>
                    <p>
                        Konversation als PDF runterladen
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PdfCreator;