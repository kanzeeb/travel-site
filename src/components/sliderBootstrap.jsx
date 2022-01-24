import React, { Component } from 'react';  
import Carousel from 'react-bootstrap/Carousel';  
class BootstrapCarousel extends Component {  
        render() {    
            return (  
                <Carousel fade={true} interval={8000} touch={true}>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/ZRq3j4tN/img-home1.webp"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>Sunt in culpa qui officia deserunt mollit anim</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/sx71GSGL/img-home3.webp"
                    alt="Second slide"
                  />
              
                  <Carousel.Caption>
                    <h3>Fringilla est ullamcorper eget</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/yd0JvtgB/img-home2.jpg"
                    alt="Third slide"
                  />
              
                  <Carousel.Caption>
                    <h3>Magna fringilla urna porttitor rhoncus</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/yYZt9sWp/img-home4.webp"
                    alt="Fourth slide"
                  />
              
                  <Carousel.Caption>
                    <h3>Pretium aenean pharetra magna ac placerat vestibulum</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="https://i.postimg.cc/K8hVDwMG/img-home5.webp"
                    alt="Fifth slide"
                  />
              
                  <Carousel.Caption>
                    <h3>sit amet nulla facilisi morbi tempus</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>      
            );  
        }  
};  
  
export default BootstrapCarousel;  