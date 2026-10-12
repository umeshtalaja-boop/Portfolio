import {
  ArrowUpRight,
  Code2,
  ContactRound,
  ExternalLink,
  GitBranch,
} from "lucide-react"
import { Link, useLocation } from "react-router"
import { contactConfig, profile } from "../data.js"

export default function Footer() {
  const location = useLocation()

  if (location.pathname === "/contact") {
    return (
      <footer className="site-footer contact-footer">
        <Link className="brand" to="/">
          <span className="brand-orbit" />
          LB
        </Link>
        <span>© {new Date().getFullYear()} · Open to new signals</span>
        <Link to="/">Return to Earth</Link>
      </footer>
    )
  }

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link className="brand" to="/">
            <span className="brand-orbit" />
            LB
          </Link>
          <p>
            {profile.name} · Software engineering, backend systems, and
            intelligent applications.
          </p>
        </div>
        <div className="footer-nav">
          <span>Navigate</span>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-nav">
          <span>Elsewhere</span>
          <a href={contactConfig.github} target="_blank" rel="noreferrer">
            <GitBranch size={14} /> GitHub
          </a>
          <a href={contactConfig.leetcode} target="_blank" rel="noreferrer">
            <Code2 size={14} /> LeetCode
          </a>
          <a href={contactConfig.gfg} target="_blank" rel="noreferrer">
            <ExternalLink size={14} /> GeeksforGeeks
          </a>
          <a href={contactConfig.linkedin} target="_blank" rel="noreferrer">
            <ContactRound size={14} /> LinkedIn
          </a>
          <a href={`mailto:${contactConfig.email}`}>
            Email <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Designed in orbit · Built in Gujarat</span>
      </div>
    </footer>
  )
}
