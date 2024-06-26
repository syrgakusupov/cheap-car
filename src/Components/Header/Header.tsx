import React from 'react';
import "../../Styles/Header.scss"
import logo from "../../image/logo.svg"
import { HiOutlineDownload } from "react-icons/hi"
const Header = () => {
    return (
        <header className="head">
            <div className="header">
                <div className="header_logo">
                    <img src={logo} alt=""/>
                    <h1>Арзан Машина</h1>
                </div>
                <button className="btn_text">Установить приложение</button>
                <button className="btn_icon"><HiOutlineDownload/></button>
            </div>
        </header>
    );
};

export default Header;