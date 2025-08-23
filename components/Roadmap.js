import { motion } from "framer-motion";

const steps = [
  { title: "0–6 мес.", text: "MVP (посев/пересадка), мобильное и веб-ПО, OTA." },
  { title: "6–12 мес.", text: "Пилоты HoReCa/образование, сбор датасетов." },
  { title: "12–24 мес.", text: "Предсерийное производство, подписки, профили культур." },
  { title: "24–36 мес.", text: "Fleet-management, B2B, лицензирование моделей." },
];

export default function Roadmap(){
  return (
    <div className="relative">
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
      <div className="space-y-8">
        {steps.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: i*0.1 }}
            className={`card md:w-1/2 ${i%2 ? 'md:ml-auto' : ''}`}>
            <div className="flex items-start gap-3">
              <div className="shrink-0 mt-1 h-3 w-3 rounded-full bg-sky-400 shadow-glow" />
              <div>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="text-white/80">{s.text}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
