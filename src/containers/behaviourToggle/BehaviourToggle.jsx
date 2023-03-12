import React from "react";
import "./behaviourToggle.css";
import DropdownMenu from "../../components/dropdownMenu/DropdownMenu";
import { useDispatch, useSelector } from "react-redux";
import { selectBehaviourToggle, setSelected, toggleDropdown } from "../../redux/behaviourToggleSlice";

const BehaviourToggle = () => {
    const selector = useSelector(selectBehaviourToggle);
    const dispatch = useDispatch;
    const setBehaviourSelect = () => setSelected();
    const menuList = ["Easy language", "Default Language", "Intermediate Language", "Expert Language"]
    return (
        <div className="behaviourToggle">
            <DropdownMenu 
                menuList={menuList} 
            />
        </div>
    );
};

export default BehaviourToggle;