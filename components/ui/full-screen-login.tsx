"use client";

import { SunIcon as Sunburst, Lock, Mail, ArrowRight } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

export const FullScreenLogin = () => {
  const [emailOrMobile, setEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let valid = true;

    if (!emailOrMobile.trim()) {
      setEmailError("Please enter your email or mobile number.");
      valid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Please enter your password.");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      setSubmitted(true);
      console.log("Logged in:", { emailOrMobile, rememberMe });
      alert("Successfully logged in to IP-SAKTI!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden p-4 sm:p-6 bg-black text-white pt-24 pb-12">
      <div className="w-full relative max-w-4xl overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-3xl border border-white/10">
        <div className="w-full h-full z-2 absolute bg-gradient-to-t from-transparent to-black/80 pointer-events-none"></div>

        {/* Decorative backdrop stripes */}
        <div className="flex absolute z-2 overflow-hidden backdrop-blur-2xl pointer-events-none">
          <div className="h-[40rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[40rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[40rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[40rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[40rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[40rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
        </div>

        {/* Glow orb accents */}
        <div className="w-[15rem] h-[15rem] bg-orange-500/30 blur-3xl absolute z-1 rounded-full bottom-0 left-0 pointer-events-none"></div>
        <div className="w-[10rem] h-[10rem] bg-teal-500/20 blur-3xl absolute z-1 rounded-full top-0 right-0 pointer-events-none"></div>

        {/* Left Side: Branding */}
        <div className="bg-gradient-to-b from-slate-950 to-black text-white p-8 md:p-12 md:w-1/2 relative flex flex-col justify-between overflow-hidden border-r border-white/10 z-10">
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-6">
              <Sunburst className="h-10 w-10 animate-pulse" />
              <span className="text-xl font-bold tracking-tight text-white">IP-SAKTI</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight relative mb-4">
              Welcome back to IP-SAKTI Sahayak
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Access your saved searches, patent evaluations, regulatory drafts, and AI research history.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400">
            <p>🔒 Secure RAG & Multilingual AI Gateway</p>
          </div>
        </div>

        {/* Right Side: Login Form */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col bg-slate-900/90 backdrop-blur-xl z-20 text-slate-100 justify-center">
          <div className="flex flex-col items-left mb-6">
            <h2 className="text-2xl md:text-3xl font-medium mb-1 tracking-tight text-white">
              Account Login
            </h2>
            <p className="text-left text-sm opacity-80 text-slate-300">
              Enter your credentials to continue
            </p>
          </div>

          {submitted && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-xs">
              Logged in successfully! Redirecting...
            </div>
          )}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            {/* Email or Mobile */}
            <div>
              <label htmlFor="emailOrMobile" className="block text-xs font-medium mb-1.5 text-slate-300">
                Email Address or Mobile Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="emailOrMobile"
                  placeholder="name@example.com or 9876543210"
                  className={`text-sm w-full py-2.5 px-3 pl-9 border rounded-xl focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 ${
                    emailError ? "border-red-500" : "border-slate-700"
                  }`}
                  value={emailOrMobile}
                  onChange={(e) => setEmailOrMobile(e.target.value)}
                />
                <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
              {emailError && <p className="text-red-400 text-xs mt-1">{emailError}</p>}
            </div>

            {/* Password */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label htmlFor="password" className="block text-xs font-medium text-slate-300">
                  Password
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to your registered email!"); }} className="text-xs text-orange-400 hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className={`text-sm w-full py-2.5 px-3 pl-9 border rounded-xl focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 ${
                    passwordError ? "border-red-500" : "border-slate-700"
                  }`}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Lock className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
              </div>
              {passwordError && <p className="text-red-400 text-xs mt-1">{passwordError}</p>}
            </div>

            {/* Remember Me Box */}
            <div className="flex items-center justify-between my-1">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-slate-700 text-orange-500 focus:ring-orange-500 bg-slate-950 w-4 h-4 accent-orange-500"
                />
                Remember me on this device
              </label>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 group"
            >
              <span>Login</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Divider and Create Account link */}
            <div className="pt-4 border-t border-slate-800 text-center text-xs text-slate-400">
              New to IP-SAKTI?{" "}
              <Link href="/register" className="text-orange-400 hover:text-orange-300 font-medium underline">
                Create account
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
