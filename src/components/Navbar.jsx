import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { Link, NavLink } from "react-router"
import { siteConfig } from "../data.js"

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Skills", to: "/skills" },
  { label: "Let’s Connect", to: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [compact, setCompact] = useState(false)
  const hasResume = Boolean(siteConfig.resumePath)

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className={`navbar ${compact ? "is-compact" : ""}`}
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Link className="brand" to="/" aria-label="Smit Limbasiya portfolio home">
        <span className="brand-orbit" />
        LB
      </Link>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="nav-end">
        {hasResume ? (
          <a
            className="nav-action nav-resume"
            href={siteConfig.resumePath}
            download={siteConfig.resumeFileName}
            target="_blank"
            rel="noreferrer"
          >
            Resume <Download size={14} />
          </a>
        ) : (
          <button
            className="nav-action nav-resume resume-unconfigured"
            type="button"
            disabled
            title="Set siteConfig.resumePath in src/data.js to your local PDF"
          >
            Resume <Download size={14} />
          </button>
        )}
        <span className="status">
          <i />
          Available
        </span>
        <button
          className="menu-button"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            aria-label="Mobile navigation"
          >
            {links.map((link, index) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
              >
                <span>0{index + 1}</span>
                {link.label}
              </NavLink>
            ))}
            {hasResume ? (
              <a
                className="mobile-resume"
                href={siteConfig.resumePath}
                download={siteConfig.resumeFileName}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                <span>06</span>
                Resume <Download size={15} />
              </a>
            ) : (
              <button
                className="mobile-resume resume-unconfigured"
                type="button"
                disabled
                title="Set siteConfig.resumePath in src/data.js to your local PDF"
              >
                <span>06</span>
                Resume <Download size={15} />
              </button>
            )}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
