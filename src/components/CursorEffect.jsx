import { useEffect, useRef } from "react"

export default function CursorEffect() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const glowRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return
    const dot = dotRef.current
    const ring = ringRef.current
    const glow = glowRef.current
    let ringX = window.innerWidth / 2
    let ringY = window.innerHeight / 2
    let targetX = ringX
    let targetY = ringY
    let frame

    const move = (event) => {
      targetX = event.clientX
      targetY = event.clientY
      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
      glow.style.transform = `translate3d(${targetX}px, ${targetY}px, 0)`
      const interactive = event.target.closest(
        "a, button, input, textarea, [data-cursor]",
      )
      ring.classList.toggle("cursor-active", Boolean(interactive))
      dot.classList.toggle("cursor-active", Boolean(interactive))
    }
    const render = () => {
      ringX += (targetX - ringX) * 0.14
      ringY += (targetY - ringY) * 0.14
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`
      frame = requestAnimationFrame(render)
    }
    window.addEventListener("pointermove", move)
    frame = requestAnimationFrame(render)
    return () => {
      window.removeEventListener("pointermove", move)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
      <div className="cursor-glow" ref={glowRef} />
    </>
  )
}
