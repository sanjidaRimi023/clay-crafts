"use client";
import React, { useState } from "react";
import { Eye, EyeClosed, LockKeyhole, Mail, UserPen } from "lucide-react";
import { RegisterUser } from "@/app/actions/auth/RegisterUser";
// import { useRouter } from "next/router";
import { useSearchParams, useRouter} from "next/navigation";
import toast from "react-hot-toast";

export default function RegisterForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter()
  const searchParams = useSearchParams();
  const redirectPath = searchParams.get("redirect" | "/");
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    const form = e.target;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;

    const res = await RegisterUser({
      username,
      email,
      password,
    });
    if (res.acknowledged) {
      toast.success("Registration Successfully")
      router.push(redirectPath)
    } else {
      toast.error("You are already exists or invalid data")
    }
    setLoading(false)
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#FFF8E7]">
            <UserPen />
          </span>
          <input
            name="username"
            type="text"
            placeholder="Name"
            aria-label="Name"
            className="w-full pl-10 pr-4 py-3 bg-[#8B5E3C]  border border-[#F5E6D3] rounded-lg focus:ring-2 focus:ring-[#C9A66B] focus:border-[#C9A66B] outline-none transition duration-300 placeholder-[#F5E6D3] text-[#FFF8E7]"
          />
        </div>

        {/* Email Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#FFF8E7]">
            <Mail />
          </span>
          <input
            name="email"
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="w-full pl-10 pr-4 py-3 bg-[#8B5E3C]  border border-[#F5E6D3] rounded-lg focus:ring-2 focus:ring-[#C9A66B] focus:border-[#C9A66B] outline-none transition duration-300 placeholder-[#F5E6D3] text-[#FFF8E7]"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#FFF8E7]">
            <LockKeyhole />
          </span>
          <input
            name="password"
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            aria-label="Password"
            className="w-full pl-10 pr-10 py-3 bg-[#8B5E3C]  border border-[#F5E6D3] rounded-lg focus:ring-2 focus:ring-[#C9A66B] focus:border-[#C9A66B] outline-none transition duration-300 placeholder-[#F5E6D3] text-[#FFF8E7]"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-[#FFF8E7] hover:text-[#FFE8B2]"
            aria-label={passwordVisible ? "Hide password" : "Show password"}
          >
            {passwordVisible ? <Eye /> : <EyeClosed />}
          </button>
        </div>

        {/* Forgot Password */}
        <div className="text-right">
          <a
            href="#"
            className="text-sm font-medium text-[#F5E6D3] hover:text-[#FFE8B2]"
          >
            Forgot password?
          </a>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r  text-white from-[#df9d6b] to-[#c99186]  font-semibold py-3 px-4 rounded-xl duration-200 hover:scale-[1.02] shadow-lg transition-transform transform hover:scale-105"
        >
       {loading? "Registering": "Sign Up"}
        </button>
      </form>
    </>
  );
}
