import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectWikiToggle, setSelected, toggleDropdown } from "../../redux/wikiToggleSlice";
import "./wikiSelector.css";

const WikiSelector = ({menuList}) => {
    const { wikiToggle, selected } = useSelector(selectWikiToggle);
    const dispatch = useDispatch();
    const currentDropdownStatus = wikiToggle;
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
        <div className="wikiSelector">
            <div className="wikiSelector__dropdown">
                <div 
                    className={currentDropdownStatus === false ? "wikiSelector__dropdown__selection" : "wikiSelector__dropdown__selection select-clicked"}
                    onClick={handleDropdownClick}>
                    <span className="wikiSelector__dropdown__selection--selected">
                        {
                            menuList[selected]
                        }
                    </span>
                    <div className={currentDropdownStatus === false ? "wikiSelector__dropdown__selection--caret" : "wikiSelector__dropdown__selection--caret caret-rotate"}>

                    </div>
                </div>
                <ul className={currentDropdownStatus === false ? "wikiSelector__dropdown__menu" : "wikiSelector__dropdown__menu wikiSelector__dropdown__menu--open"}>
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

export default WikiSelector;