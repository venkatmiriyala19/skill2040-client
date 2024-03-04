import React, { useState, useEffect } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import "./styles/CourseContent.css";
import { FaRegCheckCircle } from "react-icons/fa";
import { useWindowSize } from "react-use";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Confetti from "react-confetti";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const CourseContent = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const { width, height } = useWindowSize();
  const [stopConfetti, setStopConfetti] = useState(false);


  const handleMarkAsComplete = () => {
    setIsCompleted(true);
    showConfettiToast();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeSpent(prevTimeSpent => prevTimeSpent + 10);
    }, 10000);

    return () => clearInterval(interval);
  }, []);
  const showConfettiToast = () => {
    toast.success("Your course is marked as completed", {
      position: "top-right",
      autoClose: 10000,
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
    });

    // Stop confetti after 5 seconds (5000 milliseconds)
    const confettiTimer = setTimeout(() => {
      setStopConfetti(true);
    }, 10000);

    // Clear the timer when the component unmounts or when the effect runs again
    return () => clearTimeout(confettiTimer);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  const [courseData, setCourseData] = useState(null);
  const [ytLink, setYtLink] = useState('');

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyC3a-2ZNR_bGh8D6jKZlfs95gVbv-t3RIM",
  authDomain: "skill-2040.firebaseapp.com",
  projectId: "skill-2040",
  storageBucket: "skill-2040.appspot.com",
  messagingSenderId: "613789960195",
  appId: "1:613789960195:web:b1b417578d902fcfb8a636"
      
    };

    const app = initializeApp(firebaseConfig);
    const firestore = getFirestore(app);

    const fetchCourseData = async () => {
      try {
        const courseRef = doc(firestore, 'courses', 'course1');
        const courseDoc = await getDoc(courseRef);

        if (courseDoc.exists()) {
          setCourseData(courseDoc.data());
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching course data:', error);
      }
    };

    const fetchYouTubeLink = async () => {
      try {
        const linkRef = doc(firestore, 'links', 'youtube');
        const linkDoc = await getDoc(linkRef);

        if (linkDoc.exists()) {
          setYtLink(linkDoc.data().url);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching YouTube link:', error);
      }
    };

    fetchCourseData();
    fetchYouTubeLink();
  }, []);

  return (
    <>
    {isCompleted && (
        <Confetti width={width} height={height + window.scrollY} gravity={0.02}
         />
      )}
      <div className='main-video'>
        <div className="video-content" style={{ marginBottom: "1rem" }}>
          <div className="video-container">
            <ReactPlayer
              url={ytLink}
              width='96%'
              height='96%'
              controls={true}
            />
          </div>
        </div>
        <div className='bottom-video-content' style={{ marginTop: "-9rem" }}>
          
        {courseData && (
            <>
              <h1>{courseData.title}</h1>
              <p style={{ fontSize: "1.1rem", marginTop: "2rem" }}>{courseData.description}</p>
            </>
          )}
          <div style={{marginTop:'10%'}}>
          <p style={{marginLeft:'2%'}}> Time Spent: {formatTime(timeSpent)} <span style={{float:'right',marginRight:'2%'}}>Expected Time: 10:00</span></p>
          
          <button
            className="mark-as-complete"
            onClick={handleMarkAsComplete}
            disabled={isCompleted} // Optional: Disable the button after it's marked as completed
          >
            {isCompleted ? <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Completed <FaCheckCircle style={{fontSize:'1.7rem',fontWeight:'800',marginLeft:'0.3rem'}}/> </div> : <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>Mark as Completed <FaRegCheckCircle style={{fontSize:'1.7rem',fontWeight:'800',marginLeft:'0.3rem'}}/> </div>}
          </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CourseContent;
