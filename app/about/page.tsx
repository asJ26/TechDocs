'use client';
import React from 'react';
import { FaBook, FaShieldAlt, FaEnvelope } from 'react-icons/fa';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-primary">About TechDocs</h1>
      
      <div className="card">
        <div className="flex items-center mb-6">
          <FaBook className="w-8 h-8 text-[#0066cc]" />
          <h2 className="heading-secondary mb-0 ml-3">Our Mission</h2>
        </div>
        <p className="text-content mb-12">
          TechDocs is dedicated to providing high-quality, comprehensive technical documentation 
          and resources for developers at all skill levels. Our goal is to make complex technical 
          concepts accessible and easy to understand.
        </p>

        <div className="flex items-center mb-6">
          <FaShieldAlt className="w-8 h-8 text-[#0066cc]" />
          <h2 className="heading-secondary mb-0 ml-3">What We Offer</h2>
        </div>
        <ul className="space-y-4 mb-12">
          <li className="flex items-center text-content">
            <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
            Comprehensive documentation for various technologies and frameworks
          </li>
          <li className="flex items-center text-content">
            <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
            Step-by-step tutorials and guides
          </li>
          <li className="flex items-center text-content">
            <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
            Best practices and coding standards
          </li>
          <li className="flex items-center text-content">
            <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
            Regular updates to keep content current with latest tech trends
          </li>
        </ul>

        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6">
          <div className="flex items-center mb-4">
            <FaEnvelope className="w-6 h-6 text-[#0066cc]" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white ml-2">Contact Us</h3>
          </div>
          <p className="text-content">
            Have questions or suggestions? Feel free to reach out through our social media channels 
            or contribute directly to our documentation on GitHub.
          </p>
        </div>
      </div>
    </div>
  );
}
