import React from "react";
import Heatmap from "../components/Heatmap";
import ConfidenceScore from "../components/ConfidenceScore";
import LatencyGraph from "../components/LatencyGraph";
import ConfigPanel from "./ConfigPanel";
import "./Dashboard.css";

const Dashboard = () => {
  const mockHeatmapData = [
    { id: "user-segment-1", data: [{ x: "featureA", y: 0.8 }, { x: "featureB", y: 0.6 }] },
    { id: "user-segment-2", data: [{ x: "featureA", y: 0.3 }, { x: "featureB", y: 0.4 }] }
  ];

  const mockLatencyData = [
    { time: "10:00", latency: 120 },
    { time: "10:05", latency: 95 },
    { time: "10:10", latency: 110 },
    { time: "10:15", latency: 80 },
    { time: "10:20", latency: 140 }
  ];

  return (
    <div className="dashboard">
      <h2> Real-Time Dashboard</h2>
      <div className="grid">
        <Heatmap data={mockHeatmapData} />
        <ConfidenceScore confidence={0.76} />
        <LatencyGraph data={mockLatencyData} />
        <ConfigPanel />
      </div>
    </div>
  );
};

export default Dashboard;
