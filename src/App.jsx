import { useState } from 'react'
import './App.css'
import portfolioProjectImage from './assets/project-portfolio.svg'
import shoppingProjectImage from './assets/project-shopping.svg'
import movieProjectImage from './assets/project-movie.svg'

const profileImage =
  'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=900&q=80'

const skills = [
  { name: 'HTML', description: '웹 문서의 구조와 접근성을 설계합니다.', level: 40 },
  { name: 'CSS', description: '반응형 레이아웃과 UI를 구현합니다.', level: 40 },
  { name: 'JavaScript', description: '사용자 상호작용과 기능을 개발합니다.', level: 40 },
  { name: 'React', description: '재사용 가능한 컴포넌트를 만듭니다.', level: 40 },
  { name: 'Vite', description: '빠른 프론트엔드 개발 환경을 구성합니다.', level: 40 },
  { name: 'Figma', description: 'UI/UX 흐름과 화면을 설계합니다.', level: 85 },
  { name: 'Git', description: '변경 사항과 협업 이력을 관리합니다.', level: 40 },
  { name: 'GitHub', description: '코드를 공유하고 협업을 진행합니다.', level: 40 },
]

const projects = [
  {
    title: 'React Portfolio',
    description: 'React와 Vite로 제작한 개인 포트폴리오 웹사이트입니다.',
    image: portfolioProjectImage,
    skills: 'React · Vite · CSS',
    demo: null,
    github: null,
  },
  {
    title: 'Shopping Web App',
    description: '상품을 탐색하고 장바구니에 담을 수 있는 쇼핑 웹 앱입니다.',
    image: shoppingProjectImage,
    skills: 'React · JavaScript · REST API',
    demo: null,
    github: null,
  },
  {
    title: 'Movie Search App',
    description: '영화 정보를 검색하고 상세 내용을 확인할 수 있는 앱입니다.',
    image: movieProjectImage,
    skills: 'React · API · CSS Grid',
    demo: null,
    github: null,
  },
]

