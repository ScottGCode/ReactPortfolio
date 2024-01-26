import React from 'react';
import jateImage from '../Assets/Images/Screenshot 2024-01-17 at 5.54.14 PM.png';
import weatherImage from '../Assets/Images/Screenshot 2023-10-02 at 11.41.49 PM.png';
import homeImage from '../Assets/Images/Screenshot 2023-10-11 at 7.25.20 PM.png';
import noteImage from '../Assets/Images/Screenshot 2023-11-08 at 11.07.31 PM.png';
import workImage from '../Assets/Images/Screenshot 2023-09-22 at 1.07.38 PM.png';
import quizImage from '../Assets/Images/Screenshot 2023-09-19 at 12.32.33 AM.png';

function Project() {
    const projects = [
        {
            title: 'J.A.T.E',
            image: jateImage,
            deployedLink: 'https://blue-calf.onrender.com/',
            githubLink: 'https://github.com/ScottGCode/TextEditor'
        },
        {
            title: 'Dynamic Weather Dashboard',
            image: weatherImage,
            deployedLink: 'https://scottgcode.github.io/DynamicWeatherDashboard/',
            githubLink: 'https://github.com/ScottGCode/DynamicWeatherDashboard'
        },
        {
            title: 'Home Builder Buddy',
            image: homeImage,
            deployedLink: 'https://g-marshall1.github.io/Home-Builder-Buddy/#gsc.tab=0',
            githubLink: 'https://github.com/G-marshall1/Home-Builder-Buddy'
        },
        {
            title: 'Note Taker App',
            image: noteImage,
            deployedLink: 'https://stormy-lake-78308-6607e472bc71.herokuapp.com/',
            githubLink: 'https://github.com/ScottGCode/NoteTakerApp'
        },
        {
            title: 'Work Day Scheduler',
            image: workImage,
            deployedLink: 'https://scottgcode.github.io/WorkDayScheduler/',
            githubLink: 'https://github.com/ScottGCode/WorkDayScheduler'
        },
        {
            title: 'Interactive Coding Quiz',
            image: quizImage,
            deployedLink: 'https://scottgcode.github.io/InteractiveCodingQuiz/',
            githubLink: 'https://github.com/ScottGCode/InteractiveCodingQuiz'
        },
    ];
    return (
        <div className="project-container">
          <h2>My Portfolio</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <div key={index} className="project">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    Deployed App
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
export default Project 