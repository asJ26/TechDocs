'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkCheatsheet() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Spark Cheatsheet"
      partNumber={11}
      readTime="10 min"
    >
      <h1 id="section-1">Quick Reference Guide</h1>

      <h2 id="basic-operations">Basic Operations</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Initialize Spark Session
spark = SparkSession.builder \\
    .appName("MyApp") \\
    .getOrCreate()

# Read Data
df = spark.read.csv("data.csv")
df = spark.read.parquet("data.parquet")
df = spark.read.json("data.json")

# Write Data
df.write.csv("output.csv")
df.write.parquet("output.parquet")
df.write.json("output.json")

# Basic Operations
df.show()  # Display data
df.printSchema()  # Show schema
df.describe().show()  # Summary statistics
df.count()  # Number of rows`}</code>
        </pre>
      </div>

      <h2 id="transformations">Common Transformations</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Filter
df.filter(df.age > 25)
df.where(df.age > 25)

# Select
df.select("name", "age")
df.select(df.name, df.age + 1)

# GroupBy & Aggregate
df.groupBy("department").count()
df.groupBy("department").agg({"salary": "avg"})

# Sort
df.orderBy(df.age.desc())
df.sort("age", ascending=False)

# Drop Duplicates
df.dropDuplicates()
df.dropDuplicates(["name", "age"])`}</code>
        </pre>
      </div>

      <h2 id="window-functions">Window Functions</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql import Window
from pyspark.sql.functions import row_number, rank, dense_rank

# Define Window
windowSpec = Window.partitionBy("department").orderBy("salary")

# Apply Window Functions
df.withColumn("row_number", row_number().over(windowSpec))
df.withColumn("rank", rank().over(windowSpec))
df.withColumn("dense_rank", dense_rank().over(windowSpec))`}</code>
        </pre>
      </div>

      <h2 id="sql-operations">SQL Operations</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Create View
df.createOrReplaceTempView("my_table")

# Run SQL Query
result = spark.sql("""
    SELECT department, 
           AVG(salary) as avg_salary
    FROM my_table
    GROUP BY department
    HAVING AVG(salary) > 50000
""")`}</code>
        </pre>
      </div>

      <h2 id="performance-tips">Performance Tips</h2>
      <h3 id="caching">Caching</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Cache DataFrame
df.cache()
df.persist(StorageLevel.MEMORY_AND_DISK)

# Uncache
df.unpersist()

# Check if cached
df.is_cached`}</code>
        </pre>
      </div>

      <h3 id="partitioning">Partitioning</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Repartition
df = df.repartition(10)
df = df.repartition("department")

# Coalesce (reduce partitions)
df = df.coalesce(1)`}</code>
        </pre>
      </div>

      <h2 id="udf-examples">User Defined Functions (UDF)</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql.functions import udf
from pyspark.sql.types import StringType

# Define UDF
@udf(returnType=StringType())
def upper_case(text):
    return text.upper() if text else None

# Apply UDF
df = df.withColumn("upper_name", upper_case("name"))`}</code>
        </pre>
      </div>

      <h2 id="common-functions">Common Functions</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql.functions import *

# String Functions
df.withColumn("upper_name", upper("name"))
df.withColumn("name_length", length("name"))

# Date Functions
df.withColumn("year", year("date"))
df.withColumn("month", month("date"))

# Aggregate Functions
df.agg(avg("salary"), max("salary"))
df.agg(countDistinct("department"))

# Window Functions
df.withColumn("row_num", 
    row_number().over(Window.partitionBy("department").orderBy("salary")))

# Collection Functions
df.withColumn("array_contains", array_contains("tags", "python"))
df.withColumn("exploded", explode("array_column"))`}</code>
        </pre>
      </div>

      <h2 id="error-handling">Error Handling</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Handle Null Values
df.na.drop()  # Drop rows with null values
df.na.fill(0)  # Fill null values with 0
df.na.fill({"age": 0, "salary": 0})  # Fill by column

# Handle Errors in UDFs
def safe_divide(x, y):
    try:
        return x / y
    except:
        return None

safe_divide_udf = udf(safe_divide)`}</code>
        </pre>
      </div>

      <h2 id="configuration">Configuration Settings</h2>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Memory Configuration
spark.conf.set("spark.executor.memory", "4g")
spark.conf.set("spark.driver.memory", "2g")

# Shuffle Configuration
spark.conf.set("spark.sql.shuffle.partitions", 100)

# Dynamic Allocation
spark.conf.set("spark.dynamicAllocation.enabled", "true")
spark.conf.set("spark.dynamicAllocation.minExecutors", 2)
spark.conf.set("spark.dynamicAllocation.maxExecutors", 10)`}</code>
        </pre>
      </div>
    </DocLayout>
  );
}
