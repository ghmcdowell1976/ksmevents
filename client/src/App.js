import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import About from "./pages/About";
import Welcome from "./pages/Welcome";
import Services from "./pages/Services";
import paperFetish from "./pages/paperFetish";
import Contact from "./pages/Contact";
import Event from "./pages/Events";
import loveNote from "./pages/loveNotes";
import Admin from "./pages/Admin";
import { Container } from "./components/Grid";

const App = () => 
        <Router>
        <Container fluid>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Services" component={Services} />
          <Route exact path="/paperFetish" component={paperFetish} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Event" component={Event} />
          <Route exact path="/loveNote" component={loveNote} />
          <Route exact path="/Admin" component={Admin} />
       
        </Container>
      </Router>;

export default App;
