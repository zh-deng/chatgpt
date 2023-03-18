import React from "react";
import "./pdfCreator.css";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addActiveMessage, removeActiveMessage, removeAllMessages, selectAllMessages, selectPdfMenu, togglePdf, toggleSelectAll } from "../../redux/pdfMenuSlice";
import { selectDialog } from "../../redux/conversationSlice";
import { ImCross } from "react-icons/im";
import PdfDownloadButton from "./PdfDocument";

const PdfCreator = () => {
    const { active, activeMessages, selectAll } = useSelector(selectPdfMenu);
    const { dialog } = useSelector(selectDialog);
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        (dialog.length > 0) && dispatch(togglePdf());
    };
    const handleExitClick = () => {
        dispatch(togglePdf());
        dispatch(removeAllMessages());
        selectAll === true && dispatch(toggleSelectAll());
    };
    const handleSelectAllClick = () => {
        dispatch(toggleSelectAll());
        selectAll === true ? dispatch(removeAllMessages()) : dispatch(selectAllMessages(dialog.length));
    };
    const handleMessageClick = (index) => {
        activeMessages.includes(index) ? dispatch(removeActiveMessage(index)) : dispatch(addActiveMessage(index));
    }

    return (
        <div className="pdfCreator" id="download">
            <div className="pdfCreator__button" onClick={handleButtonClick}>
                <BsFillFileEarmarkPdfFill className="pdfCreator__button__icon"/>
                <p>
                    Konversation als PDF runterladen
                </p>
            </div>
            <div className={active === false ? "pdfCreator__menu invisible" : "pdfCreator__menu"}>
                <div className="pdfCreator__menu__top">
                    <p 
                        onClick={handleSelectAllClick}
                        className={selectAll === false ? "" : "invisible"}
                    >
                        Alle Auswählen
                    </p>
                    <p
                        onClick={handleSelectAllClick}
                        className={selectAll === true ? "" : "invisible"}
                    >Alle Entfernen</p>
                    <div className="pdfCreator__menu__top__exit">
                        <span onClick={handleExitClick}>
                            <ImCross />
                        </span>
                    </div>
                </div>
                <div className="pdfCreator__menu__selection">
                    {
                        dialog.map((messageObject, index) => {
                            return (
                                <div 
                                    className={activeMessages.includes(index) ? "activeMessage" : ""}
                                    key={messageObject.source + index}
                                    onClick={() => {handleMessageClick(index)}}
                                >
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
                    {activeMessages}
                </div>
                <div className="pdfCreator__menu__button--download">
                    <PdfDownloadButton />
                </div>
            </div>
        </div>
    );
};

export default PdfCreator;