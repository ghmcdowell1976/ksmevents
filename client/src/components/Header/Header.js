import React, {Component} from "react";
import "./Header.css";
import Jumbotron from "../../components/Jumbotron";
import Nav from "../../components/Nav";
import { Col, Row, Container } from "../../components/Grid";

class Header extends Component {
  render() {
  	const Style = {
  		backgroundStyle: {
  			backgroundColor: this.props.currentColor
  		}
  	}

  	const Image ={
  		image: {
  			imageString: this.props.image
  		}
  	}
    return (
    <div>
	    <Row>
	    	<Col size="md-12">
	      		<div class="col-pink" style={Style.backgroundStyle}>
					<img id="logo" src="./images/logo_transp.png" height="250px" width="250px"></img>
				</div>
			</Col>
		</Row>
		<Row>
			<Nav styleApply={this.props.currentColor} />
		</Row>
	</div>
    );
  }
};

export default Header;