export default function ArchitectureFlow(){
  return (
    <div className="card">
      <svg viewBox="0 0 1024 520" className="w-full h-auto" role="img" aria-label="Схема архитектуры: датчики → Edge → Облако/OTA/БД">
        <defs>
          <linearGradient id="pane" x1="0" x2="1">
            <stop offset="0%" stopColor="#0f172a"/>
            <stop offset="100%" stopColor="#111827"/>
          </linearGradient>
          <marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerUnits="strokeWidth" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#60a5fa"/>
          </marker>
        </defs>
        <g>
          <rect x="40" y="60" width="260" height="140" rx="16" fill="url(#pane)" stroke="#334155"/>
          <text x="70" y="100" fill="#93c5fd" fontSize="20">Датчики</text>
          <text x="70" y="130" fill="#e5e7eb" fontSize="16">pH, EC, влажн., t°, CO₂, камера</text>
          <rect x="360" y="60" width="260" height="140" rx="16" fill="url(#pane)" stroke="#334155"/>
          <text x="390" y="100" fill="#93c5fd" fontSize="20">Edge/Контроллер</text>
          <text x="390" y="130" fill="#e5e7eb" fontSize="16">ИИ-инференс, PID, OTA</text>
          <rect x="680" y="60" width="300" height="140" rx="16" fill="url(#pane)" stroke="#334155"/>
          <text x="710" y="100" fill="#93c5fd" fontSize="20">Облако</text>
          <text x="710" y="130" fill="#e5e7eb" fontSize="16">API, БД, аналитика, флот</text>
          <path d="M300 130 L360 130" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrow)">
            <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="1.5s" repeatCount="indefinite"/>
          </path>
          <path d="M620 130 L680 130" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrow)">
            <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="1.5s" repeatCount="indefinite" begin="0.3s"/>
          </path>
        </g>
        <g>
          <rect x="140" y="260" width="220" height="120" rx="16" fill="url(#pane)" stroke="#334155"/>
          <text x="170" y="300" fill="#93c5fd" fontSize="18">Акторы</text>
          <text x="170" y="330" fill="#e5e7eb" fontSize="16">насос, клапаны, LED, CO₂</text>
          <rect x="420" y="260" width="220" height="120" rx="16" fill="url(#pane)" stroke="#334155"/>
          <text x="450" y="300" fill="#93c5fd" fontSize="18">Безопасность</text>
          <text x="450" y="330" fill="#e5e7eb" fontSize="16">TLS, RBAC, Audit</text>
          <rect x="700" y="260" width="240" height="120" rx="16" fill="url(#pane)" stroke="#334155"/>
          <text x="730" y="300" fill="#93c5fd" fontSize="18">Подписки/Профили</text>
          <text x="730" y="330" fill="#e5e7eb" fontSize="16">рецепты культур, ML</text>
          <path d="M490 200 L490 260" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrow)">
            <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="1.2s" repeatCount="indefinite" begin="0.6s"/>
          </path>
          <path d="M820 200 L820 260" stroke="#60a5fa" strokeWidth="3" markerEnd="url(#arrow)">
            <animate attributeName="stroke-dasharray" from="0,200" to="200,0" dur="1.2s" repeatCount="indefinite" begin="0.9s"/>
          </path>
        </g>
      </svg>
    </div>
  )
}
