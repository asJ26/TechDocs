'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { FaClock, FaBook } from 'react-icons/fa';

export default function GettingStartedWithSpark() {
  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <SiApachespark className="w-10 h-10 text-[#0066cc]" />
          <div className="flex-1">
            <h1 className="heading-primary mb-0">Getting Started with Apache Spark</h1>
            <div className="flex gap-4 text-sm mt-2">
              <div className="flex items-center text-content">
                <FaClock className="w-4 h-4 mr-2 text-[#0066cc]" />
                15 min read
              </div>
              <div className="flex items-center text-green-600 dark:text-green-400">
                <FaBook className="w-4 h-4 mr-2" />
                Beginner
              </div>
            </div>
          </div>
        </div>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-content">
            Learn the fundamentals of Apache Spark, including RDDs, DataFrames, and SparkSQL. 
            This guide covers installation, basic operations, and your first Spark application.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="prose dark:prose-invert max-w-none">
        <h2>Introduction to Apache Spark</h2>
        <p>
          Apache Spark is a powerful open-source distributed computing system designed for fast, 
          large-scale data processing. It provides high-level APIs in Java, Scala, Python, and R, 
          along with an optimized engine that supports general execution graphs.
        </p>

        <h2>Prerequisites</h2>
        <ul>
          <li>Basic understanding of Python or Scala</li>
          <li>Java 8 or later installed on your system</li>
          <li>Familiarity with command-line interface</li>
        </ul>

        <h2>Installation</h2>
        <p>
          First, let's install Apache Spark on your local machine. We'll use Python with PySpark 
          for this tutorial.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
          <code className="text-sm">
            pip install pyspark
          </code>
        </div>

        <h2>Creating Your First Spark Application</h2>
        <p>
          Let's create a simple Spark application that reads a text file and counts word occurrences.
        </p>

        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
          <pre className="text-sm">
            <code>{`from pyspark.sql import SparkSession

# Initialize Spark session
spark = SparkSession.builder \\
    .appName("WordCount") \\
    .getOrCreate()

# Read text file
text_file = spark.read.text("sample.txt")

# Count words
word_counts = text_file \\
    .select(explode(split(col("value"), " ")).alias("word")) \\
    .groupBy("word") \\
    .count()

# Show results
word_counts.show()`}</code>
          </pre>
        </div>

        <h2>Understanding Core Concepts</h2>
        <h3>RDDs (Resilient Distributed Datasets)</h3>
        <p>
          RDDs are the fundamental data structure of Spark. They are immutable distributed 
          collections of objects that can be processed in parallel.
        </p>

        <h3>DataFrames</h3>
        <p>
          DataFrames provide a higher-level abstraction built on top of RDDs. They organize data 
          into named columns, similar to tables in a relational database.
        </p>

        <h3>SparkSQL</h3>
        <p>
          SparkSQL allows you to write SQL queries against your data, providing a familiar 
          interface for data manipulation and analysis.
        </p>

        <h2>Next Steps</h2>
        <p>
          Now that you understand the basics, you can proceed to more advanced topics:
        </p>
        <ul>
          <li>Working with Spark SQL and DataFrames</li>
          <li>Data Transformations and Actions</li>
          <li>Performance Optimization</li>
          <li>Spark Streaming</li>
        </ul>
      </div>
    </div>
  );
}
