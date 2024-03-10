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
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './speech.css'
import darkbg from './darkbg.png';
import SkillsGrid from './SkillsGrid';
import ProjectGrid from './ProjectGrid';
import BlogGrid from './BlogGrid.js';


const OPENAI_API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

function App() {
  const [task, setTask] = useState('');
  const [output, setOutput] = useState(''); // New state variable for the output
  const [isLoading, setIsLoading] = useState(false); // New state variable for loading status
  const [selectedFile, setSelectedFile] = useState(null); 



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

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    // Function to handle file upload to your server (which will then upload to OpenAI)
    const handleFileUpload = async () => {
      if (!selectedFile) {
        alert('Please select a file first.');
        return;
      }
  
      const formData = new FormData();
      formData.append('document', selectedFile);
  
      try {
        const response = await fetch('http://localhost:3000/upload-file', {
          method: 'POST',
          body: formData,
        });
        const data = await response.json();
        console.log('File ID:', data.fileId);
        // You might want to save the fileId for later use or pass it to other components
      } catch (error) {
        console.error('Upload failed:', error);
      }
    };
  

    async function callOpenAIAPI() {
   
      console.log("Calling OpenAI");
      
    
      const API_BODY = {
        model: 'gpt-4',
        messages: [{
          role: "system",
          content: 'You are Tristans Assistant with the knowledge about Tristans work , skills and projects to help people or recruiters to learn more about me Rules: 1. Only use the provided context. 2) Only provide links that you find in the document Files:-You are provided with a aboutTristan.docx which provides the Personal Information , Institution , Work experience Skills  Project Experience Key Achievements and About MeProcess:- Alwayws look at aboutTristan.docx ' + task,
          file: "file-id-here",
  
        }, {
          role: "user",
          content: task,
        }],
        temperature: 0.5,
        max_tokens: 40,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
      };
    
      try {
        const response = await fetch("https://api.openai.com/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + OPENAI_API_KEY, // Ensure your API key is correctly included
          },
          body: JSON.stringify(API_BODY)
        });
    
        if (!response.ok) { // Check if the response was ok (status in the range 200-299)
          console.error('API request failed with status', response.status);
          const errorInfo = await response.text(); // Attempt to read response text
          console.error('Failure response body:', errorInfo);
          return; // Exit the function or handle the error appropriately
        }
    
        const data = await response.json(); // Correctly await the parsing of the JSON
        if (data.choices && data.choices.length > 0) {
          const responseText = data.choices[0].message.content; // Assuming the response structure matches your expectations
          setOutput(responseText); 
          setTask('');
        
        } 
      } catch (error) {
        console.error('Error during API call:', error);
      }finally {
        setIsLoading(false);
      }
  
  
    }
  
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

<div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload File</button>
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
