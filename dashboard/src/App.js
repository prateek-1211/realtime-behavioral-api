import React from "react";
import Dashboard from "./pages/Dashboard";
import ConfigPanel from "./pages/ConfigPanel";

function App() {
  return (
    <div className="App">
      <h1>Real-Time Prediction Dashboard</h1>
      <Dashboard />
      <ConfigPanel />
    </div>
  );
}

export default App;
