"use client";
import { Instagram, Linkedin, Send, ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);


  const handleSubscribe = (e) => {
    e.preventDefault();
    toast.success("Thank your for Subscritption")
    // if (email.trim() !== "") {
    //   setSubscribed(true);
    //   console.log("Subscribed with:", email);
    //   setTimeout(() => {
    //     setSubscribed(false);
    //     setEmail("");
    //   }, 3000);
    // }
  };

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative font-sans bg-gradient-to-r from-[#7B4C34] via-[#8B5E3C] to-[#7B4C34] text-white">
      <div className="container px-6 py-14 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo.png" alt="ClayCrafts Logo" width={50} height={50} />
            <span className="text-2xl font-bold tracking-wider">CLAYCRAFTS</span>
          </Link>
          <p className="mt-4 text-sm text-gray-300">
            Crafted by hand, inspired by earth. Authentic earthenware for the
            modern home.
          </p>
        </div>

        {/* Explore Links */}
        <div>
          <p className="font-semibold text-lg">Explore</p>
          <div className="flex flex-col mt-5 space-y-3">
            {["Products", "New Arrivals", "About Us"].map((link, i) => (
              <a
                key={i}
                href="#"
                className="text-gray-300 transition-all duration-300 hover:text-white hover:translate-x-1"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <p className="font-semibold text-lg">Connect</p>
          <div className="flex items-center mt-5 space-x-5">
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="Instagram">
              <Instagram className="text-gray-300 hover:text-white" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" aria-label="LinkedIn">
              <Linkedin className="text-gray-300 hover:text-white" />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="mailto:info@claycrafts.com" aria-label="Email">
              <Send className="text-gray-300 hover:text-white" />
            </motion.a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="font-semibold text-lg">Stay Updated</p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center mt-5 gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-lg focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition"
            >
              Subscribe
            </button>
          </form>
          {/* {subscribed && (
            <p className="mt-2 text-sm text-green-300 animate-pulse">
              ✅ Subscribed successfully!
            </p>
          )} */}
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Footer Bottom */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm px-6 py-5">
        <p>© {new Date().getFullYear()} ClayCrafts. All Rights Reserved.</p>
        <div className="flex items-center mt-3 space-x-5 sm:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Use</a>
        </div>
      </div>

      {/* Back to Top Floating Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-stone-700 hover:bg-black/30 text-black shadow-lg"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
}
