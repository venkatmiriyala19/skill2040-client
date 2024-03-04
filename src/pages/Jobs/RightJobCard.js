import React,{ useState } from 'react';
import "./styles/RightJobCard.css";
import { MdArrowOutward } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import Microsoft from './styles/Microsoft.png';
import Google from './styles/Google.jpg';
import Apple from './styles/Apple.png';

import Telegram from './styles/Telegram.png';
import Dell from './styles/Dell.png';
import Spotify from './styles/Spotify.png';




const JobCard = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };
  const hideLogos = () => {
    setExpanded(false);
  };

  return (
    <>
      <div className='rjob-card'>
        <div className='rjob-header'>
          <h3 className='rjob-title'>Software Engineer Intern</h3>
          <div className='rjob-arrow-wrapper'>
          <MdArrowOutward style={{ fontSize: "1.6rem" }} />
        </div>        </div>
        <div className='rjob-description'>
          <div className='rjob-openings'>
            <GoDotFill style={{ fontSize: "25px", color: "#92e3a9" }} />
            <p>370+openings</p>
          </div>
          <br></br>
          <img className="job-logo" src={Microsoft} alt='Microsoft'></img>
          <img className="job-logo" src={Google} alt='Google'></img>
          <img className="job-logo" src={Telegram} alt='Telegram'></img>
          {expanded && (
            <>
              <img className="job-logo" src={Dell} alt='Telegram'></img>
              <img className="job-logo" src={Apple} alt='Apple'></img>
              <img className="job-logo" src={Spotify} alt='Spotify'></img>
              <p className="more-text" onClick={hideLogos}>Hide</p>              
            </>
          )}
          {!expanded && (
            <p className="more-text" onClick={toggleExpansion}>+2 more</p>
          )}
          
        </div>
      </div>
    </>
  )
}

export default JobCard;
