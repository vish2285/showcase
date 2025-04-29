import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'
import Loader from 'react-loaders'
import LogoV from '../../assets/images/v-logo.svg'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Logo from './Logo'

const Home = () => {
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Software Engineer',
        'Student',
        'Only Child',
        'Sophomore in College',
      ],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    })
    return () => typed.destroy()
  }, [])

  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['i', 's', 'h', 'w', 'a', 's']

  useEffect(() => {
    const timerId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
    return () => clearTimeout(timerId)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _8`}>H</span>
            <span className={`${letterClass} _9`}>i,</span>
            <br />
            <span className={`${letterClass} _10`}>I</span>
            <span className={`${letterClass} _11`}>'m&nbsp;</span>
            <img src={LogoV} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
            <br />
            <span id="typed">
              <span ref={el}></span>
            </span>
          </h1>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo className="Home" />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home