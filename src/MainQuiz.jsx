import React, { useState } from 'react';
import Scores from './Scores';
import qBank from './questionBank';
import Questions from './container/Questions';

export default function MainQuiz() {
  const questionBank = qBank;
  const [quizEnd, setquizEnd] = useState(false);
  const [currentId, setcurrentId] = useState(0);
  const [selectedOption, setselectedOption] = useState("");
  const [score, setScore] = useState(0);  // Changed Scores to score

  const handleOptionChange = (e) => {
    setselectedOption(e.target.value);
  }

  const handleSubmission = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  }

  const checkAnswer = () => {
    if (selectedOption === questionBank[currentId].answer) {
      setScore((prevScore) => prevScore + 1);  // Changed Scores to score
    }
  }

  const handleNextQuestion = () => {
    if (currentId + 1 < questionBank.length) {
      setcurrentId((prevId) => prevId + 1);
      setselectedOption("");
    } else {
      setquizEnd(true);
    }
  }

  return (
    <div>
      <div className="App d-flex flex-column align-items-center justify-content-center">
        {
          (!quizEnd) ? (
            <Questions
              question={questionBank[currentId]}
              selectedOption={selectedOption}
              onOptionChange={handleOptionChange}
              onSubmit={handleSubmission}
            />
          ) : (
            <Scores
              score={score}
              className="score"
            />
          )
        }
      </div>
    </div>
  );
}
