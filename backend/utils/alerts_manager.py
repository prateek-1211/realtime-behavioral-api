def check_alert(confidence: float):
    if confidence < 0.5:
        return "Low Confidence Alert"
    return "Confidence OK"
