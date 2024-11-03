

import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { useEffect } from "react";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }

  }







  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
    const skills = document.querySelector('.skill-bx');

    // Check if dark mode was previously enabled from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    const toggleDarkMode = () => {
      if (skills) {
        const isCurrentlyDark = skills.classList.toggle('dark-mode');
        if (isCurrentlyDark) {
          localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
        } else {
          localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
        }
      } else {
        console.error('skills element not found');
      }
    };

    // Apply dark mode if it was enabled previously
    if (isDarkMode) {
      skills.classList.add('dark-mode');
    }

    if (toggleButton) {
      toggleButton.addEventListener('click', toggleDarkMode);

      return () => {
        toggleButton.removeEventListener('click', toggleDarkMode);
      };
    } else {
      console.error('toggleButton not found');
    }
  }, []);

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As an ambitious Computer Science student, I possess a solid foundation in key technical areas such as Data Structures,
                HTML, CSS, JavaScript, Bootstrap, MongoDB, Node.js, and GitHub. My enthusiasm for technology, combined with practical
                experience, enables me to approach complex challenges with confidence and contribute meaningfully to any team or project.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img className="skills-img" src={meter1} alt="Image" />
                  <h5>HTML5</h5>
                </div>
                <div className="item">
                  <img className="skills-img" src={meter2} alt="Image" />
                  <h5>css</h5>
                </div>
                <div className="item">
                  <img className="skills-img" src={meter3} alt="Image" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img className="skills-img" src={meter1} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img className="skills-img" src={meter1} alt="Image" />
                  <h5>Mern Stack</h5>
                </div>
                <div className="item">
                  <img className="skills-img" src={meter1} alt="Image" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img className="skills-img" src={meter1} alt="Image" />
                  <h5>C++</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
