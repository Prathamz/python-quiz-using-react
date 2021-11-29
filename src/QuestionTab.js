import React from 'react'
import './App.css';

export default function QuestionTab(props) {
    const addOptions = props.options.map((option,ind,key)=>{
        key=ind
            return(
                <div className="options">
                    <input type="radio" value={option} name={props.name} onChange={props.setAnswer}></input>
                    <label for={option}>{option}</label>
                </div>
            ) 
        })
    return (
        <div className="question-ans">
            <h3>{props.question}</h3>
            {addOptions}
        </div>
    )
}
