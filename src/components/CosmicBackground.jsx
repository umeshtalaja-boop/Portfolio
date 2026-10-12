import { useEffect, useRef } from "react"

export default function CosmicBackground() {
  const layerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const layer = layerRef.current
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    let frame
    let x = 0
    let y = 0

    const move = (event) => {
      if (coarsePointer || reduceMotion) return
      x = (event.clientX / window.innerWidth - 0.5) * 2
      y = (event.clientY / window.innerHeight - 0.5) * 2
      if (frame) return
      frame = requestAnimationFrame(() => {
        if (layer) {
          layer.style.setProperty("--orbit-x", `${x * 7}px`)
          layer.style.setProperty("--orbit-y", `${y * 5}px`)
        }
        frame = null
      })
    }

    window.addEventListener("pointermove", move, { passive: true })

    // --- Dynamic Unpredictable Random Comet Canvas ---
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    let animId
    let timeoutId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const onResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }
    window.addEventListener("resize", onResize)

    const comets = []

    const colorPalettes = [
      { r: 255, g: 255, b: 255 }, // pure white
      { r: 142, g: 229, b: 235 }, // cosmic cyan
      { r: 155, g: 131, b: 246 }, // stellar violet
      { r: 240, g: 189, b: 119 }, // starlight gold
      { r: 180, g: 215, b: 255 }, // ice blue
    ]

    function spawnComet() {
      if (reduceMotion) return

      // Completely random origin across the sky
      const startFromTop = Math.random() > 0.35
      const startX = startFromTop
        ? Math.random() * width
        : Math.random() * (width * 0.4)
      const startY = startFromTop
        ? -10 - Math.random() * 50
        : Math.random() * (height * 0.6)

      // Random diagonal trajectory (between 28° and 58°)
      const angle = (Math.PI / 180) * (28 + Math.random() * 32)
      const speed = 5 + Math.random() * 5.5
      const length = 45 + Math.random() * 45 // small, sleek tail
      const maxLife = 50 + Math.floor(Math.random() * 40)
      const color = colorPalettes[Math.floor(Math.random() * colorPalettes.length)]
      const radius = 1.2 + Math.random() * 1.1

      comets.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length,
        radius,
        color,
        life: 0,
        maxLife,
      })

      // Next comet spawns at unpredictable random intervals (1.2s to 4.5s)
      const nextDelay = 1200 + Math.random() * 3300
      timeoutId = setTimeout(spawnComet, nextDelay)
    }

    // Initial random spawn
    timeoutId = setTimeout(spawnComet, 800)

    function render() {
      ctx.clearRect(0, 0, width, height)

      for (let i = comets.length - 1; i >= 0; i--) {
        const c = comets[i]
        c.life++
        c.x += c.vx
        c.y += c.vy

        // Calculate smooth fade-in and fade-out opacity
        const progress = c.life / c.maxLife
        let opacity = 0
        if (progress < 0.2) {
          opacity = progress / 0.2
        } else if (progress > 0.6) {
          opacity = (1 - progress) / 0.4
        } else {
          opacity = 1
        }
        opacity = Math.max(0, Math.min(1, opacity))

        // Normalized direction vector for tail
        const speed = Math.hypot(c.vx, c.vy)
        const dirX = c.vx / speed
        const dirY = c.vy / speed
        const tailX = c.x - dirX * c.length
        const tailY = c.y - dirY * c.length

        // Draw luminous comet tail
        const gradient = ctx.createLinearGradient(tailX, tailY, c.x, c.y)
        gradient.addColorStop(0, `rgba(${c.color.r}, ${c.color.g}, ${c.color.b}, 0)`)
        gradient.addColorStop(
          0.65,
          `rgba(${c.color.r}, ${c.color.g}, ${c.color.b}, ${opacity * 0.45})`,
        )
        gradient.addColorStop(1, `rgba(255, 255, 255, ${opacity * 0.95})`)

        ctx.beginPath()
        ctx.moveTo(tailX, tailY)
        ctx.lineTo(c.x, c.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = c.radius * 1.2
        ctx.lineCap = "round"
        ctx.stroke()

        // Draw blazing comet nucleus head with subtle glow
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`
        ctx.shadowColor = `rgb(${c.color.r}, ${c.color.g}, ${c.color.b})`
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0 // reset shadow for performance

        // Remove comet if lifespan is exceeded or out of bounds
        if (
          c.life >= c.maxLife ||
          c.x > width + 100 ||
          c.y > height + 100
        ) {
          comets.splice(i, 1)
        }
      }

      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      window.removeEventListener("pointermove", move)
      window.removeEventListener("resize", onResize)
      if (frame) cancelAnimationFrame(frame)
      if (animId) cancelAnimationFrame(animId)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <div className="cosmic-depth" ref={layerRef} aria-hidden="true">
      <div className="cosmic-nebula" />
      <div className="cosmic-stars stars-near" />
      <div className="cosmic-stars stars-far" />
      <div className="distant-planet" />
      <canvas className="comet-canvas" ref={canvasRef} />
    </div>
  )
}
