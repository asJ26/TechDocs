'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkProjects() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Hands-On Projects and Exercises"
      partNumber={10}
      readTime="50 min"
    >
      <h2 id="project-1">Project 1: Log Analysis System</h2>
      <h3 id="log-analysis-overview">Overview</h3>
      <p>
        Build a real-time log analysis system using Spark Streaming to process web server logs.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql import SparkSession
from pyspark.sql.functions import *
from pyspark.sql.types import *

# Define schema for web logs
log_schema = StructType([
    StructField("ip", StringType(), True),
    StructField("timestamp", TimestampType(), True),
    StructField("method", StringType(), True),
    StructField("url", StringType(), True),
    StructField("status", IntegerType(), True),
    StructField("bytes", LongType(), True)
])

# Create streaming DataFrame
logs = spark.readStream \\
    .format("json") \\
    .schema(log_schema) \\
    .option("maxFilesPerTrigger", 1) \\
    .load("logs/*.json")

# Process streaming data
def analyze_logs(df):
    return df.groupBy(
        window(df.timestamp, "1 minute"),
        df.status
    ).count()`}</code>
        </pre>
      </div>

      <h2 id="project-2">Project 2: E-commerce Analytics</h2>
      <h3 id="ecommerce-overview">Overview</h3>
      <p>
        Analyze e-commerce data to extract customer insights and sales patterns.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Load and process sales data
sales_df = spark.read.parquet("sales_data/")

# Customer segmentation
def analyze_customer_segments(df):
    return df.groupBy("customer_id").agg(
        count("order_id").alias("total_orders"),
        sum("amount").alias("total_spent"),
        avg("amount").alias("avg_order_value")
    ).withColumn(
        "customer_segment",
        when(col("total_spent") > 1000, "High Value")
        .when(col("total_spent") > 500, "Medium Value")
        .otherwise("Low Value")
    )

# Product analysis
def analyze_products(df):
    return df.groupBy("product_id", "category").agg(
        sum("quantity").alias("total_sold"),
        sum("amount").alias("total_revenue")
    ).orderBy(desc("total_revenue"))`}</code>
        </pre>
      </div>

      <h2 id="project-3">Project 3: Real-time Fraud Detection</h2>
      <h3 id="fraud-detection-overview">Overview</h3>
      <p>
        Implement a real-time fraud detection system using Spark Structured Streaming.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Define fraud detection model
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.classification import RandomForestClassifier

def create_fraud_detector():
    # Feature engineering
    assembler = VectorAssembler(
        inputCols=["amount", "hour", "n_previous_transactions"],
        outputCol="features"
    )
    
    # Train model
    rf = RandomForestClassifier(
        labelCol="is_fraud",
        featuresCol="features"
    )
    
    return Pipeline(stages=[assembler, rf])

# Process streaming transactions
def detect_fraud(df):
    # Add features
    df = df.withColumn("hour", hour("timestamp")) \\
        .withColumn("n_previous_transactions",
            count("*").over(
                Window.partitionBy("user_id")
                .orderBy("timestamp")
                .rangeBetween(-3600, 0)
            )
        )
    
    # Apply model
    return model.transform(df)`}</code>
        </pre>
      </div>

      <h2 id="project-4">Project 4: Data Lake Processing</h2>
      <h3 id="data-lake-overview">Overview</h3>
      <p>
        Build a data processing pipeline for a data lake with multiple data sources.
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Define data sources
sources = {
    "users": "s3a://data-lake/users/*.parquet",
    "events": "s3a://data-lake/events/*.json",
    "products": "s3a://data-lake/products/*.csv"
}

def process_data_lake():
    # Load data
    users_df = spark.read.parquet(sources["users"])
    events_df = spark.read.json(sources["events"])
    products_df = spark.read.csv(
        sources["products"], 
        header=True, 
        inferSchema=True
    )
    
    # Join and process
    return users_df.join(
        events_df, "user_id"
    ).join(
        products_df, "product_id"
    ).groupBy(
        "category", "country"
    ).agg(
        countDistinct("user_id").alias("unique_users"),
        sum("amount").alias("total_revenue")
    )`}</code>
        </pre>
      </div>

      <h2 id="exercises">Practice Exercises</h2>
      <h3 id="exercise-1">Exercise 1: Data Quality Checks</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`def check_data_quality(df):
    # Check for nulls
    null_counts = df.select([
        count(when(col(c).isNull(), c)).alias(c)
        for c in df.columns
    ])
    
    # Check for duplicates
    duplicate_count = df.count() - df.dropDuplicates().count()
    
    # Value range checks
    numeric_stats = df.select([
        min(c).alias(f"{c}_min"),
        max(c).alias(f"{c}_max")
        for c in df.columns
        if df.schema[c].dataType.typeName() in 
        ["integer", "long", "double"]
    ])
    
    return null_counts, duplicate_count, numeric_stats`}</code>
        </pre>
      </div>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Now that you've completed the hands-on projects, proceed to Part 11 for 
        References and Further Reading to continue your learning journey with 
        additional resources and advanced topics.
      </p>
    </DocLayout>
  );
}
