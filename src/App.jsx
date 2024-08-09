import { BrowserRouter, Routes, Route, Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from 'react'  
import './App.css'
import Home from "./pages/Home"
import Header from './components/Header'
import Courses from "./pages/Courses";
import CoursePage from "./pages/CoursePage";

function App() {

  let courseData = [
    {
      "image": "https://static.guvi.in/blog/zenThumbnail/java-fsd.webp",
      "name": "Java Full Stack",
      "description": "GUVI certified Full-stack Java Developer course of Zen class is a highly-advanced & innovative program for aspirants aiming for a career in the full-stack development industry. This is a comprehensive online boot camp that covers the front-end development concepts with evergreen technologies like HTML, CSS & JavaScript while the backend web development with core Java, Java 8, Java 9 and Spring 5. Get an exclusive hands-on experience with the latest design tools, & database management techniques extensively instructed by the industry’s best full-stack development experts under the guidance of Founders(Ex-Paypal Employees). In-time mentorship & 360-degree career guidance will be provided for you to get placement offers from Top Product Companies.",
      "languages": "English, Tamil, Hindi",
      "id": "1",
      "category": "fullstack"
    },
    {
      "image": "https://static.guvi.in/blog/zenThumbnail/mern-fsd.webp",
      "name": "MERN Full Stack",
      "description": "Zen class career program offers the Full Stack MERN Developer Course. Gain job-ready Full-stack development skills within 3 to 5 months through Vernacular Upskilling, 360-degree Career Guidance, Globally Recognized Certifications, and Placement Guidance.",
      "languages": "English, Tamil, Hindi",
      "id": "2",
      "category": "fullstack"
    },
    {
      "image": "https://static.guvi.in/blog/zenThumbnail/data-science.webp",
      "name": "Data Science",
      "description": "IIT-M Pravartak Certified Advanced Programmer with Data Science Mastery Program is a leading-edge Technological Program paving your way to an assured lucrative career. It is an integrated course directed by GUVI - an IIT-M incubated company. Instructed by the industry’s best Technical Experts & Founders(Ex-Paypal Employees), this program offers mentorship through Data Experts and directs you to the Fortune 500 companies. The vision is to make the premium organizations discover the Right talent through GUVI’s Zen Class.",
      "languages": "English, Tamil, Hindi",
      "id": "3",
      "category": "datascience"
    },
    {
      "image": "https://static.guvi.in/blog/zenThumbnail/ui-ux.webp",
      "name": "UI/UX",
      "description": "The demand for UI UX Designers is increasing day by day. UI UX Job is ranked 6th on Glassdoor’s “Top 25 highest-paying entry-level jobs”. Everything is becoming digital in this era, which means most product or service-based companies require a UI UX Designer for their needs. That's why the demand & the average salary for a UI UX Designer are increasing every year.",
      "languages": "English, Tamil, Hindi",
      "id": "4",
      "category": "uiux"
    },
    {
      "image": "https://static.guvi.in/blog/zenThumbnail/python-at.webp",
      "name": "Automation Python",
      "description": "Join GUVI’s highly acclaimed Automation Testing using Python Course and start your journey towards becoming an automation testing rockstar within just 5 months through an : Exclusive industry-grade syllabus, Dashing portfolio of exciting projects, 360-degree Career Guidance, Globally Recognized GUVI certification, Placement Guidance.",
      "languages": "English, Tamil, Hindi",
      "id": "5",
      "category": "datascience"
    }
  ]

  const [data,setData] = useState([])

  useEffect(()=>{
    setData(courseData)
  },[])

  return (
    <>
      <BrowserRouter>
      {/* <Header filterFunction={filterFunction}/> */}
        <Routes>

          <Route path="/" element={<Home />}/>
          <Route path="/course" element={<Courses data={data}/>}/>
          <Route path="/course/:id" element={<CoursePage data={data}/>}/>
          <Route path="*" element={<h1>Page Not Found</h1>}/>
    
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
