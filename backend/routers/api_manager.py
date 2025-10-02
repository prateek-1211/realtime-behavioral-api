from fastapi import APIRouter

router = APIRouter()

fake_endpoints = []

@router.post("/add")
def add_endpoint(name: str, source: str):
    fake_endpoints.append({"name": name, "source": source})
    return {"msg": "API endpoint added", "endpoints": fake_endpoints}

@router.get("/list")
def list_endpoints():
    return {"endpoints": fake_endpoints}
