import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react"
import { Link, useParams } from "react-router"
import { projects } from "../data.js"
import { Eyebrow, Reveal } from "../components/UI.jsx"

export default function ProjectDetail() {
  const { projectId } = useParams()
  const project = projects.find((item) => item.id === projectId)

  if (!project) {
    return (
      <section className="not-found shell">
        <span>404 / PROJECT NOT FOUND</span>
        <h1>This project is outside the catalog.</h1>
        <Link className="text-link" to="/projects">
          <ArrowLeft size={16} /> Return to projects
        </Link>
      </section>
    )
  }

  return (
    <article className="project-detail shell">
      <Link className="detail-back" to="/projects">
        <ArrowLeft size={15} /> All projects
      </Link>

      <header className="detail-header-clean">
        <div className="detail-badge-row">
          <Eyebrow>{project.category}</Eyebrow>
          {project.source && (
            <span className="detail-source-tag">{project.source}</span>
          )}
        </div>
        <h1>{project.title}</h1>
        <p className="detail-subtitle">{project.description}</p>

        {/* First write project's tech stack */}
        <div className="detail-tech-stack-block">
          <span className="detail-tech-label">Tech Stack</span>
          <div className="detail-tech-tags">
            {project.technologies.map((tech) => (
              <span key={tech} className="detail-tech-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </header>

      <div className="detail-grid detail-grid-textonly">
        <Reveal className="detail-copy">
          <Eyebrow>Project overview</Eyebrow>
          <p className="detail-full-text">{project.detail}</p>
          <div className="detail-actions">
            {project.repository && (
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="action action-primary"
              >
                <GitBranch size={16} /> View repository
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="action action-ghost"
              >
                <ExternalLink size={16} /> Live demo
              </a>
            )}
          </div>
        </Reveal>

        {project.highlights && project.highlights.length > 0 && (
          <Reveal className="detail-aside" delay={0.08}>
            <div>
              <span className="highlights-heading">Key Highlights & Architecture</span>
              <ul className="highlights-list">
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        )}
      </div>
    </article>
  )
}
