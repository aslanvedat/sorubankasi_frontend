import axios from 'axios';
import React, { useState } from 'react';

const RegisterScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    ;
    axios
      .post('api/kayit', { name, email, password })
      .then(response => {
        console.log("kayıt işlemi başarılı")


      })
      .catch(error => {
        console.error("kayıt işlemi başarısız", error);
      });
  };
    return (
      <div>
        <h3>Kayıt Ol</h3>
        <input
          type="text"
          placeholder="Ad-Soyad"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br></br>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br></br>
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br></br>
        <button onClick={handleRegister}>Kayıt Ol</button>
      </div>
    );
};

export default RegisterScreen;
