import React from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import "./welcome.css";
import Header from "../../components/Header";

	const Welcome = () => {
	    return (<div>
        <Row>
    	   <Header currentColor={"pink"} Image={"event.jpg"} />
    	       
      
                   
             <div className="container">


          <Col size="md-6" className="welcome" >
            <img id="decor" src="./event.jpg" height="400px" width="50%" />
            
           
          </Col>
          
           <Col size="md-6" className="welcome">
            
              <h1 class="header">Welcome to Kimberly S. McDowell Event Planning & Design</h1>
            
            <p class="text">At Kimberly S. McDowell Event Planning & Design, we are focused on providing 
            	quality services with the highest levels of customer satisfaction. We know that
            	each event like your own unique fingerprint, is exclusive just to you, and we do 
            	everything we can to not only meet, but exceed your expectations. </p>

            <p class="text">Realizing that life goes on, well after the big event, we are happy to create an 
               event to fit every personality, occasion, and budget.</p>

            <p class="text">Please browse our website and if you have questions or concerns, don’t hesitate to   
               contact us. Be sure and check back periodically for updates and special offers. Remember,
               at Kimberly S. McDowell Event Planning & Design we really do make dreams come true.</p>
            
            
          </Col>
          </div>
        </Row>
      </div>
    	
    );
  }


export default Welcome;