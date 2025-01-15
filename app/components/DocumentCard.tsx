'use client';
import React from 'react';
import Link from 'next/link';
import { FaClock } from 'react-icons/fa';
import { withBasePath } from '@/app/lib/utils';

interface DocumentCardProps {
  title: string;
  slug: string;
  partNumber: number;
  readTime: string;
}

const DocumentCard = ({ title, slug, partNumber, readTime }: DocumentCardProps) => {
  return (
    <Link href={withBasePath(slug)}>
      <div className="card hover:shadow-xl transition-shadow cursor-pointer h-full flex flex-col">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
        <div className="mt-auto pt-4 flex items-center justify-between text-sm">
          <span className="text-[#0066cc] dark:text-[#0066cc] font-medium">
            Part {partNumber}
          </span>
          <div className="flex items-center text-content">
            <FaClock className="w-4 h-4 mr-2 text-[#0066cc]" />
            {readTime}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default DocumentCard;
