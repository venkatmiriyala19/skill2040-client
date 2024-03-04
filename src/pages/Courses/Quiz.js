import React, { useState } from 'react';
import './styles/Quiz.css';
import Lottie from 'lottie-react';
import QuizComplete from './styles/QuizComplete.jpg';
import Confetti from 'react-confetti';
import { useWindowSize } from "react-use";
import { ToastContainer, toast } from "react-toastify";


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(''));
  const [score, setScore] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [retakeQuiz, setRetakeQuiz] = useState(false);
  const { width, height } = useWindowSize();
  const [stopConfetti, setStopConfetti] = useState(false);

  const showConfettiToast = () => {
    toast.success("Your score has been submitted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      style: {
        fontWeight: "bold",
        fontSize: "1.2rem",
      },
    });

    // Stop confetti after 5 seconds (5000 milliseconds)
    const confettiTimer = setTimeout(() => {
      setStopConfetti(true);
    },5000);

    // Clear the timer when the component unmounts or when the effect runs again
    return () => clearTimeout(confettiTimer);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(Array(5).fill(''));
    setScore(null);
    setSubmitted(false);
    setRetakeQuiz(false);
  };

  const questions = [
    'What does HTML stand for?',
    'Which tag is used to create an ordered list?',
    'What is the purpose of the alt attribute in an image tag?',
    'Which doctype declaration is correct for HTML5?',
    'What does the <canvas> element in HTML5 provide?',
  ];

  const options = [
    ['Hypertext Markup Language', 'Hyper Transfer Markup Language', 'High Text Markup Language', 'Hyperlink and Text Markup Language'],
    ['<ol>', '<li>', '<ul>', '<dl>'],
    ['Specifies the image source', 'Specifies the image width', 'Specifies alternative text for the image', 'Specifies the image alignment'],
    ['<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">', '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN">', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN">', '<!DOCTYPE html>'],
    ['Audio playback', 'Vector graphics drawing', 'Video playback', '3D rendering'],
  ];

  const handleAnswerChange = (optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = options[currentQuestion][optionIndex];
    setAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    const correctAnswers = ['Hypertext Markup Language', '<ol>', 'Specifies alternative text for the image', '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN">', 'Vector graphics drawing'];

    const userScore = answers.reduce((score, answer, index) => {
      if (answer === correctAnswers[index]) {
        return score + 1;
      }
      return score;
    }, 0);

    setScore(userScore);
    setSubmitted(true);
    setRetakeQuiz(true); 
    showConfettiToast();// Set retakeQuiz to true after submitting the quiz
  };

  return (
    <div className='Quiz-content'>
      {!submitted && !retakeQuiz && (
        <div style={{ boxSizing: 'border-box' }}>
          <div style={{ marginBottom: '20px' }} className='Quiz-content-qa'>
            <p className='Quiz-content-question'>{`${currentQuestion + 1}. ${questions[currentQuestion]}`}</p>
            <ul className='Quiz-content-options'>
              {options[currentQuestion].map((option, optionIndex) => (
                <li key={optionIndex}>
                  <label className="radio-button">
                    <input
                      className="radio-button__input"
                      type="radio"
                      name={`q${currentQuestion}`}
                      value={option}
                      checked={answers[currentQuestion] === option}
                      onChange={() => handleAnswerChange(optionIndex)}
                    />
                    <span className="radio-button__label">
                      <span className="radio-button__custom"></span>
                      {option}
                    </span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '1.7rem' }}>
            <button className="cta" onClick={handlePrevious} disabled={currentQuestion === 0} style={{ marginLeft: '1rem', marginRight: '1rem' }}>
              <span className="hover-underline-animation" disabled={currentQuestion === 0} style={{ color: currentQuestion === 0 ? 'gray' : '', cursor: currentQuestion === 0 ? 'not-allowed' : '' }}>Previous</span>
            </button>
            <button className="cta" onClick={handleNext} disabled={currentQuestion === questions.length - 1} style={{ marginRight: '1rem' }}>
              <span className="hover-underline-animation" disabled={currentQuestion === questions.length - 1} style={{ display: currentQuestion === questions.length - 1 ? 'none' : '', color: currentQuestion === questions.length - 1 ? 'gray' : '', cursor: currentQuestion === questions.length - 1 ? 'not-allowed' : '' }}>Next</span>
            </button>
            {currentQuestion === questions.length - 1 && (
              <button className="quiz-submit" onClick={handleSubmit}>
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="quiz-submit-button-text">Submit Quiz</span>
              </button>
            )}
          </div>
        </div>
      )}
      {submitted && (
        
        <div className="Quiz-score">
          <Confetti width={width} height={height + window.scrollY} gravity={0.1} recycle={false}  numberOfPieces={200}

         />
          <img src={QuizComplete} className="quiz-complete-img" alt='' />
          <h1 className='Quiz-completed-header'>Quiz Completed!</h1>
          <p className='Quiz-completed-score-display'>Your Score: {score} out of {questions.length}</p>
          {/* <button className="cta" onClick={() => setRetakeQuiz(true)}>
            <span className="hover-underline-animation">Retake Quiz</span>
          </button> */}
        </div>
      )}
      {retakeQuiz && (
        <div>
          {/* <p>Retake quiz logic goes here...</p> */}
          <button className="cta" onClick={resetQuiz} style={{marginTop:'2rem'}}>
            <span className="hover-underline-animation" >Retake Quiz</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
