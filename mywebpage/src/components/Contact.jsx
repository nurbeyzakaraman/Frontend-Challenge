import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Contact() {
  const { language, theme } = useAppContext()
  const { contact } = content[language]
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleContactRequest = async () => {
    if (isSubmitting) return

    setIsSubmitting(true)

    try {
      await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        {
          name: 'Nurbeyza Karaman',
          email: 'nurbbkaraman@gmail.com',
          language,
          theme,
          requestedAt: new Date().toISOString(),
          message: contact.cta.requestMessage,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      toast.success(contact.cta.successMessage)
    } catch {
      toast.error(contact.cta.errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

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

          <button className="contact-cta" onClick={handleContactRequest} disabled={isSubmitting}>
            {isSubmitting ? contact.cta.loadingLabel : contact.cta.buttonLabel}
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Contact
