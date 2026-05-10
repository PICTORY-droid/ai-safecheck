import Link from "next/link";
import AppLogo from "./AppLogo";

const NAV_ITEMS = [
  {
    href: "/",
    label: "홈",
  },
  {
    href: "/scan",
    label: "검사하기",
  },
  {
    href: "/admin",
    label: "관리자",
  },
  {
    href: "/reports",
    label: "리포트",
  },
];

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4">
        <AppLogo />

        <nav aria-label="주요 메뉴" className="flex items-center gap-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
