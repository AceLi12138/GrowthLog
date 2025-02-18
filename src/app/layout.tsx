import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { getBasePath } from '@/utils/path';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Li Xiaoyao's Web",
  description: "share my ideas, works and experiences",
};

const navigation = [
  { href: '/', label: "Home" },
  { href: '/blog', label: "Blog" },
  { href: '/work', label: "Products" },
  { href: '/about', label: "About" },
].map(item => ({
  ...item,
  href: item.href.startsWith('/') ? item.href : `/${item.href}`
}));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
          <div className="flex h-16 items-center justify-between max-w-6xl mx-auto px-6">
            <Link 
              href="/"
              className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text hover:scale-105 transition-transform"
            >
              Li Xiaoyao&apos;s Web
            </Link>
            <nav className="flex items-center space-x-8">
              {navigation.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative text-lg group"
                >
                  <span className="relative z-10 text-gray-600 group-hover:text-orange-500 transition-colors duration-200">
                    {label}
                  </span>
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
                </Link>
              ))}
            </nav>
          </div>
        </header>

        <main className="max-w-6xl mx-auto px-6">
          {children}
        </main>

        <footer className="border-t mt-20">
          <div className="max-w-6xl mx-auto px-6 py-12">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">© {new Date().getFullYear()} Li Xiaoyao</p>
              <div className="flex items-center space-x-6">
                <Link 
                  href="https://github.com/AceLi12138" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link 
                  href="https://v.douyin.com/iP4pkXub/ 0@9.com :3pm" 
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.525.02c1.31-.02 2.61-.01 3.91-.02c.08 1.53.63 3.09 1.75 4.17c1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97c-.57-.26-1.1-.59-1.62-.93c-.01 2.92.01 5.84-.02 8.75c-.08 1.4-.54 2.79-1.35 3.94c-1.31 1.92-3.58 3.17-5.91 3.21c-1.43.08-2.86-.31-4.08-1.03c-2.02-1.19-3.44-3.37-3.65-5.71c-.02-.5-.03-1-.01-1.49c.18-1.9 1.12-3.72 2.58-4.96c1.66-1.44 3.98-2.13 6.15-1.72c.02 1.48-.04 2.96-.04 4.44c-.99-.32-2.15-.23-3.02.37c-.63.41-1.11 1.04-1.36 1.75c-.21.51-.15 1.07-.14 1.61c.24 1.64 1.82 3.02 3.5 2.87c1.12-.01 2.19-.66 2.77-1.61c.19-.33.4-.67.41-1.06c.1-1.79.06-3.57.07-5.36c.01-4.03-.01-8.05.02-12.07z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
