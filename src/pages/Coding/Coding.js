import React from "react";
import CodingCard from "./CodingCard"; // Assuming you have a CodingCard component
import "./styles/Coding.css"; // Import your CSS file for styling if needed
import topics from "./Topics";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Coding = () => {
  const showConfettiToast = () => {
    toast.success("Your DSA journey is started now!!", {
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
  const codingCardData = [
    // You can provide data for each card if needed
    // For simplicity, I'm using an array of 9 null values
    // You can replace this with actual data for each card
    ...Array(9).fill(null),
  ];

  return (
    <>
      <div className="coding-heading-container" style={{ background: "#e74349" }}>
        <p>

          Code your way to top and win big  DSA coding challenge by  <span>  solving 450 DSA problems</span>

        </p>

        <button class="button-47" role="button" onClick={showConfettiToast}>Start Now</button>
      </div>
      <div className="coding-container">
        {topics.map((topic, index) => (
          <CodingCard key={index} topic={topic} />
        ))}
      </div>
    </>
  );
};

export default Coding;
