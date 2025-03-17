// import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Typed from 'typed.js';
import React from 'react';
// import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
// import LogoTitle from '../../assets/images/logo-s.png'
// import Logo from './Logo'
import './index.scss'


const Home = () => {
//   const el = React.useRef(null)

//   React.useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         'Software Engineer',
//         'Web Developer',
//         'Student',
//         'Only Child',
//         'Software Developer',
//         'Sophomore in College',
//         'Full Stack Developer',
//       ],
//       typeSpeed: 50,
//       backSpeed: 50,
//       backDelay: 1000,
//       loop: true,
//     })

//     return () => {
//       typed.destroy()
//     }
//   }, [])

  return (
    <div>
      <div>
        <h1>
          Hey,
          <br /> I'm Vishwas Patel <br />
          {/* <span className="text-xl text-blue-200 leading-tight md:text-3xl"> */}
            {/* Reference the span for Typed.js */}
            {/* <span ref={el}></span> */}
          {/* </span> */}
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </h1>
      </div>
    </div>
  )
}

export default Home
