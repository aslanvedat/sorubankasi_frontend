import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import registrationImage from "./../icon/register.png";
import Form from "react-bootstrap/Form";

const AddStudent = () => {
  const navigate = useNavigate();
  const [body, setBody] = useState({});
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    mail: "",
    password: "",
    passwordTekrar: "",
  });

  const registerRequest = () => {
    if (body) {
      axios
        .post("/auth/signup", body)
        .then((response) => {
          navigate("/giris");
        })
        .catch((error) => {
          console.log("kayit islemi basarisiz", error);
        });
    }
  };

  const onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
    setBody({ ...body, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.name.trim()) {
      validationErrors.name = "user name is requerid";
    }
    if (!formData.mail.trim()) {
      validationErrors.mail = "mail is requerid";
    } else if (!/\S+@\S+\.\S+/.test(formData.mail)) {
      validationErrors.mail = "mail is not valid";
    }
    if (!formData.password.trim()) {
      validationErrors.password = "password is requerid";
    } else if (formData.password.length < 5) {
      validationErrors.password = "password should be at least 5 char";
    }
    if (formData.passwordTekrar !== formData.password) {
      validationErrors.password = "password not mached";
    }
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      registerRequest();
    }
  };

  return (
    <div>
      <div style={styles.container}>
        <div style={styles.imagecontainer}>
          <img src={registrationImage} alt="LOGO" style={styles.image} />
        </div>
        <h3 className="my-5">Yeni Hesap Oluştur</h3>
        <Form noValidate style={styles.formContainer} onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>E-mail</Form.Label>
            <Form.Control
              type="mail"
              name="mail"
              placeholder="E-mail Giriniz"
              onChange={onChange}
            />
            {errors.mail && <span>{errors.mail}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Ad Soyad</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Ad Soyad Giriniz"
              onChange={onChange}
            />
            {errors.name && <span>{errors.name}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Şifre</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Şifre Giriniz"
              onChange={onChange}
            />
            {errors.password && <span>{errors.password}</span>}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Şifre Tekrarı</Form.Label>
            <Form.Control
              type="password"
              name="passwordTekrar"
              placeholder="Şifreyi Tekrar Giriniz"
              onChange={onChange}
            />
            {errors.passwordTekrar && <span>{errors.passwordTekrar}</span>}
          </Form.Group>
          <button
            type="submit"
            className="btn btn-primary d-block mx-auto"
            // onClick={handleRegister}
          >
            Kayıt Ol
          </button>
        </Form>
      </div>
    </div>
  );
};
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
};

export default AddStudent;
