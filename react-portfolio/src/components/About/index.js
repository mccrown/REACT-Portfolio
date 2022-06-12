import React from 'react'; 
// import images from assets
import myImage from '../../assets/images/myimage.jpeg';

import { Col } from 'react-bootstrap';


function About() {
    return(
    <section className="title">
      
      <div className="row justify-content-center" id="about-container">       
      <Col lg={6} md={12}>
      <center><img src={myImage} className="my-image" alt="Conner-profile"/></center>
      <p class="name">Conner McCown</p>
      <p class="job">Full Stack Web Developer</p>
      <h2 class="education">a little about me</h2>
        <p>
        lorem ipsum

        <br></br>
        <br></br>
        lorem ipsum
        <br></br>
        <br></br>
         </p>
      </Col>

      </div>
    </section> 
)}
  
export default About;