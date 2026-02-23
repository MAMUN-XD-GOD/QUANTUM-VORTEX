"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import UploadBox from "@/components/UploadBox";
import SignalOutput from "@/components/SignalOutput";
import EngineStatus from "@/components/EngineStatus";

export default function Analyzer() {
  const [imageUrl, setImageUrl] = useState(null);
  const [signal, setSignal] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async (file) => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const uploadRes = await fetch("/api/upload", {
      method: "POST",
      body: formData
    });

    const { url } = await uploadRes.json();
    setImageUrl(url);

    const analyzeRes = await fetch("/api/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ url })
    });

    const data = await analyzeRes.json();
    setSignal(data);
    setLoading(false);
  };

  return (
    <div className="min-h-screen px-4 py-6">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-3xl font-bold mb-4"
      >
        AI Chart Analyzer
      </motion.h1>

      <UploadBox onAnalyze={handleAnalyze} />

      <EngineStatus loading={loading} />

      {signal && (
        <SignalOutput data={signal} image={imageUrl} />
      )}

    </div>
  );
    }
