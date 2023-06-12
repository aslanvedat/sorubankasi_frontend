import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import AddStudent from "./components/AddStudent";
import Home from "./components/Home";


const App = ()=>{
    return (

        <Routes>
            <Route path="/giris" element={<Login/>}/>
            <Route path="/kayit" element={<AddStudent/>}/>
            <Route path="/home" element={<Home/>}/>
        </Routes>

    );
}

export default App;
