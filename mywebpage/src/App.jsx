import { ToastContainer } from 'react-toastify'
import { AppProvider } from './context/AppContext.jsx'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Contact from './components/Contact'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

function App() {
  return (
    <AppProvider>
      <div className="relative overflow-hidden before:pointer-events-none before:absolute before:left-[clamp(90px,29.2vw,421px)] before:top-[-56px] before:h-[111px] before:w-[111px] before:rounded-full before:bg-[var(--shape-fill)] before:content-[''] max-[620px]:before:left-[14%] max-[620px]:before:top-[-30px] max-[620px]:before:h-[52px] max-[620px]:before:w-[52px]">
        <ToastContainer
          autoClose={3000}
          closeOnClick
          draggable={false}
          newestOnTop
          pauseOnHover
          position="top-right"
          toastClassName={({ type }) =>
            [
              'min-h-[60px] rounded-[14px] bg-[var(--toast-bg)] shadow-[0_16px_34px_var(--toast-shadow)] font-[var(--font-inter)] max-[620px]:min-h-[58px]',
              type === 'error' ? '!text-[var(--toast-error)]' : '!text-[var(--toast-text)]',
            ].join(' ')
          }
          bodyClassName={() =>
            'm-0 px-0.5 py-0.5 font-[var(--font-playfair)] text-[0.92rem] font-semibold leading-[1.35] max-[620px]:text-[0.82rem]'
          }
          progressClassName={() =>
            'bg-[linear-gradient(90deg,#5660ff_0%,#cf5cff_52%,#ffcf99_100%)]'
          }
        />
        <main>
          <section className="flex min-h-screen flex-col bg-[var(--bg)]">
            <Header />
            <Hero />
          </section>
          <Skills />
          <Profile />
          <Projects />
          <Contact />
        </main>
      </div>
    </AppProvider>
  )
}

export default App
