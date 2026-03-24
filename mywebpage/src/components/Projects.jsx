import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Projects() {
  const { language } = useAppContext()
  const { projectsTitle, projects, projectLinks } = content[language]

  return (
    <section className="bg-[var(--surface)] pt-[4rem] pb-[8rem]">
      <div className="mx-auto w-[min(1120px,92%)]">
        <h2 className="mb-[2.4rem] text-center font-[var(--font-inter)] text-[36px] leading-none font-medium tracking-[0.01em] max-[980px]:text-[2.2rem]">
          {projectsTitle}
        </h2>

        <div className="grid justify-center gap-[64px] [grid-template-columns:repeat(2,500px)] max-[980px]:grid-cols-1 max-[980px]:justify-items-center">
          {projects.map((project) => (
            <article
              className={`relative flex min-h-[560px] w-[min(100%,500px)] flex-col overflow-visible rounded-[10px] p-[1.8rem] max-[980px]:min-h-0 max-[620px]:w-full max-[620px]:px-[1.1rem] max-[620px]:pt-[1.2rem] max-[620px]:pb-[1.35rem] ${
                project.card === 'blue' ? 'bg-[var(--project-blue)]' : 'bg-[var(--project-mint)]'
              }`}
              key={project.title}
            >
              <h3 className="mb-[0.95rem] font-[var(--font-playfair)] text-[29px] leading-none font-bold tracking-[0.05em]">
                {project.title}
              </h3>
              <p className="font-[var(--font-inter)] text-[16px] leading-[1.5] font-normal text-[var(--text)]">
                {project.description}
              </p>

              <div className="mt-[1.25rem] mb-[1.45rem] flex max-w-[270px] flex-wrap gap-[0.55rem]">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[var(--tag-bg)] px-[0.9rem] py-[0.28rem] font-[var(--font-playfair)] text-[16px] leading-none font-bold tracking-[0.05em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mb-[1.4rem] flex justify-between max-[620px]:flex-col max-[620px]:gap-[0.6rem]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="font-[var(--font-inter)] text-[20px] leading-[1.5] font-semibold no-underline"
                >
                  {projectLinks.github}
                </a>
                {project.live && project.live !== '#' ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="font-[var(--font-inter)] text-[20px] leading-[1.5] font-semibold no-underline"
                  >
                    {projectLinks.live}
                  </a>
                ) : (
                  <span className="cursor-default font-[var(--font-inter)] text-[20px] leading-[1.5] font-semibold opacity-[0.55]">
                    {projectLinks.live}
                  </span>
                )}
              </div>

              <div className="relative mt-auto mb-[-42px] ml-[-1.8rem] h-[287px] w-[calc(100%+3.6rem)] max-w-none translate-y-[42px] max-[620px]:mb-[-26px] max-[620px]:ml-[-1.1rem] max-[620px]:h-[220px] max-[620px]:w-[calc(100%+2.2rem)] max-[620px]:translate-y-[26px]">
                {project.screenImage && (
                  <img
                    src={project.screenImage}
                    alt={`${project.title} preview`}
                    className="absolute top-[5%] left-[14.8%] z-[1] h-[78%] w-[71.4%] rounded-[6px] bg-[var(--surface)] object-cover object-top max-[620px]:top-[15%] max-[620px]:left-[14.9%] max-[620px]:h-[62%] max-[620px]:w-[71%]"
                  />
                )}
                <img
                  src={project.image}
                  alt={project.screenImage ? '' : project.title}
                  aria-hidden={project.screenImage ? 'true' : undefined}
                  className="relative z-[2] block h-full w-full max-w-none rounded-[7px] object-contain"
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
