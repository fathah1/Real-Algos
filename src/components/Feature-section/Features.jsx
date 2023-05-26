import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: "Quick Learning",
    desc: "Accelerate your understanding and mastery of algorithms and data structures with our concise and well-structured tutorials, enabling you to grasp complex concepts efficiently.!",
    icon: "ri-draft-line",
  },

  {
    title: "Comprehensive Resources:",
    desc: "Access a vast collection of in-depth articles, tutorials, case studies, and examples that cover a wide range of algorithms and data structures, ensuring you have all the necessary materials to deepen your understanding and explore different applications!",
    icon: "ri-discuss-line",
  },

  {
    title: "Comprehensive Content",
    desc: "Get an access to a vast library of comprehensive content that covers various algorithms and data structures with real-world examples.!",
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
