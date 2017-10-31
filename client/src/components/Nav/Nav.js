import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./Nav.css";

const Nav = (props) =>
  <nav className="navbar navbar-inverse navbar-top" style={{backgroundColor: props.styleApply}}>
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">
                  Welcome
        </Link>

        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/About" className="navbar-brand">
          About
        </Link>
          

          <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/Services" className="navbar-brand">
          Services
        </Link>
        
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/paperFetish" className="navbar-brand">
          Paper Fetish
        </Link>
        
          <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/Event" className="navbar-brand">
          Events
        </Link>

        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/loveNote" className="navbar-brand">
          Love Notes
        </Link>

        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/Contact" className="navbar-brand">
          Contact
        </Link>
      
      </div>
    </div>
  </nav>;

export default Nav;
