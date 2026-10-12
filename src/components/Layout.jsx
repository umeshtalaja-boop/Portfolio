import { useEffect, useRef, useState } from "react"
import { AnimatePresence, MotionConfig, motion } from "framer-motion"
import { Outlet, useLocation } from "react-router"
import CosmicBackground from "./CosmicBackground.jsx"
import CursorEffect from "./CursorEffect.jsx"
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import OrbitalTransition from "./OrbitalTransition.jsx"

export default function Layout() {
  const location = useLocation()
  const previousPath = useRef(location.pathname)
  const transitionTimer = useRef(null)
  const [transitionPath, setTransitionPath] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" })
    if (previousPath.current !== location.pathname) {
      setTransitionPath(location.pathname)
      window.clearTimeout(transitionTimer.current)
      transitionTimer.current = window.setTimeout(
        () => setTransitionPath(null),
        760,
      )
    }
    previousPath.current = location.pathname
    return () => window.clearTimeout(transitionTimer.current)
  }, [location.pathname])

  return (
    <MotionConfig reducedMotion="user">
      <CosmicBackground />
      <CursorEffect />
      <Navbar />
      <AnimatePresence initial={false}>
        {transitionPath && <OrbitalTransition key={transitionPath} />}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.main
          className="route-stage"
          key={location.pathname}
          initial={{ opacity: 0, scale: 1.008, filter: "blur(7px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, scale: 0.992, filter: "blur(6px)" }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </MotionConfig>
  )
}
