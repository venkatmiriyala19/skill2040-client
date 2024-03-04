import React, { useEffect } from "react";
import JobCard from "./RightJobCard";
import "./styles/Jobs.css"
import JobCard2 from "./PopularJobCard";


const Jobs = () => {
  const numberOfJobs = 6; // Set the number of times you want to run the loop
  useEffect(() => {
    // Select all elements with the class name '.pscroll-container'
    const containers = document.querySelectorAll('.pscroll-container');

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
      <div className="role-text-container">
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
          <h2 className='job-title-left' style={{ fontSize: "2rem" }}>Find a job that aligns with your </h2><h1 className="job-title-right"> Strengths and Interests.</h1>
        </div>
        <br></br>
        <p>
          Discover employment opportunities that resonate with your strengths and passions, forging a career path that blends personal fulfillment with
          professional success
        </p>
        <br></br>
        <br></br>
      </div>
      <div className="jobs-container pscroll-container">
        <div className="jobs-wrapper">
          {[...Array(numberOfJobs)].map((_, index) => (
            <JobCard key={index} />
          ))}
        </div>
      </div>

      <div className="role-text-container">
        <div style={{ display: 'flex', textAlign: 'center', alignItems: 'center' }}>
          <h2 className='job-title-left' style={{ fontSize: "1.7rem" }}>Explore </h2><h1 className="job-title-right" style={{ fontSize: "1.7rem" }}> in-demand careers</h1><h2 className='job-title-left' style={{ fontSize: "1.7rem" }}>and discover popular job opportunities in your field.</h2>
        </div>
        <br></br>
        <p>
          Explore popular job opportunities in line with current market trends, ensuring a promising professional path.</p>
        <br></br>
        <br></br>
      </div>
      <div className="jobs-container pscroll-container">
        <div className="jobs-wrapper">
          {[...Array(numberOfJobs)].map((_, index) => (
            <JobCard2 key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Jobs;
