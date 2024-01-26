import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import xraydiff from "../../Assets/Projects/x-ray-diff.png";

import todolist from "../../Assets/Projects/to-do-list.png";
import forum from "../../Assets/Projects/forum.jpg";

import movierecommomendation from "../../Assets/Projects/movie-recomm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={forum}
              isBlog={false}
              title="Forum-Webiste"
              description="A forum is a place, situation, or group in which people exchange ideas and discuss issues, especially important public issues. Members of the council agreed that was an important forum for discussion."
              ghLink="https://github.com/kaminisingh1122/Forum"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movierecommomendation}
              isBlog={false}
              title="Movie-Recommendation"
              description="A movie based recommender system is a software tool that suggests movies to users based on their personal preferences."
              ghLink="https://github.com/kaminisingh1122/Movie-Recommendation"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todolist}
              isBlog={false}
              title="To-Do-List"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local StoragThey list everything that you have to do, with the most important tasks at the top of the list, and the least important tasks at the bottom."
              ghLink="https://github.com/kaminisingh1122/ToDoLists"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xraydiff}
              isBlog={false}
              title="Determination-of-Crystal-Structure-using-power-X-ray-Diffraction"
              description=" X-ray diffraction is the scattering of x-rays by atoms in the crystal lattice. The scattering produces a distinctive pattern, a diffraction pattern, characteristic of the atom arrangement in the crystal lattice."
              ghLink="https://github.com/kaminisingh1122/Determination-of-Crystal-Structure-using-power-X-ray-Diffraction"
              
            />
          </Col>

          

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
