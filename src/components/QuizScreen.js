//import axios from 'axios';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import axios from "axios";
import Stomp from "stompjs";
import SockJS from "sockjs-client";

const QuizScreen = () => {
  const [state, setState] = useState({
    questions: [], // apiden gelen sorular buraya set edilecek
    questionsWithAnswers: [], // Kaydet Ve Bitir butonuna basınca burası apiye gönderilecek
    selectedAnswer: null,
    selectedQuestionIndex: 0,
  });

  //state veri gelip gelmedigini gormek icin yazdik
  //useEffect(() => console.log("state:", state), state);

  const handleSetState = (obj) =>
    setState((prevState) => ({ ...prevState, ...obj }));

  //axios ile backend teki verileri cektik

  const fetchQuestions = () => {
    axios
      .get("/test/1")
      .then((response) => {
        const data = response.data;
        console.log(data);
        handleSetState({ questions: data });
      })
      .catch((error) => {
        console.error("Soru çekme hatası:", error);
      });
  };

  let socket;

  useEffect(() => {
    fetchQuestions();
    socket = new SockJS("http://localhost:8080/api/sendMessage");
    console.log("WebSocket opened: ", socket);
    if (socket) {
      const stompClient = Stomp.over(socket);
      stompClient?.connect({}, (frame) => {
        stompClient.subscribe("/topic/messages", (data) => {
          setTimer(data.body);
        });
        stompClient?.send("/app/sendMessage", {}, true);
      });
    }
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

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const getSelectedQuestion = () =>
    state.questions?.[state.selectedQuestionIndex];

  const handleClickNext = () => {
    setState((prevState) => ({
      ...prevState,
      questionsWithAnswers: [
        ...(prevState.questionsWithAnswers || []),
        {
          questionId: getSelectedQuestion().id,
          answerId: prevState.selectedAnswer,
        },
      ],
    }));

    handleSetState({
      selectedQuestionIndex: state.selectedQuestionIndex + 1,
      selectedAnswer: null,
    });
  };

  const isLastQuestion = ({ stompClient }) => {
    return state.questions.length === state.selectedQuestionIndex;
  };

  // const navigate = useNavigate();//sınav sonucu icin gerekli olabilir

  return (
    <div className="container">
      <h1 className="my-3">Quiz Ekranı</h1>
      <h4 textalign="center">Kalan Süre: {timer} saniye</h4>{" "}
      {/* Timer'ın görüntülendiği kısım */}
      {state.questions.length && (
        <form>
          {getSelectedQuestion() && (
            <div className="options mb-5">
              <h5 className="mb-3">{getSelectedQuestion().questionName}</h5>
              {getSelectedQuestion().questionAnswers?.map((answer) => (
                <div key={answer.id}>
                  <label>
                    <Form>
                      <ListGroup>
                        <ListGroup.Item>
                          <Form.Check
                            type="radio"
                            name={"option-" + getSelectedQuestion().id}
                            value={answer.id}
                            checked={selectedOption === answer.id} // Sadece seçili şıkı işaretleyelim
                            onChange={() => handleOptionChange(answer.id)}
                          />
                          {answer.answerName}
                        </ListGroup.Item>
                      </ListGroup>
                    </Form>
                  </label>
                </div>
              ))}
            </div>
          )}
          {!isLastQuestion() ? (
            <span className="btn btn-primary" onClick={handleClickNext}>
              İleri
            </span>
          ) : (
            <Link to="/sonuc" className="btn btn-primary">
              Kaydet ve Bitir
            </Link>
          )}
        </form>
      )}
    </div>
  );
};

export default QuizScreen;
