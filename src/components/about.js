import React from 'react'
import Image from './image';

const About = () => (
      <main style={{display:`grid`,
                    gridAutoFlow: `row`,
                    gridTemplateColumns: `repeat(3, auto)`,
                    gridTemplateRows: `repeat(4, auto)`,
                    alignItems: `center`,
                    
                    }}>
        <h1 style={{ paddingTop: `0.3em`, marginBottom:`0`, alignSelf: `end`}}>
          About
        </h1>
        <div style={{maxWidth:`150px`, gridColumnStart:`2`, gridColumnEnd:`4`,gridRowStart:`1`, gridRowEnd:`2`, }}>
        <Image />
        </div>
        <p style={{ gridRowStart:`2`, gridRowEnd:`4`, gridColumnStart:`1`, gridColumnEnd:`4` }}>My name is <mark><b>Christopher Rivera</b></mark> and I am <mark><b>Web Developer</b></mark> . I study Front-End and React. I am currently studying OOP, ES6, and Node.js to become a Full Stack developer. </p>
      </main>
)

export default About
