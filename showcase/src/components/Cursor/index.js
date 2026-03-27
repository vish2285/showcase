import React, { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const posRef = useRef({ x: -100, y: -100 })
  const ringPosRef = useRef({ x: -100, y: -100 })
  const rafRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY }
    }

    const onMouseDown = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(2.5)'
      dot.style.background = '#ffffff'
      ring.style.transform = 'translate(-50%, -50%) scale(0.6)'
    }

    const onMouseUp = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
      dot.style.background = 'var(--cyan)'
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
    }

    const onMouseEnterInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(2)'
      ring.style.transform = 'translate(-50%, -50%) scale(0.7)'
      ring.style.borderColor = 'rgba(0, 212, 255, 0.5)'
    }

    const onMouseLeaveInteractive = () => {
      dot.style.transform = 'translate(-50%, -50%) scale(1)'
      ring.style.transform = 'translate(-50%, -50%) scale(1)'
      ring.style.borderColor = 'rgba(0, 212, 255, 0.2)'
    }

    const animate = () => {
      const { x, y } = posRef.current
      const rp = ringPosRef.current
      rp.x += (x - rp.x) * 0.12
      rp.y += (y - rp.y) * 0.12

      dot.style.left = `${x}px`
      dot.style.top = `${y}px`
      ring.style.left = `${rp.x}px`
      ring.style.top = `${rp.y}px`

      rafRef.current = requestAnimationFrame(animate)
    }

    const addInteractiveListeners = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterInteractive)
        el.addEventListener('mouseleave', onMouseLeaveInteractive)
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mouseup', onMouseUp)
    rafRef.current = requestAnimationFrame(animate)
    addInteractiveListeners()

    // Re-attach on DOM changes (new elements)
    const observer = new MutationObserver(addInteractiveListeners)
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mouseup', onMouseUp)
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          background: 'var(--cyan)',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 100ms ease, background 100ms ease',
          willChange: 'left, top',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          border: '1px solid rgba(0, 212, 255, 0.2)',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'transform 200ms ease, border-color 150ms ease',
          willChange: 'left, top',
        }}
      />
    </>
  )
}
