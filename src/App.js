import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import TopBar from './TopBar';
import htmlImage from './HTML.png';
import nodelogo from './node.png';
import javascript from './javascript.png';
import python from './python.png';
import './tailwind.css';
import './thirdlayer.css';
import git from './github.png';
import tris from './TristanPfp.jpeg';
import openai from './openai.jpg';
import './4thlayer.css';
import vision from './vision.jpg'
import meta from './meta.webp';
import './titles.css';
import './footer.css';
import linkden from './linkden.png';
import x from './X.jpg'
import cv from './TristanHancock_CV.pdf';
import './projects.css'
import maxfocus from './logotrans.png'
import store from './store2.png';
function App() {
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

<div className="pfp">


  <img src={tris} className="imgpfp"></img>
</div>


<div className="introinfo">
  

<p>Tristan Hancock is software Engineer graduating from NMIMS Mukesh Patel School. Tristan works with Web Development framworks such as React, ReactNative and nodeJS to name a few As well as working with python automation and machine learning.</p>
<a href="https://www.nmims.edu/" target="_blank" rel="noopener noreferrer"> 
<img src='./nmims.jpg'  className="nmims-logo"/> {/* Image added here */}
</a>
<a href={cv} download="Tristan_Hancock_CV.pdf" className="download-cv-button">
  Download CV
</a>

</div>
</div>
<hr className="borders" />


<button>
Skills
</button>

<div id="skills" className="secondlayer">






<div class="card">
  <div class="card-content">
    <div class="card-top">
      <span class="card-title">    </span>
    </div>
    <div class="card-bottom">
      
    </div>
  </div>
  <div class="card-image"> 
  <img src={logo} className="htmllogo"/> 

  </div>

</div>


<div class="card">
  <div class="card-content">
    <div class="card-top">
      <span class="card-title">   </span>
    </div>
    <div class="card-bottom">
    </div>
  </div>
  <div class="card-image">
  <img src={javascript} className="htmllogo" alt="HTML Logo" />
  </div>
</div>

<div class="card">
  <div class="card-content">
    <div class="card-top">
      <span class="card-title">   </span>
    </div>
    <div class="card-bottom">
    </div>
  </div>
  <div class="card-image">
  <img src={nodelogo} className="htmllogo" alt="HTML Logo" />
  </div>
</div>


<div class="card">
  <div class="card-content">
    <div class="card-top">
      <span class="card-title">   </span>
    </div>
    <div class="card-bottom">
    </div>
  </div>
  <div class="card-image">
  <img src={htmlImage} className="htmllogo" alt="HTML Logo" />
  </div>
</div>

<div class="card">
  <div class="card-content">
    <div class="card-top">
      <span class="card-title">   </span>
    </div>
    <div class="card-bottom">
    </div>
  </div>
  <div class="card-image">
  <img src={python} className="htmllogo" alt="HTML Logo" />
  </div>
</div>


</div>

<hr className="borders" />

<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Projects</span>
</button>


<div id="projects" className="thirdlayer">

<a href='https://github.com/Tristan-Hancock/Max-Focus-AI' target="_blank" rel="noopener noreferrer" className='cardLink'>

<div class="card2">
<img src={maxfocus}  /> 
  <div class="card__content">
    <p class="card__title">Max Focus AI</p>
    <p class="card__description">Max Focus AI is a Productive Coach.Max Focus AI allows you to prioritize tasks giving you a detailed schedule and timing for all that you have to get done . It uses the Open AI Assistant API to give you the most optimized solution to all your tasks that you have to complete.As well as add the tasks to a google callendar</p>
  </div>
</div>

    </a>



    <a href='https://github.com/Tristan-Hancock/FetchAIDeepLearningHackathonFinals' target="_blank" rel="noopener noreferrer" className='cardLink'>
     <div class="card2">
     <img src={store}  /> 
  <div class="card__content">
    <p class="card__title">Hackathon,AI Agent Food ordering system</p>
    <p class="card__description">Cyber Cypher Hackathon hosted by Taqneeq.A grocery store assistant for a customer to place orders by chatting with an AI assistant
    </p>
    <a href='https://www.linkedin.com/feed/update/urn:li:activity:7161984638498791424/' target="_blank" rel="noopener noreferrer" className='cardDescription'>Demo</a>
  </div>
</div>
    </a>

    <a href='https://github.com/Tristan-Hancock/Handwriting-Detection-MachineLearning-image-processing' target="_blank" rel="noopener noreferrer" className='cardLink'>
      <div class="card2">
      <img src={maxfocus}  /> 
  <div class="card__content">
    <p class="card__title">Currency Rate Explorer</p>
    <p class="card__description">The project aims to deliver a sleek and user-friendly dashboard interface, leveraging the powerful React.js framework to provide real-time foreign exchange (Forex) rate information. By fetching data from the Forex Rate API</p>
  </div>
</div>
    </a>
    <a href='https://github.com/Tristan-Hancock/FetchAIDeepLearningHackathonFinals' target="_blank" rel="noopener noreferrer" className='cardLink'>
    <div class="card2">
    <img src={maxfocus}  /> 
  <div class="card__content">
    <p class="card__title">Handwriting Detection</p>
    <p class="card__description">This project explores the application of Machine Learning (ML) techniques for handwriting recognition, focusing on extracting patterns from large datasets to recognize handwritten characters. It examines various methodologies, including Convolutional Neural Networks (CNN) and zoning techniques, to achieve this goal.</p>
    <a href='https://docs.google.com/document/d/15l32yms6_DM4oKca0_CdWvuxqRAH2XXrlf1lJQ28SWU/edit?usp=sharing' target="_blank" rel="noopener noreferrer" className='cardDescription'>Demo</a>

  </div>
</div>
    </a>
    


</div>


<hr className="borders" />
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">Blogs</span>
</button>

<div id="blogs" className="fourthlayer">



<div class="container">

  <div class="card">
    <a href="https://medium.com/@tristanhancock_99866/gpt-4-api-powering-ai-innovations-and-transformation-586022a707fe">
    <div class="card__header">
      <img src={openai} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>GPT-4 API: Powering AI Innovations and Transformation</h4>
    </div>
    </a>
  </div>


  <div class="card">
    <a href="https://medium.com/@tristanhancock_99866/apple-vision-pro-unleashing-the-future-of-wearable-technology-dd5bd4208e78">
    <div class="card__header">
      <img src={vision} alt="card__image" class="card__image" width="600" />
    </div>
    <div class="card__body">
      <h4>Apple Vision Pro: Unleashing the Future of Wearable Technology</h4>
    </div>
    </a>
  </div>


  <div class="card">
    <a href="https://medium.com/@tristanhancock_99866/meta-announces-the-meta-quest-3-heres-what-we-know-224850948de2">
    <div class="card__header">
      <img src={meta} alt="card__image" class="card__image" width="600"/>
    </div>
    <div class="card__body">
      <h4>Meta Announces the Meta Quest 3: Here’s What We Know </h4>
    </div>
    </a>
  </div>


  
</div>


</div>


<hr className="borders" />









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
}

export default App;
