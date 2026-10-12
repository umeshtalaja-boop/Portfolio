import { motion, useReducedMotion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router"

export function Eyebrow({ children, light = false }) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <i />
      {children}
    </div>
  )
}

export function PageHeader({ number, eyebrow, title, copy }) {
  return (
    <header className="page-header shell">
      <div className="page-number">{number}</div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        {copy && <p>{copy}</p>}
      </motion.div>
    </header>
  )
}

export function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.65, delay }}
    >
      {children}
    </motion.div>
  )
}

export function MagneticLink({ to, children, variant = "primary" }) {
  const reduceMotion = useReducedMotion()

  function move(event) {
    if (reduceMotion) return
    const node = event.currentTarget
    const rect = node.getBoundingClientRect()
    node.style.transform = `translate(${(event.clientX - rect.left - rect.width / 2) * 0.1}px, ${(event.clientY - rect.top - rect.height / 2) * 0.1}px)`
  }

  function reset(event) {
    event.currentTarget.style.transform = ""
  }

  return (
    <Link
      className={`action action-${variant}`}
      to={to}
      onMouseMove={move}
      onMouseLeave={reset}
      data-cursor="interactive"
    >
      <span>{children}</span>
      <ArrowUpRight size={16} />
    </Link>
  )
}

export function PhotoCredit({ children }) {
  return <span className="photo-credit">Photo · {children}</span>
}
