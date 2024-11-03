 

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

   
  

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

     
    const emailData = {
      Host: "smtp.elasticemail.com",
       
      Username: process.env.REACT_APP_EMAIL_USERNAME,
      Password: process.env.REACT_APP_EMAIL_PASSWORD,
      To: process.env.REACT_APP_EMAIL_USERNAME,
      From: process.env.REACT_APP_EMAIL_USERNAME,
      Subject: "My portfolio notification",
      Body: `Message: ${formDetails.message}<br>Name: ${formDetails.firstName} ${formDetails.lastName}<br>Phone: ${formDetails.phone}<br>Email: ${formDetails.email}`
    };

    try {
      const response = await window.Email.send(emailData);
      setButtonText("Send");

      if (response === "OK") {
        setStatus({ success: true, message: "Message sent successfully" });
        setFormDetails(formInitialDetails);
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again later." });
      }
    } catch (error) {
      setStatus({ success: false, message: "Failed to send email. Please try again later." });
      console.error("Email send error:", error);
    }
  };

  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
    const contact = document.querySelector('.contact');

    const toggleDarkMode = () => {
      if (contact) {
        contact.classList.toggle('darkmode');
        if (contact.classList.contains('darkmode')) {
          localStorage.setItem('darkMode', 'enabled');
        } else {
          localStorage.setItem('darkMode', 'disabled');
        }
      } else {
        console.error('Contact element not found');
      }
    };

    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
      contact.classList.add('darkmode');
    }

    if (toggleButton) {
      toggleButton.addEventListener('click', toggleDarkMode);

      return () => {
        toggleButton.removeEventListener('click', toggleDarkMode);
      };
    } else {
      console.error('Toggle button not found');
    }
  }, []);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success ? "success" : "danger"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
