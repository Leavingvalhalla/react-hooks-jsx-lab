import React from 'react';
import { image } from '../data/data';

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>I don't know anything about her, but I'm sure she's cool.</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;
