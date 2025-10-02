import React, { useState } from "react";
import "./ApiManager.css";

const ApiManager = () => {
  const [endpoints, setEndpoints] = useState([]);
  const [name, setName] = useState("");
  const [source, setSource] = useState("");

  const addEndpoint = async () => {
    const res = await fetch(
      "http://localhost:8000/api/add?name=" + name + "&source=" + source,
      { method: "POST" }
    );
    const data = await res.json();
    setEndpoints(data.endpoints);
  };

  const fetchEndpoints = async () => {
    const res = await fetch("http://localhost:8000/api/list");
    const data = await res.json();
    setEndpoints(data.endpoints);
  };

  return (
    <div className="api-manager">
      <h3>API Endpoint Manager</h3>
      <div className="inputs">
        <input
          type="text"
          placeholder="Endpoint name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Data source"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
      </div>
      <div className="buttons">
        <button onClick={addEndpoint}>Add</button>
        <button onClick={fetchEndpoints}>Refresh</button>
      </div>
      <ul>
        {endpoints.map((ep, idx) => (
          <li key={idx}>
            <b>{ep.name}</b> → {ep.source}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ApiManager;
