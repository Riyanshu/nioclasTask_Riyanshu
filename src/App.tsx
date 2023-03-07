import { useState } from 'react';
import {questionIds} from './constants/constants';
import './App.css';
import Questions from './components/Questions';

const App = (): JSX.Element => {
  const [currQuestionIndex, setCurrQuestionIndex] = useState<number>(0);

  const handlePreviousQuestion = (): void => {
    if (currQuestionIndex > 0) {
      setCurrQuestionIndex(currQuestionIndex - 1);
    }
  };

  const handleNextQuestion = (): void => {
    if (currQuestionIndex < questionIds.length - 1) {
      setCurrQuestionIndex(currQuestionIndex + 1);
    }
  };

  return (
    <div className="App">
      <h1>Math Questions</h1>
      <div className="question-container">
        <div className="question-wrapper">
          <Questions index={currQuestionIndex} />
        </div>
      </div>
      <div className="button-container">
        <button onClick={handlePreviousQuestion} disabled={currQuestionIndex === 0}>Previous Question</button>
        <button onClick={handleNextQuestion} disabled={currQuestionIndex === questionIds.length - 1}>Next Question</button>
      </div>
    </div>
  );
}

export default App;
