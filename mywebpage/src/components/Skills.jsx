import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Skills() {
  const { language } = useAppContext()
  const { skillsTitle, skills } = content[language]

  return (
    <section className="skills">
      <div className="section-width skills-inner">
        <h2>{skillsTitle}</h2>
        <div className="skills-row">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <div className="skill-icon-wrap">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
              <p>{skill.name}</p>
            </article>
          ))}
        </div>
      </div>
      <span className="skills-accent-ring" aria-hidden="true" />
    </section>
  )
}

export default Skills
