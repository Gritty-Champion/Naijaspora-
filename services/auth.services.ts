import { API_SERVER_URL } from "@/config/config";


export async function getUserToken({ email, password }: { email: string; password: string }) {
  const postBody = {
    email,
    password,
  };

  try {
    const res = await fetch(`${API_SERVER_URL}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    });

    if (!res.ok) {
      throw new Error(`Login failed: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching user token:", error);
    return null;
  }
}

export async function getUserDetails(token: string) {
  try {
    const res = await fetch(`${API_SERVER_URL}/user/me`, {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch user details: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error fetching user details:", error);
    return null;
  }
}

export async function refreshToken() {
  try {
    const res = await fetch(`${API_SERVER_URL}/auth/refresh`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`Token refresh failed: ${res.status}`);
      return null;
    }

    const result = await res.json();
    return result
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
}
