from fastapi import APIRouter
from services import model_inference, redis_cache, elastic_logger
from schemas.prediction import PredictionRequest, PredictionResponse

router = APIRouter()

@router.post("/", response_model=PredictionResponse)
async def get_prediction(req: PredictionRequest):
    cached = redis_cache.get_prediction(req.dict())
    if cached:
        return cached

    result = await model_inference.run_inference(req.dict())
    redis_cache.set_prediction(req.dict(), result)
    elastic_logger.log_event("prediction", result)
    return result
