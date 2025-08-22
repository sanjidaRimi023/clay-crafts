"use client";
import Link from "next/link";

import LoginForm from "./components/login-form";

export default function LoginPage() {

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#D4B996] ">
      <div className="w-full max-w-md">
        <div className="bg-[#8B5E3C] rounded-xl shadow-xl p-8">
          <span className="md:text-4xl font-bold items-center">
            Welcome Back
          </span>
        <LoginForm/>

          {}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gradient-to-r from-[#df9d6b] to-[#c99186] rounded-2xl">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {}
          <div className="mt-6 grid grid-cols-2 gap-3"></div>

          {}
          <p className="mt-6 text-center text-sn">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
