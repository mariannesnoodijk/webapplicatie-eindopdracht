import React from 'react';
import '../../App.css';
import './HeroSection.css';
import {Button} from "../../helpers/button/Button.jsx";
import {Link} from "react-router-dom";

function HeroSection() {
    return (
      <div className='hero-container'>
          <h1> FIND YOUR DREAM HOME </h1>
          <p> What are you waiting for? </p>
          <div className="hero-btns">
              <Link to="/matching">
                  <Button className='btns' buttonStyle='btn--outline'
                          buttonSize='btn--large'
                  >
                      GET STARTED
                  </Button>
              </Link>
          </div>
      </div>
    );
}

export default HeroSection;
