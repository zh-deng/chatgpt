import React from "react";
import "./navbar.css";
import { FiMenu } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { selectMobileswitch, switchMobile } from "../../redux/mobileswitchSlice";


const Navbar = () => {
    const { mobile } = useSelector(selectMobileswitch);
    const dispatch = useDispatch();
    const handleHamburgerClick = () => {
        dispatch(switchMobile());
    }
    return (
        <div className="navbar">
            <div className="navbar__logo">
                <p><a href="#home">ChatWithAI</a></p>
            </div>
            <div className="navbar__links-container">
                <div className={"navbar__links-container__web"}>
                    <p><a href="#about">About</a></p>
                    <p><a href="#chatgpt">ChatGPT</a></p>
                    <p><a href="#chat">Lets chat!</a></p>
                    <p><a href="#download">Download Dialog</a></p>
                </div>
                <div className={mobile === false ? "navbar__links-container__mobile--off" : "navbar__links-container__mobile--on"}>
                    <p onClick={handleHamburgerClick}><a href="#about">About</a></p>
                    <p onClick={handleHamburgerClick}><a href="#chatgpt">ChatGPT</a></p>
                    <p onClick={handleHamburgerClick}><a href="#chat">Lets chat!</a></p>
                    <p onClick={handleHamburgerClick}><a href="#download">Download Dialog</a></p>
                </div>
                <div className="navbar__links-container__hamburgermenu" onClick={handleHamburgerClick}>
                    <FiMenu />
                </div>
            </div>
        </div>
    );
};

export default Navbar;