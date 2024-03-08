import React, { useState } from 'react';
import './ProjectGrid.css'; // Make sure to import the CSS file
import maxfocus from './logotrans.png';
import store from './store2.png';
import hand2 from './hand2.png';
import cur from './currencies.png';

// Define a component for each project card
function ProjectCard({ title, imgSrc, technologies, details , imgClassName , links}) {
  const [showDetails, setShowDetails] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prevShowDetails => !prevShowDetails);
    setIsExpanded(prevIsExpanded => !prevIsExpanded); // Toggle card size
  };
  const cardClass = `card ${isExpanded ? 'card-expanded' : ''}`;


  return (
    <div className={cardClass}>
      <h2 className="card-title">{title}</h2>
      <div className="card-body">
        <img src={imgSrc} alt={title} className={imgClassName || ''} />

        <div className="card-buttons">
          <button 
            className="card-button primary" onClick={toggleDetails}
           
          >
            Details
          </button>
          <hr />
          <a href={links}> 
          <button className="card-button secondary">Links</button>
          </a>
        </div>
        
        <div className={`card-details ${showDetails ? 'card-details-visible' : ''}`}>
          {showDetails && details}
        </div>


        <div className="card-footer">
          <span>{technologies}</span>
          <div className="footer-icons">
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectGrid() {
  const projects = [
    {
      title: "MaxFocusAI",
      imgSrc: maxfocus,
      technologies: "ReactJS, GPT4, GoogleCalendarAPI, Firebase, Supabase",
      details: "Max Focus AI is a Productive Coach.Max Focus AI allows you to prioritize tasks giving you a detailed schedule for all that you have to get done .Uses Open AI Assistant API to give you the most optimized solution to all your tasks As well as add the tasks to google callendar",
      links: "https://www.linkedin.com/feed/update/urn:li:activity:7167042998306910210/"
    },
    {
      title: "AI Agent Food Ordering",
      imgSrc: store,
      technologies: "ReactJS, GPT4, Django",
      details: "Cyber Cypher Hackathon hosted by Taqneeq.A grocery store assistant for a customer to place orders by chatting with an AI assistant",
      links: "https://www.linkedin.com/feed/update/urn:li:activity:7161984638498791424/"
    },
    {
      title: "Currency Rate Explorer",
      imgSrc: cur,
      technologies: "ReactJS, ForexAPI, Firebase",
      details: "The project aims to deliver a sleek and user-friendly dashboard interface, leveraging the powerful React.js framework to provide real-time foreign exchange (Forex) rate information. By fetching data from the Forex Rate API",
      links: "https://github.com/Tristan-Hancock/CurrencyRateExplorer-React"
    },
    {
      title: "Handwriting Detection",
      imgSrc: hand2,
      technologies: "ReactJS, MNIST, Keras, TensorFlow, OpenCV",
      details: "This project explores the application of Machine Learning techniques for handwriting recognition, focusing on extracting patterns from large datasets to recognize handwritten characters. It examines various methodologies, including Convolutional Neural Networks (CNN) and zoning techniques, to achieve this goal.",
      links: "https://github.com/Tristan-Hancock/Handwriting-Detection-MachineLearning-image-processing"
    }
  ];

  return (
    <div className="card-container">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          imgSrc={project.imgSrc}
          imgClassName={project.title === "Currency Rate Explorer" ? "move-right" : project.title === "Handwriting Detection" ? "move-down" : ""}
          links={project.links}
          technologies={project.technologies}
          details={project.details}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
