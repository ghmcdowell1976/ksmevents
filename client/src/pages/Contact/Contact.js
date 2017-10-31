import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn }from "../../components/Form";
import "./contact.css";
import Header from "../../components/Header";
import API from "../../utils/API";



class Contact extends Component {
  state = {
    contacts: [],
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  };

    handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName && this.state.lastName && this.state.email) {
      API.saveContacts({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        subject: this.state.subject,
        message: this.state.message

      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };


 
    render() {
	    return (
        <div>        
          <Row>
            <Header currentColor={"pink"} />
       <div className="container">
      <h1 class="header">Contact</h1>
      <p class="text" id="line">Interested in our services?  Leave me a message here and I'll get back to you as soon as possible! I can't wait to talk to you!</p>
        	
      	
      		<Col size="md-6" class="col-pink">

              <img id="KSM" src="./images/contact.jpg" height="450px" width="50%"  position="absolute" />

      		</Col>


      		<Col size="md-6">
          <Row>
			     <label class="caption"><b>First Name</b>
    			   <input id="fName-field" type="text" placeholder="Enter First Name" name="firstName" required maxlength="30" />
    		  </label>

    		<label class="caption"><b>Last Name</b>
    			<input id="lName-field" type="text" placeholder="Enter Last Name" name="lastName" required maxlength="30" width="203.17" height="42" />
    		</label>
        </Row>

        <Row>
    		<label class="caption"><b>Email          </b>
    			<input id="email-field" type="text" placeholder="Enter Email" name="email" required maxlength="60" />
    		</label>
        </Row>

        <Row>
    		<label class="caption"><b>Subject</b>
    			<input id="subject-field" type="text" placeholder="Subject" name="subject" maxlength="30" />
    		</label>
        </Row>

        <Row>
    		<label class="caption"><b>Message</b>
    			<TextArea id="msg-field" type="text" placeholder="Message" name="message" required />
    		</label>
        </Row>

        <Row>
        <FormBtn>
        <button onClick={this.handleFormSubmit}>Submit</button>
        </FormBtn>
        </Row>
        </Col>
        </div>
    	</Row>



    	

    	
    	
         
     </div>
    );
      
	   }
   }



export default Contact;