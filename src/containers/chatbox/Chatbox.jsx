import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PdfCreator, BehaviourSelector } from "../../containers/index";
import { selectBehaviourToggle } from "../../redux/behaviourToggleSlice";
import { addMessage, selectDialog, toggleWait, updateCurrentMessage } from "../../redux/conversationSlice";
import "./chatbox.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Chatbox = () => {
    const { dialog, currentMessage, wait } = useSelector(selectDialog);
    const { selected } = useSelector(selectBehaviourToggle);
    const dispatch = useDispatch();
    const lastMessageRef = useRef(null);

    useEffect(() => {
        focusLatestMessage();
    },[wait]);

    const menuList = ["Englisch", "Deutsch", "Einfache Sprache", "Expertensprache"]
    let contentStyle = "";
    switch(menuList[selected]) {
        case "Englisch":
            contentStyle = "Reply only in english";
            break;
        case "Deutsch":
            contentStyle = "Reply only in german language"
            break;
        case "Einfache Sprache":
            contentStyle = "Reply to me as if i am a 10 year old child"
            break;
        case "Expertensprache":
            contentStyle = "Reply to me as you were an expert"
            break;
        
    }

    const focusLatestMessage = () => {
        lastMessageRef.current.scrollIntoView({block: "nearest"});
    }

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
            content: contentStyle
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
            <div className="chatbox__heading">
                <h1>
                    Let's chat!
                </h1>
                <p>Hier können sie sich mit dem neuen Chatsystem ChatGPT unterhalten. Derzeit ist das Feature noch in Produktion und hat deshalb noch kleine Bugs. Die erste Antwort des Bots ist eine zufällige. Jede weitere Antwort bezieht sich dann auf die vorherige Nachricht statt der aktuellen. Ich bitte um ihr Verständnis</p>
            </div>
            <BehaviourSelector menuList={menuList}/>
            <div className="chatbox__dialog-container">
                <div className="chatbox__dialog-container__dialog">
                    <div className={"chatbox__dialog-container__dialog__chatGPT"}>
                        <span>
                            <p>Hallo, ich bin ChatGPT. Lass uns chatten!</p>
                        </span>
                    </div>
                    {
                        dialog.map((item, index) => {
                            return(
                                <div 
                                    className={"chatbox__dialog-container__dialog__" + item.source} 
                                    key={item.source + index}
                                >
                                    <span>
                                        <p>{item.message}</p>
                                    </span>
                            </div>
                            )
                        })
                    }
                    <div ref={lastMessageRef}></div>
                </div>
            </div>
            <div className={wait === true ? "chatbox__dialog-container__typing--on" : "chatbox__dialog-container__typing--off"}>
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
                    <div>
                        <input type="submit" value="Senden" className="chatbox__input__submitButton"/>
                    </div>
                </form>
            </div>
            <PdfCreator />
        </div>
    );
};

export default Chatbox;