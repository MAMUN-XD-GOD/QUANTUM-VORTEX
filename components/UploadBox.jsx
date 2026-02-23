"use client";

import { motion } from "framer-motion";

export default function UploadBox({ onAnalyze }) {
  const handleChange = (e) => {
    const file = e.target.files[0];
    onAnalyze(file);
  };

  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="w-full bg-[#0d0b1d] p-5 rounded-xl shadow-neon-glow mb-6 text-center"
    >
      <p className="mb-3 text-gray-300">Upload your screenshot</p>

      <label className="cursor-pointer px-5 py-3 bg-flame rounded-xl font-semibold">
        Choose Image
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleChange}
        />
      </label>
    </motion.div>
  );
    }
