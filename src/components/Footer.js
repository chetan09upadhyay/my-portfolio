import { Container, Row, Col } from "react-bootstrap";
import { useEffect } from "react";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/c-logo-transparent.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/leetcode.svg";
import navIcon3 from "../assets/img/icons8-geeksforgeeks.svg";

export const Footer = () => {
  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
    const footer = document.querySelector('.footer');
  
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
  
    const toggleDarkMode = () => {
      if (footer) {
        const isDark = footer.classList.toggle('darkmode');
        if (isDark) {
          localStorage.setItem('darkMode', 'enabled');  
        } else {
          localStorage.setItem('darkMode', 'disabled');  
        }
      } else {
        console.error('footer element not found');
      }
    };
  
    // Apply dark mode if it was enabled previously
    if (isDarkMode && footer) {
      footer.classList.add('darkmode');
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
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img className="name_logo" src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/chetan-upadhyay-79981a241/" target="_blank"><img src={navIcon1} alt="Icon" title="Linkedin"/></a>
              <a href="https://leetcode.com/u/uchetan489/" target="_blank"><img className="inverted" src={navIcon2} alt="Icon" title="LeetCode" /></a>
              <a href="https://www.geeksforgeeks.org/user/ucheta08q0/" target="_blank"><img className="inverted" src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}