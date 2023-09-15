import axios from "axios";
import React, {useEffect, useState} from "react";
import {useNavigate, Link, redirect} from "react-router-dom";
import Form from 'react-bootstrap/Form';
import registrationImage from './../icon/login.png';

axios.interceptors.request.use((config) => {
    config.baseURL='/api';
    const token = localStorage.getItem('authToken');
    if (token) {
        config.headers.Authorization = 'Bearer ' + token;
    }
    return config;
});

const Login = () => {

    const [credential, setCredential] = useState({});
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();

        if (credential) {
            axios.post("/auth/signin", credential).then(response => {
                //console.log(response.data);
                localStorage.setItem("authToken", response.data?.JwtToken);
                window.location.reload();
                navigate('/home');
                //this.props.navigate('Home');

            }).catch(error => {
                alert("Mail veya yanlış parola");
            })
        }

        //console.log kisimlari degisecek!!

    }

    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setCredential({...credential, [name]: value});

    };

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        if (token) {
            navigate('/home');
        }
    }, []);

    return (
        <div>
            {/* <React.StrictMode>  </React.StrictMode> div in altinda ki kisimlari aldim ama ise yaramadi*/}
            <div style={styles.container}>
                <div style={styles.imagecontainer}>  
                    <img src={registrationImage} alt="LOGO" style={styles.image}/>
                </div>
                <Form style={styles.formContainer}>
                    <Form.Group className="mb-3">
                        <Form.Label>E-mail</Form.Label>
                        <Form.Control
                            type='email'
                            name="mail"
                            placeholder='E-mail Giriniz'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Şifre</Form.Label>
                        <Form.Control
                            type='password'
                            name="password"
                            placeholder='Şifre Giriniz'
                            onChange={onChange}
                        />
                    </Form.Group>
                    <Link to="/kayit-ol" className="btn btn-primary me-3">Kayıt Ol</Link>
                    <button onClick={handleLogin}
                            type="button"
                            className="btn btn-secondary"
                            data-toggle="button"
                    >
                        Giris Yap
                    </button>
                </Form>
            </div>
          
        </div>
    );


}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    }
};


export default Login;
