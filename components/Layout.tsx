import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { personalInfo } from '../data';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();
  
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Education', path: '/education' },
    { label: 'Experience', path: '/experience' },
    { label: 'Projects', path: '/projects' },
    { label: 'Skills', path: '/skills' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">
              {personalInfo.name}
            </Link>
            <nav className="flex space-x-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path} 
                  href={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    router.pathname === item.path
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
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
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href={`mailto:${personalInfo.email}`} className="text-gray-500 hover:text-gray-700">
                {personalInfo.email}
              </a>
              <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                LinkedIn
              </a>
              <a href={`https://${personalInfo.website}`} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-700">
                Website
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 