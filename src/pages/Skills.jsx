import {
  Braces,
  Cloud,
  Cpu,
  Database,
  Sparkles,
  TerminalSquare,
} from "lucide-react"
import { skillGroups } from "../data.js"
import { Eyebrow, PageHeader, Reveal } from "../components/UI.jsx"

const icons = [
  Braces,
  Cpu,
  TerminalSquare,
  Sparkles,
  Sparkles,
  Database,
  Cloud,
  TerminalSquare,
]

export default function Skills() {
  return (
    <>
      <PageHeader
        number="03 / SKILLS"
        eyebrow="Capabilities"
        title={
          <>
            The Tech
            <br />
            <em>Behind What I Build.</em>
          </>
        }
        copy="A practical toolkit spanning backend engineering, distributed data systems, applied machine learning, and Generative AI."
      />
      <section className="skills-map shell">
        <div className="constellation" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <i />
          <i />
          <i />
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = icons[index]
            return (
              <Reveal
                className="skill-card"
                key={group.title}
                delay={(index % 4) * 0.05}
              >
                <div className="skill-card-top">
                  <span>{group.number}</span>
                  <Icon size={20} />
                </div>
                <h2>{group.title}</h2>
                <div>
                  {group.items.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
      <section className="skills-philosophy shell">
        <Reveal>
          <Eyebrow>Working philosophy</Eyebrow>
        </Reveal>
        <Reveal>
          <h2>Strong fundamentals make ambitious systems easier to trust.</h2>
          <p>
            I believe great software starts with strong fundamentals, a clear understanding of the problem, and thoughtful engineering decisions. By keeping things simple, writing clean code, and focusing on reliability, I aim to build systems that are easier to maintain, scale, and trust.
          </p>
        </Reveal>
      </section>
    </>
  )
}
