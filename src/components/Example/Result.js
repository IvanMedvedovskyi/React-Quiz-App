import React from "react";
import сrownImage from "../../assets/images/crown.png";
import { data } from "../../data/Data";
import './example.scss'

function Result( {correct} ) {
    return (
        <div className="quiz">
            <div className="container">
            <div className="white__block">
                <div className="white__block-title result-title">
                <img src={сrownImage} alt="Crown" />
                </div>
                <div className="result-title">
                <h1 className="final-result">Ви правильно відповіли на {correct} відповіді з {data.length}</h1>
                </div>
                <div className="white__block-questions">
                    <a href="/">Спробувати ще раз</a>
                </div>
                <div className="yellow__block">
                </div>
                <div className="orange__block"></div>
            </div>
            </div>
        </div>
    )
}

export default Result;