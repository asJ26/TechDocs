'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { SiApachespark } from 'react-icons/si';

export default function Categories() {
  const router = useRouter();

  const categories = [
    {
      title: 'Apache Spark',
      icon: SiApachespark,
      description: 'Comprehensive guide to Apache Spark including batch processing, streaming, and optimization techniques.',
      topics: ['Spark Core & SQL', 'Spark Streaming', 'Performance Tuning'],
      slug: '/categories/apache-spark'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="heading-primary">Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = category.icon;
          return (
            <div 
              key={index}
              className="card hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => router.push(category.slug)}
            >
              <div className="flex items-center mb-4">
                <Icon className="w-8 h-8 text-[#0066cc]" />
                <h2 className="heading-secondary mb-0 ml-3">{category.title}</h2>
              </div>
              <p className="text-content mb-4">
                {category.description}
              </p>
              <ul className="space-y-2">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="flex items-center text-content">
                    <span className="w-2 h-2 bg-[#0066cc] rounded-full mr-3"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
