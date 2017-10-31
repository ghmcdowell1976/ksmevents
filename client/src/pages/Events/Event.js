import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Header from "../../components/Header";
import "./event.css";


	const Event = () =>{
	    return (
        <div>
         <Header currentColor={"#EBDEF0"} />
        <Row>
        
           
       
            <Col size="md-12">
            <h1 class="header">Events</h1>
            <p class="text">Transformation Day: Masks, Leather and Lace - A Sassy Girls Night In</p>
               <img class="event" src="./images/DSC_0171.jpg" height="864px" width="576.115px" position="relative" />
            

        
            <p class="text">Jones' Sweet Little Gender Neutral Baby Shower</p>
               <img class="event" src="./images/J+on+door+1.jpg" height="864px" width="576.11px" />


            <p class="text">Frank & Daphne's Wedding</p>

            <p class="text">A Cozy Tea Party</p>

            <p class="text">Cameron's Carnival 1st Birthday</p>

            <p class="text">Birds of a Feather Birthday Celebration</p>

            <p class="text">Masquerade 30th Birthday</p>

            <p class="text">A Rustic Engagement Party</p>
            
            </Col>
        </Row>
      </div>
    );
	}

export default Event;

