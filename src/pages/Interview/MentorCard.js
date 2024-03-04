import React from "react";
import "./styles/MentorCard.css";
import profile from "./styles/profile.png";
import { MdOutlineWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";

const MentorCard = () => {
  return (
    <div className="mentor-card" >
      <div className="card-top-bg">
        <div className="card-mentor-profile">
          <img
            src={profile}
            alt="Mentor Profile"
            style={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
          />
        </div>
      </div>
      <div className="mentor-card-body">
        <h2 style={{ textAlign: "center" }}>Mentor's Name</h2>
        <p style={{ fontSize: "1rem", paddingTop: "0.4rem"}}>
          Top mentor @ Skill2040 | HR at GOOGLE | Gold medalist in IIM Indore
        </p>
        <hr style={{ borderTop: "dashed 1px #ccc" ,margin:"1rem" }} />
        <div className="mentor-exp-edu">
          <MdOutlineWorkHistory
            style={{ fontSize: "1.8rem", color: " rgb(125, 120, 219)" }}
          />
          <p style={{ fontSize: "medium", paddingLeft: "7px" }}>2 Years</p>
        </div>
        <div className="mentor-exp-edu">
          <div className="icon-park-outline--trend-two"></div>
          <p style={{ fontSize: "medium", padding: "7px" }}>
            Engineering, Technology & Data
          </p>
        </div>
        <div className="mentor-contact-me-button">
          
            <Link to='/skill2040/interview/mentordetails' className="mentor-contact-button">
            Contact Now
            </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
