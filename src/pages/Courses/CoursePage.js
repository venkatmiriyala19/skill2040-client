import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const CoursePage = () => {
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
    <div>
      <h1>Course Page</h1>
      {courseData && (
        <div>
          <h2>{courseData.title}</h2>
          <p>{courseData.description}</p>
          <p>Duration: {courseData.duration}</p>
        </div>
      )}
      {ytLink && (
        <div>
          <h2>YouTube Video</h2>
          <ReactPlayer url={ytLink} controls />
        </div>
      )}
    </div>
  );
};

export default CoursePage;
