'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-primary">Welcome to TechDocs</h1>
      
      <div className="text-content text-center mb-12">
        Your comprehensive hub for technical documentation, tutorials, and learning resources. 
        Explore a curated collection of articles and guides covering various aspects of modern technology.
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card flex flex-col items-center text-center p-8">
          <div className="mb-6">
            <svg className="w-12 h-12 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h2 className="heading-secondary">Learn</h2>
          <p className="text-content">
            Access detailed tutorials and guides across multiple technical domains.
          </p>
        </div>

        <div className="card flex flex-col items-center text-center p-8">
          <div className="mb-6">
            <svg className="w-12 h-12 text-[#0066cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="heading-secondary">Practice</h2>
          <p className="text-content">
            Find practical examples and hands-on exercises to reinforce your learning.
          </p>
        </div>
      </div>

      <div className="card mt-8">
        <h2 className="heading-secondary">Latest Updates</h2>
        <ul className="space-y-3">
          <li className="flex items-center text-content">
            <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
            Introduction to Web Development
          </li>
          <li className="flex items-center text-content">
            <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
            Getting Started with React
          </li>
          <li className="flex items-center text-content">
            <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
            Understanding TypeScript
          </li>
        </ul>
      </div>
    </div>
  );
}
