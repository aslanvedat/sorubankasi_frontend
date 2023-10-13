import Form from "react-bootstrap/Form";
const AddTest=()=>{

    //teste nasil soru ekleyecegimizi bulup bu veya
    // baska componentte sorularıda ekleyecez
return(
<div className="container"> 
<h1>Add Test</h1>
 <Form noValidate>  {/*onSubmit={handleSubmit} burasi daha sonra iceri alinacak */}
          <Form.Group className="mb-3">
            <Form.Label>Test</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Test Adini yaziniz"
          //    onChange={onChange}
            />
          </Form.Group>

       

          <button
            type="submit"
            className="btn btn-primary d-block mx-auto"
            // onClick={handleRegister}
            
          >
         Testi kaydet 
          </button>
        </Form>

</div>
)
}

export default AddTest;