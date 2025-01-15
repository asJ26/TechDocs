'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaGithub, FaLinkedin, FaMedium, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import { BsListCheck } from 'react-icons/bs';
import { BiInfoCircle } from 'react-icons/bi';
import { useEffect, useState } from 'react';
import { withBasePath } from '@/app/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isDark = localStorage.getItem('darkMode') === 'true' ||
        (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
      setDarkMode(isDark);
      if (isDark) {
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', String(newDarkMode));
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 p-4 flex flex-col">
      <div className="mb-4">
        <Link href={withBasePath('/')} className="block">
          <h1 className="text-2xl font-bold text-[#1a202c] dark:text-white">TechDocs</h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">Your Technical Documentation Hub</p>
        </Link>
      </div>

      <nav className="flex-grow mt-8">
        <ul className="space-y-2">
          <li>
            <Link 
              href={withBasePath('/')}
              className={`flex items-center p-2 text-gray-700 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors ${pathname === withBasePath('/') ? 'bg-blue-50 dark:bg-gray-800 text-[#0066cc] dark:text-[#0066cc]' : ''}`}
            >
              <AiFillHome className="w-5 h-5 mr-3" />
              HOME
            </Link>
          </li>
          <li>
            <Link 
              href={withBasePath('/categories')}
              className={`flex items-center p-2 text-gray-700 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors ${pathname === withBasePath('/categories') ? 'bg-blue-50 dark:bg-gray-800 text-[#0066cc] dark:text-[#0066cc]' : ''}`}
            >
              <BsListCheck className="w-5 h-5 mr-3" />
              CATEGORIES
            </Link>
          </li>
          <li>
            <Link 
              href={withBasePath('/about')}
              className={`flex items-center p-2 text-gray-700 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors ${pathname === withBasePath('/about') ? 'bg-blue-50 dark:bg-gray-800 text-[#0066cc] dark:text-[#0066cc]' : ''}`}
            >
              <BiInfoCircle className="w-5 h-5 mr-3" />
              ABOUT
            </Link>
          </li>
        </ul>
      </nav>

      <div className="mt-auto">
        <div className="flex justify-center mb-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FaSun className="text-yellow-500" size={20} />
            ) : (
              <FaMoon className="text-gray-600" size={20} />
            )}
          </button>
        </div>
        <div className="flex space-x-4 justify-center py-4 border-t border-gray-200 dark:border-gray-800">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-[#0066cc] dark:hover:text-[#0066cc] transition-colors"
          >
            <FaGithub size={20} />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-[#0066cc] dark:hover:text-[#0066cc] transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
          <a 
            href="https://medium.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-[#0066cc] dark:hover:text-[#0066cc] transition-colors"
          >
            <FaMedium size={20} />
          </a>
          <a 
            href="mailto:contact@example.com" 
            className="text-gray-600 dark:text-gray-400 hover:text-[#0066cc] dark:hover:text-[#0066cc] transition-colors"
          >
            <FaEnvelope size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
