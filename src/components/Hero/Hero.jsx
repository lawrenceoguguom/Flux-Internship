import React from 'react'
import './Hero.css'
import hero from '../../assets/hero.jpg'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-top">
            <h3><span>Flux Creative Technologies -</span> Reimagining Digital. One Pixel at a Time.</h3>
            <h5>At Flux Creative Technologies, we blend design, code, and strategy to craft bold digital experiences that move with the world. We deliver innovative software development services and custom digital solutions that help businesses streamline operations, enhance user experiences, and drive sustainable growth. 
            Partner with us for agile development, seamless integration 
            and world-class support.
            </h5>
            <p>Agile. Scalable. Always evolving.</p>
        </div>

        
        <div className="hero-down-1">
            <h4>For,</h4> <p>Startups,</p> <p>Enterprise Leaders,</p> <p>Media & Publishers and Social Good</p>
        </div>
            
        <div className="hero-down2">
                <a href="#hero">Our Work</a>
                <a href="#contact">Contact Us</a>
                <a href="#campus">Visit Flux Campus</a>
        </div>
        
        
      
    </div>
  )
}

export default Hero
