"use client";
import React, { useState } from "react";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    // Simulate login (replace with actual API call)
    if (email === "admin@example.com" && password === "password") {
      setError("");
      alert("Login successful!");
      // Redirect or set auth state here
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto", padding: "2rem", border: "1px solid #ccc", borderRadius: "8px" }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{ width: "100%", padding: "8px", marginTop: "4px" }}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit" style={{ padding: "8px 16px" }}>Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;