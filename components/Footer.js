export default function Footer(){
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-white/80">
        <div>
          <div className="font-semibold mb-2">О проекте</div>
          <p>Железо + подписка + данные/ИИ. Масштабируемая платформа для домашнего и малого B2B-выращивания.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Контакты</div>
          <div className="space-y-1">
            <a href="mailto:hello@smartfarm.ai" className="underline">hello@smartfarm.ai</a>
            <a href="/contacts" className="underline">Форма обратной связи</a>
          </div>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Материалы</div>
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50"
              >
                One-pager PDF
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium border border-gray-200 hover:bg-gray-50"
              >
                Pitch Deck
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
