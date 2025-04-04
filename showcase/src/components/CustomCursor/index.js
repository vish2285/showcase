import { useEffect, useState } from 'react'
import './index.scss'

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(window.innerWidth > 768)

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth > 768)
    }

    const moveCursor = (e) => {
      if (isVisible) {
        setPosition({ x: e.clientX, y: e.clientY })
        setTimeout(() => {
          setInnerPosition({ x: e.clientX, y: e.clientY })
        }, 50)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('mousemove', moveCursor)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', moveCursor)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      <div
        className="custom-cursor-outer"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px)`,
        }}
      />
      <div
        className="custom-cursor-inner"
        style={{
          transform: `translate(${innerPosition.x - 8}px, ${innerPosition.y - 8}px)`,
        }}
      />
    </>
  )
}

export default CustomCursor
