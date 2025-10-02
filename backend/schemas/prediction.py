from pydantic import BaseModel

class PredictionRequest(BaseModel):
    user_id: str
    features: dict

class PredictionResponse(BaseModel):
    prediction: str
    confidence: float
