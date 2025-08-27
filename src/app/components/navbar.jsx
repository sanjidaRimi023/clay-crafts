"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();


  return (
    <nav className="bg-[#a8754e] playfair font-semibold sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" width={60} height={60} alt="navicon" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-white">
          <Link href="/"  className={pathname === "/" ? "underline " : ""}>Home</Link>
          <Link href="/products" className={pathname === "/products" ? "underline " : ""}>Products</Link>
          <Link href="/about" className={pathname === "/about" ? "underline " : ""}>About Us</Link>
          <Link href="/addproduct" className={pathname === "/addproduct" ? "underline " : ""}>Add Product</Link>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:block relative">
          {session?.user ? (
            <div className="flex items-center gap-4">
              {/* Avatar */}
              <img
                src="/userImage.png" // public folder থেকে
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />

              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-52 w-56 bg-[#eeb183] rounded-lg shadow-lg py-3 z-50">
                  <div className="px-4 py-2 border-b">
                    <p className="text-sm">
                      {session.user.email}
                    </p>
                  </div>
                  <Link
                    href="/dashboard"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut({ callbackUrl: "/login" })}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/login"
                className="bg-white text-[#a8754e] px-4 py-1 rounded"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="border border-white text-white px-4 py-1 rounded"
              >
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
          <Link href="/" onClick={() => setIsOpen(false)} className={pathname === "/" ? "underline" : ""}>
            Home
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className={pathname === "/products" ? "underline " : ""}>
            Products
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={pathname === "/about" ? "underline " : ""}>
            About Us
          </Link>

          {session?.user ? (
            <>
              <span>{session.user.email}</span>
              <Link href="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="bg-white text-[#a8754e] px-4 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="bg-white text-[#a8754e] px-4 py-1 rounded"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="border border-white px-4 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
