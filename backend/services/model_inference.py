import httpx
from config import TFS_URL

async def run_inference(features: dict):
    async with httpx.AsyncClient() as client:
        response = await client.post(TFS_URL, json={"instances": [features]})
        data = response.json()
        prediction = data.get("predictions", [{}])[0]
        return {
            "prediction": prediction.get("label", "unknown"),
            "confidence": prediction.get("confidence", 0.0)
        }
