from fastapi import APIRouter
from utils.alerts_manager import check_alert

router = APIRouter()

@router.get("/check")
def alert_check(confidence: float):
    alert = check_alert(confidence)
    return {"confidence": confidence, "alert": alert}
