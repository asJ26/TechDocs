'use client';
import Link from 'next/link';
import { withBasePath } from './lib/utils';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-[#0066cc]">404</h1>
        <h2 className="text-2xl font-semibold mt-4 mb-8">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href={withBasePath('/')}
          className="inline-block bg-[#0066cc] text-white px-6 py-3 rounded-lg hover:bg-[#0052a3] transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
