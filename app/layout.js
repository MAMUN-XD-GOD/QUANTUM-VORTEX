export const metadata = {
  title: "Quantum Vortex Analyzer",
  description: "AI-Powered Screenshot Chart Analyzer"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#02010a] text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
