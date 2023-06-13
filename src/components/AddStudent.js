import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import registrationImage from './../icon/register.png';
import Form from 'react-bootstrap/Form';


const AddStudent = () => {

  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const handleRegister = event => {
    event.preventDefault();

    if (body) {
      axios
        .post("/api/auth/signup", body)
        .then(response => {
          navigate('/giris');
        })
        .catch(error => {
          console.log("kayit islemi basarisiz", error);
        });
    }

  };

  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setBody({ ...body, [name]: value });
  };
  return (
    <div>
      <div style={styles.container}>
        <div style={styles.imagecontainer}>
          <img src={registrationImage} alt="LOGO" style={styles.image} />
        </div>
        <h3 className="my-5">Yeni Hesap Oluştur</h3>
        <Form style={styles.formContainer}>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type='mail'
              name="mail"
              placeholder='E-mail Giriniz'
              onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ad Soyad</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ad Soyad Giriniz"
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

          <Form.Group className="mb-3">
            <Form.Label>Şifre Tekrarı</Form.Label>
            <Form.Control
              type='password'
              name="passwordTekrar"
              placeholder='Şifreyi Tekrar Giriniz'
              onChange={onChange}
            />
          </Form.Group>
          <button
            type='submit'
            className="btn btn-primary d-block mx-auto"
            onClick={handleRegister}
          >
            Kayıt Ol
          </button>
        </Form>


      </div>
    </div >
  );
};


const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  }
};

export default AddStudent;
