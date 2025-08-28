export default function Contacts(){
  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами.');
  };

  const handlePartnerSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо! Мы свяжемся с вами.');
  };

  return (
    <div className="space-y-16">
      <section>
        <h1 className="text-3xl font-bold mb-4">Контакты</h1>
        <p className="text-gray-600 mb-6">Мы открыты к сотрудничеству и обратной связи.</p>
        <ul className="space-y-2 mb-8">
          <li>Email: <a href="mailto:hello@smartfarm.ai" className="underline">hello@smartfarm.ai</a></li>
          <li>Пресса/медиа: <a href="mailto:press@smartfarm.ai" className="underline">press@smartfarm.ai</a></li>
          <li>Поддержка: <a href="mailto:support@smartfarm.ai" className="underline">support@smartfarm.ai</a></li>
        </ul>
        <form onSubmit={handleContactSubmit} className="space-y-4 max-w-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block mb-1">Имя</label>
              <input id="name" name="name" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input id="email" name="email" type="email" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
          </div>
          <div>
            <label htmlFor="topic" className="block mb-1">Тема</label>
            <select id="topic" name="topic" className="w-full border border-gray-300 rounded-md px-3 py-2">
              <option value="общий">общий</option>
              <option value="пресса">пресса</option>
              <option value="поддержка">поддержка</option>
            </select>
          </div>
          <div>
            <label htmlFor="message" className="block mb-1">Сообщение</label>
            <textarea id="message" name="message" rows="4" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div className="flex items-center gap-2">
            <input id="updates" name="updates" type="checkbox" className="rounded border-gray-300" />
            <label htmlFor="updates">Получать апдейты</label>
          </div>
          <button
            type="submit"
            aria-label="Отправить сообщение"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-black text-white hover:opacity-90"
          >
            Отправить
          </button>
        </form>
      </section>

      <section id="partners">
        <h2 className="text-2xl font-bold mb-4">Партнёрам и пилотам</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-2">HoReCa</h3>
            <p className="text-gray-600">Витрина-ферма, свежая зелень, маркетинг на месте.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-2">Образование</h3>
            <p className="text-gray-600">STEM/биотех-модуль для школ и вузов.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
            <h3 className="font-semibold mb-2">Ритейл</h3>
            <p className="text-gray-600">Инстор-остров с микрозеленью и отслеживаемым происхождением.</p>
          </div>
        </div>
        <form onSubmit={handlePartnerSubmit} className="space-y-4 max-w-xl">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="company" className="block mb-1">Компания</label>
              <input id="company" name="company" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
            <div>
              <label htmlFor="city" className="block mb-1">Город</label>
              <input id="city" name="city" required className="w-full border border-gray-300 rounded-md px-3 py-2" />
            </div>
          </div>
          <div>
            <label htmlFor="location" className="block mb-1">Тип локации</label>
            <input id="location" name="location" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="area" className="block mb-1">Площадь/трафик</label>
            <input id="area" name="area" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <div>
            <label htmlFor="contact" className="block mb-1">Телефон/email</label>
            <input id="contact" name="contact" className="w-full border border-gray-300 rounded-md px-3 py-2" />
          </div>
          <button
            type="submit"
            aria-label="Стать партнёром"
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium bg-black text-white hover:opacity-90"
          >
            Стать партнёром
          </button>
        </form>
      </section>
    </div>
  );
}
