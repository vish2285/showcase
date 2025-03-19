import { useEffect, useState } from 'react'
import './index.scss'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setTimeout(() => {
        setInnerPosition({ x: e.clientX, y: e.clientY })
      }, 50)
    }

    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  return (
    <>
      {/* Outer Circle */}
      <div
        className="custom-cursor-outer"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />
      {/* Inner Circle */}
      <div
        className="custom-cursor-inner"
        style={{
          transform: `translate(${innerPosition.x - 8}px, ${
            innerPosition.y - 8
          }px)`,
        }}
      />
    </>
  )
}

export default CustomCursor
