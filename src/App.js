import React from "react";
import "./App.css";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import AddStudent from "./components/AddStudent";
import Home from "./components/Home";
class App extends React.Component {
  render() {
    return (
      
      <Routes>
        <Route path="/giris" element={<Login />} />
      <Route path="/kayit" element={<AddStudent/>}/>
      <Route path="/Home" element={<Home/>}/>
      </Routes>
      
    );
  }
}

export default App;
