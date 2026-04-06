import Image from "next/image";

const services = [
  {
    title: "Инженерно проектиране",
    text: "Технически решения, съобразени с нуждите на обекта и изискванията на инвеститора.",
  },
  {
    title: "Доставка и оборудване",
    text: "Подбор и доставка на надеждни системи, компоненти и индустриално оборудване.",
  },
  {
    title: "Изпълнение и поддръжка",
    text: "Координация, монтаж и поддръжка с фокус върху качество, срок и безопасност.",
  },
];

const products = [
  "Контролни панели",
  "Индустриална автоматизация",
  "Електро оборудване",
  "Системи по проект",
];

export default function HomePage() {
  return (
    <main className="site-shell">
      <header>
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-between backdrop-blur-md bg-[#060B17]/70 border-b border-white/10 rounded-b-xl">

  {/* LOGO */}
  <div className="bg-white/10 backdrop-blur-lg px-3 py-1.5 rounded-xl border border-white/10 shadow-md">
    <Image 
      src="/logo.png" 
      alt="Techpark Engineering" 
      width={160}
      height={40}
      className="h-8 md:h-9 w-auto object-contain"
      priority
    />
  </div>

  {/* NAV */}
  <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
    <a href="#about" className="hover:text-white transition">За нас</a>
    <a href="#services" className="hover:text-white transition">Услуги</a>
    <a href="#products" className="hover:text-white transition">Продукти</a>
    <a href="#contact" className="hover:text-white transition">Контакти</a>
  </nav>

  {/* CTA */}
  <a href="#contact" className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl transition shadow-lg">
    Запитване
  </a>

</div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">TECHPARK ENGINEERING</p>
            <h1>Модерен фирмен сайт с premium визия и готова основа за админ панел.</h1>
            <p className="lead">
              Това е стартовият проект за новия сайт на Techpark Engineering. Следващата стъпка е да
              добавим динамично съдържание за услуги, продукти, новини и административен панел.
            </p>
            <div className="hero-actions">
              <a href="#services" className="button button-primary">Виж услугите</a>
              <a href="#contact" className="button button-secondary">Свържи се с нас</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="stat-grid">
              <div className="stat-box">
                <strong>Услуги</strong>
                <span>Готов модул</span>
              </div>
              <div className="stat-box">
                <strong>Продукти</strong>
                <span>Каталог и филтри</span>
              </div>
              <div className="stat-box">
                <strong>Новини</strong>
                <span>Публикации и SEO</span>
              </div>
              <div className="stat-box">
                <strong>Admin</strong>
                <span>Следващ етап</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section">
        <div className="container section-grid">
          <div>
            <p className="section-label">За компанията</p>
            <h2>Engineering, Procurement & Construction</h2>
          </div>
          <p className="section-copy">
            Новият сайт е изграден с Next.js и е подготвен за бърз хостинг във Vercel, корпоративна
            визуална идентичност и бъдещо свързване с база данни и админ панел.
          </p>
        </div>
      </section>

      <section id="services" className="section">
        <div className="container">
          <p className="section-label">Услуги</p>
          <h2>Основни направления</h2>
          <div className="card-grid">
            {services.map((service) => (
              <article key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section">
        <div className="container">
          <p className="section-label">Продукти</p>
          <h2>Каталогова секция</h2>
          <div className="product-grid">
            {products.map((product) => (
              <div key={product} className="product-card">
                <div className="product-thumb" />
                <h3>{product}</h3>
                <p>Подготвено място за динамични продукти от бъдещия админ панел.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section section-last">
        <div className="container contact-box">
          <div>
            <p className="section-label">Контакт</p>
            <h2>Готово за следващата фаза</h2>
            <p>
              След като този стартов проект бъде качен в GitHub и Vercel, можем да надградим с реално
              съдържание, административен панел и връзка с techpark.bg.
            </p>
          </div>
          <a href="mailto:info@techpark.bg" className="button button-primary">Изпрати запитване</a>
        </div>
      </section>
    </main>
  );
}
