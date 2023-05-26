import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assests/images/about-us.jpg";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>Why know about algorithms?</h2>
              <p>
              By understanding the real-life use cases of algorithms and data structures, 
              developers can design and implement more efficient and effective software solutions. 
              They can optimize algorithms and data structures to solve specific problems,
               improve performance, and reduce costs. Thus knowledge of real-world applications can help developers 
               identify new opportunities
              for innovation and develop new products and services.
              </p>

    
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
