
import React, {useState,useEffect} from "react";
import {Link, Route,useNavigate, Routes} from "react-router-dom";
//import RegisterScreen from "./components/RegisterScreen";
import Home from "./components/Home"
import Login from "./components/Login"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import AboutUs from "./components/AboutUs";
import AddStudent from "./components/AddStudent";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";


const App = () => {

  const routeLinks = {
      home: '/home',
      aboutus: '/hakkimizda',
      login: '/giris',
      register: '/kayit-ol',
      quiz:'/quiz',
      result: '/sonuc',
  }

  const navigate = useNavigate();

  const [isLogged, setLogged] = useState(false);


  useState(() => {
      if (localStorage.getItem('authToken')) {
          setLogged(true);
      }
  }, []);


  const logout = () => {
      localStorage.removeItem('authToken');
      setLogged(false);
      navigate('/giris');
  }


  return (
      <div>

          <Navbar bg="dark" expand="lg">
              <Container>
                  <Navbar.Brand><span style={{color: 'white'}}><h1>Soru Bankası</h1></span></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                  <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="w-100">
                          <div className="me-3"><Link to={routeLinks.aboutus}
                                                      style={{color: 'white'}}>Hakkımızda</Link></div>
                          <div className="me-3"><Link to={routeLinks.home} style={{color: 'white'}}>Ana
                              Sayfa</Link></div>
                          {!isLogged?<div className="ms-auto"><Link to={routeLinks.login} style={{color: 'white'}}>Giriş
                              Yap</Link></div>:''}
                          <div className="ms-3"><Link to={routeLinks.register} style={{color: 'white'}}>Kayıt
                              Ol</Link></div>
                          {isLogged?
                          <div className="ms-3">
                              <button onClick={logout}>Çıkış</button>
                          </div>:''}

                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
          <Routes>
              <Route path={routeLinks.aboutus} element={<AboutUs/>}/>
              <Route path={routeLinks.register} element={<AddStudent/>}/>
              <Route path={routeLinks.home} element={<Home/>}/>
              <Route path={routeLinks.login} element={<Login/>}/>
              <Route path={routeLinks.quiz} element={<QuizScreen/>}/>
              <Route path={routeLinks.result} element={<ResultScreen/>} />

          </Routes>
      </div>
  );             }

  export default App;
