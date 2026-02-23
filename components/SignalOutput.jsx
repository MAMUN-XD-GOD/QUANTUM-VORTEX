"use client";

import { motion } from "framer-motion";

export default function SignalOutput({ data, image }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-8 bg-[#0a0815] p-5 rounded-xl shadow-vortex-purple"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-flame">
        Final Signal
      </h2>

      <img
        src={image}
        className="w-full rounded-xl mb-4 border border-neon"
      />

      <p className="text-center text-xl font-semibold text-neon">
        {data.direction}
      </p>

      <p className="text-center text-gray-300 text-sm mt-2">
        Confidence: {Math.round(data.confidence)}%
      </p>
    </motion.div>
  );
    }
