import Link from "next/link";
import { FiLinkedin, FiInstagram, FiGithub } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background/50 py-16">
      <div className="container-max">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                <span className="text-white">P</span>
              </div>
              <span className="text-lg font-bold">Premium</span>
            </div>
            <p className="text-sm text-text-secondary">
              Веб-студия, создающая сайты, которые помогают бизнесу расти.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-text">Навигация</h4>
            <ul className="space-y-2">
              {["Главная", "Услуги", "Портфолио", "О нас"].map((item) => (
                <li key={item}>
                  <Link
                    href={
                      item === "Главная"
                        ? "/"
                        : `/${item.toLowerCase()}`
                    }
                    className="text-sm text-text-secondary transition hover:text-primary"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-text">Контакты</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:hello@premiumstudio.dev"
                  className="text-sm text-text-secondary transition hover:text-primary"
                >
                  hello@premiumstudio.dev
                </a>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="text-sm text-text-secondary transition hover:text-primary"
                >
                  +1 (234) 567-890
                </a>
              </li>
              <li className="text-sm text-text-secondary">
                Европа и Украина
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-text">Социальные сети</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition hover:text-primary"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition hover:text-primary"
              >
                <FiInstagram size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary transition hover:text-primary"
              >
                <FiGithub size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-text-secondary">
          <p>© {new Date().getFullYear()} Premium Studio. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
