import React from 'react';
import aboutImg from '../images/about.jpg';
import Title from './Title';

const About = () => {
  return (
    <section className="section" id="about">

      <Title title="about" subTitle="us" />

    <div className="section-center about-center">
      <div className="about-img">
        <img
          src={aboutImg}
          className="about-photo"
          alt="awesome beach"
        />
      </div>
      <article className="about-info">
        <h3>explore the difference</h3>
        <p>
        Welcome to CloudTrail, where unforgettable journeys await! We are more than just a tour company; we are your gateway to discovering the world's most captivating destinations and creating lasting memories. Established with a passion for travel and a commitment to excellence, CloudTrail is dedicated to providing you with extraordinary experiences that will leave you inspired and eager for more.
        </p>
        <a href="#" className="btn">read more</a>
      </article>
    </div>
  </section>
  )
}

export default About