import Image from "next/image";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import InteriorView from "@/components/InteriorView";

export default function Home(){
  return (
    <div className="space-y-8">
      <section className="grid lg:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">SmartFarm.AI</h1>
          <p className="text-white/80">Автономная мобильная ферма с ИИ: полный цикл от посева до сбора урожая. Реальные датчики, робот-манипулятор, умный климат-контроль и обучаемые профили культур.</p>
          <div className="flex gap-3">
            <a className="btn" href="/product">Узнать больше</a>
            <a className="btn secondary" href="/investors">Инвесторам</a>
          </div>
        </div>
        <div className="card">
          <Image src="/images/device_front.png" alt="Фасад и панель управления" width={1600} height={1000} className="rounded-xl"/>
        </div>
      </section>
      <section className="grid lg:grid-cols-2 gap-6">
        <InteriorView/>
        <ArchitectureFlow/>
      </section>
    </div>
  )
}
