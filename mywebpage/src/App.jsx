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
      <div className="app">
        <ToastContainer
          autoClose={3000}
          closeOnClick
          draggable={false}
          newestOnTop
          pauseOnHover
          position="top-right"
          toastClassName="app-toast"
          bodyClassName="app-toast-body"
          progressClassName="app-toast-progress"
        />
        <main>
          <section className="intro-screen">
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
