"use client";

import { motion } from "framer-motion";

export default function EngineStatus({ loading }) {
  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center mb-4"
    >
      <p className="text-neon font-semibold text-lg">Analyzing with Multi-Engine Quantum Stack…</p>
      <p className="text-gray-400 text-sm">
        Singularity Engine • Omega Core • Infinity Engine • Oversoul Protocol • Primordial Engine • Zero-Point Master • Final Reality Engine
      </p>
    </motion.div>
  );
}
