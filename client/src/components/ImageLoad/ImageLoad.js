import React, { Component } from "react";
import paperFetishDB from "./db/paperFetish.json";
import { Col, Row, Container } from "../../components/Grid";
import './ImageLoad.css';

const ImageLoad = (props) =>(
	<div className="container">
	<Row>
		
		{props.page == 'paperFetish' ? paperFetishDB.map(x=> <img src={x.image} className="grid" width="250px" height="250px" justify-content="space-between" />) : <h1>Error</h1>}
		
	</Row>	
	</div>)

export default ImageLoad;