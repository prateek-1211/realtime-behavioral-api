import os
from dotenv import load_dotenv

load_dotenv()

KAFKA_BOOTSTRAP = os.getenv("KAFKA_BOOTSTRAP", "localhost:9092")
REDIS_URL = os.getenv("REDIS_URL", "redis://localhost:6379/0")
POSTGRES_URL = os.getenv("POSTGRES_URL", "postgresql://user:password@localhost:5432/realtime_db")
ELASTIC_URL = os.getenv("ELASTIC_URL", "http://localhost:9200")
TFS_URL = os.getenv("TFS_URL", "http://localhost:8501/v1/models/behavior_model:predict")
