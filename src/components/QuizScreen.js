import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useRoutes } from "react-router-dom";

const questionsFromAPI = [
  {
    id: 1,
    questionName: 'Soru (1) - 2+2 Kaçtır Aşağıdakilerden Birini Seçiniz.',
    questionAnswers: [
      {
        id: 11,
        answerName: 'Cavap (A) - eşitir 5'
      },
      {
        id: 12,
        answerName: 'Cavap (B) - eşitir 3'
      },
      {
        id: 13,
        answerName: 'Cavap (C) - eşitir 4'
      },
      {
        id: 14,
        answerName: 'Cavap (D) - eşitir 7'
      }
    ]
  },
  {
    id: 2,
    questionName: 'Soru (2) - 5*5 Kaçtır Aşağıdakilerden Birini Seçiniz.',
    questionAnswers: [
      {
        id: 21,
        answerName: 'Cavap (A) - eşitir 20'
      },
      {
        id: 22,
        answerName: 'Cavap (B) - eşitir 22'
      },
      {
        id: 23,
        answerName: 'Cavap (C) - eşitir 10'
      },
      {
        id: 24,
        answerName: 'Cavap (D) - eşitir 25'
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

  const router = useRoutes()

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


  // Kaydet Ve Bitir butonuna basınca tetiklenecek
  const postQuestions = () => {
    axios.post('https://ÖRNEK', state.questionsWithAnswers).then(res => {
      if (res.status == 200) {
        router.push('/home')
      }
    })
  }

  useEffect(() => fetchQuestions(), [])

  const handleOptionChange = (event) => handleSetState({ selectedAnswer: Number(event.target.value) })

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
  }

  return (
    <div className="container">
      <h1 className='my-3'>Quiz Ekranı</h1>
      {state.questions.length && (
        <form>
          {getSelectedQuestion() &&
            <div className="options mb-5">
              <h5 className='mb-3'>{getSelectedQuestion().questionName}</h5>
              {getSelectedQuestion().questionAnswers?.map(answer => (
                <div key={answer.id}>
                  <label>
                    <input
                      type="radio"
                      name={'option-' + getSelectedQuestion().id}
                      value={answer.id}
                      onChange={handleOptionChange}
                    />
                    {answer.answerName}
                  </label>
                </div>
              ))}
            </div>
          }
          {!isLastQuestion() ?
            <span className="btn btn-primary" onClick={handleClickNext}>
              İleri
            </span>
            :
            <Link to="/home" className="btn btn-primary">
              Kaydet ve Bitir
            </Link>
          }
        </form>
      )}
    </div>
  )
}

export default QuizScreen;
