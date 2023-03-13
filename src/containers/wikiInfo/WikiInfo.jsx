import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { WikiSelector } from "../../containers/index";
import { selectWikiToggle, setWikiText } from "../../redux/wikiToggleSlice";
import "./wikiInfo.css";

const WikiInfo = () => {
    const { wikiText, selected } = useSelector(selectWikiToggle);
    const dispatch = useDispatch();

    const menuList = ["ChatGPT", "OpenAI", "Künstliche Intelligenz"];
    const wikiEndpoint = "https://de.wikipedia.org/w/api.php";
    const wikiParams = "?action=query"
        + "&format=json"
        + "&origin=*"
        + "&prop=extracts"
        + "&exintro=1"
        + "&explaintext=1"
        + "&redirects=1"
        + "&titles="
    const title = menuList[selected];
    const wikiLink = wikiEndpoint + wikiParams + title;

    const getData = async () => {
        const response = await fetch(wikiLink);
        const json = await response.json();
        const text = json.query.pages[Object.keys(json.query.pages)[0]].extract;
        dispatch(setWikiText(text));
    }

    getData();
    return (
        <div className="wikiInfo" id="chatGPT">
            <WikiSelector menuList={menuList}/>
            <div className="wikiInfo__article-container">
                <p>
                    {wikiText}
                </p>
            </div>
        </div>
    );
};

export default WikiInfo;