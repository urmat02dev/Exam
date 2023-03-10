import React from 'react';
import "./MainPage.scss"
const Menu = () => {
const product  = (localStorage.getItem("product"))




    return (
        <>
            <div id="menu">
                <div className="container">
                    <div className="menu">
                        <div className="menu--title">
                            <h1 className={"text-gray-800 text-center text-[28px]"}>MENU</h1>
                        </div>
                        <div className="menu--product">
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;