"use client";
import React, { useState } from "react";
import { Eye, EyeClosed, Key, Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useSearchParams,useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect") || "/";
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      toast.error("Invalid credentials");
    } else {
      toast.success("Welcome to clayCrafts");
      router.push(redirectPath);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 roboto">
        {}
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-white text-sm font-medium"
          >
            Email Address
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
              <Mail />
            </div>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="block text-white w-full pl-10 pr-3 py-3 border border-[#E2725B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>
        {}
        <div className="space-y-2">
          <label
            htmlFor="password"
            className="block text-white text-sm font-medium"
          >
            Password
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white">
              <Key />
            </div>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="block text-white w-full pl-10 pr-3 py-3 border border-[#E2725B] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#E2725B] focus:border-transparent transition-all duration-200"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center  text-white transition-colors"
            >
              {showPassword ? <Eye /> : <EyeClosed />}
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              type="checkbox"
              className="h-4 w-4 text-white focus:ring-[#E2725B]"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-white"
            >
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm font-medium text-white">
            Forgot password?
          </a>
        </div>

        {}
        <button
          type="submit"
          className="w-full bg-gradient-to-r  text-white from-[#df9d6b] to-[#c99186]  font-semibold py-3 px-4 rounded-xl transform transition-all duration-200 hover:scale-[1.02] shadow-lg"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
