import React from 'react';
import "./styles/PopularJobCard.css"
import { MdArrowOutward } from 'react-icons/md';
import { MdPeopleAlt } from "react-icons/md";
import logo from "./styles/Microsoft.png";
import { GiBackwardTime } from "react-icons/gi";

const PopularJobCard = () => (
  <div className="pjob-card">
    <img src={logo} style={{height:"5rem",width:"5rem"}}/>
    <br/>
    <br/>
    <div className="pjob-header">
        <p> In Office | Free</p>
        <h3 className="pjob-title">MERN Stack Developer</h3>
        <p>Microsoft</p>
    </div>
    <br/>
    <div className="pjob-description">
        <div className='pJob-open-time'>
            <div className="pjob-openings">
                <MdPeopleAlt style={{ fontSize: "1.2rem",marginTop:"0.2rem" }} />
                <p >32 Applied</p>
            </div>
            <div className='pjob-time'>
                <GiBackwardTime style={{fontSize:"1.2rem",marginTop:"0.2rem" }} />
                <p >1 day left</p>
            </div>
        </div>
        <div className="pjob-arrow-wrapper">
            <MdArrowOutward style={{ fontSize: "1.6rem"}} />
        </div>
    </div>
  </div>
);

export default PopularJobCard;