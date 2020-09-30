import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import './Slider.css';

// This is the slider that is visible on the main page

const items = [
  {
    src: require('../../assets/Image1.jpg'),
    altText: "Image 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require('../../assets/Image2.jpg'),
    altText: "Image 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require('../../assets/Image3.jpg'),
    altText: "Image 3",
    caption: "",
    header: "",
    key: "3",
  },
  {
    src: require('../../assets/Image4.jpg'),
    altText: "Image 4",
    caption: "",
    header: "",
    key: "4",
  },
  {
    src: require('../../assets/Image5.jpg'),
    altText: "Image 5",
    caption: "",
    header: "",
    key: "5",
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