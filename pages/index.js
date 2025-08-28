import Image from "next/image";
import SupportSection from "@/components/SupportSection";

export default function Home(){
  return (
    <div className="space-y-16">
      <section className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Домашняя ферма с ИИ: свежий урожай круглый год. Без рутины.
          </h1>
          <p className="text-white/80">
            Регулируемая по высоте герметичная конструкция (1.5–2.0 м), верхний 360° манипулятор и «рецепты выращивания», обученные на реальных данных.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="/#support"
              aria-label="Поддержать проект"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-black text-white hover:opacity-90"
            >
              Поддержать проект
            </a>
            <a
              href="#how-it-works"
              aria-label="Узнать больше"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50 text-black"
            >
              Узнать больше
            </a>
            <a
              href="/docs/tech-passport.pdf"
              aria-label="Скачать техпаспорт"
              className="inline-flex items-center font-medium underline underline-offset-4 hover:opacity-80"
            >
              Скачать техпаспорт (PDF)
            </a>
          </div>
        </div>
        <div className="card">
          <Image
            src="/images/device_front.png"
            alt="Умная домашняя ферма с ИИ, регулируемая по высоте, верхний манипулятор"
            width={1200}
            height={900}
            priority
            className="rounded-xl"
          />
        </div>
      </section>
      <SupportSection/>
      <section id="how-it-works" className="py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">Как это работает</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card space-y-2 text-center">
            <div className="text-3xl">🌱</div>
            <h3 className="font-semibold">Посадка</h3>
            <p className="text-white/80 text-sm">Загрузите семена/капсулы и выберите культуру в приложении.</p>
          </div>
          <div className="card space-y-2 text-center">
            <div className="text-3xl">🤖</div>
            <h3 className="font-semibold">Авто-уход</h3>
            <p className="text-white/80 text-sm">ИИ управляет светом, поливом, климатом и следит за здоровьем растений.</p>
          </div>
          <div className="card space-y-2 text-center">
            <div className="text-3xl">🧺</div>
            <h3 className="font-semibold">Сбор</h3>
            <p className="text-white/80 text-sm">Верхний манипулятор аккуратно собирает урожай. Вы получаете отчёт в приложении.</p>
          </div>
        </div>
      </section>
      <section className="py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">Преимущества</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Полный цикл «посев–уход–сбор»",
            "Регулируемая по высоте герметичная конструкция (1.5–2.0 м)",
            "Вершинный 360° манипулятор, свободная зона посадки",
            "HEPA-фильтрация и контроль CO₂",
            "Профили культур и ИИ-диагностика заболеваний",
            "Приложение (web/mobile), OTA-обновления"].map((t,i)=>(
            <div key={i} className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">
              {t}
            </div>
          ))}
        </div>
      </section>
      <section className="py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center">Мини‑ТТХ</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <tbody className="divide-y divide-white/10">
              <tr>
                <th className="py-2 pr-4 font-medium">Высота</th>
                <td className="py-2">1.5–2.0 м (регулируемая)</td>
              </tr>
              <tr>
                <th className="py-2 pr-4 font-medium">Форма корпуса</th>
                <td className="py-2">круглая или прямоугольная (по конфигурации)</td>
              </tr>
              <tr>
                <th className="py-2 pr-4 font-medium">Ёмкость</th>
                <td className="py-2">… лотков / … растений</td>
              </tr>
              <tr>
                <th className="py-2 pr-4 font-medium">Потребление</th>
                <td className="py-2">… Вт</td>
              </tr>
              <tr>
                <th className="py-2 pr-4 font-medium">Уровень шума</th>
                <td className="py-2">≤ … дБ</td>
              </tr>
              <tr>
                <th className="py-2 pr-4 font-medium">Связь</th>
                <td className="py-2">Wi‑Fi / LTE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}
