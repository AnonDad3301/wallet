import Card from "@/components/Card";

export default function Product(){
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Продукт</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Фасад и панель управления" image="/images/device_front.png" />
        <Card title="Мобильный интерфейс" image="/images/mobile_ui.png" />
        <Card title="Веб-интерфейс управления" image="/images/web_ui.png" />
        <Card title="Внутренний вид: манипулятор и лотки культур">
          <p>См. анимированный интерьер на главной: LED-подсветка, каретка камеры, робот‑манипулятор.</p>
        </Card>
      </div>
    </div>
  )
}
