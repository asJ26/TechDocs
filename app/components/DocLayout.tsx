'use client';
import React from 'react';
import { FaClock } from 'react-icons/fa';
import { TableOfContents } from './TableOfContents';

interface DocLayoutProps {
  icon: React.ReactNode;
  title: string;
  partNumber: number;
  readTime: string;
  children: React.ReactNode;
}

export function DocLayout({ 
  icon, 
  title, 
  partNumber, 
  readTime, 
  children 
}: DocLayoutProps) {
  return (
    <div className="min-h-screen w-full p-8">
      {/* Mobile Header - Full Width */}
      <div className="lg:hidden w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className="text-[#0066cc]">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-lg font-bold text-[#1a202c] dark:text-white truncate">
              {title}
            </h1>
            <div className="flex items-center gap-4 text-sm mt-1">
              <span className="text-[#0066cc] dark:text-[#0066cc] font-medium">
                Part {partNumber}
              </span>
              <div className="flex items-center text-content">
                <FaClock className="w-4 h-4 mr-1 text-[#0066cc]" />
                {readTime}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[90rem] mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Content Area */}
          <div className="flex-1 py-6 lg:py-8">
            <div className="mx-auto max-w-3xl">
              {/* Desktop Header */}
              <div className="hidden lg:block mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-[#0066cc]">
                    {icon}
                  </div>
                  <div className="flex-1">
                    <h1 className="heading-primary">{title}</h1>
                    <div className="flex items-center justify-between text-sm mt-4">
                      <span className="text-[#0066cc] dark:text-[#0066cc] font-medium">
                        Part {partNumber}
                      </span>
                      <div className="flex items-center text-content">
                        <FaClock className="w-4 h-4 mr-2 text-[#0066cc]" />
                        {readTime}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="prose dark:prose-invert max-w-none" role="main">
                {children}
              </div>
            </div>
          </div>

          {/* Table of Contents - Desktop */}
          <div className="hidden lg:block w-64 xl:w-72 flex-shrink-0 sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto">
            <TableOfContents />
          </div>
        </div>
      </div>

      {/* Mobile TOC - Fixed at bottom */}
      <div className="lg:hidden">
        <button 
          aria-label="Toggle table of contents"
          onClick={() => {
            const tocPanel = document.getElementById('mobile-toc');
            const isHidden = tocPanel?.classList.contains('translate-y-full');
            tocPanel?.classList.toggle('translate-y-full');
            
            // Update ARIA attributes
            tocPanel?.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
          }}
          className="fixed bottom-4 right-4 z-20 bg-[#0066cc] text-white p-3 rounded-full shadow-lg hover:bg-[#0052a3] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0066cc]"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div 
        id="mobile-toc"
        role="complementary"
        aria-label="Table of contents"
        aria-hidden="true"
        className="lg:hidden fixed inset-x-0 bottom-0 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-4 transform translate-y-full transition-transform duration-300 ease-in-out z-10 h-[70vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Table of Contents</h2>
          <button
            aria-label="Close table of contents"
            onClick={() => {
              const tocPanel = document.getElementById('mobile-toc');
              tocPanel?.classList.add('translate-y-full');
              tocPanel?.setAttribute('aria-hidden', 'true');
            }}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <TableOfContents />
      </div>
    </div>
  );
}
