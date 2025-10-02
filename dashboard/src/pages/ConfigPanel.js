import React, { useState } from "react";
import "./ConfigPanel.css";

const ConfigPanel = () => {
  const [browsing, setBrowsing] = useState(true);
  const [purchase, setPurchase] = useState(false);
  const [social, setSocial] = useState(false);
  const [sensitivity, setSensitivity] = useState(0.5);

  return (
    <div className="card config-panel">
      <h2>Configuration Panel </h2>

      <div className="section">
        <h4>Data Stream Selector</h4>
        <label><input type="checkbox" checked={browsing} onChange={() => setBrowsing(!browsing)} /> Browsing</label>
        <label><input type="checkbox" checked={purchase} onChange={() => setPurchase(!purchase)} /> Purchase</label>
        <label><input type="checkbox" checked={social} onChange={() => setSocial(!social)} /> Social</label>
      </div>

      <div className="section">
        <h4>Model Tuning</h4>
        <input type="range" min="0" max="1" step="0.01" value={sensitivity} onChange={(e) => setSensitivity(e.target.value)} />
        <p>Sensitivity: {sensitivity}</p>
      </div>
    </div>
  );
};

export default ConfigPanel;
