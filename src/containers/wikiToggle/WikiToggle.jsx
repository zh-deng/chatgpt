import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBehaviourToggle, setSelected, toggleDropdown } from "../../redux/behaviourToggleSlice";
import "./behaviourToggle.css";

const DropdownMenu = () => {
    const { behaviourToggle, selected } = useSelector(selectBehaviourToggle);
    const dispatch = useDispatch();
    const menuList = ["Easy language", "Default Language", "Intermediate Language", "Expert Language"]
    const currentDropdownStatus = behaviourToggle;
    let list = menuList;
    const handleDropdownClick = () => {
        dispatch(toggleDropdown());
    }
    const handleMenuClick = (newSelect) => {
        const newList = [];
        list.map((item, index) => {
            index !== newSelect && newList.push(item);
        });
        newList.unshift(list[newSelect]);
        list = newList;
        dispatch(setSelected(newSelect));
    }
    return (
        <div className="dropdownMenu">
            <div className="dropdownMenu__dropdown">
                <div 
                    className={currentDropdownStatus === false ? "dropdownMenu__dropdown__selection" : "dropdownMenu__dropdown__selection select-clicked"}
                    onClick={handleDropdownClick}>
                    <span className="dropdownMenu__dropdown__selection--selected">
                        {
                            menuList[selected]
                        }
                    </span>
                    <div className={currentDropdownStatus === false ? "dropdownMenu__dropdown__selection--caret" : "dropdownMenu__dropdown__selection--caret caret-rotate"}>

                    </div>
                </div>
                <ul className={currentDropdownStatus === false ? "dropdownMenu-dropdown__menu" : "dropdownMenu-dropdown__menu dropdownMenu-dropdown__menu--open"}>
                    {
                        menuList.map((item, index) => (
                            index !== selected &&
                            <li 
                                key={item + index}
                                onClick={() => {handleMenuClick(index)}}
                            >
                                {item}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default DropdownMenu;