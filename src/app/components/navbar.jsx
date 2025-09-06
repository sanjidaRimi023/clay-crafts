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

  // active link styles
  const linkClasses = (path) =>
    `px-3 py-2 rounded-lg transition-colors duration-200 ${
      pathname === path
        ? "bg-white/20"
        : "hover:bg-white/10 hover:underline"
    }`;

  return (
    <nav className="bg-[#a8754e] playfair font-semibold sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" width={55} height={55} alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white text-sm">
          <Link href="/" className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/products" className={linkClasses("/products")}>
            Products
          </Link>
          <Link href="/about" className={linkClasses("/about")}>
            About Us
          </Link>
          <Link href="/addproduct" className={linkClasses("/addproduct")}>
            Add Product
          </Link>
        </ul>

        {/* Desktop Auth */}
        <div className="hidden md:block relative">
          {session?.user ? (
            <div className="flex items-center gap-4 relative">
              <img
                src="/userImage.png"
                alt="User Avatar"
                className="w-10 h-10 rounded-full ring-2 ring-white cursor-pointer"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              />
              {/* Dropdown */}
              {isDropdownOpen && (
                <div className="absolute right-0 top-12 w-60 bg-white rounded-lg shadow-xl overflow-hidden animate-fade-in">
                  <div className="px-4 py-3 border-b">
                    <p className="text-sm text-gray-600">{session.user.email}</p>
                  </div>
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                href="/login"
                className="bg-white text-[#a8754e] px-4 py-2 rounded-lg hover:bg-gray-200 transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white/20 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#a8754e] text-white flex flex-col items-center gap-4 py-6 animate-slide-down">
          <Link href="/" onClick={() => setIsOpen(false)} className={linkClasses("/")}>
            Home
          </Link>
          <Link href="/products" onClick={() => setIsOpen(false)} className={linkClasses("/products")}>
            Products
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className={linkClasses("/about")}>
            About Us
          </Link>
          <Link href="/addproduct" onClick={() => setIsOpen(false)} className={linkClasses("/addproduct")}>
            Add Product
          </Link>

          {session?.user ? (
            <>
              <span className="text-sm">{session.user.email}</span>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-white text-[#a8754e] px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="bg-white text-[#a8754e] px-4 py-2 rounded-lg"
              >
                Login
              </Link>
              <Link
                href="/register"
                onClick={() => setIsOpen(false)}
                className="border border-white px-4 py-2 rounded-lg"
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
