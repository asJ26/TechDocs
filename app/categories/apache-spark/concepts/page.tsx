'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkConcepts() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Deep Dive into Spark Concepts"
      partNumber={4}
      readTime="35 min"
    >
      <h2 id="partitioning">Partitioning</h2>
      <p>
        Partitioning is a fundamental concept in Spark that determines how data is 
        distributed across the cluster. Proper partitioning is crucial for performance.
      </p>

      <h3 id="partition-types">Types of Partitioning</h3>
      <ul>
        <li>Hash Partitioning: Based on key hash values</li>
        <li>Range Partitioning: Based on ordered keys</li>
        <li>Custom Partitioning: User-defined partitioning logic</li>
      </ul>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Example of custom partitioning
def custom_partitioner(key):
    return hash(key) % num_partitions

rdd = pairs.partitionBy(num_partitions, custom_partitioner)`}</code>
        </pre>
      </div>

      <h2 id="shuffling">Shuffling</h2>
      <p>
        Shuffling is the process of redistributing data across partitions, often 
        required for operations like groupByKey or join.
      </p>

      <h3 id="shuffle-operations">Operations that Trigger Shuffling</h3>
      <ul>
        <li>repartition() and coalesce()</li>
        <li>groupByKey() and reduceByKey()</li>
        <li>join() operations</li>
        <li>sort() and sortByKey()</li>
      </ul>

      <h3 id="shuffle-optimization">Shuffle Optimization</h3>
      <p>
        Strategies to minimize shuffle impact:
      </p>
      <ul>
        <li>Use reduceByKey() instead of groupByKey()</li>
        <li>Broadcast small datasets for joins</li>
        <li>Set appropriate partition numbers</li>
        <li>Cache data before shuffle operations</li>
      </ul>

      <h2 id="memory-management">Memory Management</h2>
      <h3 id="memory-regions">Memory Regions</h3>
      <p>
        Spark divides memory into regions:
      </p>
      <ul>
        <li>Reserved Memory: For Spark internal operations</li>
        <li>User Memory: For storing user data and computations</li>
        <li>Execution Memory: For shuffles, joins, sorts, aggregations</li>
        <li>Storage Memory: For cache data and data propagation</li>
      </ul>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Memory configuration example
spark.executor.memory          4g
spark.memory.fraction         0.75
spark.memory.storageFraction  0.5`}</code>
        </pre>
      </div>

      <h2 id="execution-details">Execution Details</h2>
      <h3 id="dag-scheduling">DAG Scheduling</h3>
      <p>
        Spark creates a Directed Acyclic Graph (DAG) of stages for each job:
      </p>
      <ul>
        <li>Nodes represent RDDs</li>
        <li>Edges represent transformations</li>
        <li>Stages are separated by shuffle boundaries</li>
        <li>Tasks are units of work within stages</li>
      </ul>

      <h3 id="stage-execution">Stage Execution</h3>
      <p>
        How Spark executes stages:
      </p>
      <ul>
        <li>Pipelined operations within a stage</li>
        <li>Data locality optimization</li>
        <li>Task scheduling and assignment</li>
        <li>Speculative execution for stragglers</li>
      </ul>

      <h2 id="data-serialization">Data Serialization</h2>
      <p>
        Serialization plays a crucial role in data transfer and storage:
      </p>
      <ul>
        <li>Java Serialization (default)</li>
        <li>Kryo Serialization (more efficient)</li>
        <li>Custom Serializers</li>
      </ul>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Enable Kryo serialization
spark.conf.set("spark.serializer", 
    "org.apache.spark.serializer.KryoSerializer")
spark.conf.set("spark.kryo.registrationRequired", "true")`}</code>
        </pre>
      </div>

      <h2 id="broadcast-join">Broadcast Join Optimization</h2>
      <p>
        Broadcast joins can significantly improve join performance for small tables:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Enable automatic broadcast joins
spark.conf.set("spark.sql.autoBroadcastJoinThreshold", 
    10 * 1024 * 1024)  # 10MB

# Force broadcast join
from pyspark.sql.functions import broadcast
result = large_df.join(broadcast(small_df), "key")`}</code>
        </pre>
      </div>

      <h2 id="data-locality">Data Locality</h2>
      <p>
        Spark tries to execute tasks as close to the data as possible:
      </p>
      <ul>
        <li>PROCESS_LOCAL: Data in same JVM</li>
        <li>NODE_LOCAL: Data on same node</li>
        <li>RACK_LOCAL: Data on same rack</li>
        <li>ANY: Data anywhere in cluster</li>
      </ul>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        With a deep understanding of Spark's internal concepts, you're ready to learn 
        about Performance Tuning and Optimization in Part 5, where we'll explore how 
        to make your Spark applications run faster and more efficiently.
      </p>
    </DocLayout>
  );
}
