import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Profile() {
  const { language } = useAppContext()
  const { profile } = content[language]

  return (
    <section className="relative py-[4rem]">
      <div className="mx-auto w-[min(1120px,92%)]">
        <h2 className="mb-[2.4rem] text-center font-[var(--font-inter)] text-[48px] leading-none font-medium tracking-[0.01em] max-[980px]:text-[2.2rem]">
          {profile.title}
        </h2>

        <div className="grid items-start gap-[2.2rem] [grid-template-columns:1.05fr_1fr] max-[980px]:grid-cols-1 max-[980px]:justify-items-center">
          <article className="min-h-[322px] w-[min(100%,508px)] rounded-[12px] bg-[var(--surface)] px-[2rem] pt-[2.3rem] pb-[2rem] shadow-[9px_9px_0_var(--card-shadow)] max-[980px]:px-[1.6rem] max-[980px]:pt-[2rem] max-[980px]:pb-[1.8rem] max-[620px]:w-full">
            <h3 className="mb-[2.2rem] font-[var(--font-playfair)] text-[24px] leading-none font-normal tracking-[0.01em] text-[var(--accent)] max-[980px]:text-[1.5rem]">
              {profile.basicTitle}
            </h3>
            <ul className="grid gap-[1.7rem] p-0">
              {profile.basicInfo.map((item) => (
                <li
                  key={item.label}
                  className="grid items-start gap-[0.7rem] [grid-template-columns:170px_1fr] max-[620px]:grid-cols-1 max-[620px]:gap-[0.35rem]"
                >
                  <span className="font-[var(--font-inter)] text-[18px] leading-none font-semibold tracking-[0.01em]">
                    {item.label}
                  </span>
                  <span className="whitespace-pre-line font-[var(--font-inter)] text-[18px] leading-none font-normal tracking-[0.01em]">
                    {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </article>

          <article className="min-h-[241px] w-[min(100%,476px)] translate-x-[8px] translate-y-[36px] rounded-[4px] max-[980px]:translate-x-0 max-[980px]:translate-y-0 max-[980px]:min-h-0 max-[620px]:w-full">
            <h3 className="relative isolate inline-block font-[var(--font-playfair)] text-[24px] leading-none font-normal tracking-[0.01em] after:absolute after:left-[-12px] after:bottom-[-7px] after:-z-10 after:h-[18px] after:w-[90px] after:rounded-[4px] after:bg-[var(--accent-underline)] after:content-[''] max-[980px]:text-[1.5rem]">
              {profile.aboutTitle}
            </h3>
            <p className="mt-[1rem] translate-x-[-4px] font-[var(--font-inter)] text-[18px] leading-[1.5] font-normal tracking-[0.01em] text-[var(--text)]">
              {profile.aboutText}
            </p>
            <p className="mt-[1.45rem] translate-x-[-4px] font-[var(--font-inter)] text-[18px] leading-[1.5] font-normal tracking-[0.01em] text-[var(--text)]">
              {profile.aboutText2}
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Profile
