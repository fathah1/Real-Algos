import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assests/images/web-design.png";
import courseImg02 from "../../assests/images/kids-learning.png";
import courseImg03 from "../../assests/images/seo.png";
import courseImg04 from "../../assests/images/ui-ux.png";
import FreeCourseCard from "./FreeCourseCard";

import "./free-course.css";

const freeCourseData = [
  {
    id: "01",
    title: "Binary Search Algorithms",
    imgUrl: courseImg01,
    students: 5.3,
    rating: 1.7,
  },
  {
    id: "02",
    title: "Breadth First Search Algorithm",
    imgUrl: courseImg02,
  },

  {
    id: "03",
    title: "Stacks",
    imgUrl: courseImg03,
  },

  {
    id: "04",
    title: "Arrays",
    imgUrl: courseImg04,
  },
];

const FreeCourse = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Some Algorithms and Data Structures</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <FreeCourseCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FreeCourse;
