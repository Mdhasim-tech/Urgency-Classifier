"use client";
import { useState } from "react";

export default function Predict() {
  const [text, setText] = useState("");
  const [prediction, setPrediction] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://127.0.0.1:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await res.json();
    setPrediction(data.prediction);
  };

  return (
    <section className="predict">
      <h2>Check Urgency of a Message</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="5"
          placeholder="Enter your message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <button type="submit" className="btn">Predict</button>
      </form>
      {prediction && <p className="result">Prediction: {prediction}</p>}
    </section>
  );
}
