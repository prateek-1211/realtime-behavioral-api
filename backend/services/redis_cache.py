import redis, json
from config import REDIS_URL

r = redis.from_url(REDIS_URL)

def _key(data: dict) -> str:
    return "pred:" + json.dumps(data, sort_keys=True)

def get_prediction(data: dict):
    res = r.get(_key(data))
    if res:
        return json.loads(res)
    return None

def set_prediction(data: dict, result: dict):
    r.setex(_key(data), 60, json.dumps(result))  # cache 1 min
