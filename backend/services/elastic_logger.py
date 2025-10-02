from elasticsearch import Elasticsearch
from config import ELASTIC_URL

es = Elasticsearch(ELASTIC_URL)

def log_event(event_type: str, data: dict):
    es.index(index="realtime-logs", body={"event": event_type, "data": data})
