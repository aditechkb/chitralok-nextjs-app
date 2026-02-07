// src/app/layout.tsx
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-rice-white text-betel-nut antialiased min-h-screen">
        {/* Header: Logo and Admin Login */}
        <header className="flex justify-between items-center p-6 border-b border-kalasam-silver bg-white/50 backdrop-blur-md sticky top-0 z-50">
          <div className="text-3xl font-serif font-bold text-copper tracking-tight">
            Chitralok
          </div>
          <button className="px-5 py-2 rounded-full border border-kumkum text-kumkum hover:bg-kumkum hover:text-white transition-all font-medium text-sm">
            Admin Login
          </button>
        </header>
        
        <main className="max-w-7xl mx-auto p-4 md:p-8">
          {children}
        </main>
      </body>
    </html>
  );
}