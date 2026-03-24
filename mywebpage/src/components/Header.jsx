import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Header() {
  const { language, toggleLanguage, theme, toggleTheme } = useAppContext()
  const { header } = content[language]
  const themeLabel = header.themeLabels[theme]
  const switchLabel = header.switchLabel
  const toggleDotClass =
    theme === 'dark'
      ? 'after:left-[22px] max-[620px]:after:left-[20px]'
      : 'after:left-[4px]'

  return (
    <header className="mx-auto flex w-[min(1120px,92%)] items-center justify-between pt-[2.1rem] max-[620px]:justify-end max-[620px]:pt-[0.8rem]">
      <div />
      <div className="mt-[0.2rem] flex items-center gap-[0.85rem] text-[0.875rem] font-bold tracking-[0.1em] max-[980px]:text-[0.95rem] max-[620px]:mt-[0.55rem] max-[620px]:flex-wrap max-[620px]:justify-end max-[620px]:gap-x-[0.45rem] max-[620px]:gap-y-[0.35rem] max-[620px]:text-right max-[620px]:text-[0.66rem]">
        <button
          className="inline-flex min-h-[28px] items-center gap-[0.55rem] border-0 bg-transparent p-0 text-[inherit] font-bold text-[var(--text)] max-[620px]:min-h-[22px] max-[620px]:gap-[0.4rem] max-[620px]:tracking-[0.06em]"
          onClick={toggleTheme}
        >
          <span
            className={`relative inline-block h-[22px] w-[40px] rounded-full bg-[var(--accent)] after:absolute after:top-[4px] after:h-[14px] after:w-[14px] after:rounded-full after:bg-[var(--toggle-dot)] after:transition-[left] after:duration-200 after:content-[''] max-[620px]:h-[20px] max-[620px]:w-[36px] max-[620px]:after:h-[12px] max-[620px]:after:w-[12px] ${toggleDotClass}`}
          />
          <span className="font-bold tracking-[0.1em] text-[var(--header-muted)] uppercase max-[620px]:tracking-[0.06em]">
            {themeLabel}
          </span>
        </button>
        <span className="text-[var(--header-muted)] opacity-80">|</span>
        <button
          className="inline-flex min-h-[28px] items-center gap-[0.18em] border-0 bg-transparent p-0 text-[inherit] font-bold tracking-[0.1em] text-[var(--header-muted)] max-[620px]:min-h-[22px] max-[620px]:tracking-[0.06em]"
          onClick={toggleLanguage}
        >
          {switchLabel.prefix && <span>{switchLabel.prefix}</span>}
          <span className="text-[var(--accent)]">{switchLabel.accent}</span>
          {switchLabel.suffix && <span>{switchLabel.suffix}</span>}
        </button>
      </div>
    </header>
  )
}

export default Header
