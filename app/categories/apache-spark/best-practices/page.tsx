'use client';
import React from 'react';
import { SiApachespark } from 'react-icons/si';
import { DocLayout } from '@/app/components/DocLayout';

export default function SparkBestPractices() {
  return (
    <DocLayout
      icon={<SiApachespark className="w-10 h-10" />}
      title="Best Practices for Writing Spark Applications"
      partNumber={8}
      readTime="30 min"
    >
      <h2 id="code-organization">Code Organization</h2>
      <h3 id="project-structure">Project Structure</h3>
      <p>
        Organize your Spark applications following these best practices:
      </p>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`spark_app/
├── src/
│   ├── main/
│   │   ├── configs/       # Configuration files
│   │   ├── jobs/         # Spark job definitions
│   │   ├── transforms/   # Data transformation logic
│   │   └── utils/        # Helper functions
│   └── test/             # Unit tests
├── resources/            # External resources
└── requirements.txt      # Dependencies`}</code>
        </pre>
      </div>

      <h2 id="coding-standards">Coding Standards</h2>
      <h3 id="spark-session">SparkSession Management</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Create a SparkSession manager
class SparkSessionManager:
    _instance = None

    @classmethod
    def get_session(cls, app_name="MyApp"):
        if not cls._instance:
            cls._instance = (
                SparkSession.builder
                .appName(app_name)
                .config("spark.sql.shuffle.partitions", "200")
                .getOrCreate()
            )
        return cls._instance

    @classmethod
    def stop_session(cls):
        if cls._instance:
            cls._instance.stop()
            cls._instance = None`}</code>
        </pre>
      </div>

      <h2 id="error-handling">Error Handling</h2>
      <h3 id="exception-handling">Exception Management</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`class SparkJobError(Exception):
    """Custom exception for Spark job failures"""
    pass

def process_data(df):
    try:
        # Data processing logic
        result_df = df.transform(complex_transformation)
        
        # Validate results
        if result_df.count() == 0:
            raise SparkJobError("No records processed")
            
        return result_df
    except Exception as e:
        logger.error(f"Data processing failed: {str(e)}")
        raise SparkJobError(f"Job failed: {str(e)}")`}</code>
        </pre>
      </div>

      <h2 id="performance-practices">Performance Best Practices</h2>
      <h3 id="data-optimization">Data Optimization</h3>
      <ul>
        <li>Use appropriate data types</li>
        <li>Partition data effectively</li>
        <li>Cache judiciously</li>
        <li>Minimize shuffles</li>
      </ul>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# Optimize DataFrame schema
from pyspark.sql.types import StructType, StructField, StringType

# Define optimized schema
schema = StructType([
    StructField("id", StringType(), nullable=False),
    # Use appropriate types for other fields
])

# Read with optimized schema
df = spark.read \\
    .schema(schema) \\
    .option("mode", "FAILFAST") \\
    .parquet("data/path")`}</code>
        </pre>
      </div>

      <h2 id="testing">Testing Practices</h2>
      <h3 id="unit-testing">Unit Testing</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`import pytest
from pyspark.sql import SparkSession

@pytest.fixture
def spark():
    return SparkSession.builder \\
        .appName("unit-tests") \\
        .master("local[2]") \\
        .getOrCreate()

def test_transformation(spark):
    # Create test data
    test_data = [(1, "A"), (2, "B")]
    input_df = spark.createDataFrame(
        test_data, ["id", "value"])
    
    # Apply transformation
    result_df = transform_data(input_df)
    
    # Assert results
    assert result_df.count() == 2
    assert "new_column" in result_df.columns`}</code>
        </pre>
      </div>

      <h2 id="monitoring">Monitoring and Logging</h2>
      <h3 id="logging-practices">Logging Best Practices</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`import logging

def setup_logging():
    logging.basicConfig(
        level=logging.INFO,
        format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    
    # Add file handler
    fh = logging.FileHandler('spark_app.log')
    fh.setLevel(logging.INFO)
    
    # Create formatter
    formatter = logging.Formatter(
        '%(asctime)s - %(name)s - %(levelname)s - %(message)s'
    )
    fh.setFormatter(formatter)
    
    # Add handler to logger
    logger = logging.getLogger(__name__)
    logger.addHandler(fh)
    
    return logger`}</code>
        </pre>
      </div>

      <h2 id="deployment">Deployment Best Practices</h2>
      <h3 id="packaging">Application Packaging</h3>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg my-4">
        <pre className="text-sm">
          <code>{`# setup.py
from setuptools import setup, find_packages

setup(
    name="spark-app",
    version="1.0.0",
    packages=find_packages(),
    install_requires=[
        "pyspark>=3.0.0",
        "pytest>=6.0.0"
    ],
    entry_points={
        'console_scripts': [
            'run-spark-job=spark_app.main:main'
        ]
    }
)`}</code>
        </pre>
      </div>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Now that you understand best practices for writing Spark applications, 
        proceed to Part 9 to learn about Certification and Interview Preparation, 
        where we'll cover common interview questions and certification topics.
      </p>
    </DocLayout>
  );
}
