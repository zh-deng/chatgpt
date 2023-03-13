import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { PdfCreator, BehaviourSelector } from "../../containers/index";
import { addMessage, selectDialog, updateCurrentMessage } from "../../redux/conversationSlice";
import "./chatbox.css";

const Chatbox = () => {
    const { dialog, currentMessage } = useSelector(selectDialog);
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addMessage({source: "user", message: currentMessage}));

        // need to reset textarea after submitting
    }
    return (
        <div className="chatbox">
            <BehaviourSelector />
            <div className="chatbox__dialog-container">
                {
                    dialog.map((item, index) => (
                        <div className={"chatbox__dialog-container__" + item.source} key={item.source + index}>
                            <span>
                                <p>{item.message}</p>
                            </span>
                        </div>
                    ))
                }
            </div>
            <div className="chatbox__input">
                <form name="messageForm" onSubmit={handleSubmit}>
                    <div className="chatbox__input__textarea">
                        <textarea 
                            rows="4" 
                            placeholder="Nachricht hier tippen..." 
                            onChange={(e) => dispatch(updateCurrentMessage(e.target.value))}
                        >{currentMessage}</textarea>
                    </div>
                    <div classname="">
                        <input type="submit" value="Senden" className="chatbox__input__submitButton"/>
                    </div>
                </form>
            </div>
            {currentMessage}
            <PdfCreator />
        </div>
    );
};

export default Chatbox;