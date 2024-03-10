import React from 'react';
import './BlogsGrid.css'; // Make sure to import the CSS file
import vision from './vision.jpg'
import meta from './meta.webp';
import openai from './openai.jpg';
function BlogGrid() {
    


  return (



    <div class="blogcontainer">

  <div class="blogcard">
    <a href="https://medium.com/@tristanhancock_99866/gpt-4-api-powering-ai-innovations-and-transformation-586022a707fe">
    <div class="blogcard__header">
      <img src={openai} alt="blogcard__image" class="blogcard__image" width="600"/>
    </div>
    <div class="blogcard__body">
      <h4>GPT-4 API: Powering AI Innovations and Transformation</h4>
    </div>
    </a>
  </div>


  <div class="blogcard">
    <a href="https://medium.com/@tristanhancock_99866/apple-vision-pro-unleashing-the-future-of-wearable-technology-dd5bd4208e78">
    <div class="blogcard__header">
      <img src={vision} alt="blogcard__image" class="blogcard__image" width="600" />
    </div>
    <div class="blogcard__body">
      <h4>Apple Vision Pro: Unleashing the Future of Wearable Technology</h4>
    </div>
    </a>
  </div>


  <div class="blogcard">
    <a href="https://medium.com/@tristanhancock_99866/meta-announces-the-meta-quest-3-heres-what-we-know-224850948de2">
    <div class="blogcard__header">
      <img src={meta} alt="blogcard__image" class="blogcard__image" width="600"/>
    </div>
    <div class="blogcard__body">
      <h4>Meta Announces the Meta Quest 3: Here’s What We Know </h4>
    </div>
    </a>
    
  </div>

</div>

   
  );
}

export default BlogGrid;
