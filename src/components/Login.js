import React from "react";

class Login extends React.Component {
  render() {
    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">

            <div className="container h-100">
        <form>
          <input
            type="text"
            placeholder="Kullanici adi"
            className="form-control"
          ></input>

          <br></br>
          <input
            type="password"
            placeholder="Sifre"
            className="form-control"
          ></input>
        </form>

        <div className="" >
          <button
            type="button"
            className="btn btn-primary fixed-button"
            data-toggle="button"
          >
            Kayıt
          </button>
          {/* span butonlari ayirmak icin gecici cozum!!*/}
          <span> </span>
          <button
            type="button"
            className="btn btn-primary " 
            data-toggle="button"
          >
            Giriş
          </button>
        </div>
      </div>
      </div>
  
    );
  }
}

export default Login;
