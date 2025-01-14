'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkOptimization() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Performance Tuning and Optimization"
      partNumber={5}
      readTime="40 min"
    >
      <h2 id="resource-configuration">Resource Configuration</h2>
      <h3 id="memory-tuning">Memory Configuration</h3>
      <p>
        Proper memory configuration is crucial for Spark performance:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Memory configuration best practices
spark.executor.memory         # Total executor memory
spark.executor.memoryOverhead # Off-heap memory
spark.memory.fraction        # Fraction for execution and storage
spark.memory.storageFraction # Fraction for storage within above

# Example configuration
spark.executor.memory          8g
spark.executor.memoryOverhead  2g
spark.memory.fraction         0.75
spark.memory.storageFraction  0.50`}</code>
        </pre>
      </div>

      <h3 id="core-configuration">CPU Configuration</h3>
      <ul>
        <li>Number of executors</li>
        <li>Cores per executor</li>
        <li>Dynamic allocation settings</li>
      </ul>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# CPU resource configuration
spark.executor.instances     4
spark.executor.cores        4
spark.dynamicAllocation.enabled true
spark.dynamicAllocation.minExecutors 2
spark.dynamicAllocation.maxExecutors 8`}</code>
        </pre>
      </div>

      <h2 id="data-optimization">Data Optimization</h2>
      <h3 id="data-formats">Optimal Data Formats</h3>
      <p>
        Choose the right data format for your use case:
      </p>
      <ul>
        <li>Parquet: Columnar storage with compression</li>
        <li>ORC: Optimized row columnar format</li>
        <li>Avro: Row-based format with schema evolution</li>
      </ul>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Writing optimized Parquet files
df.write \\
  .option("compression", "snappy") \\
  .partitionBy("date") \\
  .format("parquet") \\
  .save("data/optimized")`}</code>
        </pre>
      </div>

      <h2 id="query-optimization">Query Optimization</h2>
      <h3 id="catalyst-optimizer">Catalyst Optimizer</h3>
      <p>
        Understanding how Spark optimizes queries:
      </p>
      <ul>
        <li>Logical plan optimization</li>
        <li>Physical plan selection</li>
        <li>Code generation</li>
      </ul>

      <h3 id="query-hints">Query Hints</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Using query hints
df.join(broadcast(small_df), "key")  # Broadcast hint
df.hint("skew", "key")              # Skew hint
df.hint("rebalance")                # Rebalance hint`}</code>
        </pre>
      </div>

      <h2 id="caching-strategies">Caching Strategies</h2>
      <p>
        Effective use of caching can significantly improve performance:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Different storage levels
from pyspark import StorageLevel

# Memory only
df.persist(StorageLevel.MEMORY_ONLY)

# Memory and disk
df.persist(StorageLevel.MEMORY_AND_DISK)

# Memory only with serialization
df.persist(StorageLevel.MEMORY_ONLY_SER)`}</code>
        </pre>
      </div>

      <h2 id="shuffle-optimization">Shuffle Optimization</h2>
      <h3 id="reduce-shuffles">Reducing Shuffles</h3>
      <ul>
        <li>Use map-side operations when possible</li>
        <li>Optimize partition counts</li>
        <li>Leverage broadcast joins</li>
      </ul>

      <h3 id="shuffle-config">Shuffle Configuration</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Shuffle optimization settings
spark.shuffle.file.buffer       32k
spark.reducer.maxSizeInFlight   48m
spark.shuffle.io.maxRetries     3
spark.shuffle.io.retryWait      5s`}</code>
        </pre>
      </div>

      <h2 id="skew-handling">Handling Data Skew</h2>
      <p>
        Strategies for dealing with skewed data:
      </p>
      <ul>
        <li>Salting keys for better distribution</li>
        <li>Custom partitioning</li>
        <li>Using skew hints</li>
      </ul>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Handling skewed joins
# Add salt to skewed keys
from pyspark.sql.functions import expr
df = df.withColumn("salted_key", 
    expr("concat(key, int(rand() * 10))"))

# Join on salted key
result = df1.join(df2, "salted_key")`}</code>
        </pre>
      </div>

      <h2 id="monitoring">Performance Monitoring</h2>
      <h3 id="spark-ui">Spark UI</h3>
      <p>
        Key metrics to monitor:
      </p>
      <ul>
        <li>Stage timeline and task distribution</li>
        <li>Storage usage and memory pressure</li>
        <li>Executor metrics and GC time</li>
        <li>Shuffle read/write statistics</li>
      </ul>

      <h3 id="metrics">Custom Metrics</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Adding custom metrics
from pyspark.accumulators import AccumulatorParam

class CustomAccumulator(AccumulatorParam):
    def zero(self, value):
        return value
    def addInPlace(self, v1, v2):
        return v1 + v2

# Register metric
metric = sc.accumulator(0, CustomAccumulator())`}</code>
        </pre>
      </div>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Now that you understand performance tuning and optimization, proceed to Part 6 
        to learn about Data Sources and Integration, where we'll explore how to 
        efficiently work with various data sources in Spark.
      </p>
    </DocLayout>
  );
}
