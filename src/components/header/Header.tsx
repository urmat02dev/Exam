import React from 'react';
import {NavLink} from "react-router-dom";
// @ts-ignore
import img from  "../../assets/img/logo.svg";
import "./Header.css"
const Header = () => {
    return (
        <div id={"header bg-white "}>
            <div className="container">
                <div className="header flex justify-between w-[90%] mx-auto my-3">
                    <div className="header--logo">
                        <img src={img} width={80} alt=""/>
                    </div>
                    <div className="header--nav flex w-[300px] justify-between items-center">
                        <NavLink to={"/"}>Menu</NavLink>
                        <NavLink to={"/orders"}>Orders</NavLink>
                        <NavLink to={"/admin"}>Admin</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;