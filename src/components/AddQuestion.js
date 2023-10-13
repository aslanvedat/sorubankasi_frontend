import { useState,useEffect } from "react"
import Form from "react-bootstrap/Form";
const AddQuestion=()=>{
return(
<div className="container"> 
<h1>Add question</h1>
 <Form noValidate>  {/*onSubmit={handleSubmit} burasi daha sonra iceri alinacak */}
          <Form.Group className="mb-3">
            <Form.Label>Soru</Form.Label>
            <Form.Control
              type="text"
              name="text"
              placeholder="soruyu yazınız"
          //    onChange={onChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Şıklar</Form.Label>
            <Form.Control
              type="text"
              name="options"
              placeholder="şıkları giriniz"
            //  onChange={onChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Cevap</Form.Label>
            <Form.Control
              type="text"
              name="cevap"
              placeholder="sorunun cevabını yazınız"
            //   onChange={onChange}
            />
          </Form.Group>

          <button
            type="submit"
            className="btn btn-primary d-block mx-auto"
            // onClick={handleRegister}
          >
          soruyu kaydet
          </button>
        </Form>

</div>
)
}

export default AddQuestion;