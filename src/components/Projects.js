import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Restaurant-image.png";
import projImg2 from "../assets/img/todo-list.jpg";

import projImg3 from "../assets/img/project-3.jpg";
import projImg4 from "../assets/img/project-4.jpg";
import projImg5 from "../assets/img/weather-img.jfif";
import projImg6 from "../assets/img/project-6.png";
import projImg7 from "../assets/img/pro-7.jfif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Restaurant",
      description: "Design & Development",
      imgUrl: projImg1,
      hrefUrl: "https://restaurant-jet-rho.vercel.app/"
    },
    {
      title: "Todo-List",
      description: "Add your daily needs",
      imgUrl: projImg2,
      hrefUrl: "https://to-do-list-xi-snowy.vercel.app/"
    },
    {
      title: "Calculator",
      description: "Welcome to calculate me",
      imgUrl: projImg3,
      hrefUrl: "https://calculator-snowy-gamma.vercel.app/"
    },
    {
      title: "Text-Utilies",
      description: "Convert,remove & trim",
      imgUrl: projImg4,
      hrefUrl: "https://textutilites-github-io-uyyc.vercel.app/"


    },
    {
      title: "Weather Vue app",
      description: "Lets See",
      imgUrl: projImg5,
      hrefUrl: "https://weather-vue-two-lac.vercel.app/"
    },
    {
      title: "Currency Convertor",
      description: "lets convert currency",
      imgUrl: projImg6,
      hrefUrl: "https://currency-converter-kappa-mauve.vercel.app/"

    },
    {
      title: "Tic-tac-toe",
      description: "Lets play",
      imgUrl: projImg7,
      hrefUrl: "https://tictoktoe-github-io.vercel.app/"

    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
            
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Being a lead developer, revamped the site to a highly responsive, and interactive website. Created new features and pages. Worked as a team with product manager and ux designer.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}