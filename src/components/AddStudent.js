import React from "react";

class AddStudent extends React.Component{
  state={
    userName:null,
    email:null,
    password:null,
    passwordTekrar:null
    
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
  <button type="submit" className="btn btn-primary">Kaydol</button>
</form>
        
        </div>
    )
}


}

export default AddStudent;