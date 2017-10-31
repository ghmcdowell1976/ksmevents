import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import "./services.css";
import Header from "../../components/Header";

	const Services = () =>{
	    return (
        <div>
            <Row>
                <Header currentColor={"#D6EAF8"} />
            <div className="container">   
            <Col size="md-12">
                                        <h1 class="header">Services</h1>

            <p class="text">From full service celebration planning to digital invitations,
             our services are designed with the customer in mind. If you need
             just a little help or a whole lot, we're ready to create a package
             that will fit your specific needs..</p>

                                        <h3>Paper Goods</h3>

            <p class="text"><strong>Simple/Flat Invitations</strong> - Includes Design and Printing - $1 each</p>

            <p class="text"><strong>Custom Invitations</strong> - Includes Design, Printing and Assembly- $2-4 each</p>

            <p class="text"><strong>Programs</strong> - Includes Design, Printing and Assembly- $2 each</p>

            <p class="text"><strong>Menus, Thank You cards, Favor labels</strong> - Includes Design, Printing and Assembly- $1 each</p>

                                        <h3>Party in a Box</h3>

            <p class="text">The “Party in a Box” service is for the do-it-yourselfer that needs just a little help 
            but doesn’t mind rolling up their sleeves to do the work.   This fun little box is sold in 
            two sizes, small and large.  The Small Party consists of: 6 Tablecloths, 6 Centerpieces, 30
            Favor tags, 10 Food labels, 5 Small signs, and 1 other focal decorative piece. The Large Party
            consists of: 10 Tablecloths, 10 Centerpieces, 80 Favor tags, 10 Food labels, 10 Small signs, 
            and 2 other focal decorative pieces.</p>

                      <p class="text"><strong>Small Party - $200                            Large Party - $400</strong></p>
            


                                        <h3>Special Events</h3>
            <p class="text">We love creating a magical atmosphere for life's celebratory moments! We can help make your
             Birthday, Anniversary, Bridal Shower, Baby Shower, or "just because you're bored" event come 
             to life!  The magic happens with an investment beginning at $600 for events of less than 50 
             people.  Events greater than 50 people begin at $800.</p>

                                        <strong>DAY OF HOSTESS</strong>

            <p class="text">This service allows you to actually participate and enjoy your event while we greet your 
             guests and facilitate any games or other activities you want to occur during the function.  
             Investments for a day of hostess begin at $200.</p>


                                        <h3>Weddings</h3>

                                  <strong>DAY OF WEDDING COORDINATION</strong>

            <p class="text">Day Of Wedding Coordination is available to put the bride at ease. In this service, we will
             follow the day of plans with seamless execution.  Investments for day of wedding coordination
             begin at $300.</p>

                                        <strong>DESIGN & DECOR ONLY</strong>

            <p class="text">Our design & decor services are included in our full wedding coordination package but we do 
             offer design & decor as a stand-alone service. The cost of this service is based solely on the
             customer's budget so we can explore options as expensive or as frugal as your taste.  Investments
             for wedding design & decor begin at $1200.</p>

                                        <strong>FULL WEDDING COORDINATION</strong>

            <p class="text">The Full wedding coordination service includes day of wedding coordination, design & decor, 
            and we'll help you find a stunning location, florist, stationary, guest favors,  baker, entertainment 
            and other vendors needed to make your day an epic event. Investments for full wedding coordination begin at $2000.</p>

            </Col>
            </div>
        </Row>
      </div>
    );
	}

export default Services;
