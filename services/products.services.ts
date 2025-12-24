import { API_SERVER_URL } from "@/config/config";

export async function visaPrepsService({ data, token }: { data: VisaPrepsProps, token: string }) {
  const response = await fetch(`${API_SERVER_URL}/services/visa-preps`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit visa preparation request";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}

export async function loanProofOfFundsService({
  data,
  token,
}: {
  data: LoanApplicationProps;
  token: string;
}) {
  const response = await fetch(`${API_SERVER_URL}/services/loan-application`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit loan application";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}


export async function agentVerificationService({ data, token }: { data: AgentVerificationProps, token: string }) {
  const response = await fetch(`${API_SERVER_URL}/services/agents-verification`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit agent verification request";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}

export async function documentVerificationService({
  data,
  token,
}: {
  data: DocumentVerificationProps;
  token: string;
}) {
  const response = await fetch(`${API_SERVER_URL}/services/documents-verification`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit document verification request";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}

export async function scamReportService({
  data,
  token,
}: {
  data: ScamAlertProps;
  token: string;
}) {
  const response = await fetch(`${API_SERVER_URL}/services/scam-report`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit scam report";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}

export async function visaDenialSupportService({
  data,
  token,
}: {
  data: PostVisaDenialProps;
  token: string;
}) {
  const response = await fetch(`${API_SERVER_URL}/services/visa-denial-support`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit visa denial support request";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}

export async function consultationService({
  data,
  token,
}: {
  data: ConsultationProps;
  token: string;
}) {
  const response = await fetch(`${API_SERVER_URL}/services/consultation`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit consultation request";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}

export async function postRelocationService({
  data,
  token,
}: {
  data: PostRelocationProps;
  token: string;
}) {
  const response = await fetch(`${API_SERVER_URL}/services/post-relocation`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit post-relocation support request";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}

export async function diasporaProjectService({
  data,
  token,
}: {
  data: DiasporaProjectProps;
  token: string;
}) {
  const response = await fetch(`${API_SERVER_URL}/services/diaspora-project`, {
    method: "POST",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    const errorMessage = errorData?.message || "Failed to submit diaspora project request";

    let userFriendlyMessage = errorMessage;
    if (response.status === 401) {
      userFriendlyMessage = "You must be logged in to submit this request. Please log in and try again.";
    } else if (response.status === 400) {
      userFriendlyMessage = errorMessage || "Please check your form and ensure all required fields are filled correctly.";
    } else if (response.status === 500) {
      userFriendlyMessage = "Server error occurred. Please try again later.";
    }

    return {
      error: true,
      message: userFriendlyMessage,
      status: response.status,
    };
  }

  const result = await response.json();
  return {
    error: false,
    ...result,
  };
}
