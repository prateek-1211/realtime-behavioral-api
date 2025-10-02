import time

def measure_latency(func):
    def wrapper(*args, **kwargs):
        start = time.time()
        res = func(*args, **kwargs)
        end = time.time()
        return {"result": res, "latency_ms": (end - start) * 1000}
    return wrapper
