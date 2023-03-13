import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PdfCreator, BehaviourSelector } from "../../containers/index";
import { addMessage, selectDialog, toggleWait, updateCurrentMessage } from "../../redux/conversationSlice";
import "./chatbox.css";

const API_KEY = "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";

const Chatbox = () => {
    const { dialog, currentMessage, wait } = useSelector(selectDialog);
    const dispatch = useDispatch();

    const convertApiMessage = () => {
        let messages = dialog.map((messageObject) => {
            let role = messageObject.source === "user" ? "user" : "assistant";
            return { role: role, content: messageObject.message }
        });
        return messages;
    }

    const handleFetch = async () => {
        let apiMessages = convertApiMessage();
        const systemMessage = {
            role: "system",
            content: ""
        }
        const apiFetchBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        };
        await fetch("https://api.openai.com/v1/chat/completions",{
            method: "POST",
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(apiFetchBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            dispatch(addMessage({source: "chatGPT", message: data.choices[0].message.content}));
            dispatch(toggleWait());
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        dispatch(addMessage({source: "user", message: currentMessage}));
        dispatch(toggleWait());
        event.target.reset();
        await handleFetch();
    }
    return (
        <div className="chatbox" id="chat">
            <BehaviourSelector />
            <div className="chatbox__dialog-container">
                <div className="chatbox__dialog-container__dialog">
                    {
                        dialog.map((item, index) => {
                            return(
                                <div className={"chatbox__dialog-container__dialog__" + item.source} key={item.source + index}>
                                    <span>
                                        <p>{item.message}</p>
                                    </span>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={wait === true ? "chatbox__dialog-container__typing" : "chatbox__dialog-container__typing invisible"}>
                <h5>ChatGPT is typing...</h5>
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
            <PdfCreator />
        </div>
    );
};

export default Chatbox;