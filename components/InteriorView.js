export default function InteriorView(){
  return (
    <div className="card">
      <svg viewBox="0 0 800 420" className="w-full h-auto" role="img" aria-label="Внутренний вид: манипулятор, лотки, LED, климат">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0d1116"/>
            <stop offset="100%" stopColor="#0a0d11"/>
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <rect x="20" y="20" width="760" height="320" rx="22" fill="url(#bg)" stroke="#1f2937" />
        <rect x="40" y="36" width="720" height="10" rx="5" fill="#7be0ff" filter="url(#glow)"/>
        <rect x="80" y="260" width="240" height="40" rx="10" fill="#1f2937" stroke="#2b3440"/>
        <rect x="340" y="260" width="240" height="40" rx="10" fill="#1f2937" stroke="#2b3440"/>
        <rect x="600" y="260" width="120" height="40" rx="10" fill="#1f2937" stroke="#2b3440"/>
        <g>
          <animateTransform attributeName="transform" type="translate" values="0 0; 6 0; 0 0" dur="2.4s" repeatCount="indefinite"/>
          <g transform="translate(300,120)">
            <circle cx="0" cy="80" r="22" fill="#2b3440"/>
            <rect x="-10" y="-10" width="20" height="100" rx="10" fill="#3b4654"/>
            <circle cx="0" cy="-10" r="18" fill="#2b3440"/>
            <rect x="-6" y="-60" width="12" height="50" rx="6" fill="#3b4654"/>
            <circle cx="0" cy="-60" r="14" fill="#2b3440"/>
            <rect x="-70" y="-90" width="140" height="14" rx="7" fill="#3b4654"/>
            <rect x="70" y="-96" width="8" height="20" rx="4" fill="#7be0ff"/>
            <rect x="82" y="-96" width="8" height="20" rx="4" fill="#7be0ff"/>
          </g>
        </g>
        <g>
          <rect x="540" y="60" width="220" height="80" rx="14" fill="#0f172a" stroke="#1f2937"/>
          <text x="556" y="88" fill="#94a3b8" fontSize="16">Температура</text>
          <text x="556" y="112" fill="#e2e8f0" fontSize="22">23°C</text>
          <rect x="540" y="150" width="220" height="80" rx="14" fill="#0f172a" stroke="#1f2937"/>
          <text x="556" y="178" fill="#94a3b8" fontSize="16">Влажность</text>
          <text x="556" y="202" fill="#e2e8f0" fontSize="22">65%</text>
        </g>
      </svg>
    </div>
  )
}
