import { motion, useReducedMotion } from "framer-motion"

export default function OrbitalTransition() {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return (
      <motion.div
        className="route-transition route-transition-reduced"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 0.28 }}
        aria-hidden="true"
      />
    )
  }

  return (
    <motion.div
      className="route-transition"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 0.72, times: [0, 0.18, 0.58, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="warp-halo"
        initial={{ scale: 0.72, opacity: 0 }}
        animate={{ scale: [0.72, 1.15, 1.5], opacity: [0, 0.62, 0] }}
        transition={{ duration: 0.72, ease: "easeOut" }}
      />
      <div className="transition-system">
        <motion.div
          className="transition-orbit orbit-outer"
          animate={{ rotate: 360 }}
          transition={{ duration: 0.72, ease: "easeInOut" }}
        >
          <i />
        </motion.div>
        <motion.div
          className="transition-orbit orbit-inner"
          animate={{ rotate: -300 }}
          transition={{ duration: 0.72, ease: "easeInOut" }}
        >
          <i />
        </motion.div>
        <motion.div
          className="transition-planet"
          animate={{ scale: [0.82, 1.08, 0.88] }}
          transition={{ duration: 0.72, ease: "easeInOut" }}
        />
        <span className="orbit-particle particle-one" />
        <span className="orbit-particle particle-two" />
        <span className="orbit-particle particle-three" />
      </div>
    </motion.div>
  )
}
