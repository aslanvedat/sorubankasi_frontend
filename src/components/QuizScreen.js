import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import Stomp from "stompjs";
import SockJS from "sockjs-client";
import { v4 as uuid } from "uuid";

const QuizScreen = () => {
  const [test, setTest] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [siradakiSoru, setSiradakiSoru] = useState(true);
  const navigate = useNavigate();
//  const navigation=useNavigation();
  const [timer, setTimer] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [answers, setAnswers] = useState([]);

  //axios ile backend teki verileri cektik

  const fetchQuestions = () => {
    axios
      .get("/test/2")
      .then((response) => {
        const data = response.data;
        console.log("my data", data);
        setTest(data);
      })
      .catch((error) => {
        console.error("Soru çekme hatası:", error);
      });
  };

  //son soru 2 kez geliyor !!!!!!!!!!!!!

  let selectedQuestionIndex = 0;
  const nextQuestion = () => {
    const index = test?.questions.indexOf(selectedQuestion);
    if (test?.questions[index + 1] == null) {
      setSiradakiSoru(false);
    } else {
      const newQuestion = test?.questions[index + 1];
      setSelectedQuestion(newQuestion);
    }
  };

  let socket;
  let sinavUrl = uuid();
  const connectSocket = () => {
    socket = new SockJS("http://localhost:8080/api/sendMessage");
    console.log("WebSocket opened: ", socket);
    if (socket) {
      const stompClient = Stomp.over(socket);
      stompClient?.connect({}, (frame) => {
        stompClient.subscribe("/topic/messages/" + sinavUrl, (data) => {
          setTimer(data.body);
        });
        stompClient?.send("/app/sendMessage/" + sinavUrl, {}, true);
      });
    }
  };
  useEffect(() => {
    setSelectedQuestion(test?.questions[selectedQuestionIndex]);
    console.log("questions:", test);
  }, [test]);

  //sure bittiginde sayfa degisikligi icin bayrak kontrolu yapan method
  useEffect(() => {
    if (timer == "0") {

     navigate("/sonuc");
    //  navigation.navigate("/sonuc",{veri});
    }
  }, [timer]);

  //butonlarin üzerine fare geldiginde renk degistirmesini saglayacak olan method
  const handleMouseEnter = (optionKey) => {
    setHovered(optionKey);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  //sinavUrl yerine backend te getMapping in yolu gelecek
  console.log("sinav url:" + sinavUrl);
  useEffect(() => {
    fetchQuestions();
    connectSocket();
  }, []);

  useEffect(() => {
    return () => {
      if (socket) {
        console.log("Closed webSocket: ", socket);
        socket.close();
      }
    };
  }, []);
  //verileri giderken 2 side string oldugu için olabilir
  const resultTest = () => {
    const body = {
      testId: test.id,
      answers: answers,
    };
    axios
      .post("/test/2/score", body)
      .then((response) => {
        const data = response.data;
        console.log("post istegi basarili oldu:", data);
      })
      .catch((error) => {
        console.error("Soru cevap  hatasi:", error);
      });
  };

  //soru cevaplarinin tutuldugu method
  const handleOptionSelect = (questionAnswer, questionId) => {
    nextQuestion();

    setAnswers([...answers, { questionAnswer, questionId }]);

    if (!siradakiSoru) {
      resultTest();
 
     navigate("/sonuc");
    //navigation.navigate("/sonuc",{veri})
    }

  };

  useEffect(() => {
    console.log("cevaplarin oldugu list:", answers);
  }, [answers]);
  return (
    <div className="container">
      <h1 className="my-3">Quiz Ekranı</h1>

      <h4 textalign="center">Kalan Süre {timer} saniye</h4>

      {/* Timer'ın görüntülendiği kısım */}
      {/* form icindeki hic bir sey ekrana basilmiyor       */}
      {selectedQuestion && siradakiSoru?(
        <div>
          {
            <div className="options mb-5">
              <h2 className="mb-3">{selectedQuestion?.text}</h2>

              <ul
                style={{
                  listStyle: "none",
                  display: "grid",
                  gridGap: "10px",
                }}
              >
                {Object.keys(selectedQuestion.options).map((optionKey) => (
                  <button
                    onMouseEnter={() => handleMouseEnter(optionKey)}
                    onMouseLeave={handleMouseLeave}
                    key={optionKey}
                    onClick={() =>
                      handleOptionSelect(optionKey, selectedQuestion?.id)
                    }
                    style={{
                      color: hovered === optionKey ? "red" : "black",
                      fontSize: "20px",
                    }}
                    // key={optionKey}
                    // onClick={() => this.handleOptionSelect(optionKey)} //tiklanöa icin kulanilan method
                  >
                    <li>
                      {" "}
                      <span>{optionKey}: </span>
                      {selectedQuestion.options[optionKey]}
                    </li>
                  </button>
                ))}
              </ul>
            </div>
          }
          {siradakiSoru ? (
            <span className="btn btn-primary" onClick={nextQuestion}>
              İleri
            </span>
          ) : (
            <Link to="/sonuc" className="btn btn-primary">
              Kaydet ve Bitir
            </Link>
          )}
        </div>
      )
      : (
        <Link to="/sonuc" onClick={resultTest} className="btn btn-primary">
          Kaydet ve Bitir
        </Link>
      )
      }
    </div>
  );
};

export default QuizScreen;
