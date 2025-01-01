import './App.css';
import { useState } from 'react';
import MainQuiz from './MainQuiz';

function App() {
  const [status, setStatus] = useState(false);

  const handleStatus = () => {
    setStatus(true); // Sets status to true when the button is clicked
  };

  return (
    <div className="App App-header">
      {
        (status) ?
          <MainQuiz />
          : <div>
            <h1 className="fw-bold mb-4">Basic React JS Quiz</h1>
            <button onClick={handleStatus} className="start-quiz-btn">Start Quiz</button>
          </div>
      }

    </div>
  );
}

export default App;
