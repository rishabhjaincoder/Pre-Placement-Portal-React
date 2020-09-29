import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import './Slider.css';

// This is the slider that is visible on the main page

const items = [
  {
    src: require('../../assets/slide1.jpg'),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require('../../assets/slide2.jpg'),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require('../../assets/slide3.jpg'),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: require('../../assets/slide4.jpg'),
    altText: "Slide 4",
    caption: "",
    header: "",
    key: "4",
  }
];

const Slider = () => (

  // <Row>
  //   <Col md="6" className="mx-auto">
  <div className="slider">  
    <UncontrolledCarousel items={items} />  
  </div>    
  //   </Col>
  // </Row>
);

export default Slider;