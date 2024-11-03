



import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const [sendStatus, setSendStatus] = useState(null);

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || email.indexOf("@") === -1) {
      alert("Email are mandatory");
      return;
    }

    try {
      const response = await window.Email.send({
        Host: "smtp.elasticemail.com",
        Username: process.env.REACT_APP_EMAIL_USERNAME,
        Password: process.env.REACT_APP_EMAIL_PASSWORD,
        To: process.env.REACT_APP_EMAIL_USERNAME,
        From: process.env.REACT_APP_EMAIL_USERNAME,
        Subject: "Newsletter Subscription",
        Body: `New subscription request from: ${email}`
      });

      if (response === "OK") {
        setSendStatus({ success: true, message: "The email was sent successfully" });
        clearFields();
      } else {
        setSendStatus({ success: false, message: "Email sending failed. Please try again." });
      }
    } catch (error) {
      setSendStatus({ success: false, message: "Failed to send email. Please try again later." });
      console.error("Email send error:", error);
    }
  };

  const clearFields = () => {
    setEmail('');
  };

  useEffect(() => {
    const toggleButton = document.getElementById('toggle-button');
    const newsletter = document.querySelector('.newsletter-bx');

    const toggleDarkMode = () => {
      if (newsletter) {
        newsletter.classList.toggle('darkmode');
        localStorage.setItem('darkMode', newsletter.classList.contains('darkmode') ? 'enabled' : 'disabled');
      } else {
        console.error('Newsletter element not found');
      }
    };

    const darkModePreference = localStorage.getItem('darkMode');
    if (darkModePreference === 'enabled') {
      newsletter.classList.add('darkmode');
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
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to me<br />& Never miss latest updates</h3>
            {sendStatus && sendStatus.success === false && <Alert variant="danger">{sendStatus.message}</Alert>}
            {sendStatus && sendStatus.success === true && <Alert variant="success">{sendStatus.message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
