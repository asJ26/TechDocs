'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function AdvancedSparkFeatures() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Advanced Spark Features"
      partNumber={7}
      readTime="35 min"
    >
      <h2 id="custom-partitioners">Custom Partitioners</h2>
      <p>
        Custom partitioners allow fine-grained control over data distribution:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark import Partitioner

class CustomPartitioner(Partitioner):
    def __init__(self, partitions):
        self.partitions = partitions
    
    def numPartitions(self):
        return self.partitions
    
    def getPartition(self, key):
        # Custom logic for partition assignment
        return hash(key) % self.partitions

# Using custom partitioner
rdd = pairs.partitionBy(10, CustomPartitioner(10))`}</code>
        </pre>
      </div>

      <h2 id="broadcast-variables">Broadcast Variables</h2>
      <p>
        Efficiently share large read-only data across nodes:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Create broadcast variable
lookup_table = {"US": "United States", "UK": "United Kingdom"}
broadcast_lookup = sc.broadcast(lookup_table)

# Use in transformation
def expand_country(row):
    return row.update({"country_full": 
        broadcast_lookup.value.get(row["country_code"])})

df = df.rdd.map(expand_country).toDF()`}</code>
        </pre>
      </div>

      <h2 id="accumulators">Custom Accumulators</h2>
      <p>
        Track metrics and aggregations across the cluster:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.accumulators import AccumulatorParam

class SetAccumulator(AccumulatorParam):
    def zero(self, initialValue):
        return set([])
    
    def addInPlace(self, v1, v2):
        return v1.union(v2)

# Create accumulator
unique_values = sc.accumulator(set([]), SetAccumulator())

# Use in transformation
def track_values(x):
    unique_values.add(x.value)
    return x

rdd.map(track_values)`}</code>
        </pre>
      </div>

      <h2 id="custom-udfs">User Defined Functions (UDFs)</h2>
      <h3 id="python-udfs">Python UDFs</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql.functions import udf
from pyspark.sql.types import StringType

# Define UDF
@udf(returnType=StringType())
def format_name(first_name, last_name):
    return f"{last_name.upper()}, {first_name.title()}"

# Use UDF in DataFrame
df = df.withColumn("formatted_name", 
    format_name(df.first_name, df.last_name))`}</code>
        </pre>
      </div>

      <h3 id="pandas-udfs">Pandas UDFs</h3>
      <p>
        Vectorized UDFs for better performance:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`import pandas as pd
from pyspark.sql.functions import pandas_udf
from pyspark.sql.types import DoubleType

# Define Pandas UDF
@pandas_udf(DoubleType())
def calculate_zscore(values: pd.Series) -> pd.Series:
    return (values - values.mean()) / values.std()

# Apply to DataFrame
df = df.withColumn("zscore", 
    calculate_zscore(df.value))`}</code>
        </pre>
      </div>

      <h2 id="custom-optimizations">Custom Optimizations</h2>
      <h3 id="custom-optimizer">Custom Optimizer Rules</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.sql.catalyst.rules import Rule
from pyspark.sql.catalyst.plans import LogicalPlan

class CustomOptimizationRule(Rule):
    def apply(self, plan: LogicalPlan) -> LogicalPlan:
        # Custom optimization logic
        return modified_plan

# Register rule
spark.experimental.extraOptimizations = [
    CustomOptimizationRule()
]`}</code>
        </pre>
      </div>

      <h2 id="external-libraries">External Library Integration</h2>
      <h3 id="ml-libraries">Machine Learning Libraries</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.ml import Pipeline
from pyspark.ml.feature import VectorAssembler
from pyspark.ml.classification import RandomForestClassifier

# Create ML Pipeline
assembler = VectorAssembler(
    inputCols=["feature1", "feature2"], 
    outputCol="features")
rf = RandomForestClassifier(
    labelCol="label", 
    featuresCol="features")
pipeline = Pipeline(stages=[assembler, rf])`}</code>
        </pre>
      </div>

      <h2 id="monitoring-debugging">Advanced Monitoring</h2>
      <h3 id="custom-listeners">Custom Listeners</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`from pyspark.scheduler import SparkListener

class CustomSparkListener(SparkListener):
    def onApplicationStart(self, applicationStart):
        print(f"Application started: {applicationStart.appName}")
    
    def onTaskEnd(self, taskEnd):
        print(f"Task finished: {taskEnd.taskInfo.taskId}")

# Add listener
sc.addSparkListener(CustomSparkListener())`}</code>
        </pre>
      </div>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Now that you understand advanced Spark features, proceed to Part 8 to learn 
        about Best Practices for Writing Spark Applications, where we'll explore how 
        to write efficient and maintainable Spark code.
      </p>
    </DocLayout>
  );
}
