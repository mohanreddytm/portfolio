import React, { useEffect, useState } from 'react'

const roles = [
    "Full Stack Developer",
    "Frontend Visionary",
    "Backend Specialist",
    "Web Solutions Engineer",
    "React Innovator",
    "JavaScript Technologist",
    "Node.js Expert",
    "Express.js Specialist",
    "UI/UX Futurist",
    "Web Experience Designer",
    "Software Craftsman",
    "Frontend Strategist",
    "Backend Architect",
    "JavaScript Wizard",
    "API Maestro",
    "Digital Transformation Consultant",
    "Tech Stack Builder"
  ];
  
  

const SecondIterator = () => {


    const [currentRole, setCurrentRole] = useState(roles[0]);
    const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); 
        const index = roles.indexOf(currentRole);
        const nextIndex = (index + 1) % roles.length;
        let count = 1;
        const miniInterval = setInterval(() => {
          setCurrentRole(roles[nextIndex].slice(0,count));
          count += 1;
          if (count > roles[nextIndex].length) {
            clearInterval(miniInterval);
          }
        }
        , 100);
        setFade(true); 
    }, 2000); 

    return () => clearInterval(interval);
  }, [currentRole]);


    return (
        <h1 className={`web-developer-span bounce ${fade ? "fade-in" : "fade-out"}`}>{currentRole}<span className="blink">|</span></h1>
    )
  }

export default SecondIterator;