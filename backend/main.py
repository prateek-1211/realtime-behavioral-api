from fastapi import FastAPI
from routers import predictions, api_manager, alerts

app = FastAPI(title="Real-Time Behavioral Prediction API")

# Routers
app.include_router(predictions.router, prefix="/predict", tags=["Predictions"])
app.include_router(api_manager.router, prefix="/api", tags=["API Manager"])
app.include_router(alerts.router, prefix="/alerts", tags=["Alerts"])

@app.get("/")
def root():
    return {"status": "ok", "message": "Real-Time Prediction API Running"}
