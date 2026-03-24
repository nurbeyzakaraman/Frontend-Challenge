import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Hero() {
  const { language } = useAppContext()
  const { hero } = content[language]

  return (
    <section className="mx-auto flex w-[min(1120px,92%)] flex-1 items-center px-0 pt-[2.7rem] pb-[4rem] font-[var(--font-inter)] max-[980px]:flex-none max-[980px]:pt-[2.2rem] max-[620px]:py-[2rem] max-[620px]:pb-[3rem]">
      <div className="grid w-full items-center gap-[2.6rem] [grid-template-columns:minmax(560px,1fr)_minmax(360px,420px)] max-[980px]:grid-cols-1 max-[980px]:gap-[2rem]">
        <div className="max-w-[760px] max-[980px]:max-w-full max-[980px]:text-center max-[620px]:mx-auto max-[620px]:w-full max-[620px]:max-w-full max-[620px]:pt-[0.75rem]">
          <p className="mb-[1.1rem] text-[1.5rem] leading-[1.1] font-normal tracking-[0.1em] max-[980px]:text-[1.75rem] max-[620px]:mb-[0.65rem] max-[620px]:text-[1rem]">
            {hero.greeting}
          </p>

          <h1 className="relative mb-[2rem] isolate text-[clamp(2.1rem,3vw,2.9rem)] leading-[1.4] font-medium tracking-[0.01em] max-[980px]:leading-[1.28] max-[980px]:text-[clamp(1.8rem,2.8vw,2.4rem)] max-[620px]:mb-[2rem]">
            <span className="block max-[620px]:hidden">
              {hero.title.desktopLines.map((line, index) => (
                <span key={line} className="block">
                  {index === 0 ? (
                    <>
                      <span className="relative inline-block after:absolute after:left-[-9px] after:bottom-[-6px] after:-z-10 after:h-[25px] after:w-[137px] after:rounded-[4px] after:bg-[var(--accent)] after:content-[''] max-[620px]:after:left-[-4px] max-[620px]:after:bottom-[-2px] max-[620px]:after:h-[16px] max-[620px]:after:w-[94px]">
                        {hero.title.highlight}
                      </span>{' '}
                      {line}
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </span>

            <span className="hidden max-[620px]:block max-[620px]:mx-auto max-[620px]:mb-[1.2rem] max-[620px]:max-w-full max-[620px]:text-[clamp(1.55rem,7vw,1.95rem)] max-[620px]:leading-[1.22]">
              <span className="block">
                <span className="relative inline-block after:absolute after:left-[-4px] after:bottom-[-2px] after:-z-10 after:h-[16px] after:w-[94px] after:rounded-[4px] after:bg-[var(--accent)] after:content-['']">
                  {hero.title.highlight}
                </span>{' '}
                {hero.title.mobileMain}
              </span>
              <span className="mt-[0.2em] block">{hero.title.mobileClosing}</span>
            </span>
          </h1>

          <div className="relative mx-auto my-[2rem] mb-[3rem] hidden h-[348px] w-[min(312px,100%)] max-[620px]:block">
            <div className="relative h-[298px] w-[298px] rounded-[28px] bg-[var(--accent)]">
              <img
                src={hero.image}
                alt="Profile"
                className="absolute top-[17px] left-[17px] h-[294px] w-[294px] rounded-[20px] object-cover"
              />
            </div>
            <span className="relative ml-auto mr-[-3.7rem] mt-[3.4rem] block h-[26px] w-[104px] rounded-l-[20px] bg-[var(--accent)]" />
          </div>

          <div className="mb-[1.3rem] flex gap-[1rem] max-[980px]:justify-center max-[620px]:mb-[1.7rem]">
            <a
              href={hero.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-[1.9rem] w-[1.7rem] text-[var(--text)] no-underline max-[980px]:h-[2.1rem] max-[980px]:w-[2.1rem]"
            >
              <img src={linkedinIcon} alt="" aria-hidden="true" className="h-full w-full" />
            </a>
            <a
              href={hero.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex h-[1.9rem] w-[1.7rem] text-[var(--text)] no-underline max-[980px]:h-[2.1rem] max-[980px]:w-[2.1rem]"
            >
              <img src={githubIcon} alt="" aria-hidden="true" className="h-full w-full" />
            </a>
          </div>

          <p className="text-[1.03rem] leading-[2rem] font-normal tracking-[0.05em] text-[var(--text)] max-[980px]:text-[1rem] max-[980px]:leading-[1.7] max-[620px]:text-[0.88rem] max-[620px]:leading-[1.5] max-[620px]:tracking-[0.02em]">
            {hero.descriptionTop.before}
            <span className="text-[var(--accent)]">{hero.descriptionTop.accentOne}</span>
            {hero.descriptionTop.middle}
            <span className="text-[var(--accent)]">{hero.descriptionTop.accentTwo}</span>
            {hero.descriptionTop.after}
          </p>

          <p className="mt-[0.22rem] text-[1.03rem] leading-[2rem] font-normal tracking-[0.05em] text-[var(--text)] max-[980px]:text-[1rem] max-[980px]:leading-[1.7] max-[620px]:mt-[0.5rem] max-[620px]:text-[0.88rem] max-[620px]:leading-[1.5] max-[620px]:tracking-[0.02em]">
            {hero.descriptionBottom}{' '}
            <a
              href={`mailto:${hero.email}`}
              className="text-[var(--accent)] underline underline-offset-[5px]"
            >
              {hero.email}
            </a>
          </p>
        </div>

        <div className="relative hidden h-[312px] w-[312px] justify-self-end pt-0 min-[621px]:block max-[980px]:mx-auto max-[980px]:h-[348px] max-[980px]:w-[min(312px,100%)] max-[980px]:justify-self-center">
          <div className="relative h-[298px] w-[298px] rounded-[28px] bg-[var(--accent)]">
            <img
              src={hero.image}
              alt="Profile"
              className="absolute top-[17px] left-[17px] h-[294px] w-[294px] rounded-[20px] object-cover"
            />
          </div>
          <span className="absolute right-[-220px] bottom-[-42px] h-[44px] w-[130px] rounded-l-[28px] bg-[var(--accent)] max-[980px]:right-[-10px] max-[980px]:bottom-[8px] max-[980px]:h-[30px] max-[980px]:w-[108px]" />
        </div>
      </div>
    </section>
  )
}

export default Hero
