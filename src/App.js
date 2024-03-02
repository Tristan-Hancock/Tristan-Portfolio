import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import TopBar from './TopBar';
import htmlImage from './HTML.png';
import nodelogo from './node.png';
import javascript from './javascript.png';
import python from './python.png';
function App() {
  return (
    <div className="App">
      
      <header className="App-header">
     <TopBar />
   
      
      </header>

<div className="firstlayer"> 
<div className="intro">
  

<h1>Hi,Im Tristan </h1>
<h1>A Software Engineer</h1> 

</div>
<div className="introinfo">
  

<p>I am a BTech student at NMIMS University’s Mukesh Patel School of Technology Management and Engineering, with a profound aspiration for a versatile career spanning various technical and non-technical roles. My journey has been shaped by a strong educational foundation and hands-on experience in the tech industry.</p>
<a href="https://www.nmims.edu/" target="_blank" rel="noopener noreferrer"> 
<img src='./nmims.jpg'  className="nmims-logo"/> {/* Image added here */}
</a>
</div>
</div>
<hr className="borders" />
<button>
  <span class="transition"></span>
  <span class="gradient"></span>
  <span class="label">My Skills</span>
</button>

<div className="secondlayer">




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

<div className="thirdlayer">







</div>



<footer>




</footer>
    </div>
  );
}

export default App;
