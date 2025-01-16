import React, { useState } from 'react';
import './App.css';
import astronautImage from './assets/astronaut.png'; // Imagem do astronauta

function App() {
  const questions = [
    {
      question: 'Quem foi o primeiro astronauta a pisar na Lua?',
      correctAnswer: 'Neil Armstrong',
      alternatives: ['Buzz Aldrin', 'Neil Armstrong', 'Yuri Gagarin', 'Michael Collins']
    },
    {
      question: 'Quem foi o primeiro humano a viajar para o espaço?',
      correctAnswer: 'Yuri Gagarin',
      alternatives: ['Yuri Gagarin', 'Valentina Tereshkova', 'Neil Armstrong', 'John Glenn']
    },
    {
      question: 'Qual é o nome da nave que levou os primeiros astronautas à Lua?',
      correctAnswer: 'Apollo 11',
      alternatives: ['Apollo 13', 'Apollo 11', 'Soyuz 1', 'Vostok 1']
    },
    {
      question: 'Qual é o nome do famoso telescópio espacial da NASA?',
      correctAnswer: 'Hubble',
      alternatives: ['James Webb', 'Hubble', 'Spitzer', 'Chandra']
    }
  ];

  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const handleAnswerSelect = (answer, index) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[index] = answer;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setFinished(true);
  };

  return (
    <div className="background-container">
      <h1>Astronautas Quiz</h1>
      <img src={astronautImage} alt="Astronaut" className="astronaut-img" />
      
      {!finished ? (
        questions.map((question, index) => (
          <div key={index} className="question-container">
            <p>{question.question}</p>
            <div className="alternatives-container">
              {question.alternatives.map((alternative, i) => (
                <button
                  key={i}
                  className={`alternative-button ${selectedAnswers[index] === alternative ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(alternative, index)}
                >
                  {alternative}
                </button>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="score-container">
          <p className="score">Pontuação: {score} / {questions.length}</p>
        </div>
      )}

      {!finished && (
        <button className="submit-button" onClick={handleSubmit}>Finalizar Quiz</button>
      )}
    </div>
  );
}

export default App;
