import React from 'react'
import Option from "./Option"; 

export default function Questions({ question, selectedOption, onOptionChange, onSubmit }) {
  return (
    <div className='' >
      <h3>Question {question.id}</h3>
      <h4 className="mt-2">{question.question}</h4>
      <form onSubmit={onSubmit} className="mt-2 mb-2" >
        <Option
          options = {question.options}
          selectedOption = {selectedOption}
          onOptionChange = {onOptionChange}
        /> 
        <button type='submit' className="btn btn-primary mt-2" >
          SUBMIT
        </button>
      </form>
    </div>
  )
}
