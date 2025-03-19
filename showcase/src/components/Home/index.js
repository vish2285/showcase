import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js';
import React from 'react';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const el = React.useRef(null)

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Software Engineer',
        'Web Developer',
        'Student',
        'Only Child',
        'Software Developer',
        'Sophomore in College',
        'Full Stack Developer',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])


  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['V','i','s','h','w','a','s']

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  
    return () => clearTimeout(timeoutId); // Proper cleanup
  }, []);

  return (
    <div className="container home-page">
      <div className= "text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m &nbsp;</span>
        
        <AnimatedLetters letterClass = {letterClass} strArray ={nameArray} idx= {15}/><br />
          <span id ="typed">
            {/* Reference the span for Typed.js */}
            <span ref={el}></span>
          </span>
        </h1>
        <Link to="/contact" className="flat-button">CONTACT ME</Link>
      </div>
    </div>
  );
}

export default Home
