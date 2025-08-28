import React from "react";

export default function SupportSection() {
  const copy = (text) => {
    navigator.clipboard.writeText(text);
    window.alert("Адрес скопирован");
  };

  return (
    <section id="support" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Поддержать проект</h2>
        <p className="text-gray-600 mb-8">
          Каждый вклад ускоряет пилоты и улучшает ИИ-профили культур. Мы публикуем ежемесячные отчёты о прогрессе.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <div className="p-6 bg-white rounded-xl border border-gray-200 space-y-4">
            <h3 className="font-semibold text-gray-900">Разовый вклад</h3>
            <div className="flex gap-2">
              <a
                href="/donate/card"
                aria-label="Поддержать картой"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-black text-white hover:opacity-90"
              >
                Карта
              </a>
              <a
                href="/donate/paypal"
                aria-label="Поддержать через PayPal"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50"
              >
                PayPal
              </a>
            </div>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 space-y-4">
            <h3 className="font-semibold text-gray-900">Ежемесячно</h3>
            <a
              href="/donate/subscription"
              aria-label="Оформить подписку"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-black text-white hover:opacity-90 w-full"
            >
              Оформить подписку
            </a>
          </div>
          <div className="p-6 bg-white rounded-xl border border-gray-200 space-y-4">
            <h3 className="font-semibold text-gray-900">Криптовалютой</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center justify-between gap-2">
                <span>USDT (TRC20): TXXXX...</span>
                <button
                  onClick={() => copy("TXXXX...")}
                  aria-label="Скопировать адрес USDT"
                  className="inline-flex items-center justify-center rounded-xl px-3 py-1 font-medium border border-gray-200 hover:bg-gray-50"
                >
                  Копировать
                </button>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span>ETH (ERC20): 0xABC...</span>
                <button
                  onClick={() => copy("0xABC...")}
                  aria-label="Скопировать адрес ETH"
                  className="inline-flex items-center justify-center rounded-xl px-3 py-1 font-medium border border-gray-200 hover:bg-gray-50"
                >
                  Копировать
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="mb-2 text-gray-600">Цель месяца: собрать на 5 пилотных установок</div>
          <div className="h-3 rounded-full bg-gray-200">
            <div className="h-3 rounded-full bg-black w-2/5"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
