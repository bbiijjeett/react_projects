import React from 'react';
import backgroundVid from '../images/background_video.mp4';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>anini</h1>
        <p>
        Where clouds kiss the land!
        </p>
        <a href="#tours" className="btn hero-btn">explore tours</a>
      </div>
      <video autoPlay loop muted id='hero_backgroundVideo'>
          <source src={backgroundVid} type='video/mp4' />
      </video>
    </section>
  )
}

export default Hero