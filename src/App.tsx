import { useEffect, useRef, useState } from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router'
import heroImg from './assets/hero.png'
import { portfolioItems, type PortfolioItem } from './data/portfolio'
import './App.css'

const whatsappUrl =
  'https://wa.me/77754015204?text=Здравствуйте!%20Хочу%20обсудить%20разработку%20сайта%2C%20CRM%20или%20Telegram-бота.'

const navItems = [
  { label: 'Работы', href: '/#work' },
  { label: 'Процесс', href: '/#process' },
  { label: 'Контакты', href: '/#contact' },
]

const processSteps = [
  'Разбираю задачу, аудиторию и где бизнес теряет заявки.',
  'Собираю структуру страницы, сценарий клиента и UX-логику.',
  'Делаю визуальный интерфейс, адаптив и микроанимации.',
  'Подключаю заявки, аналитику, мессенджеры, CRM или таблицы.',
]

const stackItems = ['React', 'Vite', 'TypeScript', 'WordPress', 'CRM', 'ERP', 'Telegram Bots', 'AI', 'Google Sheets']

function ScrollRestoration() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const timer = window.setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 60)

    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}

function CursorGlow() {
  const glowRef = useRef<HTMLSpanElement>(null)
  const dotRef = useRef<HTMLSpanElement>(null)
  const ringRef = useRef<HTMLSpanElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches

    if (isTouchDevice) {
      return undefined
    }

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let glowX = targetX
    let glowY = targetY
    let ringX = targetX
    let ringY = targetY
    let animationFrame = 0

    const move = (event: PointerEvent) => {
      targetX = event.clientX
      targetY = event.clientY
      setIsVisible(true)

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${targetX - 4}px, ${targetY - 4}px, 0)`
      }
    }

    const hide = () => setIsVisible(false)

    const animate = () => {
      glowX += (targetX - glowX) * 0.14
      glowY += (targetY - glowY) * 0.14
      ringX += (targetX - ringX) * 0.22
      ringY += (targetY - ringY) * 0.22

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowX - 260}px, ${glowY - 260}px, 0)`
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX - 22}px, ${ringY - 22}px, 0)`
      }

      animationFrame = window.requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', move)
    window.addEventListener('pointerleave', hide)
    animationFrame = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerleave', hide)
      window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  return (
    <div className={isVisible ? 'cursor-effects cursor-effects--visible' : 'cursor-effects'} aria-hidden="true">
      <span ref={glowRef} className="cursor-glow" />
      <span ref={ringRef} className="cursor-ring" />
      <span ref={dotRef} className="cursor-dot" />
    </div>
  )
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/#top" aria-label="Aidar.dev" onClick={closeMenu}>
        <span className="brand__mark">A</span>
        <span className="brand__text">
          <strong>Aidar.dev</strong>
          <small>Web / CRM / Bots</small>
        </span>
      </Link>

      <button
        className="menu-button"
        type="button"
        aria-label="Открыть меню"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <nav className={isMenuOpen ? 'main-nav main-nav--open' : 'main-nav'}>
        {navItems.map((item) => (
          <Link to={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Заказать проект
        </a>
      </nav>
    </header>
  )
}

function HeroMockup() {
  return (
    <div className="hero-mockup" aria-hidden="true">
      <div className="mockup-panel mockup-panel--main">
        <div className="mockup-topline">
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-hero-row">
          <div>
            <span className="mockup-label">Digital system</span>
            <strong>Launch dashboard</strong>
          </div>
          <em>Live</em>
        </div>
        <div className="mockup-chart">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
        <div className="mockup-list">
          <div>
            <i />
            <span>Website request</span>
            <b>New</b>
          </div>
          <div>
            <i />
            <span>CRM prototype</span>
            <b>UI</b>
          </div>
          <div>
            <i />
            <span>Telegram bot</span>
            <b>AI</b>
          </div>
        </div>
      </div>

      <div className="floating-card floating-card--left">
        <span>Conversion</span>
        <strong>+37%</strong>
      </div>
      <div className="floating-card floating-card--right">
        <span>Automation</span>
        <strong>24/7</strong>
      </div>
      <div className="floating-code">
        <span>status</span>
        <strong>ready_to_launch()</strong>
      </div>
      <img className="hero-asset" src={heroImg} alt="" />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="hero-section" id="top">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Independent web developer</p>
          <h1>Разрабатываем сайты, CRM/ERP системы и веб-системы</h1>
          <p className="hero-text">
            Делаем digital-продукты, которые выглядят дорого, работают и помогают получать заявки:
            <b> iOS/Android</b> приложение, лендинги, админ-панели, <b>CRM/ERP</b>, <b>Telegram/WhatsApp-боты</b> и интеграции.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Заказать проект
            </a>
            <Link className="button button--ghost" to="/#work">
              Смотреть работы
            </Link>
          </div>

          <div className="hero-proof" aria-label="Преимущества">
            <span>React</span>
            <span>Vue.js</span>
            <span>WordPress</span>
            <span>CRM системы</span>
            <span>ERP системы</span>
            <span>iOS</span>
            <span>Android</span>
          </div>
        </div>

        <HeroMockup />
      </div>
    </section>
  )
}

function StackMarquee() {
  return (
    <section className="stack-strip" aria-label="Технологии">
      <div className="stack-track">
        {[...stackItems, ...stackItems].map((item, index) => (
          <span key={`${item}-${index}`}>{item}</span>
        ))}
      </div>
    </section>
  )
}

type WorkCardProps = {
  item: PortfolioItem
  index: number
}

function WorkCard({ item, index }: WorkCardProps) {
  return (
    <Link className="work-card" to={`/project/${item.slug}`} aria-label={`Открыть проект: ${item.title}`}>
      <div className="work-card__media work-card__media--image">
        <img src={item.image} alt={item.title} loading="lazy" />
        <span>{item.category}</span>
        <strong>{String(index + 1).padStart(2, '0')}</strong>
      </div>
      <div className="work-card__content">
        <div className="work-card__meta">
          <span>{item.year}</span>
          <span>{item.category}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="work-tags" aria-label="Технологии и категории">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <span className="work-card__link-hint">Смотреть проект →</span>
      </div>
    </Link>
  )
}

function WorkSection() {
  return (
    <section className="section-pad section-soft" id="work">
      <div className="container section-head section-head--split">
        <div>
          <p className="eyebrow">Сайты, CRM/ERP системы, Telegram/WhatsApp Боты</p>
          <h2>Нашы проекты</h2>
          <p>
            
          </p>
        </div>
      </div>

      <div className="container work-grid">
        {portfolioItems.map((item, index) => (
          <WorkCard item={item} index={index} key={item.slug} />
        ))}
      </div>
    </section>
  )
}

function ProcessSection() {
  return (
    <section className="section-pad process-section" id="process">
      <div className="container process-grid">
        <div className="process-copy">
          <p className="eyebrow">Process</p>
          <h2>Дизайн должен быть красивым, но сначала он должен быть понятным</h2>
          <p>
            Поэтому я собираю страницу как систему: оффер, доверие, услуги, кейсы, процесс, CTA и путь клиента до
            заявки.
          </p>
          <Link className="text-link" to="/#contact">
            Обсудить задачу →
          </Link>
        </div>

        <ol className="process-list">
          {processSteps.map((step, index) => (
            <li key={step}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="section-pad contact-section" id="contact">
      <div className="container contact-box">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Нужен сайт, CRM/ERP или бот?</h2>
          <p>
            Напишите коротко, что нужно сделать. Можно начать с одной сильной главной страницы, а потом расширить
            проект до полноценного портфолио или системы.
          </p>
        </div>
        <div className="contact-actions">
          <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
            Написать в WhatsApp
          </a>
          <a className="button button--ghost" href="mailto:napaxiong@gmail.com">
            Email
          </a>
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main>
      <HeroSection />
      <StackMarquee />
      <WorkSection />
      <ProcessSection />
      <ContactSection />
    </main>
  )
}

function ProjectDetailPage() {
  const { slug } = useParams()
  const project = portfolioItems.find((item) => item.slug === slug)

  if (!project) {
    return (
      <main className="project-page project-page--empty">
        <section className="container project-empty">
          <p className="eyebrow">404 project</p>
          <h1>Такой проект не найден</h1>
          <p>Возможно, ссылка изменилась или проект был удалён из массива portfolioItems.</p>
          <Link className="button button--primary" to="/#work">
            Вернуться к работам
          </Link>
        </section>
      </main>
    )
  }

  const moreProjects = portfolioItems.filter((item) => item.slug !== project.slug).slice(0, 3)

  return (
    <main className="project-page">
      <section className="project-hero">
        <div className="container project-hero__grid">
          <div className="project-hero__copy">
            <Link className="project-back" to="/#work">
              ← Назад к работам
            </Link>
            <p className="eyebrow">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="project-lead">{project.headline}</p>
            <div className="project-tags" aria-label="Технологии и категории проекта">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <aside className="project-brief" aria-label="Информация о проекте">
            <div>
              <span>Год</span>
              <strong>{project.year}</strong>
            </div>
            <div>
              <span>Роль</span>
              <strong>{project.role}</strong>
            </div>
            <div>
              <span>Формат</span>
              <strong>{project.duration}</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="project-showcase">
        <div className="container project-showcase__frame">
          <img src={project.image} alt={project.title} />
        </div>
      </section>

      <section className="section-pad project-story-section">
        <div className="container project-story-grid">
          <article className="project-story-card project-story-card--large">
            <span>01 / Задача</span>
            <h2>Что нужно было решить</h2>
            <p>{project.challenge}</p>
          </article>
          <article className="project-story-card">
            <span>02 / Решение</span>
            <h3>Как оформлена логика</h3>
            <p>{project.solution}</p>
          </article>
          <article className="project-story-card">
            <span>03 / Результат</span>
            <h3>Что получает бизнес</h3>
            <p>{project.result}</p>
          </article>
        </div>
      </section>

      <section className="project-gallery-section">
        <div className="container section-head section-head--split">
          <div>
            <p className="eyebrow">Project visuals</p>
            <h2>Визуальная подача проекта</h2>
            <p>
              Сюда можно добавить реальные скриншоты, мокапы, мобильные экраны или изображения результата. Просто
              замени пути в поле <code>gallery</code> у нужного проекта.
            </p>
          </div>
        </div>

        <div className="container project-gallery-grid">
          {project.gallery.map((image, index) => (
            <figure key={`${project.slug}-gallery-${image}`}>
              <img src={image} alt={`${project.title} — изображение ${index + 1}`} loading="lazy" />
              <figcaption>{String(index + 1).padStart(2, '0')}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="section-pad project-next-section">
        <div className="container project-next-box">
          <div>
            <p className="eyebrow">Next step</p>
            <h2>Хотите похожий проект?</h2>
            <p>
              Можно начать с красивой страницы, а потом расширить проект до CRM/ERP, каталога, личного кабинета или
              Telegram-бота.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Обсудить в WhatsApp
            </a>
            <Link className="button button--ghost" to="/#work">
              Все работы
            </Link>
          </div>
        </div>

        <div className="container related-projects">
          {moreProjects.map((item, index) => (
            <WorkCard item={item} index={index} key={item.slug} />
          ))}
        </div>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>© {new Date().getFullYear()} Aidar.dev — websites, CRM/ERP, bots.</p>
        <Link to="/#top">Наверх ↑</Link>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <ScrollRestoration />
      <CursorGlow />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:slug" element={<ProjectDetailPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
