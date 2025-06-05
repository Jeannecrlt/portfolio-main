import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeanne Charlot - Portfolio",
  description: "Materials Science Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-white">
          <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
                  Jeanne Charlot
                </Link>
                <nav className="flex space-x-4">
                  <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                    Home
                  </Link>
                  <Link href="/education" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                    Education
                  </Link>
                  <Link href="/experience" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                    Experience
                  </Link>
                  <Link href="/projects" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                    Projects
                  </Link>
                  <Link href="/skills" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100">
                    Skills
                  </Link>
                </nav>
              </div>
            </div>
          </header>
          <main className="flex-grow container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-sm text-gray-500">
                  © {new Date().getFullYear()} Jeanne Charlot. All rights reserved.
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                  <a href={`mailto:jeanne.charlot@epfl.ch`} className="text-gray-500 hover:text-gray-700">
                    jeanne.charlot@epfl.ch
                  </a>
                  <a href="https://linkedin.com/in/jeanne-charlot-b66681206" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    LinkedIn
                  </a>
                  <a href="https://people.epfl.ch/jeanne.charlot" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                    Website
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
