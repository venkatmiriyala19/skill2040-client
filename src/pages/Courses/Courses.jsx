import React from "react";
import "./styles/Courses.css";
import CourseCard from "./CourseCard";
import JavaScriptLogo from "./styles/JavaScript-logo.png";
import C from "./styles/C++.png";
import mongdb from "./styles/MongoDB.png";
import HTML from "./styles/HTML.png";
import Java from "./styles/Java.png";
import ReactLogo from "./styles/React.png";
import Python from "./styles/Python.png";
import Flutter from "./styles/flutter_logo.svg";
import ML from "./styles/ML.png";



const coursesData = [
  {
    title: "HTML5 & CSS3",
    instructor: "Aarav Patel",
    company: "TechHub Solutions",
    progress: 90,
    imageUrl: HTML,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "JavaScript",
    instructor: "Aisha Sharma",
    company: "WebCraft Innovations",
    progress: 60,
    imageUrl: JavaScriptLogo,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "React JS",
    instructor: "Arjun Kumar",
    company: "DigitalPulse Tech",
    progress: 20,
    imageUrl: ReactLogo,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "Python",
    instructor: "Aditi Choudhary",
    company: "DataSphere Solutions",
    progress: 80,
    imageUrl: Python,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "Flutter",
    instructor: "Avani Desai",
    company: "Google",
    progress: 66,
    imageUrl: Flutter,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "JAVA",
    instructor: "Jai Singh",
    company: "CodeCrafters Ltd",
    progress: 57,
    imageUrl: Java,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "MongoDB",
    instructor: "Meera Patel",
    company: "DataMinds Co.",
    progress: 37,
    imageUrl: mongdb,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "Machine Learning",
    instructor: "Rahul Sharma",
    company: "AI Insights Corp.",
    progress: 69,
    imageUrl: ML,
    linkTo: "/skill2040/coursecontent",
  },
  {
    title: "C++",
    instructor: "Ananya Mishra",
    company: "CodeGenius Solutions",
    progress: 52,
    imageUrl: C,
    linkTo: "/skill2040/coursecontent",
  },
];


export default function Courses() {
  return (
    <>
      {/* Your existing code */}
      <div className="course-card-container">
        {coursesData.map((course, index) => (
          <CourseCard
            key={index}
            courseTitle={course.title}
            instructor={course.instructor}
            company={course.company}
            progress={course.progress}
            imageUrl={course.imageUrl}
            linkTo={course.linkTo}
          />
        ))}
      </div>
    </>
  );
}
