import React from 'react';
import "./styles/CodingCard.css"

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const CodingCard = ({topic}) => {
  const showConfettiToast = () => {
    toast.success("Your course is started now!!", {
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
    })}
  return (
    <div className='Coding-card'>
        <div className='hearderTitle-button'>
            <h2 style={{fontSize:"1.5rem"}}>{topic}</h2>
            <button class="button-startnow" role="button" style={{background:"#e74349"}} onClick={showConfettiToast}>Start Now</button>
        </div>
        <br/>
        <p style={{paddingBottom:"0.6rem" }}>Total Questions 36</p>
        <p>Not yet started</p>
    </div>
  )
}

export default CodingCard;