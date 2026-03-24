import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Header() {
  const { language, toggleLanguage, theme, toggleTheme } = useAppContext()
  const { header } = content[language]
  const themeLabel = header.themeLabels[theme]
  const switchLabel = header.switchLabel

  return (
    <header className="header section-width">
      <div />
      <div className="header-actions">
        <button className="toggle" onClick={toggleTheme}>
          <span className={`toggle-dot ${theme === 'dark' ? 'right' : ''}`} />
          <span className="toggle-label">{themeLabel}</span>
        </button>
        <span className="header-sep">|</span>
        <button className="text-button" onClick={toggleLanguage}>
          {switchLabel.prefix && <span className="lang-muted">{switchLabel.prefix}</span>}
          <span className="lang-accent">{switchLabel.accent}</span>
          {switchLabel.suffix && <span className="lang-muted">{switchLabel.suffix}</span>}
        </button>
      </div>
    </header>
  )
}

export default Header
