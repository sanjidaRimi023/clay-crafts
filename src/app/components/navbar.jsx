"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; 
import { signIn } from "next-auth/react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-[#a8754e] playfair font-semibold  sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" width={60} height={60} alt="navicon" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About Us</Link>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block">
          {isLoggedIn ? (
            <div className="flex gap-4">
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="bg-white text-[#a8754e] px-4 py-1 rounded"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
                <button
                onClick={() => signIn()}
                  className="bg-white text-[#a8754e] px-4 py-1 rounded">
                Login
              </button>
              <Link href="/register" className="border border-white text-white px-4 py-1 rounded">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#a8754e] text-white flex flex-col items-center gap-4 py-4 animate-slide-down">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>

          {isLoggedIn ? (
            <>
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>Dashboard</Link>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setIsOpen(false);
                }}
                className="bg-white text-[#a8754e] px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/login" onClick={() => setIsOpen(false)} className="bg-white text-[#a8754e] px-4 py-1 rounded">
                Login
              </Link>
              <Link href="/register" onClick={() => setIsOpen(false)} className="border border-white px-4 py-1 rounded">
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
