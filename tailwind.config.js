module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neon: "#00f7ff",
        vortex: "#7f00ff",
        flame: "#ff007f"
      },
      boxShadow: {
        "neon-glow": "0 0 25px rgba(0,247,255,0.7)",
        "vortex-purple": "0 0 30px rgba(127,0,255,0.7)"
      }
    }
  },
  plugins: []
};
