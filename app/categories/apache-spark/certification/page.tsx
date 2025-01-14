'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkCertification() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Certification and Interview Preparation"
      partNumber={9}
      readTime="45 min"
    >
      <h2 id="certification-overview">Spark Certification Overview</h2>
      <h3 id="certification-types">Available Certifications</h3>
      <ul>
        <li>Databricks Certified Associate Developer for Apache Spark</li>
        <li>Databricks Certified Professional Developer for Apache Spark</li>
        <li>Cloudera CCA Spark and Hadoop Developer</li>
      </ul>

      <h2 id="core-concepts">Core Concepts Review</h2>
      <h3 id="rdd-concepts">RDD Operations</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Common RDD interview questions

# 1. Transformations vs Actions
transformations = [
    "map", "filter", "flatMap",     # Narrow
    "groupByKey", "reduceByKey"     # Wide
]
actions = [
    "collect", "count", "first",
    "take", "reduce", "foreach"
]

# 2. Persistence levels
from pyspark import StorageLevel
levels = {
    "MEMORY_ONLY": "Default, in-memory",
    "MEMORY_AND_DISK": "Spill to disk if needed",
    "DISK_ONLY": "Store only on disk"
}`}</code>
        </pre>
      </div>

      <h2 id="interview-questions">Common Interview Questions</h2>
      <h3 id="basic-questions">Basic Questions</h3>
      <ul>
        <li>What is Apache Spark and how does it differ from Hadoop MapReduce?</li>
        <li>Explain the Spark execution model</li>
        <li>What are transformations and actions in Spark?</li>
        <li>How does caching work in Spark?</li>
      </ul>

      <h3 id="advanced-questions">Advanced Questions</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Example: Explain this code's behavior
rdd = sc.parallelize([1, 2, 3, 4, 5])
mapped = rdd.map(lambda x: x * 2)  # Transformation
filtered = mapped.filter(lambda x: x > 5)  # Transformation
result = filtered.collect()  # Action

# Key points to discuss:
# 1. Lazy evaluation
# 2. DAG creation
# 3. Stage boundaries
# 4. Task distribution`}</code>
        </pre>
      </div>

      <h2 id="performance-questions">Performance Optimization Questions</h2>
      <h3 id="optimization-scenarios">Common Scenarios</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Scenario 1: Data Skew
# Problem: Uneven data distribution
df.join(other_df, "key")  # Potential skew

# Solution: Salt the key
from pyspark.sql.functions import expr
df = df.withColumn("salted_key", 
    expr("concat(key, int(rand() * 10))"))

# Scenario 2: Memory Issues
# Problem: Out of memory errors
# Solution: Proper partitioning
df = df.repartition(100)`}</code>
        </pre>
      </div>

      <h2 id="practical-exercises">Practice Exercises</h2>
      <h3 id="data-processing">Data Processing Tasks</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Exercise 1: Word Count
def word_count(spark, input_path):
    # Read text file
    text = spark.read.text(input_path)
    
    # Split into words and count
    words = text.select(explode(
        split(col("value"), " ")).alias("word"))
    return words.groupBy("word").count()

# Exercise 2: Top N items
def top_n_items(df, n=10):
    return df.orderBy(col("count").desc()).limit(n)`}</code>
        </pre>
      </div>

      <h2 id="debugging-questions">Debugging and Troubleshooting</h2>
      <h3 id="common-issues">Common Issues</h3>
      <ul>
        <li>Out of Memory errors</li>
        <li>Serialization issues</li>
        <li>Data skew problems</li>
        <li>Shuffle errors</li>
      </ul>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Common debugging approaches
# 1. Check Spark UI
spark.ui.port  # Default: 4040

# 2. Enable detailed logging
spark.conf.set("spark.logging.level", "DEBUG")

# 3. Monitor metrics
df.explain(True)  # Show execution plan
df.describe().show()  # Basic statistics`}</code>
        </pre>
      </div>

      <h2 id="certification-tips">Certification Tips</h2>
      <h3 id="exam-preparation">Exam Preparation</h3>
      <ul>
        <li>Practice with real datasets</li>
        <li>Review official documentation</li>
        <li>Complete hands-on exercises</li>
        <li>Time management during exam</li>
      </ul>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Now that you're prepared for certifications and interviews, proceed to Part 10 
        to work on Hands-On Projects and Exercises, where you'll apply your knowledge 
        to real-world scenarios.
      </p>
    </DocLayout>
  );
}
