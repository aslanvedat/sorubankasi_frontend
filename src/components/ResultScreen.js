import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useScore } from "./DataContext";

const ResultScreen = () => {
  const {score}  = useScore();
  
  return (
    <div>
      <h1 className="text-center my-5">Sınav Süreniz Bitmiştir.</h1>
      <h2 className="text-center mb-5">Sınav Puanınız Aşağıdadır</h2>
      <h3 className="text-center mb-5">Puan: {score}</h3>

      {/* <h2 text align="center">Sınav Süreniz Bitmiştir. Sınav sonuçlarınızı görmek için aşağıdaki butona tıklayabilirsiniz. </h2> */}
      {/* Sonuçları göstermek için uygun JSX kodları */}

      <div className="text-center">
        <Link to="/home" className="btn btn-success">
          Ana Sayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default ResultScreen;
