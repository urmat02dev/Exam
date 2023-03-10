import React from 'react';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Menu from "./components/pages/Menu";
import Orders from "./components/pages/Orders";
import Admin from "./components/pages/Admin";

const App = () => {
    return (
        <div>
          <Header/>
            <Routes>
                <Route path={"/"} element={<Menu/>}/>
                <Route path={"/orders"} element={<Orders/>}/>
                <Route path={"/admin"} element={<Admin/>}/>
            </Routes>
        </div>
    );
};

export default App;