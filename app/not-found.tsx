'use client';
import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-600">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
