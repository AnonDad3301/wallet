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
          <p>hello@smartfarm.ai</p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold">Материалы</div>
          <div className="flex gap-2">
            <a className="btn secondary" href="#">One-pager PDF</a>
            <a className="btn secondary" href="#">Pitch Deck</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
