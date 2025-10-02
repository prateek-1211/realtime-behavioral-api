from sqlalchemy import create_engine, text
from config import POSTGRES_URL

engine = create_engine(POSTGRES_URL, echo=False, future=True)

def log_billing(api_key: str):
    with engine.connect() as conn:
        conn.execute(text("INSERT INTO billing (api_key) VALUES (:api_key)"), {"api_key": api_key})
        conn.commit()
