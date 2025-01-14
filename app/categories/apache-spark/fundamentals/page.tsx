'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkProgrammingFundamentals() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Spark Programming Fundamentals"
      partNumber={2}
      readTime="30 min"
    >
      {/* Section 1 */}
      <h1 id="spark-programming-fundamentals" className="text-4xl font-extrabold mt-8">
        Spark Programming Fundamentals
      </h1>
      <p className="mt-2">
        Understanding Spark&apos;s programming fundamentals is essential for building efficient data processing applications. This section covers the core concepts and programming models in Apache Spark.
      </p>

      {/* Subsection 1.1 */}
      <h2 id="rdds" className="text-3xl font-bold mt-6">
        Resilient Distributed Datasets (RDDs)
      </h2>
      <p className="mt-2">
        RDDs are the fundamental data structure of Apache Spark. They represent an immutable distributed collection of objects that can be processed in parallel.
      </p>

      {/* Subsection 1.2 */}
      <h2 id="transformations-actions" className="text-3xl font-bold mt-6">
        Transformations and Actions
      </h2>
      <p className="mt-2">
        Spark operations are divided into two types: transformations and actions. Transformations create a new dataset from an existing one, while actions return a value to the driver program after running a computation on the dataset.
      </p>

      {/* Example Code */}
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4 overflow-auto">
        <pre className="text-sm">
          <code>{`# Example of Transformations
rdd = sc.parallelize([1, 2, 3, 4, 5])
mapped = rdd.map(lambda x: x * x)  # Transformation
filtered = mapped.filter(lambda x: x > 10)  # Transformation

# Example of Actions
result = filtered.collect()  # Action
print(result)  # [16, 25]`}</code>
        </pre>
      </div>

      {/* Subsection 1.3 */}
      <h2 id="dataframes" className="text-3xl font-bold mt-6">
        DataFrames
      </h2>
      <p className="mt-2">
        DataFrames provide a higher-level abstraction built on top of RDDs. They organize data into named columns, similar to tables in a relational database.
      </p>

      {/* Example Table */}
      <table className="min-w-full table-auto mt-2 border-collapse border">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Feature</th>
            <th className="px-4 py-2 border">RDDs</th>
            <th className="px-4 py-2 border">DataFrames</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Schema</td>
            <td className="border px-4 py-2">Unstructured</td>
            <td className="border px-4 py-2">Structured with named columns</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Optimization</td>
            <td className="border px-4 py-2">Basic</td>
            <td className="border px-4 py-2">Catalyst optimizer</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">API</td>
            <td className="border px-4 py-2">Functional</td>
            <td className="border px-4 py-2">SQL + Functional</td>
          </tr>
        </tbody>
      </table>

      {/* Summary */}
      <h2 id="summary" className="text-3xl font-bold mt-6">
        Summary
      </h2>
      <p className="mt-2">
        Understanding these fundamental concepts is crucial for developing efficient Spark applications. In the next sections, we&apos;ll explore more advanced topics and best practices for Spark programming.
      </p>
    </DocLayout>
  );
}
