import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import TopBar from './TopBar';
import './tailwind.css';
import './thirdlayer.css';
import git from './github.png';
import './4thlayer.css';
import './titles.css';
import './footer.css';
import linkden from './linkden.png';
import x from './X.jpg'
import cv from './TristanHancock_CV.pdf';
import './projects.css'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './speech.css'
import darkbg from './darkbg.png';
import SkillsGrid from './SkillsGrid';
import ProjectGrid from './ProjectGrid';
import BlogGrid from './BlogGrid.js';

function App() {
const style= {
  backgroundImage:{darkbg},
  backgroundSize: 'cover',
backgroundPosition: 'center',
};

    const { ref, inView } = useInView({
      triggerOnce: true, // Trigger animation only once
      threshold: 0.5, // Trigger when 50% of the element is in view
    });


    const slideInVariants = {
      hidden: { opacity: 0, x: -50 }, // Less extreme start position
      visible: { 
        opacity: 1,
        x: 0,
        transition: { type: 'spring', stiffness: 120, duration: 0.5 }
      }
    };

  return (

    <div className="App">
      
      <header className="App-header">
     <TopBar />
      </header>

<div id="about" className="firstlayer"> 

<div className="intro">
<h1>Hi,I'm Tristan </h1>
<h1>A Software Engineer</h1> 
</div>


<div className="introinfo">
<p>Tristan Hancock is software Engineer graduating from NMIMS Mukesh Patel School. Tristan works with Web Development framworks such as React, ReactNative and nodeJS to name a few As well as working with python automation and machine learning.</p>
<a href="https://www.nmims.edu/" target="_blank" rel="noopener noreferrer"> 
<img src=''  className="nmims-logo"/> {/* Image added here */}
</a>
<a href={cv} download="Tristan_Hancock_CV.pdf" className="download-cv-button">
  Download CV
</a>
</div>
</div>


<button>Skills</button>

<div id="skills" className="secondlayer">
  
<SkillsGrid />
</div>


<div id="projects" className="thirdlayer" style={style}>
<motion.div
    ref={ref} // attach the ref from useInView to trigger animations on viewport entry
    initial="hidden" // initial state
    animate={inView ? "visible" : "hidden"} // animate to visible if inView is true
    exit="exit" // optional: define exit animation
    variants={slideInVariants} // use the variants object
  >
<button>Projects</button>

  <ProjectGrid />
  </motion.div>

</div>

<button>Blogs</button>

<div id="blogs" className="fourthlayer" >

< BlogGrid/>

</div>




<footer id="connect">
  <div class="footer-container">
    <div class="footer-section">
      <h4>Get in touch</h4>
      <a href="mailto:tristanhancock@gmail.com">tristanhancock@gmail.com</a>
    </div>



<div class="footer-section">
  <h4>Connect</h4>
  <a href="https://www.linkedin.com/in/tristan-hancock-b54570223/" target="_blank" rel="noopener noreferrer">
    <img src={linkden} alt="LinkedIn" class="social-logo"/>
    LinkedIn
  </a>
  <a href="https://twitter.com/TristanInTech" target="_blank" rel="noopener noreferrer">
    <img src={x} alt="Twitter" class="social-logo"/>
    Twitter
  </a>
  <a href="https://github.com/Tristan-Hancock" target="_blank" rel="noopener noreferrer">
    <img src={git} alt="GitHub" class="social-logo"/>
    GitHub
  </a>
</div>



    <div class="footer-section">
      <h4></h4>
      <p></p>
      <p></p>
      <p></p>
    </div>
    <div class="footer-section">
      <h4>Ventures</h4>
      <p>MaxFocusAI</p>
      <p>MaxFitnessAI</p>
      <p></p>
    </div>
  </div>
  <div class="footer-meta">
    <p>Built By</p>
    <p>Tristan Josiah Hancock</p>
  </div>
  <div class="footer-nav">
 
  </div>
</footer>

    </div>
);
};
export default App;
