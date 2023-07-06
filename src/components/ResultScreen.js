import Button from 'react-bootstrap/Button';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



const ResultScreen = () => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const questionsWithAnswers = []; // Sorular ve verilen cevapları içeren dizi

    let totalScore = 0;
    questionsWithAnswers.forEach((question) => {
      const { selectedAnswer, correctAnswer } = question;
      if (selectedAnswer === correctAnswer) {
        totalScore += 10;
      }
    });

    setScore(totalScore);
  }, []);

  return (
    <div>
      <h1 className='text-center my-5'>Sınav Süreniz Bitmiştir.</h1>
      <h2 className='text-center mb-5'>Sınav Puanınız Aşağıdadır</h2>
      <h3 className='text-center mb-5'>Puan: {score}</h3>


      {/* <h2 text align="center">Sınav Süreniz Bitmiştir. Sınav sonuçlarınızı görmek için aşağıdaki butona tıklayabilirsiniz. </h2> */}
      {/* Sonuçları göstermek için uygun JSX kodları */}

      <div className='text-center'>
        <Link to="/home" className="btn btn-success">
          Ana Sayfaya Dön
        </Link>
      </div>

    </div>
  );
};

export default ResultScreen;
