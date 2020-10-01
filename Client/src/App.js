import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TransactionForm from './Components/TransactionForm'
import TransportationForm from './Components/TransportationForm'
import AddFarmerForm from './Components/AddFarmerForm'
import { Navbar } from "react-bootstrap";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";
import Home from './Components/home'
class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand as={Link} to="/">
              <img
                alt=""
                src="https://cdn1.vectorstock.com/i/1000x1000/13/80/organic-food-restaurant-logo-vector-17131380.jpg"
                width="55px"
                height="65px"
                className="d-inline-block align-top"
              />{" "}
             Farmer Hub
            </Navbar.Brand>
          </Navbar>

          <Switch>


            <Route exact path="/" component={Home} />
            <Route exact path="/transc" component={TransactionForm} />
            <Route exact path="/transportform" component={TransportationForm} />
            <Route exact path="/addFarmer" component={AddFarmerForm} />
            
            <Route
              render={function() {
                return <p>Not found</p>;
              }}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
