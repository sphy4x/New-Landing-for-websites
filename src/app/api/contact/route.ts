import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, projectType, message } = await request.json();

    // Валидация
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Все поля обязательны" },
        { status: 400 }
      );
    }

    // Отправка письма админу
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: `Новая заявка от ${name}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Телефон:</strong> ${phone}</p>
        <p><strong>Тип проекта:</strong> ${projectType}</p>
        <p><strong>Сообщение:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    // Отправка подтверждения клиенту
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: "Мы получили вашу заявку | Premium Studio",
      html: `
        <h2>Спасибо за вашу заявку, ${name}!</h2>
        <p>Мы получили вашу заявку и свяжемся с вами в течение 24 часов.</p>
        <p><strong>Детали заявки:</strong></p>
        <ul>
          <li>Тип проекта: ${projectType}</li>
          <li>Контактный телефон: ${phone}</li>
        </ul>
        <p>С уважением,<br>Команда Premium Studio</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Ошибка при отправке заявки" },
      { status: 500 }
    );
  }
}
