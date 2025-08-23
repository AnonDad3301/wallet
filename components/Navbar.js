import Link from "next/link";
import { Leaf, LineChart, Users, FileText, GitBranch, Home } from "lucide-react";

const links = [
  { href: "/", label: "Главная", icon: Home },
  { href: "/product", label: "Продукт", icon: Leaf },
  { href: "/docs", label: "Техническая документация", icon: FileText },
  { href: "/team", label: "Команда", icon: Users },
  { href: "/investors", label: "Инвесторам", icon: LineChart },
  { href: "/roadmap", label: "Дорожная карта", icon: GitBranch },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur bg-black/30">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-sky-400"/>
          </div>
          <div>
            <div className="font-semibold leading-tight">SmartFarm.AI</div>
            <div className="text-xs text-white/60">Автономная мини-ферма с ИИ</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-2">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition">
              <l.icon className="w-4 h-4"/><span>{l.label}</span>
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/investors" className="btn">Инвесторам</Link>
        </div>
      </div>
      <div className="md:hidden px-3 pb-3 flex gap-2 overflow-x-auto">
        {links.map(l => (
          <Link key={l.href} href={l.href} className="flex items-center gap-2 px-3 py-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition whitespace-nowrap">
            <l.icon className="w-4 h-4"/><span>{l.label}</span>
          </Link>
        ))}
      </div>
    </header>
  );
}
