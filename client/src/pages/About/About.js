import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import "./About.css";
import Header from "../../components/Header";

	const About = () =>{
	    return (<div>
            
			<Row>
			<Header currentColor={"#EBDEF0"} />
                  <div className="container">
       		<Col size="md-6">
       		
       		<img id="KSM" src="./images/KSM.jpg" height="450px" width="50%" />
       		
       		</Col>
            <Col size="md-6">

            <div className="About">
            <h1 className="header">Meet the Team</h1>
            <p className="text">A graduate of Georgia Southern University with a Bachelor of Busines
            Administration Degree in Finance, Kimberly S. McDowell knows all about making
            the most of your money.</p>

            <p className="text">Her years of experience in the Hospitality industry have fueled her desire
            to exceed customer satisfaction.  She has also perfected the skill of getting the 
            "biggest bang for your buck" without breaking the bank or compromising quality.</p>

            <p className="text">All that being said, she wouldn't be half as successful if it weren't for the hard
            work and dedication of her husband George, two sons, Georgie and Isaac, sister Donnica
            Scott, and her niece Nygeria Grimes helping with every venture.  And Last but not least her aunt
            Jessica cheering and advising from the sidelines.</p>
            </div>
            
            </Col>
            </div>
        </Row>

        <Row>
         <div className="container">
          <Col size="md-6">
            <img id="DLS" src="./images/DLS.jpg" />
            <h4 id="title">Donnica Scott, Design Assistant</h4>
          </Col>
          <Col size="md-6">
          <img id="NAG" src="./images/NAG.jpg" height="350px" width="200px" />
          <h4 id="title">Nygeria Grimes, Design Assistant</h4>
          </Col>
          </div>
          </Row>
      </div>
    );
	}

export default About;
