import ArchitectureFlow from "@/components/ArchitectureFlow";

export default function Docs(){
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Техническая документация</h2>
      <ul className="list-disc pl-6 text-white/80 space-y-1">
        <li>Габариты базовой версии: 150×90×70 см, 250–600 Вт</li>
        <li>Сенсоры: pH, EC, t°, влажность, CO₂, камеры</li>
        <li>Каналы связи: Wi‑Fi/BLE, OTA‑обновления, REST/WebSocket API</li>
        <li>Безопасность: TLS, RBAC, журнал аудита</li>
        <li>Интеграции: Home Assistant, Google Home, Alexa</li>
      </ul>
      <ArchitectureFlow/>
    </div>
  )
}
