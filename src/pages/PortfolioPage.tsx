import { Link } from 'react-router'
import { portfolioItems } from '../data/portfolio'

type PortfolioCardProps = {
  item: (typeof portfolioItems)[number]
  index: number
}

function PortfolioCard({ item, index }: PortfolioCardProps) {
  const cardContent = (
    <>
      <div className="portfolio-card__media">
        <img src={item.image} alt={item.title} loading="lazy" />
        <span>{item.category}</span>
        <strong>{String(index + 1).padStart(2, '0')}</strong>
      </div>
      <div className="portfolio-card__content">
        <div className="portfolio-card__meta">
          <span>{item.year}</span>
          <span>{item.category}</span>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <div className="portfolio-tags" aria-label="Технологии и категории">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </>
  )

  if (item.href && item.href !== '#') {
    return (
      <a className="portfolio-card" href={item.href} target="_blank" rel="noreferrer">
        {cardContent}
      </a>
    )
  }

  return <article className="portfolio-card">{cardContent}</article>
}

function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <section className="portfolio-hero" id="top">
        <div className="container portfolio-hero__grid">
          <div>
            <p className="eyebrow">Portfolio</p>
            <h1>Работы, которые показывают дизайн, логику и реальный результат</h1>
            <p>
              Здесь можно выкладывать сайты, CRM/ERP интерфейсы, Telegram-боты, WordPress проекты, каталоги и
              автоматизации. Карточки уже подготовлены под картинки, описание, теги и ссылку на проект.
            </p>
          </div>
          <div className="portfolio-guide">
            <span>Как добавить работу</span>
            <ol>
              <li>Загрузи картинку в public/portfolio/</li>
              <li>Открой src/data/portfolio.ts</li>
              <li>Добавь новый объект с title, image, description и tags</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="portfolio-list-section">
        <div className="container portfolio-toolbar">
          <p>{portfolioItems.length} проектов в портфолио</p>
          <Link className="button button--ghost" to="/">
            Вернуться на главную
          </Link>
        </div>

        <div className="container portfolio-grid-full">
          {portfolioItems.map((item, index) => (
            <PortfolioCard item={item} index={index} key={item.title} />
          ))}
        </div>
      </section>
    </main>
  )
}

export default PortfolioPage
