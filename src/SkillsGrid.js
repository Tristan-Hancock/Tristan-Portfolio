import React from 'react';
import './SkillsGrid.css'; // Make sure to import the CSS file
import logo from './logo.svg';
import javascript from './javascript.png';
import htmlImage from './HTML.png';
import nodelogo from './node.png';
import python from './python.png';
const TechCard = ({ title, description, imgSrc }) => {
    return (
      <div className="skillcard">
            <img src={imgSrc} alt={title} className="card-image" />

        <div className="skillcard-content">
        </div>
      </div>
    );
  };

function SkillsGrid() {
    const techs = [
        { title: 'ReactJS', description: 'A JavaScript library for building user interfaces' ,imgSrc: logo},
        { title: 'NodeJs', description: 'A high-level, interpreted scripting language', imgSrc:nodelogo },
        { title: 'HTML', description: 'A high-level, interpreted scripting language', imgSrc: htmlImage },
        { title: 'Javascript', description: 'A high-level, interpreted scripting language', imgSrc: javascript },
        { title: 'Python', description: 'A high-level, interpreted scripting language', imgSrc: python },
       
        // Add more techs as needed
      ];


  return (
    <div className="box">
    {techs.map(tech => (
      <TechCard key={tech.title} title={tech.title} description={tech.description}   imgSrc={tech.imgSrc}  />
    ))}
  </div>
  );
}

export default SkillsGrid;
