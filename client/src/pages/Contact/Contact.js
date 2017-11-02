import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn }from "../../components/Form";
import "./contact.css";
import Header from "../../components/Header";
import API from "../../utils/API";



class Contact extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
  };

    handleFormSubmit = event => {
      console.log("called the api");
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

  handleInput = event =>{
    this.setState({[event.target.name]: event.target.value});
    console.log(this.state);
  }


 
    render() {
	    return (
        <div>        
          <Row>
            <Header currentColor={"pink"} />
       <div className="container">
      <h1 className="header">Contact</h1>
      <p className="text" id="line">Interested in our services?  Leave me a message here and I'll get back to you as soon as possible! I can't wait to talk to you!</p>
        	
      	
      		<Col size="md-6" className="col-pink">

              <img id="KSM" src="./images/contact.jpg" height="450px" width="50%"  position="absolute" />

      		</Col>


      		<Col size="md-6">
          <Row>
			     <label className="caption"><b>First Name</b>
    			   <input id="fName-field" type="text" placeholder="Enter First Name" name="firstName" required maxLength="30" value={this.state.firstName} onChange={this.handleInput}/>
    		  </label>

    		<label className="caption"><b>Last Name</b>
    			<input id="lName-field" type="text" placeholder="Enter Last Name" name="lastName" required maxLength="30" width="203.17" height="42" value={this.state.lastName} onChange={this.handleInput}/>
    		</label>
        </Row>

        <Row>
    		<label className="caption"><b>Email          </b>
    			<input id="email-field" type="text" placeholder="Enter Email" name="email" required maxLength="60" value={this.state.email} onChange={this.handleInput}/>
    		</label>
        </Row>

        <Row>
    		<label className="caption"><b>Subject</b>
    			<input id="subject-field" type="text" placeholder="Subject" name="subject" maxLength="30" value={this.state.subject} onChange={this.handleInput}/>
    		</label>
        </Row>

        <Row>
    		<label className="caption"><b>Message</b>
    			<TextArea id="msg-field" type="text" placeholder="Message" name="message" required value={this.state.message} onChange={this.handleInput}/>
    		</label>
        </Row>

        <Row>        
        <button onClick={this.handleFormSubmit}>Submit</button>
        </Row>
        </Col>
        </div>
    	</Row>



    	

    	
    	
         
     </div>
    );
      
	   }
   }



export default Contact;