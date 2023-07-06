//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import axios from 'axios';


const questionsFromAPI = [
  {
    id: 1,
    questionName: 'Soru (1) - 2+2 Kaçtır Aşağıdakilerden Birini Seçiniz.',
    questionAnswers: [
      {
        id: 11,
        answerName: 'Cevap (A) - eşitir 5'
      },
      {
        id: 12,
        answerName: 'Cevap (B) - eşitir 3'
      },
      {
        id: 13,
        answerName: 'Cevap (C) - eşitir 4'
      },
      {
        id: 14,
        answerName: 'Cevap (D) - eşitir 7'
      }
    ]
  },
  {
    id: 2,
    questionName: 'Soru (2) - 5*5 Kaçtır Aşağıdakilerden Birini Seçiniz.',
    questionAnswers: [
      {
        id: 21,
        answerName: 'Cevap (A) - eşitir 20'
      },
      {
        id: 22,
        answerName: 'Cevap (B) - eşitir 22'
      },
      {
        id: 23,
        answerName: 'Cevap (C) - eşitir 10'
      },
      {
        id: 24,
        answerName: 'Cevap (D) - eşitir 25'
      }
    ]
  }
]

const QuizScreen = () => {
  const [state, setState] = useState({
    questions: [], // apiden gelen sorular buraya set edilecek
    questionsWithAnswers: [], // Kaydet Ve Bitir butonuna basınca burası apiye gönderilecek
    selectedAnswer: null,
    selectedQuestionIndex: 0
  })

  const handleSetState = (obj) => setState(prevState => ({ ...prevState, ...obj }))

  const fetchQuestions = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        data = questionsFromAPI
        handleSetState({ questions: data });
      })
      .catch((error) => {
        console.error('Soru çekme hatası:', error);
      });
  }

// const fetchQuestions = () => {
 
//     axios.get('/api/test/1')
//       .then((response) => {
//         const data = response.data;
//         handleSetState({ questions: data });
//       })
//       .catch((error) => {
//         console.error('Soru çekme hatası:', error);
//       });
//   }
  


  /* Kaydet Ve Bitir butonuna basınca tetiklenecek
  const postQuestions = () => {
    
  }
  */

  useEffect(() => fetchQuestions(), [])

  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (optionId) => {
    setSelectedOption(optionId);
  };

  const getSelectedQuestion = () => state.questions?.[state.selectedQuestionIndex]

  const handleClickNext = () => {
    setState(prevState => ({
      ...prevState,
      questionsWithAnswers: [
        ...(prevState.questionsWithAnswers || []),
        {
          questionId: getSelectedQuestion().id,
          answerId: prevState.selectedAnswer
        }
      ]
    }))

    handleSetState({
      selectedQuestionIndex: state.selectedQuestionIndex + 1,
      selectedAnswer: null
    })
  }

  const isLastQuestion = () => {
    return state.questions.length === state.selectedQuestionIndex
  };

  const [timer, setTimer] = useState(0);
  const initialTime = 60;

  const navigate = useNavigate();


  useEffect(() => {
    let countdown = initialTime;
    const interval = setInterval(() => {
      if (countdown > 0) {
        setTimer(countdown);
        countdown -= 1;
      } /* else if(countdown = 1 ) {
        document.body.innerHTML = "<h1 text align=center> Sınav Süresi Bitti. <br> Sonuçları Görmek için <a href = '/hakkimizda'>tıklayınız </a></h1>";
      }  */else {
        clearInterval(interval);
        navigate('/sonuc');
        
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []

  
  );

  return (
    <div className="container">
      <h1 className='my-3'>Quiz Ekranı</h1>
      <h4 textalign="center">Kalan Süre: {timer} saniye</h4> {/* Timer'ın görüntülendiği kısım */}
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
                            name={'option-' + getSelectedQuestion().id}
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
  )
}

export default QuizScreen;
