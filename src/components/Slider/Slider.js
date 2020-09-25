import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import './Slider.css';

// This is the slider that is visible on the main page

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

const Slider = () => (

  // <Row>
  //   <Col md="6" className="mx-auto">
  <div className="Slider">
      
      <UncontrolledCarousel items={items} />
      
  </div>    
  //   </Col>
  // </Row>
);

export default Slider;