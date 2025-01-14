'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import DocumentCard from '@/app/components/DocumentCard';

export default function ApacheSparkDocs() {
  const documents = [
    {
      id: "intro",
      partNumber: 1,
      title: "Introduction to Apache Spark",
      slug: "/categories/apache-spark/introduction",
      readTime: "15 min"
    },
    {
      id: "fundamentals",
      partNumber: 2,
      title: "Spark Programming Fundamentals",
      slug: "/categories/apache-spark/fundamentals",
      readTime: "30 min"
    },
    {
      id: "concepts",
      partNumber: 3,
      title: "Deep Dive into Spark Concepts",
      slug: "/categories/apache-spark/concepts",
      readTime: "35 min"
    },
    {
      id: "optimization",
      partNumber: 4,
      title: "Performance Tuning and Optimization",
      slug: "/categories/apache-spark/optimization",
      readTime: "40 min"
    },
    {
      id: "data-sources",
      partNumber: 5,
      title: "Data Sources and Integration",
      slug: "/categories/apache-spark/data-sources",
      readTime: "25 min"
    },
    {
      id: "advanced",
      partNumber: 6,
      title: "Advanced Spark Features",
      slug: "/categories/apache-spark/advanced-features",
      readTime: "35 min"
    },
    {
      id: "best-practices",
      partNumber: 7,
      title: "Best Practices for Writing Spark Applications",
      slug: "/categories/apache-spark/best-practices",
      readTime: "30 min"
    },
    {
      id: "certification",
      partNumber: 8,
      title: "Certification and Interview Preparation",
      slug: "/categories/apache-spark/certification",
      readTime: "45 min"
    },
    {
      id: "projects",
      partNumber: 9,
      title: "Hands-On Projects and Exercises",
      slug: "/categories/apache-spark/projects",
      readTime: "50 min"
    },
    {
      id: "conclusion",
      partNumber: 10,
      title: "Conclusion and References",
      slug: "/categories/apache-spark/conclusion",
      readTime: "15 min"
    },
    {
      id: "cheatsheet",
      partNumber: 11,
      title: "Spark Cheatsheet",
      slug: "/categories/apache-spark/cheatsheet",
      readTime: "10 min"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center mb-8">
        <SiApachespark className="w-10 h-10 text-[#0066cc] mr-4" />
        <div>
          <h1 className="heading-primary mb-2">Apache Spark</h1>
          <p className="text-content">
            Comprehensive documentation and tutorials for Apache Spark
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            title={doc.title}
            slug={doc.slug}
            partNumber={doc.partNumber}
            readTime={doc.readTime}
          />
        ))}
      </div>
    </div>
  );
}
