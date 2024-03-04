import React from "react";
import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";

const CourseCard = ({ courseTitle, instructor, company, progress, imageUrl, linkTo }) => {
  return (
    <div className="course-card">
      <div className="course-image">
        <img className="course-card-title-image" src={imageUrl} alt={courseTitle} />
      </div>
      <div className="course-card-content">
        <div className='Course-hearderTitle-button'>
          <Link to={linkTo} style={{ textDecoration: "none" }}>
            <h2 style={{ fontSize: "1.5rem", textAlign: 'center' }}>{courseTitle}</h2>
          </Link>
        </div>
        <br />
        <div className="course-author-details-overview">
          <p style={{ paddingBottom: "0.6rem", marginTop: "0.2rem" }}>By: {instructor}</p>
          <p style={{ paddingBottom: "0.6rem", marginBottom: '1rem' }}>Ex {company} Employee</p>
        </div>
        <ProgressBar completed={progress} animateOnRender={true} bgColor="rgb(106, 99, 244)" width="100%" />
      </div>
    </div>
  );
};

export default CourseCard;
