"use client"
import React, { useEffect, useState } from "react";

const UsersScreen = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setUsers([
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div>Loading users...</div>;
  }

  return (
    <div>
      <h2>Users</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ccc", padding: "8px" }}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.id}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.name}</td>
              <td style={{ border: "1px solid #ccc", padding: "8px" }}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersScreen;