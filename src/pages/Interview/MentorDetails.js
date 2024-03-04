import React from 'react';
import MentorBookings from './MentorBookings';
import './styles/MentorDetails.css'
import Profile from './styles/profile.png'
import { MdOutlineWorkHistory } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

// import Microsoft from './styles/Microsoft.png';
// import Google from './styles/Google.jpg';
// import Apple from './styles/Apple.png';
// import OpenAI from './styles/OpenAI.png';
// import Telegram from './styles/Telegram.png';
// import Dell from './styles/Dell.png';
// import Spotify from './styles/Spotify.png';

export default function MentorDetails() {
    const numberOfJobs = 6;
        
  return (
    <div style={{display:'flex'}}>
    
      <div className="mentor-booking-container">
        {[...Array(numberOfJobs)].map((_, index) => (
          <MentorBookings key={index} />
        ))}
      </div>
      <div className='mentor-detailed-view'>
      <div className='mentor-profile-view'>
      <img className="profile-of-mentor" src={Profile} alt='Profile'></img>
      <div className='mentor-detailed-name'>
        <h1>Mr. Eddie Glaud</h1>
        <h2>Google</h2>
        <h3>USA</h3>
      </div>
      </div>
      <div className='mentor-exp-field'>
        <MdOutlineWorkHistory style={{fontSize:'2rem',color: "rgb(125, 120, 219)",marginRight:'5%'}}/>
        <h4 style={{borderRight: '1px solid black'}}>8 Years</h4>
        <HiOutlineBuildingOffice2 style={{fontSize:'2rem',color: "rgb(125, 120, 219)",marginRight:'5%',paddingLeft:'1.5rem'}}/>
        <h4 >8 Years</h4>
        <a href="#" className="mentor-contact-button">
                    Contact Now
                </a>
      </div>
      <hr style={{marginTop:'3rem'}}></hr>
      <div className='mentor-about-section'>
          <h1>About</h1>
          <h2>Education:</h2>      
            <ul>
              <li>Bachelor's degree in Computer Science, Engineering, or a related field from a top-tier university.</li>
              <li>Master's degree in Business Administration (MBA) with a focus on Human Resources or Talent Development.</li>
            </ul>
          <h2>Professional Experience:</h2>
            <ul>
              <li>Over 8 years of diverse experience at Google, with a proven track record of successful career progression within the organization.</li>
              <li>Served in roles ranging from software engineering to project management, gaining comprehensive insights into different facets of the tech industry.</li>
            </ul>
          <h2>Skills:</h2> 
          <ul>
            <li>Strong interpersonal and communication skills, with a knack for understanding individual strengths and aligning them with career paths.</li>
            <li>Proven ability to create and deliver impactful training programs on career development and goal setting.</li>
          </ul>
          <h2>Specialization:</h2> 
          <ul>
            <li>Deep expertise in career development strategies within the technology sector, with a focus on helping individuals identify and achieve their professional goals.</li>
            <li>Extensive knowledge of Google's corporate culture, values, and career advancement opportunities.</li>
          </ul>
          <h2>Certifications:</h2> 
          <ul>
            <li>Certified Career Development Professional (CCDP) from the International Association of Career Management Professionals (IACMP).</li>
            <li>Google Leadership Certification, showcasing proficiency in mentoring and guiding team members.</li>
          </ul>
          <h2>Community Involvement:</h2> 
          <ul>
            <li>Actively involved in Google's internal mentorship programs, contributing to the professional growth of junior team members.</li>
            <li>Volunteered as a guest speaker at local universities and industry conferences, sharing insights on career development in the tech sector.</li>
          </ul>     
      </div>
      </div>
    </div>
  )
}
