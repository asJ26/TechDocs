'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkDataSources() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Data Sources and Integration"
      partNumber={6}
      readTime="25 min"
    >
      <h2 id="built-in-sources">Built-in Data Sources</h2>
      <h3 id="file-formats">File Formats</h3>
      <ul>
        <li>Parquet (columnar format)</li>
        <li>ORC (optimized row columnar)</li>
        <li>JSON (JavaScript Object Notation)</li>
        <li>CSV (Comma Separated Values)</li>
        <li>Text files</li>
        <li>Avro (row-based format)</li>
      </ul>

      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Reading different file formats
# Parquet
df_parquet = spark.read.parquet("data/users.parquet")

# CSV with options
df_csv = spark.read \\
    .option("header", "true") \\
    .option("inferSchema", "true") \\
    .csv("data/users.csv")

# JSON
df_json = spark.read.json("data/users.json")

# Text
df_text = spark.read.text("data/logs.txt")`}</code>
        </pre>
      </div>

      <h2 id="databases">Database Integration</h2>
      <h3 id="jdbc-connections">JDBC Connections</h3>
      <p>
        Spark can connect to various databases through JDBC:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# PostgreSQL connection
df = spark.read \\
    .format("jdbc") \\
    .option("url", "jdbc:postgresql://localhost:5432/mydb") \\
    .option("dbtable", "users") \\
    .option("user", "username") \\
    .option("password", "password") \\
    .load()

# Writing to database
df.write \\
    .format("jdbc") \\
    .option("url", "jdbc:postgresql://localhost:5432/mydb") \\
    .option("dbtable", "users_copy") \\
    .mode("overwrite") \\
    .save()`}</code>
        </pre>
      </div>

      <h2 id="streaming-sources">Streaming Data Sources</h2>
      <h3 id="structured-streaming">Structured Streaming</h3>
      <p>
        Real-time data processing with Structured Streaming:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Reading from Kafka
df_stream = spark.readStream \\
    .format("kafka") \\
    .option("kafka.bootstrap.servers", "localhost:9092") \\
    .option("subscribe", "topic1") \\
    .load()

# Writing stream to console
query = df_stream.writeStream \\
    .outputMode("append") \\
    .format("console") \\
    .start()`}</code>
        </pre>
      </div>

      <h2 id="cloud-storage">Cloud Storage Integration</h2>
      <h3 id="cloud-configs">Cloud Configurations</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# AWS S3
spark.conf.set("spark.hadoop.fs.s3a.access.key", "YOUR_KEY")
spark.conf.set("spark.hadoop.fs.s3a.secret.key", "YOUR_SECRET")

# Reading from S3
df = spark.read.parquet("s3a://bucket/path/data.parquet")

# Azure Blob Storage
df = spark.read \\
    .format("azure-blob-storage") \\
    .option("container", "mycontainer") \\
    .option("secretKey", "YOUR_KEY") \\
    .load("path/data")`}</code>
        </pre>
      </div>

      <h2 id="custom-sources">Custom Data Sources</h2>
      <h3 id="custom-format">Creating Custom Format</h3>
      <p>
        Implementing custom data source for specific needs:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql.sources import DataSourceRegister

class CustomDataSource(DataSourceRegister):
    def shortName(self):
        return "custom"
    
    def createRelation(self, sqlContext, options):
        # Implementation details
        pass`}</code>
        </pre>
      </div>

      <h2 id="data-formats">Working with Data Formats</h2>
      <h3 id="schema-handling">Schema Handling</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql.types import *

# Define schema
schema = StructType([
    StructField("name", StringType(), True),
    StructField("age", IntegerType(), True),
    StructField("city", StringType(), True)
])

# Read with schema
df = spark.read \\
    .schema(schema) \\
    .json("data/users.json")`}</code>
        </pre>
      </div>

      <h2 id="best-practices">Best Practices</h2>
      <h3 id="performance-tips">Performance Tips</h3>
      <ul>
        <li>Use appropriate file formats (Parquet/ORC for analytics)</li>
        <li>Partition data appropriately</li>
        <li>Implement predicate pushdown</li>
        <li>Configure proper batch sizes for streaming</li>
      </ul>

      <h3 id="error-handling">Error Handling</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Handle bad records
df = spark.read \\
    .option("mode", "PERMISSIVE") \\
    .option("columnNameOfCorruptRecord", "_corrupt_record") \\
    .json("data/users.json")

# Write with error handling
df.write \\
    .mode("errorifexists") \\
    .format("parquet") \\
    .save("output/path")`}</code>
        </pre>
      </div>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Now that you understand how to work with various data sources in Spark, 
        proceed to Part 7 to learn about Advanced Spark Features, where we'll explore 
        advanced capabilities and optimizations.
      </p>
    </DocLayout>
  );
}
