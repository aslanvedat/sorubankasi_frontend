import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const Login = () => {

    const [credential, setCredential] = useState({});
    const navigate = useNavigate();
    const handleLogin = event => {
        event.preventDefault();

        if (credential) {
            axios.post("/api/auth/signin", credential).then(response => {
                console.log(response.data);
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

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="container h-100">
                <form>
                    <input
                        type="email"
                        placeholder="Email"
                        name="mail"
                        className="form-control"
                        onChange={onChange}
                    ></input>

                    <br></br>
                    <input
                        type="password"
                        name="password"
                        placeholder="Sifre"
                        className="form-control"
                        onChange={onChange}
                    ></input>
                </form>

                <div className="">
                    <button
                        type="button"
                        className="btn btn-primary fixed-button"
                        data-toggle="button"
                    >
                        <a href="/kayit" className=" btn btn-primary">
                            kayit
                        </a>
                    </button>
                    {/* span butonlari ayirmak icin gecici cozum!!*/}
                    <span> </span>
                    <button onClick={handleLogin}
                            type="button"
                            className="btn btn-primary "
                            data-toggle="button">
                        <a href="/#" className=" btn btn-primary">
                            giris
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );


}


export default Login;
