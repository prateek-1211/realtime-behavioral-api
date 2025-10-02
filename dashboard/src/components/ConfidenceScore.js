import React from "react";
import "./ConfidenceScore.css";

const ConfidenceScore = ({ confidence }) => (
  <div className="card confidence-card">
    <h3>Confidence Score</h3>
    <p>{(confidence * 100).toFixed(2)}%</p>
  </div>
);

export default ConfidenceScore;
