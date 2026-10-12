import { Award, BriefcaseBusiness, Code2, Trophy } from "lucide-react"
import { achievements, experience } from "../data.js"
import { Eyebrow, PageHeader, Reveal } from "../components/UI.jsx"

const icons = [BriefcaseBusiness, Code2, Trophy]

export default function Experience() {
  return (
    <>
      <PageHeader
        number="04 / EXPERIENCE"
        eyebrow="Field notes"
        title={
          <>
            Learning through
            <br />
            <em>work and leadership.</em>
          </>
        }
        copy="Internship work, community leadership, and team responsibility alongside a growing software and AI practice."
      />
      <section className="experience-page shell">
        <div className="experience-list">
          {experience.map((item, index) => {
            const Icon = icons[index]
            return (
              <Reveal
                className="experience-item"
                key={item.role}
                delay={index * 0.07}
              >
                <span>0{index + 1}</span>
                <Icon size={21} />
                <div>
                  <p>{item.period}</p>
                  <h2>{item.role}</h2>
                  <strong>{item.place}</strong>
                </div>
                <p>{item.copy}</p>
              </Reveal>
            )
          })}
        </div>
        <Reveal className="achievement-panel">
          <div>
            <Award size={22} />
            <Eyebrow>Achievements</Eyebrow>
          </div>
          {achievements.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </Reveal>
      </section>
    </>
  )
}
