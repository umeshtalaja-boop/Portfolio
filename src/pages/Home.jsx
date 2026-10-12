import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowDown, MoveRight } from "lucide-react"
import { Link } from "react-router"
import { images, profile, projects } from "../data.js"
import {
  Eyebrow,
  MagneticLink,
  Reveal,
} from "../components/UI.jsx"

export default function Home() {
  const { scrollYProgress } = useScroll()
  const imageY = useTransform(scrollYProgress, [0, 0.55], ["0%", "10%"])

  return (
    <>
      <section className="home-hero">
        <motion.div className="hero-photo" style={{ y: imageY }}>
          <img
            src={images.home}
            alt="Sunlight breaking over Earth’s curved horizon"
            fetchPriority="high"
          />
        </motion.div>
        <div className="hero-shade" />
        <div className="hero-stars" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="home-copy shell">
          <motion.div
            className="hero-intro-header"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="hero-name-title">SMIT LIMBASIYA</h1>
            <div className="hero-specialty-badge">
              <span className="specialty-dot" aria-hidden="true" />
              <span>BACKEND ENGINEERING</span>
              <span className="specialty-sep" aria-hidden="true">·</span>
              <span>GENERATIVE AI</span>
            </div>
            <h2 className="hero-statement">
              From system architecture to <em>intelligent products.</em>
            </h2>
          </motion.div>
          <motion.p
            className="hero-lead-desc"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
          >
            Focused on scalable architecture, intelligent automation, and turning emerging technologies into useful products.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <MagneticLink to="/projects">Explore projects</MagneticLink>
            <MagneticLink to="/contact" variant="ghost">
              Let&apos;s connect
            </MagneticLink>
          </motion.div>
        </div>
        <div className="hero-meta shell">
          <a href="#home-intro">
            Scroll to discover <ArrowDown size={14} />
          </a>
        </div>
      </section>

      <section className="home-intro shell" id="home-intro">
        <Reveal className="intro-label">
          <span>01</span>
          <p>My perspective</p>
        </Reveal>
        <Reveal className="intro-statement" delay={0.08}>
          <h2>
            Useful software begins with a <em>well-understood problem.</em>
          </h2>
          <p>
            I build scalable backend systems and intelligent AI applications.
            My focus is on solving real-world problems through efficient engineering, GenerativeAI, and machine learning.
          </p>
          <Link className="text-link" to="/about">
            Enter my orbit <MoveRight size={17} />
          </Link>
        </Reveal>
      </section>

      <section className="selected-work shell">
        <Reveal className="section-title">
          <Eyebrow>Selected signals</Eyebrow>
          <h2>Recent explorations</h2>
          <Link className="text-link" to="/projects">
            View all projects <MoveRight size={17} />
          </Link>
        </Reveal>
        <Reveal className="recent-summary-block">
          <p className="recent-intro-p">
            A focused look into my latest engineering projects, combining applied
            Generative AI, distributed backend systems, and database optimization:
          </p>

          <div className="recent-points-list">
            {projects.slice(0, 2).map((project, index) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="recent-point-item"
              >
                <div className="point-badge">
                  <span className="point-num">0{index + 1}</span>
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="point-thumb"
                  />
                </div>
                <div className="point-content">
                  <div className="point-header">
                    <h3>{project.title}</h3>
                    <span className="point-category">{project.category}</span>
                  </div>
                  <p>{project.description}</p>
                  <div className="point-tech-row">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span key={tech} className="point-tag">
                        {tech}
                      </span>
                    ))}
                    <span className="point-arrow-link">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="home-cta shell">
        <Reveal>
          <Eyebrow>Next coordinates</Eyebrow>
          <h2>Have a software or AI problem worth solving together?</h2>
          <MagneticLink to="/contact">Start a conversation</MagneticLink>
        </Reveal>
        <div className="orbit-mark" aria-hidden="true">
          <i />
          <i />
          <span />
          <b className="orbiting-star" />
        </div>
      </section>
    </>
  )
}
