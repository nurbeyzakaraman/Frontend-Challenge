import githubIcon from '../assets/github.svg'
import linkedinIcon from '../assets/linkedin.svg'
import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Hero() {
  const { language } = useAppContext()
  const { hero } = content[language]

  return (
    <section className="hero section-width">
      <div className="hero-grid">
        <div className="hero-left">
          <p className="hero-greeting">{hero.greeting}</p>

          <h1 className="hero-title">
            <span className="hero-title-desktop">
              {hero.title.desktopLines.map((line, index) => (
                <span key={line} className="hero-line">
                  {index === 0 ? (
                    <>
                      <span className="hero-word-highlight">{hero.title.highlight}</span>{' '}
                      {line}
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </span>

            <span className="hero-title-mobile">
              <span className="hero-title-mobile-main">
                <span className="hero-word-highlight">{hero.title.highlight}</span>{' '}
                {hero.title.mobileMain}
              </span>
              <span className="hero-title-mobile-closing">{hero.title.mobileClosing}</span>
            </span>
          </h1>

          <div className="hero-right hero-right-mobile">
            <div className="hero-image-frame">
              <img src={hero.image} alt="Profile" className="hero-image" />
            </div>
            <span className="hero-accent-pill hero-accent-pill-mobile" />
          </div>

          <div className="hero-socials">
            <a href={hero.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <img src={linkedinIcon} alt="" aria-hidden="true" />
            </a>
            <a href={hero.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <img src={githubIcon} alt="" aria-hidden="true" />
            </a>
          </div>

          <p className="hero-desc">
            {hero.descriptionTop.before}
            <span>{hero.descriptionTop.accentOne}</span>
            {hero.descriptionTop.middle}
            <span>{hero.descriptionTop.accentTwo}</span>
            {hero.descriptionTop.after}
          </p>

          <p className="hero-desc">
            {hero.descriptionBottom}{' '}
            <a href={`mailto:${hero.email}`}>{hero.email}</a>
          </p>
        </div>

        <div className="hero-right hero-right-desktop">
          <div className="hero-image-frame">
            <img src={hero.image} alt="Profile" className="hero-image" />
          </div>
          <span className="hero-accent-pill" />
        </div>
      </div>
    </section>
  )
}

export default Hero
