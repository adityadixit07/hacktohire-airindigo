import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { login } from "../services/api";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      localStorage.setItem("token", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      history.push("/");
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="username" className="block mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-3 py-2 border rounded-lg"
          required
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
