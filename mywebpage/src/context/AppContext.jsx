import { toast } from 'react-toastify'
import { content } from '../data/content'
import { useLocalStorage } from '../hooks/useLocalStorage'
import AppContext from './appContext'

export function AppProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'en')
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const toggleLanguage = () => {
    const nextLanguage = language === 'en' ? 'tr' : 'en'
    const messages = content[nextLanguage].header.toast

    setLanguage(nextLanguage)
    toast.success(messages.langChange)
  }

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const messages = content[language].header.toast

    setTheme(nextTheme)
    toast.success(nextTheme === 'dark' ? messages.darkOn : messages.darkOff)
  }

  const value = {
    language,
    theme,
    toggleLanguage,
    toggleTheme,
  }

  return (
    <AppContext.Provider value={value}>
      <div className={`theme-${theme}`}>{children}</div>
    </AppContext.Provider>
  )
}
