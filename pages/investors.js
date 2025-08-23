import ROIChart from "@/components/ROIChart";

export default function Investors(){
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Инвесторам</h2>
      <ROIChart/>
      <section className="grid md:grid-cols-3 gap-6">
        {[
          {t:"Seed", d:"R&D, прототипы, первые пилоты (HoReCa/EdTech)", c:"$600k–$1.2M"},
          {t:"Pre‑A", d:"Производство 1–3k шт., маркетинг, SaaS", c:"$3–$5M"},
          {t:"Series A", d:"Масштабирование, B2B флот, лицензии AI", c:"$10–$15M"},
        ].map((pkg,i)=>(
          <div key={i} className="card">
            <h4 className="font-semibold">{pkg.t}</h4>
            <p className="text-white/80 text-sm">{pkg.d}</p>
            <div className="mt-3 text-sky-300 font-semibold">{pkg.c}</div>
          </div>
        ))}
      </section>
    </div>
  )
}
