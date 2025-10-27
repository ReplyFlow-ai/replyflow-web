import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ReplyFlow Dashboard",
  description: "AI Gmail Assistant Dashboard",
};

const navItems = [
  { name: "Emails", href: "/emails" },
  { name: "Users", href: "/users" },
  { name: "Settings", href: "/settings" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0b0b0c] text-gray-200 antialiased flex h-screen overflow-hidden`}
      >
        {/* Sidebar */}
        <aside className="w-64 bg-[#101012] border-r border-gray-800 flex flex-col justify-between">
          <div className="p-6">
            <h1 className="text-xl font-bold text-gray-100 mb-8 tracking-tight">
              <span className="text-gray-400">Reply</span>
              <span className="text-white">Flow</span>
            </h1>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800 transition-all duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="p-6 border-t border-gray-800 text-xs text-gray-600">
            <p>© 2025 ReplyFlow</p>
          </div>
        </aside>

        {/* Main content area */}
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col"
        >
          {/* Header */}
          <header className="h-14 border-b border-gray-800 flex items-center justify-between px-6 backdrop-blur-sm bg-[#0b0b0c]/70">
            <h2 className="text-sm uppercase tracking-wide text-gray-400">
              Dashboard
            </h2>
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-gray-400 text-xs hover:text-white transition-all">
              ⚡
            </div>
          </header>

          {/* Page content */}
          <div className="flex-1 overflow-y-auto p-8">{children}</div>
        </motion.main>
      </body>
    </html>
  );
}
