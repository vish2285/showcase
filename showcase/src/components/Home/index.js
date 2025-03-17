// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js';
import React from 'react';
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
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

  return (
    <div className="container home-page">
      <div className= "text-zone">
        <h1>Hey,<br /> I'm Vishwas Patel <br />
          <span>
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
