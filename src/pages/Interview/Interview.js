import React,{useEffect} from 'react';
import MentorCard from './MentorCard'; 
import "./styles/Interview.css";

const Interview = () => {
  // Create an array to repeat the MentorCard component
  const numberOfMentors = 6;
  useEffect(() => {
    // Select all elements with the class name '.pscroll-container'
    const containers = document.querySelectorAll('.ppscroll-container');

    containers.forEach(container => {
      let isMouseDown = false;
      let startX;
      let scrollLeft;

      function handleMouseDown(event) {
        isMouseDown = true;
        startX = event.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      }

      function handleMouseLeave() {
        isMouseDown = false;
      }

      function handleMouseUp() {
        isMouseDown = false;
      }

      function handleMouseMove(event) {
        if (!isMouseDown) return;
        event.preventDefault();
        const x = event.pageX - container.offsetLeft;
        const walk = (x - startX) * 3; // You can adjust the scroll speed
        container.scrollLeft = scrollLeft - walk;
      }

      // Add event listeners to track mouse movements
      container.addEventListener('mousedown', handleMouseDown);
      container.addEventListener('mouseleave', handleMouseLeave);
      container.addEventListener('mouseup', handleMouseUp);
      container.addEventListener('mousemove', handleMouseMove);

      // Clean up function to remove event listeners when component unmounts
      return () => {
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mousemove', handleMouseMove);
      };
    });
  }, []);

  return (
    <>
    <div className="top-mentors-container">
        <div style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
        <h2 className="mentor-title-left" style={{ fontSize: "1.7rem" }}>Top </h2>
          <h1 className="mentor-title-right" style={{ fontSize: "1.7rem" }}>Mentors</h1>
        </div>
        <br />
        <p style={{fontSize:"1.2rem"}}>
          In search of excellence? Explore the highest-rated mentors as recognized by the learner community.
        </p>
        <br />
        <br />
      </div>
    <div className="interview-container ppscroll-container">
      {/* Scrolling content with MentorCard components */}
      <div className="mentor-cards-wrapper">{Array.from({ length: numberOfMentors }, (_, index) => (
    <MentorCard key={index} />))}</div>
    </div>

    <div className="top-mentors-container" style={{marginTop:"8rem"}}>
        <div style={{ display: "flex", textAlign: "center", alignItems: "center" }}>
        <h2 className="mentor-title-left" style={{ fontSize: "1.7rem" }}>DSA </h2>
          <h1 className="mentor-title-right" style={{ fontSize: "1.7rem" }}>Mentors</h1>
        </div>
        <br />
        <p style={{fontSize:"1.2rem"}}>
          In search of excellence? Explore the highest-rated mentors as recognized by the learner community.
        </p>
        <br />
        <br />
      </div>
    <div className="interview-container ppscroll-container">

      {/* Scrolling content with MentorCard components */}
      <div className="mentor-cards-wrapper">{ Array.from({ length: numberOfMentors }, (_, index) => (
    <MentorCard key={index} />
  ))}</div>
    </div>
    </>
  );
};

export default Interview;
