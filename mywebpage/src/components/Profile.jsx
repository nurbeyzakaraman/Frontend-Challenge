import { useAppContext } from '../context/appContext'
import { content } from '../data/content'

function Profile() {
  const { language } = useAppContext()
  const { profile } = content[language]

  return (
    <section className="profile">
      <div className="section-width">
        <h2>{profile.title}</h2>

        <div className="profile-grid">
          <article className="profile-card">
            <h3>{profile.basicTitle}</h3>
            <ul className="profile-list">
              {profile.basicInfo.map((item) => (
                <li key={item.label}>
                  <span className="profile-label">{item.label}</span>
                  <span className="profile-value">{item.value}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="about-card">
            <h3>{profile.aboutTitle}</h3>
            <p>{profile.aboutText}</p>
            <p>{profile.aboutText2}</p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Profile
