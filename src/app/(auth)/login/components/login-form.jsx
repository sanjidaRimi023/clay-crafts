"use client";
import React, { useState } from 'react'

import { Eye, EyeClosed, Key, Mail } from "lucide-react";

export default function LoginForm() {
      const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ email,password});
    }
  return (
      <>
            <form onSubmit={handleSubmit} className="space-y-6">
            {}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium"
              >
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail />
                </div>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="block w-full pl-10 pr-3 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            {}
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Key />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <Eye /> : <EyeClosed />}
                </button>
              </div>
            </div>

            {}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 focus:ring-[#E2725B]"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm font-medium ">
                Forgot password?
              </a>
            </div>

            {}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#df9d6b] to-[#c99186]  font-semibold py-3 px-4 rounded-xl transform transition-all duration-200 hover:scale-[1.02] shadow-lg"
            >
              Sign In
            </button>
          </form>
      </>
  )
}
