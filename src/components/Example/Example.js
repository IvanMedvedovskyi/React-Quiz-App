import React from 'react';
import { data } from '../../data/Data';
import './example.scss';

function Example({step, question, onClickVariant}) {

    const percentage = Math.round(step / data.length * 100);
    
    return (
        <div className="quiz">
        <div className="container">
            <div className="white__block">
                <div className="progress__line">
                    <div style = {{width: `${percentage}%`}} className="progress__line-active">
                    </div>
                </div>
                <div className="white__block-title">
                    <h1>{question.title}</h1>
                </div>
                <div className="white__block-questions">
                    <ul>
                        {
                            question.variants.map((value, index)=><li onClick={()=>onClickVariant(index)} className='variant' key={value}>{value}</li>)
                        }
                    </ul>
                </div>
                <div className="yellow__block">
                </div>
                <div className="orange__block"></div>
            </div>
        </div>
    </div>
    )
}

export default Example;