import React from 'react';

const services = [
  { title: 'Landing Page', description: 'Высококонверсионные лендинги для роста продаж.' },
  { title: 'Корпоративные сайты', description: 'Премиальные сайты для бизнеса и брендов.' },
  { title: 'Интернет-магазины', description: 'Современные магазины с удобной корзиной.' },
];

const portfolio = [
  { title: 'Finova', category: 'Финтех' },
  { title: 'LuxeShop', category: 'E-commerce' },
  { title: 'EnergyInnovate', category: 'Корпоратив' },
];

function App() {
  return (
    <div className="page">
      <header className="hero">
        <nav className="nav">
          <div className="logo">Premium Studio</div>
          <div className="nav-links">
            <a href="#services">Услуги</a>
            <a href="#portfolio">Портфолио</a>
            <a href="#contact">Контакты</a>
          </div>
        </nav>

        <div className="hero-content">
          <h1>Создаём сайты премиум-класса</h1>
          <p>Современные веб-сайты для Европы и Украины. Быстро, стильно и с результатом.</p>
          <a href="#contact" className="btn">Получить консультацию</a>
        </div>
      </header>

      <main>
        <section id="services" className="section">
          <h2>Услуги</h2>
          <div className="grid">
            {services.map((service) => (
              <div key={service.title} className="card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="portfolio" className="section">
          <h2>Портфолио</h2>
          <div className="grid">
            {portfolio.map((item) => (
              <div key={item.title} className="card">
                <h3>{item.title}</h3>
                <p>{item.category}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Контакты</h2>
          <p>Email: hello@premiumstudio.dev</p>
          <p>Телефон: +1 (234) 567-890</p>
        </section>
      </main>
    </div>
  );
}

export default App;
