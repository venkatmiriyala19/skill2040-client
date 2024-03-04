import React from 'react';
import './styles/TakeQuiz.css'
import Quiz from './styles/Quiz.jpg'
import { Link } from 'react-router-dom';
export default function TakeQuiz() {
  return (
    <div className='take-quiz-center'>
      <img src={Quiz} alt='' className='take-quiz-image'></img>
      <h1 className='take-quiz-header-1' style={{fontSize:'2.5rem'}}>Challenge Yourself</h1>
      <h1 className='take-quiz-header-2' >Embark on a Journey of Knowledge with Our Interactive Quiz Experience!</h1>
      <Link to="/skill2040/courses/quizcontent">
      <button className="button2">Take Quiz</button>
    </Link>

    </div>
  )
}
