import React from "react";
import "./wikiToggle.css";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";

const WikiToggle = () => {
    const menuList = ["ChatGPT", "OpenAI", "Künstliche Intelligenz"]
    return (
        <div className="behaviourToggle">
            <DropdownMenu menuList={menuList} />
        </div>
    );
};

export default WikiToggle;