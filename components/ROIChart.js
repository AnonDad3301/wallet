import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const revenue = [
  { m: "M1", devices: 5, subs: 0.3 },
  { m: "M3", devices: 60, subs: 2.4 },
  { m: "M6", devices: 220, subs: 9.5 },
  { m: "M12", devices: 1200, subs: 52 },
];

const unitEconomics = [
  { k: "Себестоимость", v: 420 },
  { k: "Цена", v: 990 },
  { k: "Маржа на харде", v: 570 },
  { k: "Подписка/год", v: 120 },
];

export default function ROIChart(){
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card">
        <h4 className="font-semibold mb-3">Динамика выручки (устройства + подписка)</h4>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenue}>
              <XAxis dataKey="m" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="devices" name="Продажи устройств, тыс.$" fillOpacity={0.2} fill="#60a5fa" stroke="#60a5fa"/>
              <Area type="monotone" dataKey="subs" name="Подписка, тыс.$" fillOpacity={0.2} fill="#34d399" stroke="#34d399"/>
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="card">
        <h4 className="font-semibold mb-3">Юнит-экономика (пример)</h4>
        <div className="h-60">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={unitEconomics} dataKey="v" nameKey="k" outerRadius={110} label>
                {unitEconomics.map((_, i) => <Cell key={i} />)}
              </Pie>
              <Tooltip/>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <ul className="text-white/80 text-sm space-y-1">
          <li>Пайбек: ~10–12 мес. при ARPU подписки ≥ $10/мес.</li>
          <li>Gross margin (hardware): 40–55% при объёме &gt; 1k шт.</li>
          <li>Data moat: ценность ML-профилей культур растёт с парком устройств.</li>
        </ul>
      </div>
    </div>
  )
}
