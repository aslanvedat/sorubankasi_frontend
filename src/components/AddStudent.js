import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const AddStudent = () => {


    const navigate = useNavigate();
    const [body, setBody] = useState({});

    const handleRegister = event => {
        event.preventDefault();

        if(body){
            axios.post("/api/auth/signup", body).then(response => {
                navigate('/giris');
            }).catch(error => {
                console.log("kayit islemi basarisiz", error);
            })
        }

    }

    const onChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        setBody({...body, [name]: value});
    }

    return (
        <div className="container">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" name="mail" className="form-control" id="inputEmail4"
                               onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Kullanici Adi</label>
                        <input type="text" name="name" className="form-control" id="inputName4"
                               onChange={onChange}></input>
                    </div>
                </div>


                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">sifre</label>
                        <input type="password" name="password" className="form-control"
                               onChange={onChange}></input>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">sifre tekrar</label>
                        <input type="password" name="passwordTekrar" className="form-control"
                               onChange={onChange}></input>
                    </div>


                </div>
                <button onClick={handleRegister} type="submit" className="btn btn-primary">
                    giris {/* <a href="Home" className="btn btn-primary">giris</a> */}

                </button>
            </form>

        </div>
    );
}


export default AddStudent;