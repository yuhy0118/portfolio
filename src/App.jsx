import { useState } from 'react'
import './App.css'
import profileImage from './assets/profile-cutout.png'

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

// 숙련도 임시 매핑: 기존 40 → Intermediate, 85 → Advanced. 실제 수준에 맞게 level을 변경하세요.
const skillLevelValues = { Basic: 1, Intermediate: 2, Advanced: 3 }

const skills = [
  { name: 'HTML', description: '웹 문서의 구조와 접근성을 설계합니다.', level: 'Intermediate' },
  { name: 'CSS', description: '반응형 레이아웃과 UI를 구현합니다.', level: 'Intermediate' },
  { name: 'JavaScript', description: '사용자 상호작용과 기능을 개발합니다.', level: 'Intermediate' },
  { name: 'React', description: '재사용 가능한 컴포넌트를 만듭니다.', level: 'Intermediate' },
  { name: 'Vite', description: '빠른 프론트엔드 개발 환경을 구성합니다.', level: 'Intermediate' },
  { name: 'Figma', description: 'UI/UX 흐름과 화면을 설계합니다.', level: 'Advanced' },
  { name: 'Git', description: '변경 사항과 협업 이력을 관리합니다.', level: 'Intermediate' },
  { name: 'GitHub', description: '코드를 공유하고 협업을 진행합니다.', level: 'Intermediate' },
]

// VibeFest 설정: URL과 대표 이미지 경로는 여기에서 교체합니다.
// 대표 이미지: public/projects/vibefest.png
// imagePath는 public 폴더 기준 상대 경로입니다. 배포 경로는 자동으로 적용됩니다.
const featuredProject = {
  title: 'VibeFest',
  subtitle: 'Festival Discovery & Schedule Management Platform',
  description: [
    '전국에서 열리는 다양한 축제 정보를 한곳에서 탐색하고, 사용자의 관심과 취향에 맞는 축제를 찾을 수 있도록 설계한 페스티벌 플랫폼입니다.',
    '관심 있는 축제를 저장하고 캘린더와 알림을 통해 일정까지 관리할 수 있도록 구성했습니다.',
  ],
  features: [
    { title: 'DISCOVER', description: '취향과 조건에 맞는 축제 탐색' },
    { title: 'SAVE', description: '관심 있는 축제 저장' },
    { title: 'PLAN', description: '캘린더와 알림을 통한 일정 관리' },
  ],
  tags: ['UI/UX', 'Figma', 'Responsive Web'],
  imagePath: 'projects/vibefest.png',
  liveUrl: '',
  detailUrl: '',
}

