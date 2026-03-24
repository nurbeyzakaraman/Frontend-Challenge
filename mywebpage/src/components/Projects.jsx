import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Projects() {
  const { language } = useAppContext()
  const { projectsTitle, projects, projectLinks } = content[language]

  return (
    <section className="projects">
      <div className="section-width">
        <h2>{projectsTitle}</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.card}`} key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.github} target="_blank" rel="noreferrer">
                  {projectLinks.github}
                </a>
                {project.live && project.live !== '#' ? (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    {projectLinks.live}
                  </a>
                ) : (
                  <span className="project-link-disabled">{projectLinks.live}</span>
                )}
              </div>

              <div className="project-visual">
                {project.screenImage && (
                  <img
                    src={project.screenImage}
                    alt={`${project.title} preview`}
                    className="project-screen-image"
                  />
                )}
                <img
                  src={project.image}
                  alt={project.screenImage ? '' : project.title}
                  aria-hidden={project.screenImage ? 'true' : undefined}
                  className="project-image"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
