"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "AI Assistant", href: "/chat" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export const FloatingNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
      <div className="flex items-center gap-3 rounded-b-2xl bg-black/90 backdrop-blur-md border-x border-b border-white/10 px-4 py-2.5 sm:gap-6 md:gap-10 md:rounded-b-3xl md:px-8 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`text-[11px] sm:text-xs md:text-sm font-medium transition-all ${
                isActive
                  ? "text-[#E1E0CC] font-semibold border-b border-[#E1E0CC]"
                  : "text-[#E1E0CC]/70 hover:text-[#E1E0CC]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
