import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectBehaviourToggle, setSelected, toggleDropdown } from "../../redux/behaviourToggleSlice";
import "./behaviourSelector.css";

const BehaviourSelector = ({menuList}) => {
    const { behaviourToggle, selected } = useSelector(selectBehaviourToggle);
    const dispatch = useDispatch();
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
        <div className="behaviourSelector">
            <div className="behaviourSelector__dropdown">
                <div 
                    className={currentDropdownStatus === false ? "behaviourSelector__dropdown__selection" : "behaviourSelector__dropdown__selection select-clicked"}
                    onClick={handleDropdownClick}>
                    <span className="behaviourSelector__dropdown__selection--selected">
                        {
                            menuList[selected]
                        }
                    </span>
                    <div className={currentDropdownStatus === false ? "behaviourSelector__dropdown__selection--caret" : "behaviourSelector__dropdown__selection--caret caret-rotate"}>

                    </div>
                </div>
                <ul className={currentDropdownStatus === false ? "behaviourSelector__dropdown__menu" : "behaviourSelector__dropdown__menu behaviourSelector__dropdown__menu--open"}>
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

export default BehaviourSelector;