 


import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/c-logo-transparent.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/github.svg';
 
import navIcon3 from '../assets/img/icons8-geeksforgeeks.svg';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
 


  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
  
    const toggleDarkMode = () => {
      document.body.classList.toggle('dark-mode');
      toggleButton.classList.toggle("active");
  
      // Save the current theme state in localStorage
      if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    };
  
    if (toggleButton) {
      // Add click event listener for toggling the theme
      toggleButton.addEventListener('click', toggleDarkMode);
  
      // Retrieve and apply the saved theme from localStorage on page load
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        toggleButton.classList.add('active'); // Optionally also make the button reflect the active theme
      }
  
      // Clean up the event listener on unmount
      return () => {
        toggleButton.removeEventListener('click', toggleDarkMode);
      };
    }
  }, []);
  
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img className="name-logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home"  className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#testimonial" className={activeLink === 'testimonial' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('testimonial')}>Testimonial</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/chetan-upadhyay-79981a241/" target="_blank"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/chetan09upadhyay/" target="_blank"><img className="inverted" src={navIcon2} alt="" /></a>
                <a href="https://www.geeksforgeeks.org/user/ucheta08q0/" target="_blank"><img className="inverted" src={navIcon3} alt="" /></a>

                <div id="toggle-button" title="light-mode enabled" className="box-icon"><i className="bi bi-moon-stars"></i></div>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
