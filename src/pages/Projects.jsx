import { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Search } from "lucide-react"
import { Link } from "react-router"
import { projects } from "../data.js"
import { PageHeader } from "../components/UI.jsx"

export default function Projects() {
  const [query, setQuery] = useState("")

  const visible = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    if (!normalized) return projects
    return projects.filter((project) => {
      const searchable = [
        project.title,
        project.description,
        project.category,
        ...project.technologies,
      ]
        .join(" ")
        .toLowerCase()
      return searchable.includes(normalized)
    })
  }, [query])

  return (
    <>
      <PageHeader
        number="02 / PROJECTS"
        eyebrow="Repository-backed work"
        title={
          <>
            A little of what I build.
          </>
        }
        copy="From trading systems and AI-powered tools to machine learning experiments, these projects reflect how I think, build, and solve problems."
      />
      <section className="projects-content shell">
        <div className="project-toolbar project-toolbar-list">
          <label className="project-search">
            <Search size={15} />
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects by name, technology, or category..."
            />
          </label>
        </div>

        <motion.div className="projects-list-container" layout>
          <AnimatePresence mode="popLayout">
            {visible.map((project, index) => (
              <motion.article
                className="project-list-row"
                key={project.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
              >
                <Link
                  className="project-list-link"
                  to={`/projects/${project.id}`}
                  aria-label={`View details for ${project.title}`}
                >
                  <div className="project-list-left">
                    <span className="project-list-index">0{index + 1}</span>
                    <div className="project-list-title-group">
                      <div className="project-list-header">
                        <h2 className="project-list-title">{project.title}</h2>
                        <span className="project-list-category">
                          {project.category}
                        </span>
                      </div>
                      <p className="project-list-desc">{project.description}</p>
                    </div>
                  </div>

                  <div className="project-list-right">
                    <div className="project-list-tags">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="project-list-arrow" aria-hidden="true">
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {!visible.length && (
          <p className="projects-empty">No projects match that search.</p>
        )}
      </section>
    </>
  )
}
