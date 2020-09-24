import React from "react";
import { UncontrolledCarousel, Row, Col } from "reactstrap";

const items = [
  {
    src: require('../../assets/Image1.jpg'),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require('../../assets/Image2.jpg'),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require('../../assets/Image3.png'),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: require('../../assets/Image4.png'),
    altText: "Slide 4",
    caption: "",
    header: "",
    key: "4",
  }
];

const Carausel = () => (
  <Row>
    <Col md="8" className="mx-auto">
      <UncontrolledCarousel items={items} />
    </Col>
  </Row>
);

export default Carausel;