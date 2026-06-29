"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isSticky
          ? "border-b border-border/50 bg-background/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-max flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-white">P</span>
          </div>
          <span className="hidden sm:inline">Premium</span>
        </Link>

        <nav className="hidden gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-text-secondary transition hover:text-text"
          >
            Главная
          </Link>
          <Link
            href="/services"
            className="text-sm font-medium text-text-secondary transition hover:text-text"
          >
            Услуги
          </Link>
          <Link
            href="/portfolio"
            className="text-sm font-medium text-text-secondary transition hover:text-text"
          >
            Портфолио
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-text-secondary transition hover:text-text"
          >
            О нас
          </Link>
          <Link
            href="/reviews"
            className="text-sm font-medium text-text-secondary transition hover:text-text"
          >
            Отзывы
          </Link>
        </nav>

        <Link href="/contact" className="btn-primary">
          <span className="hidden sm:inline">Получить консультацию</span>
          <span className="sm:hidden">Контакты</span>
        </Link>
      </div>
    </header>
  );
}
