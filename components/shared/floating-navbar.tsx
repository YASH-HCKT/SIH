"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { User, LogIn, UserPlus, ShieldCheck } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "AI Assistant", href: "/chat" },
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
];

export const FloatingNavbar = () => {
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* Floating Main Nav */}
      <nav className="fixed left-1/2 top-0 z-50 -translate-x-1/2">
        <div className="flex items-center gap-3 rounded-b-2xl bg-black/90 backdrop-blur-md border-x border-b border-white/10 px-4 py-2.5 sm:gap-6 md:gap-8 md:rounded-b-3xl md:px-8 shadow-2xl">
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

      {/* Top Right Profile Button */}
      <div className="fixed top-3 right-4 sm:right-6 md:right-8 z-50" ref={menuRef}>
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          aria-label="User profile and login"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white flex items-center justify-center shadow-lg shadow-orange-500/20 border border-white/20 transition-all hover:scale-105 focus:outline-none"
        >
          <User className="w-5 h-5" />
        </button>

        {/* Profile Dropdown Menu */}
        {profileOpen && (
          <div className="absolute right-0 mt-2 w-56 rounded-2xl bg-slate-950/95 backdrop-blur-xl border border-slate-800 shadow-2xl p-2 z-50 text-white animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="px-3 py-2 border-b border-slate-800 mb-1">
              <p className="text-xs font-semibold text-white flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-orange-500" />
                IP-SAKTI Portal
              </p>
              <p className="text-[10px] text-slate-400">Ayurveda IP & Compliance</p>
            </div>

            <Link
              href="/login"
              onClick={() => setProfileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <LogIn className="w-4 h-4 text-orange-400" />
              <span>Login</span>
            </Link>

            <Link
              href="/register"
              onClick={() => setProfileOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs text-slate-200 hover:bg-white/10 hover:text-white transition-colors"
            >
              <UserPlus className="w-4 h-4 text-emerald-400" />
              <span>Register / Create Account</span>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
