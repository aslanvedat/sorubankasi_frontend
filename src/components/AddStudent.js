import React from "react";
import axios from "axios";
class AddStudent extends React.Component{
  state={
    userName:null,
    email:null,
    password:null,
    passwordTekrar:null
    
  }
  handleRegister = event =>{
    event.preventDefault();
const body={
  userName:this.state.userName,
  email:this.state.email,
  password:this.state.password,
  passwordTekrar:this.state.passwordTekrar
}
//console.log yerine alert benzeri bir hata bildirimi gelecek
axios.post("/api/auth/signup",body).then(Response=>{
  console.log("kayit islemi basarili")
}).catch(error=>{
  console.log("kayit islemi basarisiz",error);
})

}


  onChange=(event)=>{
    const value=event.target.value;
    const name=event.target.name;
    this.setState({
      [name]:value
    });
  }
render(){
    return(
        <div className="container">
       <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email"name="email" className="form-control" id="inputEmail4" onChange={this.onChange}></input>
    </div>
    <div className="form-group col-md-6">
      <label for="inputPassword4">Kullanici Adi</label>
      <input type="text" name="userName" className="form-control"  id="inputName4" onChange={this.onChange}></input>
    </div>
  </div>
 

  <div className="form-row">
  <div className="form-group col-md-6">
      <label for="inputPassword4">sifre</label>
      <input type="password" name="password" className="form-control" onChange={this.onChange}></input>
    </div> 
      <div className="form-group col-md-6">
      <label for="inputPassword4">sifre tekrar</label>
      <input type="password" name="passwordTekrar" className="form-control" onChange={this.onChange}></input>
    </div>
 
 
  </div>
  <button onClick={this.handleRegister} type="submit" className="btn btn-primary">Kaydol</button>
</form>
        
        </div>
    )
}


}

export default AddStudent;