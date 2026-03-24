import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Skills() {
  const { language } = useAppContext()
  const { skillsTitle, skills } = content[language]

  return (
    <section className="relative bg-[var(--surface)] pt-[3.6rem] pb-[5.8rem] font-[var(--font-inter)] before:absolute before:bottom-[42px] before:left-0 before:h-[46px] before:w-[104px] before:rounded-r-[22px] before:bg-[var(--shape-bar)] before:content-[''] after:absolute after:top-[-62px] after:right-[12%] after:h-[82px] after:w-[82px] after:rounded-full after:border-[25px] after:border-[var(--shape-ring)] after:content-[''] max-[980px]:before:bottom-[28px] max-[980px]:before:h-[34px] max-[980px]:before:w-[72px] max-[980px]:after:top-[-46px] max-[980px]:after:right-[7%] max-[980px]:after:h-[62px] max-[980px]:after:w-[62px] max-[980px]:after:border-[18px] max-[620px]:before:bottom-[24px] max-[620px]:before:h-[28px] max-[620px]:before:w-[54px] max-[620px]:before:rounded-r-[16px]">
      <div className="relative mx-auto w-[min(1120px,92%)]">
        <h2 className="mb-[2.4rem] text-center font-[var(--font-inter)] text-[48px] leading-none font-medium tracking-[0.01em] max-[980px]:text-[2.2rem]">
          {skillsTitle}
        </h2>
        <div className="grid justify-center gap-[2.35rem] [grid-template-columns:repeat(6,max-content)] max-[980px]:[grid-template-columns:repeat(3,max-content)] max-[620px]:[grid-template-columns:repeat(2,max-content)]">
          {skills.map((skill, index) => (
            <article key={skill.name} className="text-center">
              <div
                className={`mx-auto mb-[0.8rem] grid h-[112px] w-[112px] place-items-center rounded-[8px] ${
                  index === 0 ? 'bg-[var(--skill-js-bg)]' : 'bg-[var(--skill-tile-bg)]'
                } max-[620px]:h-[94px] max-[620px]:w-[94px]`}
              >
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="h-[112px] w-[112px] object-contain max-[620px]:h-[92px] max-[620px]:w-[92px]"
                />
              </div>
              <p className="font-[var(--font-inter)] text-[22px] leading-[1.5] font-medium text-[var(--skill-label)] uppercase max-[980px]:text-[0.9rem]">
                {skill.name}
              </p>
            </article>
          ))}
        </div>
      </div>
      <span
        className="pointer-events-none absolute right-[-34px] bottom-[-66px] h-[94px] w-[94px] rounded-full border-[16px] border-[var(--accent)] max-[980px]:right-[-20px] max-[980px]:bottom-[-40px] max-[980px]:h-[74px] max-[980px]:w-[74px] max-[980px]:border-[12px]"
        aria-hidden="true"
      />
    </section>
  )
}

export default Skills
