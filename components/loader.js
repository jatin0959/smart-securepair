'use client';
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * WelcomeSection – a full‑viewport hero/welcome component
 * -------------------------------------------------------
 * • Glassmorphism card floating on a vibrant gradient background
 * • Displays developer photo in a glowing ring
 * • Sub‑headline and CTA button with subtle hover animations
 *
 * Usage: <WelcomeSection onCtaClick={...} />
 */
export default function WelcomeSection({ onCtaClick = () => {} }) {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 px-6 py-16 text-white">
      {/* background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [mask-image:radial-gradient(transparent_60%,black)]">
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          className="absolute left-1/4 top-1/4 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          className="absolute right-1/4 top-1/2 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 4 }}
          className="absolute left-1/3 bottom-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-pink-500 blur-3xl" />
      </div>

      {/* glass card */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto w-full max-w-3xl rounded-3xl border border-blue-500/30 bg-white/5 p-12 backdrop-blur-lg shadow-lg shadow-blue-500/10"
      >
        <div className="flex flex-col items-center gap-8 text-center md:flex-row md:gap-12 md:text-left">
          {/* avatar */}
          <div className="relative flex-shrink-0">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1"
            />
            <img
              src="/jatin.jpeg"
              alt="Jatin Dubey"
              className="relative h-40 w-40 rounded-full object-cover"
            />
          </div>

          {/* copy */}
          <div>
            <h1 className="text-4xl font-extrabold md:text-5xl">
              Welcome – I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Jatin Dubey</span>
            </h1>
            <p className="mt-4 text-lg text-gray-300 md:text-xl">
              Cybersecurity Researcher • ML Engineer • Entrepreneur
            </p>
            <p className="mt-2 max-w-xl text-gray-400">
              I craft secure, AI‑powered solutions that safeguard tomorrow's connected world. Dive into my latest innovation and see how Smart&nbsp;SecurePair™ can protect your audio products.
            </p>
            <button
              onClick={onCtaClick}
              className="group mt-6 inline-flex items-center gap-2 rounded-2xl border-2 border-blue-400 px-8 py-4 font-semibold text-blue-400 transition-all duration-300 hover:bg-blue-400 hover:text-white"
            >
              Explore SecurePair
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
