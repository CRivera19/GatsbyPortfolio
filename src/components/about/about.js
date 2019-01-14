import React from 'react'
import Image from "../image"
import './about.css'

const About = () => (
      <main className="about">
        <h1 className="aboutTitle">
          About
        </h1>
        <div className="image">
        <Image />
        </div>
        <p className="aboutContent">My name is <mark><b>Christopher Rivera</b></mark> and I am <mark><b>Web Developer</b></mark> . I study Front-End and React. I am currently studying OOP, ES6, and Node.js to become a Full Stack developer. </p>
      </main>
)

export default About
