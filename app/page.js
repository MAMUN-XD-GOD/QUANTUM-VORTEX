"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">

      <motion.h1
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl font-bold mb-4"
      >
        <span className="text-neon">Quantum</span>  
        <span className="text-flame"> Vortex</span>  
        Analyzer
      </motion.h1>

      <p className="text-gray-300 max-w-md mb-8">
        Upload your trading chart screenshot and let the multi-engine AI system 
        analyze, decode, and deliver the next direction instantly.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link href="/analyzer">
          <button className="px-6 py-3 bg-vortex rounded-xl shadow-vortex-purple aura-flame
            text-white text-lg font-semibold hover:scale-105 transition-all">
            Enter Analyzer
          </button>
        </Link>
      </motion.div>

    </div>
  );
}
