import { API_SERVER_URL } from "@/config/config";

interface PaymentVerificationResponse {
  error: boolean;
  message?: string;
  status?: string;
  payment?: {
    _id?: string;
    reference?: string;
    amount: number;
    currency?: string;
    status: string;
    paidAt?: string;
    updatedAt?: string;
    createdAt?: string;
    userId: string;
    serviceType: string;
    serviceId?: string;
    method?: string;
    verified?: boolean;
  };
}

export async function verifyPayment(reference: string): Promise<PaymentVerificationResponse> {
  try {
    const response = await fetch(
      `${API_SERVER_URL}/payments/verify?reference=${reference}`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage = errorData?.message || "Failed to verify payment";

      let userFriendlyMessage = errorMessage;
      if (response.status === 404) {
        userFriendlyMessage = "Payment record not found. Please contact support if you were charged.";
      } else if (response.status === 400) {
        userFriendlyMessage = errorMessage || "Invalid payment reference.";
      } else if (response.status === 500) {
        userFriendlyMessage = "Server error occurred. Please try again later.";
      }

      return {
        error: true,
        message: userFriendlyMessage,
      };
    }

    const result = await response.json();

    // Check if payment was successful based on backend response
    // Backend returns: { status: "completed", payment: {...} }
    const isSuccessful = result.status === "completed" || result.payment?.status === "completed";

    if (!isSuccessful) {
      return {
        error: true,
        message: result.message || "Payment verification failed or payment was not completed.",
        status: result.status,
        payment: result.payment,
      };
    }

    return {
      error: false,
      message: result.message,
      status: result.status,
      payment: result.payment,
    };
  } catch (error) {
    console.error("Error verifying payment:", error);
    return {
      error: true,
      message: "Network error occurred. Please check your connection and try again.",
    };
  }
}
