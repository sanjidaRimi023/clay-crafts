"use client";
import React from "react";
import RegisterForm from "./components/register-form";
const RegisterPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 bg-[#D4B996] ">
      <div className="roboto w-full max-w-md shadow-2xl rounded-3xl p-8 mx-auto border border-[#8B5E3C] bg-[#8B5E3C]">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#FFF8E7]">
          Join the ClayCraft Community
        </h1>
        <p className="text-center mb-8 text-[#F5E6D3]">
          Sign up and start creating, sharing, and organizing your ideas
          effortlessly.{" "}
        </p>
        <RegisterForm />
        {/* OR Divider */}
        {/* <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-[#C9A66B]" />
          <span className="mx-4 text-sm text-[#F5E6D3]">Or sign in with</span>
          <hr className="flex-grow border-t border-[#C9A66B]" />
        </div> */}

        {/* Social Sign-in
        <div className="flex justify-center space-x-4">
          <button
            aria-label="Sign in with Google"
            className="w-full flex items-center justify-center border border-[#C9A66B] font-semibold py-3 px-4 rounded-xl duration-200 hover:scale-[1.02] shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="Google"
              className="h-6 w-6"
            />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default RegisterPage;
