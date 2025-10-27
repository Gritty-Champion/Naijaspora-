import { API_SERVER_URL, CURRENT_ENV, INCLUDE_CREDENTIALS } from "@/config/config";


export async function getUserToken({ email, password }: { email: string; password: string }) {
  const postBody = {
    email,
    password,
  };

  try {
    const res = await fetch(`${API_SERVER_URL}/auth/login`, {
      method: "POST",
      credentials: INCLUDE_CREDENTIALS,
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
      credentials: INCLUDE_CREDENTIALS,
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
