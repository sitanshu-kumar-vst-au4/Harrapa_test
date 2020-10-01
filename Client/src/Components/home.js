import React from "react";
import "./../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from "react-router";
import { Carousel, } from "react-bootstrap";
import {Link} from 'react-router-dom';

class Home extends React.Component {
  state = {
    redirect: ""
  };

  bookredirect = (item) => {
    this.setState({ redirect: true });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/table" />;
    }
    return (
      <div>
       <ButtonGroup color="primary" aria-label="outlined primary button group">
       <Link className="register-btn" to="/addFarmer"> <Button>Add Farmer</Button></Link>
       <Link className="register-btn" to="/transc"> <Button>Add Transaction</Button></Link>
       <Link className="register-btn" to="/transportform"> <Button>Add Transporation</Button></Link>
        <Button></Button>
      </ButtonGroup>
        <div className="carasoul">
          <Carousel>
            <Carousel.Item>
              <img
                className="  w-80"
                src="https://i.dailymail.co.uk/i/pix/2013/11/13/article-2506853-1964B7A400000578-149_634x349.jpg"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    );
  }
}

export default Home;
