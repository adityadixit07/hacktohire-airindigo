const API_BASE_URL = "http://localhost:8000/api";

export async function getFlights() {
  const response = await fetch(`${API_BASE_URL}/flights/`);
  if (!response.ok) {
    throw new Error("Failed to fetch flights");
  }
  return response.json();
}

export async function getFlight(id) {
  const response = await fetch(`${API_BASE_URL}/flights/${id}/`);
  if (!response.ok) {
    throw new Error("Failed to fetch flight details");
  }
  return response.json();
}

export async function login(username, password) {
  const response = await fetch(`${API_BASE_URL}/token/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });
  if (!response.ok) {
    throw new Error("Login failed");
  }
  return response.json();
}

export async function signup(username, email, password) {
  const response = await fetch(`${API_BASE_URL}/users/signup/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });
  if (!response.ok) {
    throw new Error("Signup failed");
  }
  return response.json();
}
