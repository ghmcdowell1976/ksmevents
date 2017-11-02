import React, {Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import "./admin.css";
import Header from "../../components/Header";
import API from "../../utils/API";

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    contacts: []
  };
  this.loadContacts = this.loadContacts.bind(this)
  }
  componentDidMount() {
    this.loadContacts();
  }
  loadContacts = () => {
    API.getContacts()
      .then(res =>
      	// console.log(res, "This is the data")
        this.setState({ contacts: res.data })
      )
      .catch(err => console.log(err));
  };
  render() {
  	console.log("This is the contacts state", this.state.contacts)
  	const contacts = []
  	for(let i = 0; i < this.state.contacts.length; i++){
  		const html = (
  			<div className="container">
  			
  			<div className="text">{this.state.contacts[i].firstName}<br />
  			{this.state.contacts[i].lastName}<br /> 
  			{this.state.contacts[i].email}<br />
			{this.state.contacts[i].subject}<br />
  			{this.state.contacts[i].message}
  			</div>
  			
  			</div>
  		)
  		contacts.push(html)
  	}
    return (
      	<div>
         	 <Header currentColor={"#EBDEF0"} />
         	 {contacts}
        </div>
    );
  }
}

export default Admin;