import axios from 'axios'
import { toast } from 'react-toastify'
import { content } from '../data/content'
import { useLocalStorage } from '../hooks/useLocalStorage'
import AppContext from './appContext'

async function submitPortfolioInterest(payload) {
  const { data } = await axios.post('https://jsonplaceholder.typicode.com/posts', payload, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return data
}

export function AppProvider({ children }) {
  const [language, setLanguage] = useLocalStorage('language', 'en')
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  const toggleLanguage = async () => {
    const nextLanguage = language === 'en' ? 'tr' : 'en'
    const messages = content[nextLanguage].header.toast

    setLanguage(nextLanguage)

    try {
      await submitPortfolioInterest({
        name: 'Nurbeyza Portfolio',
        email: 'nurbbkaraman@gmail.com',
        language: nextLanguage,
        theme,
        requestedAt: new Date().toISOString(),
        message: 'Language preference changed',
      })

      toast.success(messages.langChange)
    } catch {
      toast.error(messages.error)
    }
  }

  const toggleTheme = async () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const messages = content[language].header.toast

    setTheme(nextTheme)

    try {
      await submitPortfolioInterest({
        name: 'Nurbeyza Portfolio',
        email: 'nurbbkaraman@gmail.com',
        language,
        theme: nextTheme,
        requestedAt: new Date().toISOString(),
        message: 'Theme preference changed',
      })

      toast.success(nextTheme === 'dark' ? messages.darkOn : messages.darkOff)
    } catch {
      toast.error(messages.error)
    }
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
