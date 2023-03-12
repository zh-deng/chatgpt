import React from "react";
import "./behaviourToggle.css";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";

const BehaviourToggle = () => {
    const menuList = ["Easy language", "Default Language", "Intermediate Language", "Expert Language"]
    const toggleId = 0;
    return (
        <div className="behaviourToggle">
            <DropdownMenu menuList={menuList} toggleId={toggleId}/>
        </div>
    );
};

export default BehaviourToggle;