import { useState } from 'react'
import './App.css'
import portfolioProjectImage from './assets/project-portfolio.svg'
import shoppingProjectImage from './assets/project-shopping.svg'
import movieProjectImage from './assets/project-movie.svg'
import profileImage from './assets/profile.jpg'

const skillIllustrations = {
  HTML: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <rect x="14" y="18" width="152" height="74" rx="12" fill="rgba(255,255,255,0.15)" />
      <path d="M34 74V36h114v38" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="6" strokeLinecap="round" />
      <path d="M55 54h18M55 66h34M90 54h26M90 66h34M126 54h18M126 66h19" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round" />
      <path d="M58 26 34 86h24l8-18h20l8 18h24L104 26h-22l-8 18h-12l-8-18H58Z" fill="rgba(255,255,255,0.2)" />
      <path d="M36 18h108" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  CSS: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <rect x="22" y="20" width="136" height="70" rx="12" fill="rgba(255,255,255,0.12)" />
      <path d="M42 38h96M42 52h66M42 66h52" stroke="rgba(255,255,255,0.9)" strokeWidth="6" strokeLinecap="round" />
      <rect x="116" y="38" width="28" height="28" rx="6" fill="rgba(255,255,255,0.2)" />
      <path d="M128 44v16M120 52h16" stroke="rgba(255,255,255,0.9)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="64" cy="82" r="9" fill="rgba(255,255,255,0.2)" />
      <circle cx="88" cy="82" r="9" fill="rgba(255,255,255,0.3)" />
      <circle cx="112" cy="82" r="9" fill="rgba(255,255,255,0.2)" />
    </svg>
  ),
  JavaScript: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <rect x="26" y="18" width="128" height="74" rx="12" fill="rgba(255,255,255,0.12)" />
      <path d="M47 66V40h18l18 20V40h18v26H83L65 46v20H47Z" fill="rgba(255,255,255,0.22)" />
      <path d="M98 40h18l18 25V40h18v30H134l-18-24v24H98Z" fill="rgba(255,255,255,0.26)" />
      <circle cx="58" cy="80" r="7" fill="rgba(255,255,255,0.75)" />
      <circle cx="82" cy="80" r="7" fill="rgba(255,255,255,0.55)" />
      <circle cx="106" cy="80" r="7" fill="rgba(255,255,255,0.75)" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <circle cx="90" cy="55" r="22" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="5" />
      <ellipse cx="90" cy="55" rx="58" ry="24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="5" transform="rotate(0 90 55)" />
      <ellipse cx="90" cy="55" rx="58" ry="24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="5" transform="rotate(60 90 55)" />
      <ellipse cx="90" cy="55" rx="58" ry="24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="5" transform="rotate(120 90 55)" />
      <circle cx="90" cy="55" r="6" fill="rgba(255,255,255,0.9)" />
      <path d="M52 82c16-10 28-14 38-14s22 4 38 14" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  Vite: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <path d="M34 78 90 22l56 56-22 8-34-24-34 24-22-8Z" fill="rgba(255,255,255,0.22)" />
      <path d="M90 24v60" stroke="rgba(255,255,255,0.9)" strokeWidth="5" strokeLinecap="round" />
      <path d="M58 64h64" stroke="rgba(255,255,255,0.8)" strokeWidth="5" strokeLinecap="round" />
      <path d="M48 84h84" stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="90" cy="44" r="10" fill="rgba(255,255,255,0.7)" />
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <circle cx="62" cy="40" r="18" fill="rgba(255,255,255,0.75)" />
      <circle cx="90" cy="40" r="18" fill="rgba(255,255,255,0.55)" />
      <circle cx="118" cy="40" r="18" fill="rgba(255,255,255,0.65)" />
      <circle cx="62" cy="68" r="18" fill="rgba(255,255,255,0.35)" />
      <circle cx="90" cy="68" r="18" fill="rgba(255,255,255,0.5)" />
      <circle cx="118" cy="68" r="18" fill="rgba(255,255,255,0.45)" />
      <path d="M52 22h76" stroke="rgba(255,255,255,0.5)" strokeWidth="4" strokeLinecap="round" />
    </svg>
  ),
  Git: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <path d="M42 76V34h30v42" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M72 34h38c14 0 24 10 24 24s-10 24-24 24H72" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="42" cy="82" r="10" fill="rgba(255,255,255,0.8)" />
      <circle cx="72" cy="82" r="10" fill="rgba(255,255,255,0.8)" />
      <path d="M96 58h30" stroke="rgba(255,255,255,0.8)" strokeWidth="6" strokeLinecap="round" />
    </svg>
  ),
  GitHub: (
    <svg viewBox="0 0 180 110" aria-hidden="true">
      <circle cx="90" cy="55" r="28" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.9)" strokeWidth="5" />
      <path d="M90 34v42M66 55h48" stroke="rgba(255,255,255,0.9)" strokeWidth="5" strokeLinecap="round" />
      <path d="M76 80h28" stroke="rgba(255,255,255,0.7)" strokeWidth="4" strokeLinecap="round" />
      <circle cx="58" cy="42" r="8" fill="rgba(255,255,255,0.35)" />
      <circle cx="122" cy="42" r="8" fill="rgba(255,255,255,0.35)" />
      <circle cx="90" cy="82" r="8" fill="rgba(255,255,255,0.35)" />
    </svg>
  ),
}

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

  const navItems = [
    {
      href: '#hero',
      label: '홈',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V20h14V9.5" />
          <path d="M10 20v-6h4v6" />
        </svg>
      ),
    },
    {
      href: '#about',
      label: '소개',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c1.5-3 4.2-4.5 8-4.5s6.5 1.5 8 4.5" />
        </svg>
      ),
    },
    {
      href: '#skills',
      label: '스킬',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 18.5V6.5A1.5 1.5 0 0 1 6.5 5H17a2 2 0 0 1 2 2v11.5A1.5 1.5 0 0 1 17.5 20H6.5A1.5 1.5 0 0 1 5 18.5Z" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h4" />
        </svg>
      ),
    },
    {
      href: '#projects',
      label: '프로젝트',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14.5 4.5 19.5 9.5" />
          <path d="M5 17.5 14.5 8l3 3L8 20.5 5 17.5Z" />
          <path d="M4 18.5 3.5 20l1.5.5 1.5-1.5" />
          <path d="M15.5 3.5l5 5" />
        </svg>
      ),
    },
    {
      href: '#experience',
      label: '경력',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 18V9" />
          <path d="M12 18V5" />
          <path d="M17 18v-7" />
          <path d="M4 18h16" />
        </svg>
      ),
    },
    {
      href: '#contact',
      label: '문의',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
          <path d="m5 7 7 5 7-5" />
        </svg>
      ),
    },
  ]

  const sectionLabelIcons = {
    about: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c1.5-3 4.2-4.5 8-4.5s6.5 1.5 8 4.5" />
      </svg>
    ),
    skills: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 18.5V6.5A1.5 1.5 0 0 1 6.5 5H17a2 2 0 0 1 2 2v11.5A1.5 1.5 0 0 1 17.5 20H6.5A1.5 1.5 0 0 1 5 18.5Z" />
        <path d="M9 9h6" />
        <path d="M9 13h6" />
        <path d="M9 17h4" />
      </svg>
    ),
    projects: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.5 4.5 19.5 9.5" />
        <path d="M5 17.5 14.5 8l3 3L8 20.5 5 17.5Z" />
        <path d="M4 18.5 3.5 20l1.5.5 1.5-1.5" />
        <path d="M15.5 3.5l5 5" />
      </svg>
    ),
    experience: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7 18V9" />
        <path d="M12 18V5" />
        <path d="M17 18v-7" />
        <path d="M4 18h16" />
      </svg>
    ),
    contact: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9A2.5 2.5 0 0 1 17.5 19h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
        <path d="m5 7 7 5 7-5" />
      </svg>
    ),
  }

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
        <a className="site-logo" href="#hero" aria-label="MY PORTFOLIO 홈으로 이동">
          <span className="site-logo-mark" aria-hidden="true">
            <svg viewBox="0 0 64 64" role="img" aria-label="UHA 로고">
              <path d="M14 18v20c0 7 5 12 12 12s12-5 12-12V18" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M28 18v26M28 31h9" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M40 18l9 26M58 18l-9 26M43 32h12" fill="none" stroke="var(--color-accent)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="site-logo-text">MY PORTFOLIO</span>
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
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={handleMenuItemClick}>
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="app-content">
        <section id="hero" className="portfolio-section hero-section">
          <div className="hero-copy">
            <h1 className="hero-title">
              안녕하세요.
              <br />
              사용자의 행동 패턴 속에서 정답을 찾는
              <br />
              <strong>Designer 유하영</strong>입니다.
            </h1>
            <p className="hero-description">
              기획자, 개발자와의 적극적인 커뮤니케이션을 통해 비즈니스 목표와 사용자 경험을 모두 충족하는 결과물을 만듭니다.
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#projects">
                프로젝트 보기
              </a>
              <a className="hero-button hero-button-secondary" href="#contact">
                문의하기
                <span className="hero-button-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M20 16.5v2.5a1.5 1.5 0 0 1-1.64 1.5A18.2 18.2 0 0 1 4.7 7.14 1.5 1.5 0 0 1 6.2 5.5h2.5a1.5 1.5 0 0 1 1.5 1.3l.4 2.9a1.5 1.5 0 0 1-.42 1.24l-1.7 1.7a13.1 13.1 0 0 0 7.2 7.2l1.7-1.7a1.5 1.5 0 0 1 1.24-.42l2.9.4a1.5 1.5 0 0 1 1.3 1.5Z" />
                    <path d="M14 3.5a8.5 8.5 0 0 1 8.5 8.5" />
                    <path d="M14 7.5a4.5 4.5 0 0 1 4.5 4.5" />
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <div className="profile-card">
            <span className="profile-tag" aria-label="Designer">
              Designer
            </span>
            <img
              className="profile-image"
              src={profileImage}
              alt="유하영 프로필"
            />
          </div>
        </section>

        <section id="about" className="portfolio-section about-section">
          <div className="about-copy">
            <p className="section-label" aria-label="소개 섹션">
              <span className="section-label-icon" aria-hidden="true">
                {sectionLabelIcons.about}
              </span>
            </p>
            <h2 className="section-title">ABOUT ME</h2>
            <p className="about-description">
              디자인과 개발 사이의 간극을 줄이고 실현 가능한 경험을 만드는
              디자이너입니다.
              <br />
              화면 기획부터 직관적인 UI 설계까지 개발자와의 원활한 소통으로
              결과물을 만듭니다.
            </p>
          </div>

          <article className="about-card" aria-label="유하영 개인 정보">
            <h3 className="about-card-title">PROFILE</h3>
            <dl className="about-details">
              <div className="about-detail">
                <dt>이름</dt>
                <dd>유하영</dd>
              </div>
              <div className="about-detail">
                <dt>직무</dt>
                <dd>Designer</dd>
              </div>
              <div className="about-detail">
                <dt>전문 분야</dt>
                <dd>React / UI·UX / AI</dd>
              </div>
              <div className="about-detail">
                <dt>활동 지역</dt>
                <dd>서울, 대한민국</dd>
              </div>
            </dl>
          </article>
        </section>

        <section id="skills" className="portfolio-section">
          <p className="section-label" aria-label="스킬 섹션">
            <span className="section-label-icon" aria-hidden="true">
              {sectionLabelIcons.skills}
            </span>
          </p>
          <h2 className="section-title">스킬</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-visual" aria-hidden="true">
                  {skillIllustrations[skill.name]}
                </div>
                <div className="skill-card-content">
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
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="portfolio-section projects-section">
          <p className="section-label" aria-label="프로젝트 섹션">
            <span className="section-label-icon" aria-hidden="true">
              {sectionLabelIcons.projects}
            </span>
          </p>
          <h2 className="section-title">프로젝트</h2>
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
          <p className="section-label" aria-label="경력 섹션">
            <span className="section-label-icon" aria-hidden="true">
              {sectionLabelIcons.experience}
            </span>
          </p>
          <h2 className="section-title">경력</h2>
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
            <p className="section-label" aria-label="문의 섹션">
              <span className="section-label-icon" aria-hidden="true">
                {sectionLabelIcons.contact}
              </span>
            </p>
            <h2 className="section-title">LET'S WORK TOGETHER</h2>
            <p className="contact-description">
              프로젝트와 협업 관련 문의는 언제나 환영입니다
              <span className="contact-heart-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M20.8 4.8a5.2 5.2 0 0 0-7.3 0L12 6.3l-1.5-1.5a5.2 5.2 0 0 0-7.3 7.3L12 20.9l8.8-8.8a5.2 5.2 0 0 0 0-7.3Z" />
                </svg>
              </span>
            </p>
            <div className="contact-links" aria-label="연락 정보">
              <a href="mailto:yuhy0118@gmail.com">
                <span>Email</span>
                yuhy0118@gmail.com
              </a>
              <a
                href="mailto:yuhy0118@gmail.com"
              >
                <span>GitHub</span>
                yuhy0118@gmail.com
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
              <label htmlFor="contact-message">요청사항</label>
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
              전송하기
              <span className="submit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M2.5 12.5 21 4l-5 15-4.5-5.5-9-1.5Z" />
                  <path d="M21 4 11 14" />
                </svg>
              </span>
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
