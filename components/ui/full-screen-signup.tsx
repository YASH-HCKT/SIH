"use client";

import { SunIcon as Sunburst, Check, ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

export const USER_TYPES = [
  "Ayurveda Practitioner",
  "Researcher / Academic",
  "Student",
  "Startup / Entrepreneur",
  "Manufacturer",
  "IP Professional",
  "Legal Professional",
  "General User",
];

export const AREAS_OF_INTEREST = [
  "Patents",
  "Traditional Knowledge",
  "Regulatory Classification",
  "ABS / Biological Resources",
  "Trademarks & GI",
  "International IP",
];

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Assam",
  "Bihar",
  "Delhi",
  "Gujarat",
  "Haryana",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Other / Outside India",
];

export const FullScreenSignup = () => {
  // Form mode: register
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    state: "",
    userType: "",
    organization: "",
    designation: "",
    areasOfInterest: [] as string[],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  const validateMobile = (value: string) => {
    return /^[0-9]{10}$/.test(value.replace(/[^0-9]/g, ""));
  };

  const handleInterestToggle = (area: string) => {
    setFormData((prev) => {
      const exists = prev.areasOfInterest.includes(area);
      return {
        ...prev,
        areasOfInterest: exists
          ? prev.areasOfInterest.filter((item) => item !== area)
          : [...prev.areasOfInterest, area],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }

    if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.mobile || !validateMobile(formData.mobile)) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters.";
    }

    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.state) {
      newErrors.state = "Please select your state.";
    }

    if (!formData.userType) {
      newErrors.userType = "Please select your user/stakeholder type.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      console.log("Registration submitted successfully:", formData);
      alert("Account created successfully! Welcome to IP-SAKTI Sahayak.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden p-4 sm:p-6 bg-black text-white pt-24 pb-12">
      <div className="w-full relative max-w-5xl overflow-hidden flex flex-col md:flex-row shadow-2xl rounded-3xl border border-white/10">
        <div className="w-full h-full z-2 absolute bg-gradient-to-t from-transparent to-black/80 pointer-events-none"></div>
        
        {/* Decorative backdrop stripes */}
        <div className="flex absolute z-2 overflow-hidden backdrop-blur-2xl pointer-events-none">
          <div className="h-[50rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[50rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[50rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[50rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[50rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
          <div className="h-[50rem] z-2 w-[4rem] bg-gradient-to-r from-transparent via-black via-[69%] to-white/20 opacity-30 overflow-hidden"></div>
        </div>

        {/* Glow orb accents */}
        <div className="w-[15rem] h-[15rem] bg-orange-500/30 blur-3xl absolute z-1 rounded-full bottom-0 left-0 pointer-events-none"></div>
        <div className="w-[12rem] h-[12rem] bg-emerald-500/20 blur-3xl absolute z-1 rounded-full top-0 right-0 pointer-events-none"></div>

        {/* Left Side: Branding / Banner */}
        <div className="bg-gradient-to-b from-slate-950 to-black text-white p-8 md:p-12 md:w-5/12 relative flex flex-col justify-between overflow-hidden border-r border-white/10 z-10">
          <div>
            <div className="flex items-center gap-2 text-orange-500 mb-6">
              <Sunburst className="h-10 w-10 animate-pulse" />
              <span className="text-xl font-bold tracking-tight text-white">IP-SAKTI</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-medium leading-tight tracking-tight relative mb-4">
              Ayurveda Intellectual Property & Regulatory Compliance Platform
            </h1>
            <p className="text-slate-400 text-sm leading-relaxed">
              Empowering researchers, practitioners, startups, and institutions to safeguard traditional knowledge, patents, and global compliance.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-400">
            <p>🌿 Supported by Ministry of Ayush & TKDL Registries</p>
          </div>
        </div>

        {/* Right Side: Register Form */}
        <div className="p-6 md:p-10 md:w-7/12 flex flex-col bg-slate-900/90 backdrop-blur-xl z-20 text-slate-100 max-h-[85vh] overflow-y-auto scrollbar-thin">
          <div className="flex flex-col items-left mb-6">
            <h2 className="text-2xl md:text-3xl font-medium mb-1 tracking-tight text-white">
              Create an Account
            </h2>
            <p className="text-left text-sm opacity-80 text-slate-300">
              Welcome to IP-SAKTI Sahayak — Register to start protecting your innovation
            </p>
          </div>

          {submitted && (
            <div className="mb-6 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-300 text-sm">
              Account registered successfully! Redirecting to login...
            </div>
          )}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit} noValidate>
            {/* Required Section Header */}
            <div className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">
              Required Details
            </div>

            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-xs font-medium mb-1 text-slate-300">
                Full Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                placeholder="Dr. Rajesh Sharma"
                className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 ${
                  errors.fullName ? "border-red-500" : "border-slate-700"
                }`}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Email & Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="email" className="block text-xs font-medium mb-1 text-slate-300">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="rajesh@ayurveda.in"
                  className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 ${
                    errors.email ? "border-red-500" : "border-slate-700"
                  }`}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="mobile" className="block text-xs font-medium mb-1 text-slate-300">
                  Mobile Number <span className="text-orange-500">*</span>
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="9876543210"
                  className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 ${
                    errors.mobile ? "border-red-500" : "border-slate-700"
                  }`}
                  value={formData.mobile}
                  onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                />
                {errors.mobile && <p className="text-red-400 text-xs mt-1">{errors.mobile}</p>}
              </div>
            </div>

            {/* Password & Confirm Password Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="password" className="block text-xs font-medium mb-1 text-slate-300">
                  Password <span className="text-orange-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 ${
                    errors.password ? "border-red-500" : "border-slate-700"
                  }`}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-xs font-medium mb-1 text-slate-300">
                  Confirm Password <span className="text-orange-500">*</span>
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 ${
                    errors.confirmPassword ? "border-red-500" : "border-slate-700"
                  }`}
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
                {errors.confirmPassword && (
                  <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>
                )}
              </div>
            </div>

            {/* State & Stakeholder Type Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="state" className="block text-xs font-medium mb-1 text-slate-300">
                  State <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="state"
                    className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 appearance-none pr-8 ${
                      errors.state ? "border-red-500" : "border-slate-700"
                    }`}
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  >
                    <option value="">Select State</option>
                    {INDIAN_STATES.map((st) => (
                      <option key={st} value={st} className="bg-slate-900 text-white">
                        {st}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                </div>
                {errors.state && <p className="text-red-400 text-xs mt-1">{errors.state}</p>}
              </div>

              <div>
                <label htmlFor="userType" className="block text-xs font-medium mb-1 text-slate-300">
                  User / Stakeholder Type <span className="text-orange-500">*</span>
                </label>
                <div className="relative">
                  <select
                    id="userType"
                    className={`text-sm w-full py-2 px-3 border rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500 appearance-none pr-8 ${
                      errors.userType ? "border-red-500" : "border-slate-700"
                    }`}
                    value={formData.userType}
                    onChange={(e) => setFormData({ ...formData, userType: e.target.value })}
                  >
                    <option value="">Select Stakeholder Category</option>
                    {USER_TYPES.map((ut) => (
                      <option key={ut} value={ut} className="bg-slate-900 text-white">
                        {ut}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="w-4 h-4 text-slate-400 absolute right-2.5 top-3 pointer-events-none" />
                </div>
                {errors.userType && <p className="text-red-400 text-xs mt-1">{errors.userType}</p>}
              </div>
            </div>

            {/* Optional Section Header */}
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-2 mb-1 border-t border-slate-800 pt-3">
              Optional Details
            </div>

            {/* Organization & Designation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="organization" className="block text-xs font-medium mb-1 text-slate-400">
                  Organization / Institution
                </label>
                <input
                  type="text"
                  id="organization"
                  placeholder="e.g. AIIA / BHU / Private Lab"
                  className="text-sm w-full py-2 px-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="designation" className="block text-xs font-medium mb-1 text-slate-400">
                  Designation
                </label>
                <input
                  type="text"
                  id="designation"
                  placeholder="e.g. Senior Researcher / Founder"
                  className="text-sm w-full py-2 px-3 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 bg-slate-950 text-white focus:ring-orange-500"
                  value={formData.designation}
                  onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                />
              </div>
            </div>

            {/* Area of Interest */}
            <div>
              <label className="block text-xs font-medium mb-2 text-slate-400">
                Area of Interest (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {AREAS_OF_INTEREST.map((area) => {
                  const isSelected = formData.areasOfInterest.includes(area);
                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() => handleInterestToggle(area)}
                      className={`text-xs p-2 rounded-lg border text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-orange-500/20 border-orange-500 text-orange-300 font-medium"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span className="line-clamp-1">{area}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-orange-400 shrink-0 ml-1" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-medium py-2.5 px-4 rounded-xl transition-all shadow-lg shadow-orange-500/20 mt-2"
            >
              Create Account
            </button>

            {/* Login Navigation Link */}
            <div className="text-center text-slate-400 text-xs mt-2">
              Already have an account?{" "}
              <Link href="/login" className="text-orange-400 hover:text-orange-300 font-medium underline">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
