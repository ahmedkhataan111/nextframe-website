import { useState, useEffect } from 'react'
import { 
  Palette, 
  Video, 
  Film, 
  PenTool, 
  MonitorPlay, 
  Code,
  Phone,
  Mail
} from 'lucide-react'
import en from './i18n/en.json'
import ar from './i18n/ar.json'

function App() {
  const [lang, setLang] = useState('ar')
  const [portfolio, setPortfolio] = useState([])
  const [selectedImage, setSelectedImage] = useState(null)
  
  const translations = lang === 'en' ? en : ar;
  const isRtl = lang === 'ar';

  useEffect(() => {
    // Set document direction
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    
    // Fetch portfolio from backend
    fetch('http://localhost:5000/api/portfolio')
      .then(res => res.json())
      .then(data => {
        if(Array.isArray(data)) {
          setPortfolio(data);
        }
      })
      .catch(err => console.error("Error fetching portfolio:", err))
  }, [lang, isRtl])

  const toggleLang = () => {
    setLang(lang === 'ar' ? 'en' : 'ar')
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo d-flex align-items-center" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
             <img src="/logo.png" alt="NextFrame Logo" style={{ height: '40px', width: 'auto' }} />
             <span className="text-gradient">NextFrame</span>
          </div>
          
          <div className="nav-links">
            <a href="#home">{translations.nav_home}</a>
            <a href="#services">{translations.nav_services}</a>
            <a href="#portfolio">{translations.nav_portfolio}</a>
            <a href="#contact">{translations.nav_contact}</a>
          </div>

          <button className="lang-btn" onClick={toggleLang}>
            {lang === 'ar' ? 'English' : 'عربي'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>
            {isRtl ? 'نصنع ' : 'Crafting '} 
            <span className="text-gradient">{isRtl ? 'رؤيتك' : 'Your Vision'}</span> 
            <br />
            {isRtl ? ' باحترافية وتميز' : ' with Professional Excellence'}
          </h1>
          <p>{translations.hero_subtitle}</p>
          <a href="#portfolio" className="cta-btn">{translations.hero_cta}</a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <div className="container">
          <h2 className="section-title text-gradient">{translations.services_title}</h2>
          <div className="services-grid">
            
            <div className="service-card">
              <Palette className="service-icon" />
              <h3>{translations.service_graphic}</h3>
              <p>{translations.service_desc_graphic}</p>
            </div>

            <div className="service-card">
              <Video className="service-icon" />
              <h3>{translations.service_video}</h3>
              <p>{translations.service_desc_video}</p>
            </div>

            <div className="service-card">
              <Film className="service-icon" />
              <h3>{translations.service_editing}</h3>
              <p>{translations.service_desc_editing}</p>
            </div>

            <div className="service-card">
              <PenTool className="service-icon" />
              <h3>{translations.service_content}</h3>
              <p>{translations.service_desc_content}</p>
            </div>

            <div className="service-card">
              <MonitorPlay className="service-icon" />
              <h3>{translations.service_media}</h3>
              <p>{translations.service_desc_media}</p>
            </div>

            <div className="service-card">
              <Code className="service-icon" />
              <h3>{translations.service_web}</h3>
              <p>{translations.service_desc_web}</p>
            </div>

          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio">
        <div className="container">
          <h2 className="section-title text-gradient">{translations.portfolio_title}</h2>
          
          {portfolio.length > 0 ? (
            <div className="portfolio-grid">
              {portfolio.map((imgUrl, idx) => (
                <div key={idx} className="portfolio-item" onClick={() => setSelectedImage(imgUrl)} style={{ cursor: 'pointer' }}>
                  <img src={imgUrl} alt={`Portfolio item ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-portfolio">
              <p>{translations.portfolio_empty}</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <div className="container">
          <h2 className="section-title text-gradient">{translations.contact_title}</h2>
          <div className="contact-grid">
            
            <a href="https://wa.me/201097863929" target="_blank" rel="noreferrer" className="contact-card">
              <Phone className="contact-icon" />
              <h4>{translations.contact_phone}</h4>
              <p>+201097863929</p>
            </a>

            <a href="mailto:nextframe2000@gmail.com" className="contact-card">
              <Mail className="contact-icon" />
              <h4>{translations.contact_email}</h4>
              <p>nextframe2000@gmail.com</p>
            </a>

            <a href="https://www.instagram.com/n3xt_fr4m3.co" target="_blank" rel="noreferrer" className="contact-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              <h4>{translations.contact_instagram}</h4>
              <p>@n3xt_fr4m3.co</p>
            </a>

            <a href="https://www.facebook.com/profile.php?id=61581584460979" target="_blank" rel="noreferrer" className="contact-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              <h4>{translations.contact_facebook}</h4>
              <p>NextFrame Page</p>
            </a>

          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <span className="lightbox-close" onClick={() => setSelectedImage(null)}>&times;</span>
          <img 
            src={selectedImage} 
            alt="Fullscreen Portfolio" 
            className="lightbox-img" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}

      <footer>
        <p>{translations.footer_text}</p>
      </footer>
    </div>
  )
}

export default App
