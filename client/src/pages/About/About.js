import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";
import Header from "../../components/Header";

	const About = () =>{
	    return (<div>
            
			<Row>
			<Header currentColor={"#EBDEF0"} />
       		<Col size="md-6">
       		
       		<img id="KSM" src="./images/KSM.jpg" height="450px" width="50%"  position="absolute" />
       		
       		</Col>
            <Col size="md-6">

            <div class="About">
            <h1 class="header">About our Team</h1>
            <p class="text">A graduate of Georgia Southern University with a Bachelor of Busines
            Administration Degree in Finance, Kimberly S. McDowell knows all about making
            the most of your money.</p>

            <p class="text">Her years of experience in the Hospitality industry have fueled her desire
            to exceed customer satisfaction.  She has also perfected the skill of getting the 
            "biggest bang for your buck" without breaking the bank or compromising quality.</p>

            <p class="text">All that being said, she wouldn't be half as successful if it weren't for the hard
            work and dedication of her husband George, two sons, Georgie and Isaac, sister Donnica
            Scott, and her niece Nygeria Grimes helping with every venture.  And Last but not least her aunt
            Jessica cheering and advising from the sidelines.</p>
            </div>
            
            </Col>
        </Row>
      </div>
    );
	}

export default About;
