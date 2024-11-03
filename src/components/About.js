import React from 'react';
import { useEffect } from 'react';

export const About = () => {

  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
    const about = document.querySelector('.about');

    // Check if dark mode was previously enabled in localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';

    // Toggle the dark mode class and save the state in localStorage
    const toggleDarkMode = () => {
      if (about) {


        const isDark = about.classList.toggle('darkmode');
        if (isDark) {
          localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
        } else {
          localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
        }
      } else {
        console.error('about element not found');
      }
    };

    // Apply dark mode if it was enabled previously
    if (isDarkMode && about) {
      about.classList.add('darkmode');
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
    <section className='about' id='about'>
      <div className='about-container'>
        <h1>Experiences</h1>
        <div className='left'>
          <p>
            Collaborate with the development team to design,
            develop, and test web applications. Write clean, efficient,
            and maintainable JavaScript code. Assist in debugging and
            resolving software issues. Participate in code reviews and
            provide constructive feedback. Implement user interface
            components using modern JavaScript frameworks such as
            React, Angular, or Vue.js. Work on both front-end and
            back-end development tasks. Integrate APIs and third-party
            services into web applications.
          </p>

        </div>



        <button><span><a href='https://drive.google.com/file/d/1Tl5Y-ezc_yk1mmQauwGLlZWA6FZPBSt0/view?usp=drivesdk' download="Chetan_resume.pdf">
          Download CV</a></span> </button>

      </div>


    </section >
  )
}
