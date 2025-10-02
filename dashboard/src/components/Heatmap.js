import React from "react";
import { ResponsiveHeatMap } from "@nivo/heatmap";
import "./Heatmap.css";

const Heatmap = ({ data }) => (
  <div className="card heatmap-card">
    <h3>Heatmap</h3>
    <div className="heatmap-container">
      <ResponsiveHeatMap
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        colors={{ type: "sequential", scheme: "reds" }}
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
      />
    </div>
  </div>
);

export default Heatmap;
