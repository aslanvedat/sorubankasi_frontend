import axios from "axios";
import React from "react";

class Login extends React.Component {
  state = {
    email: null,
    password: null,
  };
handleLogin=event=>{
  event.preventDefault();
  const body={
    email:this.state.email,
    password:this.state.password
  }

  //console.log kisimlari degisecek!!
  axios.post("/api/auth/signin",body).then(Response=>{//get yerine baska bisey olabilir?
    console.log("giris islemi basarili")
  }).catch(error=>{
    console.log("giris islemi basarisiz",error);
  })
}

  onChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value,
    });
  };
  render() {
    return (
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <div className="container h-100">
          <form>
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="form-control"
              onChange={this.onChange}
            ></input>

            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Sifre"
              className="form-control"
              onChange={this.onChange}
            ></input>
          </form>

          <div className="">
            <button
              type="button"
              className="btn btn-primary fixed-button"
              data-toggle="button"
            >
              <a href="kayit" className=" btn btn-primary">
                kayit
              </a>
            </button>
            {/* span butonlari ayirmak icin gecici cozum!!*/}
            <span> </span>
            <button onClick={this.handleLogin}
              type="button"
              className="btn btn-primary "
              data-toggle="button" 
            >
              <a href="Home" className=" btn btn-primary">
                giris
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
