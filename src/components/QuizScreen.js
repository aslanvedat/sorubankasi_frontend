//import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { v4 as uuid } from "uuid";
const QuizScreen = () => {
  const [questions,setQuestions] = useState(null);
  const [selectedQuestion,setSelectedQuestion] = useState(null);
  //state veri gelip gelmedigini gormek icin yazdik
  //useEffect(() => console.log("state:", state), state);a

  //axios ile backend teki verileri cektik

  const fetchQuestions = () => {
    axios
      .get("/test/2")
      .then((response) => {
         const data=response.data;
         console.log("my data",data);
        setQuestions(data)
      })
      .catch((error) => {
        console.error("Soru çekme hatası:", error);
      });
  };


  useEffect(()=>{
    setSelectedQuestion(questions?.questions[1]);
    console.log('questions:',questions);
  },[questions])

  let socket;
  let sinavUrl = uuid();
  const connectSocket=()=>{
    socket = new SockJS("http://localhost:8080/api/sendMessage");
    console.log("WebSocket opened: ", socket);
    if (socket) {
      const stompClient = Stomp.over(socket);
      stompClient?.connect({}, (frame) => {
        stompClient.subscribe("/topic/messages/" + sinavUrl, (data) => {
          setTimer(data.body);
        });
        stompClient?.send("/app/sendMessage/" + sinavUrl, {}, true);
      })
    }
  }

  //sinavUrl yerine backend te getMapping in yolu gelecek
  console.log("sinav url:" + sinavUrl);
  useEffect(() => {
   fetchQuestions();
   connectSocket();
    
  }, []);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    return () => {
      if (socket) {
        console.log("Closed webSocket: ", socket);
        socket.close();
      }
    };
  }, []);

  //burasi cevap Id ile ecalisiyor cevap sikkini isaretleme ile
  const [selectedOption, setSelectedOption] = useState(null);

  

  // const navigate = useNavigate();//sınav sonucu icin gerekli olabilir

  return (
    <div className="container">
      <h1 className="my-3">Quiz Ekranı</h1>
      <h4 textalign="center">Kalan Süre {timer} saniye</h4>{" "}
      {/* Timer'ın görüntülendiği kısım */}
      {/* form icindeki hic bir sey ekrana basilmiyor       */}
      {selectedQuestion && (

        <form>
          {console.log("form deneme:")}
          { (
            <div className="options mb-5">
              <h5 className="mb-3">{selectedQuestion?.text}</h5>

              <ul>
          {Object.keys(selectedQuestion.options).map((optionKey) => (
            <li
              key={optionKey}
              onClick={() => this.handleOptionSelect(optionKey)}//tiklanöa icin kulanilan method
            
            >
              {selectedQuestion.options[optionKey]}
            </li>
          ))}
        </ul>
       
              {/* {selectedQuestion?.options((answer) => (//buraya şıklar gelecek 
                <div key={answer}>
                  <label>
                    <Form>
                      <ListGroup>
                        <ListGroup.Item>
                          <Form.Check
                            type="radio"
                            name={"option-" + setSelectedQuestion.id}
                            value={answer.id}
                            checked={selectedOption === answer.id} // Sadece seçili şıkı işaretleyelim
                            // onChange={() => handleOptionChange(answer.id)}
                          />
                          {answer.answerName}
                        </ListGroup.Item>
                      </ListGroup>
                    </Form>
                  </label>
                </div>
              ))} */}

            </div>
          )}
          {/* {!isLastQuestion() ? (
            <span className="btn btn-primary" onClick={handleClickNext}>
              İleri
            </span>
          ) : (
            <Link to="/sonuc" className="btn btn-primary">
              Kaydet ve Bitir
            </Link>
          )} */}
        </form>
      )}
    </div>
  );
};

export default QuizScreen;