const experiences = [
  {
    year: '2026.07',
    title: 'UI/UX Design Project',
    description: 'Figma를 활용한 웹앱 UI/UX 기획 및 디자인',
  },
  {
    year: '2026.08',
    title: 'React Frontend Project',
    description: 'React와 Vite를 활용한 웹 애플리케이션 제작',
  },
  {
    year: '2026.08',
    title: 'Web Publishing',
    description: 'HTML, CSS, JavaScript 기반 반응형 웹 제작',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  const handleMenuToggle = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app container">
      <header className="app-header">
        <a className="site-logo" href="#hero">
          UHA PORTFOLIO
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={handleMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          id="main-navigation"
          className={`site-nav${isMenuOpen ? ' site-nav-open' : ''}`}
          aria-label="Main navigation"
        >
          <a href="#hero" onClick={handleMenuItemClick}>Home</a>
          <a href="#about" onClick={handleMenuItemClick}>About</a>
          <a href="#skills" onClick={handleMenuItemClick}>Skills</a>
          <a href="#projects" onClick={handleMenuItemClick}>Projects</a>
          <a href="#contact" onClick={handleMenuItemClick}>Contact</a>
        </nav>
      </header>

      <main className="app-content">
        <section id="hero" className="portfolio-section hero-section">
          <div className="hero-copy">
            <p className="section-label">Frontend Developer</p>
            <h1 className="hero-title">
              안녕하세요.
              <br />
              사용자 경험을 생각하며 구현하는
              <br />
              <strong>Frontend Developer 유하영</strong>입니다.
            </h1>
            <p className="hero-description">
              React와 JavaScript를 활용하여
              <br />
              사용하기 편리하고 직관적인 웹 서비스를 만드는 것을 좋아합니다.
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#projects">
                프로젝트 보기
              </a>
              <a className="hero-button hero-button-secondary" href="#contact">
                연락하기
              </a>
            </div>
          </div>

          <div className="profile-card">
            <img
              className="profile-image"
              src={profileImage}
              alt="유하영 프로필"
            />
          </div>
        </section>

        <section id="about" className="portfolio-section about-section">
          <div className="about-copy">
            <p className="section-label">01 / About</p>
            <h2 className="section-title">ABOUT ME</h2>
            <p className="about-description">
              새로운 기술을 배우고 실제 결과물로 구현하는 것을 좋아하는
              프론트엔드 개발자입니다.
              <br />
              UI/UX 디자인부터 React 기반 웹 개발까지 사용자 관점에서
              고민하며 작업합니다.
            </p>
          </div>

          <article className="about-card" aria-label="유하영 개인 정보">
            <h3 className="about-card-title">Profile</h3>
            <dl className="about-details">
              <div className="about-detail">
                <dt>Name</dt>
                <dd>유하영</dd>
              </div>
              <div className="about-detail">
                <dt>Position</dt>
                <dd>Frontend Developer</dd>
              </div>
              <div className="about-detail">
                <dt>Focus</dt>
                <dd>React / UI·UX / AI</dd>
              </div>
              <div className="about-detail">
                <dt>Location</dt>
                <dd>Seoul, Korea</dd>
              </div>
            </dl>
          </article>
        </section>

        <section id="skills" className="portfolio-section">
          <p className="section-label">02</p>
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-card-header">
                  <h3>{skill.name}</h3>
                  <span>{skill.level}%</span>
                </div>
                <p>{skill.description}</p>
                <progress
                  className="skill-progress"
                  value={skill.level}
                  max="100"
                  aria-label={`${skill.name} 숙련도 ${skill.level}%`}
                />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="portfolio-section projects-section">
          <p className="section-label">03</p>
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-image-wrap">
                  <img
                    className="project-image"
                    src={project.image}
                    alt={`${project.title} 프로젝트 미리보기`}
                  />
                </div>
                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-technologies">{project.skills}</p>
                  <div className="project-actions">
                    {project.demo ? (
                      <a
                        className="project-button project-button-primary"
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        프로젝트 보기
                      </a>
                    ) : (
                      <span
                        className="project-button project-button-primary project-button-disabled"
                        aria-disabled="true"
                      >
                        프로젝트 보기
                      </span>
                    )}
                    {project.github ? (
                      <a
                        className="project-button project-button-secondary"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    ) : (
                      <span
                        className="project-button project-button-secondary project-button-disabled"
                        aria-disabled="true"
                      >
                        GitHub
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="portfolio-section experience-section">
          <p className="section-label">04</p>
          <h2 className="section-title">Experience</h2>
          <div className="experience-timeline" aria-label="교육과 프로젝트 경력">
            {experiences.map((experience) => (
              <article className="timeline-item" key={experience.year}>
                <time className="timeline-year" dateTime={experience.year}>
                  {experience.year}
                </time>
                <span className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="portfolio-section contact-section">
          <div className="contact-intro">
            <p className="section-label">05 / Contact</p>
            <h2 className="section-title">LET'S WORK TOGETHER</h2>
            <p className="contact-description">
              프로젝트와 협업에 관심이 있으시면 언제든지 연락해주세요.
            </p>
            <div className="contact-links" aria-label="연락 정보">
              <a href="mailto:yuhy0118@gmail.com">
                <span>Email</span>
                yuhy0118@gmail.com
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                github.com
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >
            <div className="form-field">
              <label htmlFor="contact-name">이름</label>
              <input
                id="contact-name"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">이메일</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">메시지</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                required
              />
            </div>
            <button type="submit" className="contact-submit">
              메시지 보내기
            </button>
          </form>
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2026 UHA Portfolio. All Rights Reserved.</p>
        <nav className="footer-links" aria-label="Footer links">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:yuhy0118@gmail.com">Email</a>
        </nav>
      </footer>
    </div>
  )
}

export default App
