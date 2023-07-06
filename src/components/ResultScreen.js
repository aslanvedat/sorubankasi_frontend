import Button from 'react-bootstrap/Button';


const ResultScreen = () => {
    // Sonuçları göstermek için gerekli kodlar
  
    return (
      <div>
        <br></br>
        <h1 text align = "center">Sonuçlar</h1>
        <br></br><br></br><br></br>

        <h2 text align = "center">Sınav Süreniz Bitmiştir. Sınav sonuçlarınızı görmek için aşağıdaki butona tıklayabilirsiniz. </h2>
        {/* Sonuçları göstermek için uygun JSX kodları */}

        <Button variant="success"
        
        className="btn btn-primary d-block mx-auto my-5"
        >Sonuçları Göster</Button>
        

      </div>
    );
  };
  
export default ResultScreen;
