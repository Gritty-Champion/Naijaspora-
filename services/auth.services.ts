import { API_SERVER_URL } from "@/config/config";


export async function getUserToken({ email, password }: { email: string; password: string }) {
  const postBody = {
    email,
    password,
  };

  const res = await fetch(`${API_SERVER_URL}/auth/login`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postBody),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const errorMessage = errorData?.message || "Login failed";

    // Handle specific error cases and return error object
    let userFriendlyMessage = errorMessage;
    if (res.status === 401) {
      userFriendlyMessage = "Invalid email or password. Please try again.";
    } else if (res.status === 403) {
      userFriendlyMessage = "Please verify your email before logging in. Check your inbox for the verification link.";
    } else if (res.status === 400) {
      userFriendlyMessage = errorMessage || "Please provide both email and password.";
    }

    // Return error object instead of throwing
    return {
      error: true,
      message: userFriendlyMessage,
      status: res.status,
    };
  }

  const result = await res.json();
  return {
    error: false,
    ...result,
  };
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
      // Don't throw error - just log and return null to avoid Next.js error overlay
      console.error(`Failed to fetch user details: ${res.status}`);
      return null;
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

export async function registerUser({
  first_name,
  last_name,
  email,
  password,
}: {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}) {
  const res = await fetch(`${API_SERVER_URL}/auth/register`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ first_name, last_name, email, password }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const errorMessage = errorData?.message || "Registration failed";

    // Handle specific error cases
    let userFriendlyMessage = errorMessage;
    if (res.status === 400) {
      // Email already exists or validation errors
      userFriendlyMessage = errorMessage.includes("already")
        ? "This email is already registered. Please log in instead."
        : errorMessage;
    }

    // Return error object instead of throwing
    return {
      error: true,
      message: userFriendlyMessage,
      status: res.status,
    };
  }

  const result = await res.json();
  return {
    error: false,
    ...result,
  };
}

export async function verifyEmailToken(token: string) {
  try {
    const res = await fetch(`${API_SERVER_URL}/auth/verify`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    if (!res.ok) throw new Error(`Verification failed: ${res.status}`);
    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error verifying email:", error);
    throw error;
  }
}

export async function resendVerificationEmail(email: string) {
  try {
    const res = await fetch(`${API_SERVER_URL}/auth/re-verify`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => null);
      throw new Error(errorData?.message || "Failed to resend verification email");
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Error resending verification email:", error);
    throw error;
  }
}

export async function requestPasswordReset(email: string) {
  const res = await fetch(`${API_SERVER_URL}/auth/request-password-reset`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });

  // Always returns 200 for security - doesn't reveal if email exists
  const result = await res.json();
  return {
    error: false,
    ...result,
  };
}

export async function resetPassword({
  token,
  newPassword,
}: {
  token: string;
  newPassword: string;
}) {
  const res = await fetch(`${API_SERVER_URL}/auth/reset-password`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, newPassword }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to reset password";

    let userFriendlyMessage = errorMessage;
    if (res.status === 400) {
      userFriendlyMessage = errorMessage.includes("token")
        ? "Invalid or expired reset token. Please request a new password reset."
        : errorMessage.includes("password")
        ? "Password is too weak. Please use a stronger password."
        : errorMessage;
    } else if (res.status === 404) {
      userFriendlyMessage = "User not found. Please try registering again.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: res.status,
    };
  }

  const result = await res.json();
  return {
    error: false,
    ...result,
  };
}

export async function changePassword({
  currentPassword,
  newPassword,
  token,
}: {
  currentPassword: string;
  newPassword: string;
  token: string;
}) {
  const res = await fetch(`${API_SERVER_URL}/auth/change-password`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ currentPassword, newPassword }),
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to change password";

    let userFriendlyMessage = errorMessage;
    if (res.status === 401) {
      userFriendlyMessage = "Current password is incorrect. Please try again.";
    } else if (res.status === 400) {
      userFriendlyMessage = errorMessage.includes("password")
        ? "New password is too weak. Please use a stronger password."
        : errorMessage || "Please provide both current and new password.";
    } else if (res.status === 404) {
      userFriendlyMessage = "User not found. Please log in again.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: res.status,
    };
  }

  const result = await res.json();
  // Returns { message: string, accessToken: string }
  return {
    error: false,
    ...result,
  };
}
