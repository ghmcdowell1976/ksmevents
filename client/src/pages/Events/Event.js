import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Header from "../../components/Header";
import "./event.css";


	const Event = () =>{
	    return (
        <div>  
        
            
          
              <Row>
              <Header currentColor={"#EBDEF0"} />
                <Col size="md-12">
                   <h1 className="header">Events</h1>
                </Col>
              </Row>
               <div className="container">
              <Row>
                  <Col size="md-6">
                      <h4 className="title">Transformation Day: Masks, Leather and Lace - A Sassy Girls Night In</h4>
                      <img className="event" src="images/DSC_0171.jpg" height="864px" width="576.115px" />
            

        
                      <h4 className="title">Jones' Sweet Little Gender Neutral Baby Shower</h4>
                     <img className="event" src="images/J+on+door+1.jpg" height="864px" width="576.11px" />


                      <h4 className="title">Frank & Daphne's Wedding</h4>
                     <img className="event" src="images/Perfect+Ceremony+View.jpg" height="864px" width="576.11px" />

                      <h4 className="title">A Cozy Tea Party</h4>
                      <img className="event" src="images/FB_IMG_1454082996862[1].jpg" height="864px" width="576.11px" />
                  </Col>
                  <Col size="md-6">
             

            <h4 className="title">Cameron's Carnival 1st Birthday</h4>
              <img className="event" src="images/2015-06-22_12.55.36.jpg" height="864px" width="576.11px" />
              
            <h4 className="title">Birds of a Feather Birthday Celebration</h4>
              <img className="event" src="images/Birdfeathers.jpg" height="864px" width="576.11px" />

            <h4 className="title">Masquerade 30th Birthday</h4>
              <img className="event" src="images/Welcome+with+card.jpg" height="864px" width="576.11px" />
              

            <h4 className="title">A Rustic Engagement Party</h4>
              <img className="event" src="images/RusticEngage.jpg" height="864px" width="576.11px" />
            
            </Col>
            </Row>

              </div>
        
      </div>
    );
	}

export default Event;

