import React, {Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./love.css";
import Header from "../../components/Header";


const loveNote = () =>{
	    return (
         <div>
            <Row>
            <Header currentColor={"#D6EAF8"} />
            	<div className="container">

       			<Col size="md-12">

       			<h1 className="header">Love Notes</h1>

			<p className="text">.......Last but not least, my woman crush, my family,
			 my mother's twin sister daughter Kimberly Scott McDowell ...girl! I 
			 said classic,no froo,froo and nothing over the top...you delivered 
			 that and so much more for me!  I love you chic!(and the dream team)......</p> 
			 <p class="text">-Daphne (Savannah, GA)</p>

			<p className="text">Mrs. Kim showed up & showed out! Everything that I 
			envisioned she brought to life! She saw my vision & made it a reality!
			 Thanks so much for making my 30th birthday party a day to remember!
			 <strong>#KatrinasDirty30 #MasqueradeParty</strong></p>              
			 <p class="text">-Katrina (Savannah, GA)</p>

 
			<p className="text">Mrs. Kim did a fabulous job at creating something that
			 fit my personality perfectly!! She did a wonderful job with not only 
			 the decorations, but the food as well!! I couldn't have imagined a 
			 better way to celebrate my 24th birthday!! <strong>#CozyTeaParty #TeaAndConversations</strong></p>
			 <p class="text">-Kayla (Covington, GA)</p>


       		</Col>

       		</div>


       		</Row>
</div>
        );
	}

	export default loveNote;