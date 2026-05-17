export type PortfolioItem = {
  slug: string
  title: string
  category: string
  description: string
  image: string
  year: string
  tags: string[]
  headline: string
  role: string
  duration: string
  challenge: string
  solution: string
  result: string
  gallery: string[]
  href?: string
}

// Чтобы добавить новую работу на главную страницу и отдельную страницу проекта:
// 1. Загрузи картинку в public/portfolio/
// 2. Скопируй один объект ниже
// 3. Поменяй slug, title, category, description, image, year, tags и тексты detail-страницы
// 4. Карточка автоматически появится на главной, а страница будет доступна по /project/slug
// image и gallery должны начинаться с /portfolio/, например: /portfolio/my-project.jpg
export const portfolioItems: PortfolioItem[] = [
  {
    slug: 'juye-crm',
    title: 'Juye CRM для турагентств',
    category: 'CRM product for Android',
    description:
      'Интерфейс для заявок, туристов, турпакетов, задач, статусов, туроператоров и менеджерской логики.',
    image: '/portfolio/juye_main.webp',
    year: '2026',
    tags: ['CRM', 'Tour agency', 'Product UI'],
    headline: 'CRM-система для турагентств: от обращения клиента до контроля заявки и турпакета.',
    role: 'Product design / Frontend / CRM logic',
    duration: 'MVP + развитие',
    challenge:
      'Турагентству нужно быстро фиксировать обращения, пожелания туристов, турпакеты, документы, статусы и задачи без хаоса в WhatsApp и таблицах.',
    solution:
      'Собрана логика CRM с заявками, туристами, туроператорами, задачами, карточками клиентов и понятным интерфейсом для ежедневной работы менеджеров.',
    result:
      'Получился продуктовый интерфейс, который можно расширять: добавлять роли, оплату, экспорт, аналитику, подписки и интеграции с внешними сервисами.',
    gallery: ['/portfolio/juye-1.webp', '/portfolio/juye-2.webp', '/portfolio/juye-3.webp'],
  },
  {
    slug: 'safi-life',
    title: 'Safi-life — сайт и Admin CRM панель для продажи отечественной продукции',
    category: 'Website / CRM',
    description:
      'Современный сайт для сетевого маркетинга с Admin CRM панелью: презентация бренда, продукции, преимуществ, заявки, WhatsApp и адаптив.',
    image: '/portfolio/safi-1.webp',
    year: '2026',
    tags: ['React', 'Landing', 'CRM Admin Panel', 'Network marketing'],
    headline: 'Сайт и CRM-панель, которые помогают презентовать отечественную продукцию, принимать заявки и управлять клиентами.',
    role: 'UI/UX / Frontend / CRM interface / Product presentation',
    duration: '5–10 дней',
    challenge:
      'Для Safi-life нужен был не просто сайт, а полноценная цифровая система: красиво презентовать отечественную продукцию, вызывать доверие к бренду, принимать заявки и удобно обрабатывать клиентов через Admin CRM панель.',
    solution:
      'Разработана структура сайта с акцентом на бренд, каталог продукции, преимущества, качество, пользу для клиента и CTA-блоки. Дополнительно создана Admin CRM панель для управления заявками, клиентами и базовой информацией. Добавлены адаптивная вёрстка, WhatsApp-кнопки, визуальная иерархия и базовая SEO-подготовка.',
    result:
      'Cайт для сетевого маркетинга, рекламы, WhatsApp-рассылки, Instagram профиля и продвижения отечественной продукции, а Admin CRM панель помогает удобнее работать с заявками и клиентами.',
    gallery: ['/portfolio/safi-2.webp', '/portfolio/safi-5.webp', '/portfolio/safi-4.webp'],
  },
  {
    slug: 'juye-systems',
    title: 'Juye Systems — веб CRM для турагентств',
    category: 'CRM / Web App',
    description:
      'Веб-версия CRM для турагентств: заявки, туристы, турпакеты, клиенты, задачи, статусы и удобная работа менеджеров.',
    image: '/portfolio/juye-web-1.webp',
    year: '2026',
    tags: ['React', 'CRM', 'Tour Agency'],
    headline: 'CRM-система, которая помогает турагентству вести заявки, туристов и продажи в одном интерфейсе.',
    role: 'UI/UX / Frontend / CRM interface / Product logic',
    duration: '10–20 дней',
    challenge:
      'Турагентствам сложно вести клиентов, заявки, турпакеты и задачи в разных таблицах, мессенджерах и заметках. Из-за этого теряются обращения, статусы и важная информация по туристам.',
    solution:
      'Разработана веб-версия Juye Systems CRM с удобной структурой для турагентств: создание заявок, управление туристами, турпакетами, задачами, статусами и клиентской базой. Интерфейс сделан адаптивным, понятным и ориентированным на ежедневную работу менеджеров.',
    result:
      'CRM помогает турагентству централизовать работу с клиентами, быстрее обрабатывать заявки, контролировать этапы продаж и уменьшить хаос в переписках, таблицах и ручных процессах.',
    gallery: ['/portfolio/juye-web-2.webp', '/portfolio/juye-web-3.webp', '/portfolio/juye-web-4.webp'],
  },
  {
    slug: 'construction-erp',
    title: 'ERP-панель для строительной компании',
    category: 'ERP system',
    description:
      'Дашборд для проектов, материалов, сотрудников, задач, финансовых показателей и внутренних процессов.',
    image: '/portfolio/erp-1.webp',
    year: '2026',
    tags: ['ERP', 'Dashboard', 'Operations'],
    headline: 'ERP-панель для контроля проектов, материалов, задач и операционных процессов.',
    role: 'Dashboard UX / System structure / Frontend',
    duration: 'От 2 недель',
    challenge:
      'В строительных проектах легко теряются задачи, материалы, сроки, расходы и ответственность между сотрудниками.',
    solution:
      'Спроектирована панель с ключевыми модулями: проекты, задачи, материалы, сотрудники, финансы, статусы и аналитические карточки.',
    result:
      'Система помогает видеть состояние проектов в одном месте и может развиваться в полноценную внутреннюю ERP под процессы компании.',
    gallery: ['/portfolio/erp-2.webp', '/portfolio/erp-1.webp', '/portfolio/erp-4.webp'],
  },
  {
    slug: 'wordpress-hotel',
    title: 'WordPress сайт для отеля',
    category: 'WordPress',
    description:
      'Кастомная тема с редактируемыми секциями, номерами, галереями, контактами и мобильной адаптацией.',
    image: '/portfolio/alsun-1.webp',
    year: '2026',
    tags: ['WordPress', 'ACF', 'Hotel'],
    headline: 'Кастомный WordPress-сайт для отеля с редактируемыми секциями и красивой подачей номеров.',
    role: 'WordPress theme / ACF / Frontend',
    duration: '7–20 дней',
    challenge:
      'Отелю нужен сайт, который можно редактировать из админки: номера, галереи, контакты, блоки, акции и формы заявок.',
    solution:
      'Разработана кастомная тема с отдельными секциями, редактируемыми полями, адаптивной вёрсткой, галереями и CTA на бронирование.',
    result:
      'Сайт не зависит от визуального конструктора, быстрее работает, проще поддерживается и может быть расширен под SEO и мультиязычность.',
    gallery: ['/portfolio/alsun-2.webp', '/portfolio/alsun-1.webp', '/portfolio/alsun-3.webp'],
  },
  {
    slug: 'auto-parts-catalog',
    title: 'Каталог автозапчастей',
    category: 'E-commerce',
    description:
      'Концепт каталога с поиском, карточками товаров, категориями, поставщиками и API-интеграциями.',
    image: '/portfolio/opt-1.webp',
    year: '2026',
    tags: ['React', 'API', 'Catalog'],
    headline: 'Каталог автозапчастей с поиском, карточками товаров и подготовкой под API поставщиков.',
    role: 'Frontend / Catalog UX / API structure',
    duration: 'MVP этап',
    challenge:
      'Для автозапчастей важны быстрый поиск, понятные карточки, категории, наличие, поставщики и возможность подтягивать данные с разных источников.',
    solution:
      'Подготовлена структура каталога: карточки товаров, фильтры, категории, визуальные состояния, API-логика и база для будущих интеграций.',
    result:
      'Проект можно развивать в полноценный e-commerce каталог с личным кабинетом, корзиной, поставщиками и синхронизацией данных.',
    gallery: ['/portfolio/opt-2.webp', '/portfolio/opt-3.webp', '/portfolio/opt-1.webp'],
  },
]
