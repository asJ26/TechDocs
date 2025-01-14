'use client';
import React from 'react';

export default function CategoriesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="p-8">
      {children}
    </div>
  );
}
