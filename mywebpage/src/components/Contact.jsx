import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Contact() {
  const { language } = useAppContext()
  const { contact } = content[language]

  return (
    <footer className="contact">
      <div className="section-width contact-inner">
        <div className="contact-title">
          <p>{contact.line1}</p>
          <p>{contact.line2}</p>
        </div>

        <div className="contact-side">
          <div className="contact-links">
            {contact.links.map((item) => (
              <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
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
