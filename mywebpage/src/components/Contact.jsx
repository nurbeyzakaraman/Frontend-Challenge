import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Contact() {
  const { language } = useAppContext()
  const { contact } = content[language]

  return (
    <footer className="bg-[var(--surface)]">
      <div className="mx-auto flex w-[min(1120px,92%)] items-start justify-center gap-[58px] pt-[4.8rem] pb-[5rem] max-[980px]:grid max-[980px]:grid-cols-1 max-[980px]:justify-items-center">
        <div className="max-w-[780px] font-[var(--font-inter)] text-[42px] leading-[1.5] font-medium tracking-[0.01em] text-right max-[980px]:max-w-full max-[980px]:text-center max-[980px]:text-[clamp(2.4rem,4.2vw,3.2rem)] max-[620px]:text-[clamp(1.9rem,9vw,2.35rem)] max-[620px]:leading-[1.3]">
          <p className="relative isolate after:absolute after:left-[27%] after:bottom-[4px] after:-z-10 after:h-[20px] after:w-[60%] after:rounded-[4px] after:bg-[var(--accent-underline)] after:content-[''] max-[980px]:after:left-0 max-[980px]:after:w-[63%] max-[620px]:after:left-[12%] max-[620px]:after:bottom-[2px] max-[620px]:after:h-[16px] max-[620px]:after:w-[76%]">
            {contact.line1}
          </p>
          <p className="mt-[1rem] pl-[2rem] max-[980px]:pl-0">{contact.line2}</p>
        </div>

        <div className="grid w-full justify-items-center gap-[1.25rem]">
          <div className="grid min-h-[137px] w-[158px] gap-[0.1rem] font-[var(--font-inter)] text-[24px] leading-[1.5] font-medium max-[980px]:w-full max-[620px]:text-center max-[620px]:justify-items-center">
            {contact.links.map((item, index) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className={`no-underline ${
                  index < 2
                    ? index === 0
                      ? 'text-[var(--link-blue)] [.theme-dark_&]:text-[var(--text)]'
                      : 'text-[var(--link-blue)]'
                    : 'text-[var(--accent)]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Contact
