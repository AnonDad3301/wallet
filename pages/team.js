import Card from "@/components/Card";

export default function Team(){
  const team = [
    {n:"CTO / Robotics", d:"Манипуляторы, периферия, PLC/Edge"},
    {n:"Head of Agri-AI", d:"Модели роста, профили культур, CV"},
    {n:"COO / Manufacturing", d:"BOM, контрактная сборка, QA"},
  ];
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Команда</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((p,i)=>(
          <div key={i} className="card">
            <div className="h-40 rounded-xl bg-white/10 flex items-center justify-center text-white/60">Фото</div>
            <h4 className="font-semibold mt-3">{p.n}</h4>
            <p className="text-white/80 text-sm">{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
