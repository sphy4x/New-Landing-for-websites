"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
  agree: boolean;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Ошибка при отправке");
      }

      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ошибка при отправке заявки"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Имя
          </label>
          <input
            {...register("name", { required: "Введите имя" })}
            type="text"
            placeholder="Ваше имя"
            className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-text placeholder-text-secondary transition focus:border-primary focus:outline-none"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Email
          </label>
          <input
            {...register("email", {
              required: "Введите email",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Некорректный email",
              },
            })}
            type="email"
            placeholder="hello@example.com"
            className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-text placeholder-text-secondary transition focus:border-primary focus:outline-none"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Телефон
          </label>
          <input
            {...register("phone", { required: "Введите телефон" })}
            type="tel"
            placeholder="+1 (234) 567-890"
            className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-text placeholder-text-secondary transition focus:border-primary focus:outline-none"
          />
          {errors.phone && (
            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-text">
            Тип проекта
          </label>
          <select
            {...register("projectType", { required: "Выберите тип проекта" })}
            className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-text transition focus:border-primary focus:outline-none"
          >
            <option value="">Выберите...</option>
            <option value="landing">Лендинг</option>
            <option value="corporate">Корпоративный сайт</option>
            <option value="ecommerce">Интернет-магазин</option>
            <option value="webapp">Веб-приложение</option>
            <option value="design">Дизайн</option>
            <option value="other">Другое</option>
          </select>
          {errors.projectType && (
            <p className="mt-1 text-xs text-red-500">
              {errors.projectType.message}
            </p>
          )}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-text">
          Сообщение
        </label>
        <textarea
          {...register("message", { required: "Напишите сообщение" })}
          placeholder="Расскажите о вашем проекте, что нужно сделать и какой у вас примерный бюджет..."
          rows={6}
          className="w-full rounded-xl border border-border bg-card/50 px-4 py-3 text-text placeholder-text-secondary transition focus:border-primary focus:outline-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>
        )}
      </div>

      <label className="flex items-center gap-3">
        <input
          {...register("agree", {
            required: "Согласитесь с политикой конфиденциальности",
          })}
          type="checkbox"
          className="h-4 w-4 cursor-pointer rounded border-border bg-card/50"
        />
        <span className="text-sm text-text-secondary">
          Я согласен с{" "}
          <a href="#" className="text-primary hover:underline">
            политикой конфиденциальности
          </a>
        </span>
      </label>
      {errors.agree && (
        <p className="text-xs text-red-500">{errors.agree.message}</p>
      )}

      {submitted && (
        <div className="rounded-xl border border-green-500/50 bg-green-500/10 p-4 text-sm text-green-400">
          ✓ Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в течение 24 часов.
        </div>
      )}

      {error && (
        <div className="rounded-xl border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-400">
          ✗ {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full sm:w-fit"
      >
        {isSubmitting ? "Отправка..." : "Отправить заявку"}
      </button>
    </form>
  );
}
