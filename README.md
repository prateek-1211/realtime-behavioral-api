# Real-Time Behavioral Prediction API Platform 

A full-stack platform for real-time behavioral prediction using FastAPI, Kafka, Redis, TensorFlow Serving, PostgreSQL, and React.js.  
It provides an interactive dashboard with heatmaps, latency monitoring, API manager, and configuration panel.


# Project Structure

realtime-behavioral-api/
│── backend/
│ ├── app/
│ │ ├── main.py # FastAPI entry point
│ │ ├── api/ # API routes
│ │ ├── services/ # Kafka, Redis, ML model services
│ │ ├── models/ # DB models (PostgreSQL)
│ │ ├── config.py # Env & config
│ │ └── utils/ # Helper functions
│ ├── requirements.txt # Python dependencies
│ └── Dockerfile
│
│── dashboard/ (Frontend)
│ ├── src/
│ │ ├── index.js # React entry point
│ │ ├── App.js
│ │ ├── components/ # Reusable UI components
│ │ │ ├── Heatmap.js
│ │ │ ├── LatencyGraph.js
│ │ │ ├── ApiManager.js
│ │ │ └── ConfidenceWidget.js
│ │ ├── pages/ # Full pages
│ │ │ ├── Dashboard.js
│ │ │ └── ConfigPanel.js
│ │ └── mock/ # Mock data
│ │ └── heatmapData.js
│ ├── package.json
│ └── Dockerfile
│
│── docker/
│ ├── docker-compose.yml # Orchestrates Kafka, Redis, PostgreSQL, FastAPI, Frontend
│
└── README.md

# Tech Stack

# Backend
- [FastAPI](https://fastapi.tiangolo.com/) - API framework
- [Apache Kafka](https://kafka.apache.org/) - Real-time data streaming
- [Redis](https://redis.io/) - Low-latency caching
- [TensorFlow Serving](https://www.tensorflow.org/tfx/guide/serving) - Model inference
- [PostgreSQL](https://www.postgresql.org/) - Config & billing data
- [Elasticsearch](https://www.elastic.co/) - Log aggregation & search

# Frontend
- React.js (with Vite or CRA)
- Recharts (for charts & graphs)
- React Heatmap Grid / Nivo (for heatmap)
- Tailwind CSS (for styling)
- Axios (for API calls)

# DevOps
- Docker + Docker Compose
- Zookeeper (for Kafka coordination)

---

# Installation

# Backend Setup

1. Navigate to backend:
   bash
   cd backend
   python -m venv venv
   source venv/bin/activate   # Linux/Mac
   venv\Scripts\activate      # Windows
Install dependencies:

bash
Copy code
pip install -r requirements.txt
requirements.txt

txt
Copy code
fastapi
uvicorn
kafka-python
redis
psycopg2-binary
elasticsearch
tensorflow
pydantic
python-dotenv
Run backend:

bash
Copy code
uvicorn main:app --reload

Frontend Setup
Navigate to dashboard:

bash
cd dashboard
Install dependencies:

bash
npm install
package.json important packages

json
{
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "axios": "^1.6.0",
    "recharts": "^2.9.0",
    "react-heatmap-grid": "^3.7.0",
    "tailwindcss": "^3.3.0"
  }
}
Run frontend: npm start

<img width="1920" height="1080" alt="Screenshot (144)" src="https://github.com/user-attachments/assets/cd85e80e-f6cf-4fd7-9969-bc9dd4a7d59a" />


bash
npm start

Docker Setup
Make sure Docker Desktop is running.

Navigate to docker folder:

bash
cd docker
Start services:

bash
docker-compose up -d
Verify containers:

bash
docker ps
