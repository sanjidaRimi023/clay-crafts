import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="playfair bg-[#8B5E3C]">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="ClayCrafts Logo"
                width={50}
                height={50}
              />
              <span className="text-2xl font-semibold tracking-wider">
                CLAYCRAFTS
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Crafted by hand, inspired by earth. Authentic earthenware for the
              modern home.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <p className="font-semibold">Explore</p>
            <div className="flex flex-col items-start mt-4 space-y-2">
              <Link
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:underline"
              >
                Shop All
              </Link>
              <Link
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:underline"
              >
                New Arrivals
              </Link>
              <Link
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:underline"
              >
                Collections
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="font-semibold">Company</p>
            <div className="flex flex-col items-start mt-4 space-y-2">
              <Link
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:underline"
              >
                Our Story
              </Link>
              <Link
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:underline"
              >
                Workshops
              </Link>
              <Link
                href="/"
                className="text-gray-300 transition-colors duration-300 hover:underline"
              >
                Pottery Care
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <p className="font-semibold">Connect</p>
            <div className="flex items-center mt-4 space-x-4">
              <Link
                href="/"
                aria-label="Instagram"
                className="text-gray-300 transition-colors duration-300"
              >
                Instagram
              </Link>
              <Link
                href="/"
                aria-label="Pinterest"
                className="text-gray-300 transition-colors duration-300"
              >
                Pinterest
              </Link>
              <Link
                href="/"
                aria-label="Email"
                className="text-gray-300 transition-colors duration-300"
              >
                Mail
              </Link>
            </div>
          </div>
        </div>

        <hr className="my-8 border-white" />

        <div className="flex flex-col items-center justify-between sm:flex-row text-sm text-white">
          <p className="">
            © {new Date().getFullYear()} ClayCrafts. All Rights Reserved.
          </p>
          <div className="flex mt-3 space-x-4 sm:mt-0">
            <Link
              href="/"
              className="text-sm transition-colors duration-300 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/"
              className="text-sm transition-colors duration-300 hover:underline"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
