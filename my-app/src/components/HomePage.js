import React from 'react';
import cateLogo from "../cate.png"
import '../styles/HomePage.css'
import Typewriter from "typewriter-effect";


const HomePage = () => {
  return (
    <div class="container">
      <div class="button-container">
        <a href="https://drive.google.com/file/d/1yc1FUO9EBAPg2jzzUTgCRWqYgxtGQdCm/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
        <a href="https://www.linkedin.com/in/caitlinhenning7/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://endthecycleatum.org/high-school-computer-sc" target="_blank" rel="noopener noreferrer">End the Cycle</a>
        <a href="https://dl.acm.org/doi/fullHtml/10.1145/3563657.3596004" target="_blank" rel="noopener noreferrer">Research Paper</a>
        <a href="https://www.figma.com/file/wXkJGzhP5xpJ2tmtIwhYF9/UI%2FUX-Wireframe?type=design&node-id=0-1&mode=design&t=SkDe1gFZGKpN1rxP-0" target="_blank" rel="noopener noreferrer">Figma Wireframe</a>
        <a href="https://github.com/caitlinhenning/reminders" target="_blank" rel="noopener noreferrer">Calendar Project</a>
      </div>
      <div class="image-container">
        <div class="typewriter">
          <Typewriter
          options={{loop: true,}}
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi, I'm Caitlin.")
                .pauseFor(4000)
                .deleteAll()
                .typeString("Welcome to my site.")
                .pauseFor(4000)
                .start();
            }}
          />
        </div>
        <img class="logo" src={cateLogo} alt="logo"/>
      </div>
    </div>
  );
}

export default HomePage;