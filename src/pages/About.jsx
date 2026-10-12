import { BrainCircuit, Code2, ServerCog } from "lucide-react"
import {
  achievements,
  contactConfig,
  education,
  hobbies,
  profile,
  spokenLanguages,
} from "../data.js"
import { Eyebrow, PageHeader, Reveal } from "../components/UI.jsx"

const principles = [
  {
    icon: ServerCog,
    title: "Backend Systems",
    copy: "APIs, data models, distributed workflows, and scalable services.",
  },
  {
    icon: BrainCircuit,
    title: "Applied Intelligence",
    copy: "Generative AI, machine learning, evaluation, and useful automation.",
  },
  {
    icon: Code2,
    title: "Problem Solving",
    copy: "Algorithms and engineering fundamentals before unnecessary complexity.",
  },
]

export default function About() {
  return (
    <>
      <PageHeader
        number="01 / ABOUT"
        eyebrow="My orbit"
        title={
          <>
            Building with curiosity.
            <br />
            <em>Learning with intent.</em>
          </>
        }
        copy={`${profile.name} is an ICT student at Dhirubhai Ambani University, focused on software engineering, backend systems, Generative AI, and machine learning.`}
      />

      <section className="about-story shell">
        <Reveal className="story-label">
          <Eyebrow>The person behind the systems</Eyebrow>
        </Reveal>
        <Reveal className="story-copy">
          <p className="large">
            I’m an Information and Communication Technology student who enjoys
            turning real-world problems into dependable software.
          </p>
          <p>
            My interests span backend architecture, distributed systems,
            algorithmic problem-solving, Generative AI, machine learning, and
            the evaluation required to make intelligent systems trustworthy.
          </p>
          <p>
            I learn best by building: designing APIs, modeling data, testing
            retrieval pipelines, training forecasting and reinforcement learning
            systems, and documenting what the evidence actually shows.
          </p>
        </Reveal>
      </section>

      <section className="principles-section shell">
        {principles.map(({ icon: Icon, title, copy }, index) => (
          <Reveal className="principle-card" key={title} delay={index * 0.08}>
            <span>0{index + 1}</span>
            <Icon size={21} />
            <h3>{title}</h3>
            <p>{copy}</p>
          </Reveal>
        ))}
      </section>

      <section className="journey shell">
        <Reveal className="section-title">
          <Eyebrow>Education</Eyebrow>
          <h2>
            A foundation shaped by
            <br />
            continuous exploration.
          </h2>
        </Reveal>
        <div className="timeline">
          {education.map((item, index) => (
            <Reveal
              className="timeline-item"
              key={item.period}
              delay={index * 0.07}
            >
              <i />
              <span>{item.period}</span>
              <div>
                <h3>{item.title}</h3>
                <p className="place">{item.place}</p>
              </div>
              <p>{item.detail}</p>
            </Reveal>
          ))}
        </div>
        <Reveal className="about-facts">
          <div>
            <span>Achievements</span>
            {achievements.map((item) => (
              <p key={item}>{item}</p>
            ))}
            <div className="fact-links">
              <a
                href={contactConfig.leetcode}
                target="_blank"
                rel="noreferrer"
                className="fact-profile-link"
              >
                LeetCode ↗
              </a>
              <a
                href={contactConfig.gfg}
                target="_blank"
                rel="noreferrer"
                className="fact-profile-link"
              >
                GeeksforGeeks ↗
              </a>
            </div>
          </div>
          <div>
            <span>Languages</span>
            <div className="fact-tags">
              {spokenLanguages.map((item) => (
                <i key={item}>{item}</i>
              ))}
            </div>
          </div>
          <div>
            <span>Hobbies & Interests</span>
            <div className="fact-tags">
              {hobbies.map((item) => (
                <i key={item}>{item}</i>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </>
  )
}
