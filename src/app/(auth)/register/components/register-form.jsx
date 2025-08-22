import React, { useState } from "react";
import { Eye, EyeClosed, LockKeyhole, Mail, UserPen } from "lucide-react";
export default function RegisterForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <form className="space-y-6">
        {/* name Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#FFF8E7]">
            <UserPen />
          </span>
          <input
            type="name"
            placeholder="Name"
            aria-label="Name"
            className="w-full pl-10 pr-4 py-3 bg-[#D4B996] border border-[#8B5E3C] rounded-lg focus:ring-2 focus:ring-[#C9A66B] focus:border-[#C9A66B] outline-none transition duration-300 placeholder-[#F5E6D3] text-[#FFF8E7]"
          />
        </div>
        {/* Email Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#FFF8E7]">
            <Mail />
          </span>
          <input
            type="email"
            placeholder="Email"
            aria-label="Email"
            className="w-full pl-10 pr-4 py-3 bg-[#D4B996] border border-[#8B5E3C] rounded-lg focus:ring-2 focus:ring-[#C9A66B] focus:border-[#C9A66B] outline-none transition duration-300 placeholder-[#F5E6D3] text-[#FFF8E7]"
          />
        </div>

        {/* Password Input */}
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#FFF8E7]">
            <LockKeyhole />
          </span>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder="Password"
            aria-label="Password"
            className="w-full pl-10 pr-10 py-3 bg-[#D4B996] border border-[#8B5E3C] rounded-lg focus:ring-2 focus:ring-[#C9A66B] focus:border-[#C9A66B] outline-none transition duration-300 placeholder-[#F5E6D3] text-[#FFF8E7]"
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
          className="w-full bg-[#D4B996] text-[#FFF8E7] font-bold py-3 px-4 rounded-lg hover:bg-[#A9745F] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#C9A66B] shadow-md transition-transform transform hover:scale-105"
        >
          Sign Up{" "}
        </button>
      </form>
    </>
  );
}
