import React from 'react';
import '../App.css';
import {Button} from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        <h1>Travel Awaits</h1>
        <p>Are you ready to travel ?</p>
        <div className="hero-btns">
            <Button className = 'btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className = 'btns' buttonStyle='btn--primary' buttonSize='btn--large'>View Video <i className="far fa-play-circle"></i></Button>
        </div>
    </div>
  )
}

export default HeroSection