// 기간 · 실제 작업명 · 담당/작업 내용. VibeFest의 기간은 확인 후 직접 연결하세요.
const experiences = [
  {
    period: '2026.07',
    title: 'Figma 웹앱 UI/UX 기획 및 디자인',
    work: '웹앱 서비스 기획 · Figma를 활용한 UI/UX 디자인',
  },
  {
    period: '2026.08',
    title: 'React · Vite 웹 애플리케이션 제작',
    work: 'React와 Vite를 활용한 웹 애플리케이션 구현',
  },
  {
    period: '2026.08',
    title: '반응형 웹 퍼블리싱',
    work: 'HTML · CSS · JavaScript 기반 반응형 웹 제작',
  },
]

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitState, setSubmitState] = useState('idle')
  const [submitFeedback, setSubmitFeedback] = useState('')

  const navItems = [
    { href: '#about', label: 'ABOUT' },
    { href: '#projects', label: 'PROJECT' },
    { href: '#skills', label: 'SKILL' },
    { href: '#experience', label: 'EXPERIENCE' },
    { href: '#contact', label: 'CONTACT' },
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitState === 'sending') return
    const values = { name: name.trim(), email: email.trim(), message: message.trim() }
    if (!values.name || !values.email || !values.message) {
      setSubmitState('error')
      setSubmitFeedback('이름, 이메일, 메시지를 모두 입력해 주세요.')
      return
    }
    setSubmitState('sending')
    setSubmitFeedback('문의를 보내고 있습니다.')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 20000)
    try {
      const response = await fetch('https://formsubmit.co/ajax/yuhy0118@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          ...values,
          _subject: '[포트폴리오 문의] ' + values.name,
          _replyto: values.email,
          _template: 'table',
          _url: window.location.href,
        }),
      })
      const result = await response.json()
      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error('Submission rejected')
      }
      setSubmitState('success')
      setSubmitFeedback('문의가 접수되었습니다. 확인 후 이메일로 답변드리겠습니다.')
      setName('')
      setEmail('')
      setMessage('')
    } catch (error) {
      setSubmitState('error')
      setSubmitFeedback(error.name === 'AbortError'
        ? '응답이 지연되어 접수 여부를 확인하지 못했습니다. 잠시 후 다시 시도하거나 이메일로 연락해 주세요.'
        : '문의 접수를 확인하지 못했습니다. 다시 시도하거나 yuhy0118@gmail.com으로 연락해 주세요.')
    } finally {
      clearTimeout(timeout)
    }
  }

  const handleMenuToggle = () => {
    setIsMenuOpen((isOpen) => !isOpen)
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="app container">
      <header className="app-header" onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          setIsMenuOpen(false)
          document.querySelector('.menu-toggle')?.focus()
        }
      }}>
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
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="app-content">
        <section id="hero" className="portfolio-section hero-section">
          <div className="hero-copy">
            <p className="hero-eyebrow">UI/UX DESIGNER · PORTFOLIO</p>
            <h1 className="hero-title">
              안녕하세요.
              <br />
              사용자의 경험을 설계하는
              <br />
              <strong>UI/UX Designer 유하영</strong>입니다.
            </h1>
            <p className="hero-description">
              사용자 관점에서 문제를 발견하고,
              <br />
              기획부터 UI 디자인과 웹 구현까지 연결합니다.
            </p>
            <div className="hero-actions">
              <a className="hero-button hero-button-primary" href="#projects">
                프로젝트 보기
              </a>
              <a className="hero-button hero-button-secondary" href="#about">About Me</a>
            </div>
            <p className="hero-keywords" aria-label="주요 역량">UI/UX · Figma · React</p>
          </div>

          <div className="profile-card">
            <div className="profile-person-group">
            <img
              className="profile-image"
              decoding="async"
              src={profileImage}
              alt="유하영 프로필"
            />
            <span className="profile-signature" aria-hidden="true">Ha Young</span>
            </div>
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
            <div className="about-description">
              <p className="about-lead">디자인과 개발 사이의 간극을 줄이고 실현 가능한 경험을 만드는 디자이너입니다.</p>
              <p>화면 기획부터 직관적인 UI 설계까지 개발자와의 원활한 소통으로 결과물을 만듭니다.</p>
            </div>
          </div>

          <article className="about-card" aria-label="유하영 개인 정보">
            <h3 className="about-card-title">프로필</h3>
            <dl className="about-details">
              <div className="about-detail">
                <dt>이름</dt>
                <dd>유하영</dd>
              </div>
              <div className="about-detail">
                <dt>직무</dt>
                <dd>UI/UX Designer</dd>
              </div>
              <div className="about-detail">
                <dt>관심 분야</dt>
                <dd>UI/UX Design · Web Design · Front-End · AI</dd>
              </div>
              <div className="about-detail">
                <dt>사용 도구</dt>
                <dd>Figma · React · Git</dd>
              </div>
              <div className="about-detail">
                <dt>활동 지역</dt>
                <dd>서울, 대한민국</dd>
              </div>
            </dl>
          </article>
        </section>

        <section id="projects" className="portfolio-section projects-section">
          <p className="section-label" aria-label="프로젝트 섹션">
            <span className="section-label-icon" aria-hidden="true">
              {sectionLabelIcons.projects}
            </span>
          </p>
          <h2 className="section-title">PROJECT</h2>
          <p className="section-description">사용자 경험을 고민하며 기획하고 구현한 프로젝트입니다.</p>
          <article className="featured-project" aria-labelledby="vibefest-title">
            <div className="featured-project-visual">
              <img
                className="featured-project-image"
                src={import.meta.env.BASE_URL + featuredProject.imagePath}
                alt="불꽃놀이와 관객이 함께하는 페스티벌 공연 현장"
                loading="lazy"
                decoding="async"
              />
              <div className="featured-project-overlay">
                <div className="featured-project-overlay-copy">
                  <span className="preview-overline">FESTIVAL DISCOVERY</span>
                  <span className="preview-title">VibeFest</span>
                </div>
              </div>
            </div>
            <div className="featured-project-content">
              <span className="featured-project-label">FEATURED PROJECT · 대표 프로젝트</span>
              <h3 id="vibefest-title">{featuredProject.title}</h3>
              <p className="featured-project-subtitle">{featuredProject.subtitle}</p>
              <div className="featured-project-description">
                {featuredProject.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <div className="featured-project-features">
                <h4>핵심 사용자 경험</h4>
                                                <ul className="vibefest-experiences">
                  {featuredProject.features.map((feature) => (
                    <li key={feature.title}><strong>{feature.title}</strong><span>{feature.description}</span></li>
                  ))}
                </ul>
              </div>
              <ul className="featured-project-tags" aria-label="프로젝트 태그">
                {featuredProject.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
              <div className="featured-project-actions">
                {[
                  { url: featuredProject.liveUrl, label: '사이트 보기 ↗', style: 'primary' },
                  { url: featuredProject.detailUrl, label: '기획 과정 보기 →', style: 'secondary' },
                ].map((action) => action.url.trim() ? (
                  <a key={action.style} className={`project-button project-button-${action.style}`} href={action.url.trim()} target="_blank" rel="noopener noreferrer">{action.label}</a>
                ) : (
                  <button key={action.style} type="button" className={`project-button project-button-${action.style}`} disabled title="링크 준비 중">{action.label}</button>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="skills" className="portfolio-section">
          <p className="section-label" aria-label="스킬 섹션">
            <span className="section-label-icon" aria-hidden="true">
              {sectionLabelIcons.skills}
            </span>
          </p>
          <h2 className="section-title">SKILLS</h2>
          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.name}>
                <div className="skill-visual" aria-hidden="true">
                  {skillIllustrations[skill.name]}
                </div>
                <div className="skill-card-content">
                  <div className="skill-card-header">
                    <h3>{skill.name}</h3>
                    <span className="skill-level-badge">{skill.level === 'Intermediate' ? '중' : skill.level === 'Advanced' ? '상' : skill.level}</span>
                  </div>
                  <p>{skill.description}</p>
                  <progress
                    className="skill-progress"
                    value={skillLevelValues[skill.level]}
                    max="3"
                    aria-label={`${skill.name} 숙련도`} aria-valuetext={skill.level === 'Intermediate' ? '중' : skill.level === 'Advanced' ? '상' : skill.level}
                  />
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
          <h2 className="section-title">EXPERIENCE</h2>
          <p className="section-description">디자인과 웹 구현 역량을 쌓아온 프로젝트 경험입니다.</p>
          <div className="experience-timeline" aria-label="프로젝트 경험 타임라인">
            {experiences.map((experience) => (
              <article className="timeline-item" key={`${experience.period}-${experience.title}`}>
                <time aria-label="기간" className="timeline-year" dateTime={experience.period.replace('.', '-')}>
                  {experience.period}
                </time>
                <span className="timeline-marker" aria-hidden="true" />
                <div className="timeline-content">
                  <h3>{experience.title}</h3>
                  <p className="timeline-work"><span className="timeline-work-label">담당 / 작업 내용</span>{experience.work}</p>
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
            <h2 className="section-title contact-closing-title"><span>LET'S CREATE</span><span>BETTER EXPERIENCES.</span></h2>
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
                href="https://github.com/yuhy0118" target="_blank" rel="noopener noreferrer"
              >
                <span>GitHub</span>
                github.com/yuhy0118
              </a>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            aria-label="문의 작성"
            aria-busy={submitState === 'sending'}
          >
            <div className="form-field">
              <label htmlFor="contact-name">이름</label>
              <input
                id="contact-name"
                autoComplete="name"
                placeholder="이름을 입력해 주세요"
                name="name"
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
                disabled={submitState === 'sending'}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-email">이메일</label>
              <input
                id="contact-email"
                autoComplete="email"
                placeholder="이메일 주소를 입력해 주세요"
                name="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                disabled={submitState === 'sending'}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="contact-message">메시지</label>
              <textarea
                id="contact-message"
                placeholder="문의 내용을 작성해 주세요"
                name="message"
                rows="5"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                disabled={submitState === 'sending'}
                required
              />
            </div>
            <button type="submit" className="contact-submit" disabled={submitState === 'sending'}>
              {submitState === 'sending' ? '보내는 중…' : '문의하기'}
              <span className="submit-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d="M2.5 12.5 21 4l-5 15-4.5-5.5-9-1.5Z" />
                  <path d="M21 4 11 14" />
                </svg>
              </span>
            </button>
            <p className={`contact-feedback contact-feedback-${submitState}`} role="status" aria-live="polite" aria-atomic="true">{submitFeedback}</p>
          </form>
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2026 UHA Portfolio. All Rights Reserved.</p>
        <nav className="footer-links" aria-label="Footer links">
          <a
            href="https://github.com/yuhy0118"
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
