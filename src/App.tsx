import { useEffect, useRef, useState } from 'react'
import heroImg from './assets/hero.png'
import './App.css'

const whatsappUrl =
  'https://wa.me/77754015204?text=Здравствуйте!%20Хочу%20обсудить%20разработку%20сайта%2C%20CRM%20или%20Telegram-бота.'

const navItems = [
  { label: 'Услуги', href: '#services' },
  { label: 'Работы', href: '#work' },
  { label: 'Процесс', href: '#process' },
  { label: 'Контакты', href: '#contact' },
]

const services = [
  {
    eyebrow: '01 / Websites',
    title: 'Сайты и лендинги',
    description:
      'Разрабатываем сайты CRM системы и веб-системы, личного портфолио и бизнеса: структура, адаптив, SEO-база, формы и WhatsApp-заявки.',
    meta: 'React / Vite / WordPress',
  },
  {
    eyebrow: '02 / Systems',
    title: 'CRM / ERP интерфейсы',
    description:
      'Панели для заявок, клиентов, задач, сотрудников, отчетов и внутренних процессов. Сначала логика, потом UI, потом рабочий продукт.',
    meta: 'Dashboards / Roles / Reports',
  },
  {
    eyebrow: '03 / Automation',
    title: 'Telegram / WhatsApp боты',
    description:
      'Боты принимают заявки, отвечают на FAQ, проводят квизы, отправляют данные в Google Sheets, CRM или менеджеру.',
    meta: 'AI / Sheets / CRM API',
  },
]

const workItems = [
  {
    title: 'Juye CRM для турагентств',
    type: 'Product UI',
    description: 'Заявки, туристы, турпакеты, задачи, статусы, туроператоры и менеджерская логика.',
  },
  {
    title: 'Сайт для бизнеса под заявки',
    type: 'Website',
    description: 'Главная страница, услуги, CTA, WhatsApp, карта, формы, базовое SEO и адаптив.',
  },
  {
    title: 'AI-бот для онлайн-магазина',
    type: 'Automation',
    description: 'FAQ, подбор товара, заявки, таблицы, уведомления и передача горячих лидов.',
  },
]

const processSteps = [
  'Разбираю задачу, аудиторию и где бизнес теряет заявки.',
  'Собираю структуру страницы, сценарий клиента и UX-логику.',
  'Делаю визуальный интерфейс, адаптив и микроанимации.',
  'Подключаю заявки, аналитику, мессенджеры, CRM или таблицы.',
]

const stackItems = ['React', 'Vite', 'TypeScript', 'WordPress', 'CRM', 'ERP', 'Telegram Bots', 'AI', 'Google Sheets']

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
      <a className="brand" href="#top" aria-label="Aidar.dev">
        <span className="brand__mark">A</span>
        <span className="brand__text">
          <strong>Aidar.dev</strong>
          <small>Web / CRM / Bots</small>
        </span>
      </a>

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
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Обсудить проект
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
          <h1>Разрабатываем сайты CRM/ERP системы и веб-системы</h1>
          <p className="hero-text">
            Делаем digital-продукты, которые выглядят дорого, работают и помогают получать заявки:
            портфолио, лендинги, админ-панели, CRM/ERP, Telegram/WhatsApp-боты и интеграции.
          </p>

          <div className="hero-actions">
            <a className="button button--primary" href={whatsappUrl} target="_blank" rel="noreferrer">
              Написать в WhatsApp
            </a>
            <a className="button button--ghost" href="#work">
              Смотреть работы
            </a>
          </div>

          <div className="hero-proof" aria-label="Преимущества">
            <span>React</span>
            <span>Vue.js</span>
            <span>Wordpress</span>
            <span>CRM системы</span>
            <span>ERP системы</span>
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

function ServicesSection() {
  return (
    <section className="section-pad" id="services">
      <div className="container section-head section-head--center">
        <p className="eyebrow">Services</p>
        <h2>Одна страница может продавать сильнее, если внутри есть стратегия</h2>
        <p>
          Сначала упаковываем смысл, потом собираем дизайн и только после этого подключаем техническую логику.
        </p>
      </div>

      <div className="container services-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="card-eyebrow">{service.eyebrow}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <strong>{service.meta}</strong>
          </article>
        ))}
      </div>
    </section>
  )
}

function WorkSection() {
  return (
    <section className="section-pad section-soft" id="work">
      <div className="container section-head section-head--split">
        <div>
          <p className="eyebrow">Selected work</p>
          <h2>Кейсы и направления, которые можно красиво показать на портфолио</h2>
        </div>
        <p>
          Сейчас блок работает как premium-заготовка. Позже сюда можно добавить реальные скриншоты, ссылки и
          отдельные страницы проектов.
        </p>
      </div>

      <div className="container work-grid">
        {workItems.map((item, index) => (
          <article className="work-card" key={item.title}>
            <div className="work-card__media">
              <span>{item.type}</span>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
            </div>
            <div className="work-card__content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
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
          <a className="text-link" href="#contact">
            Обсудить задачу →
          </a>
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>© {new Date().getFullYear()} Aidar.dev — websites, CRM/ERP, bots.</p>
        <a href="#top">Наверх ↑</a>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main>
        <HeroSection />
        <StackMarquee />
        <ServicesSection />
        <WorkSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
