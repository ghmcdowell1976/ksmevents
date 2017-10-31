import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import Image from "../../components/Image";
import Application from "../../components/Image";
import "./paper.css"
import Header from "../../components/Header";
import ImageLoad from "../../components/ImageLoad";

const paperFetish = () =>{
   	return (
      <div>
        <Row>
          <Header currentColor={"pink"} Image={"event.jpg"}/>
          
          <Col size="md-12">
            <h1 className="header">Paper Fetish</h1>
            <p className="text">My love affair with paper quietly began a long time ago.  This part of the celebration
             sets the stage for what your guests can expect while spending this time with you. We're 
              very excited to help you coordinate a beautiful event and invitations to tell your story.</p>
          </Col>
        </Row>
        
          <div>
            <ImageLoad
              page={"paperFetish"}
            />
          </div>
        
      </div>
    );
	}

export default paperFetish;
