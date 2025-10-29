import { API_SERVER_URL } from "@/config/config";

export async function visaPrepsService({ data, token }: { data: VisaPrepsProps, token: string }) {
  try {
    const response = await fetch(`${API_SERVER_URL}/services/visa-preps`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Visa preps service error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function loanProofOfFundsService({
  data,
  token,
}: {
  data: LoanApplicationProps;
  token: string;
}) {
  try {
    const response = await fetch(`${API_SERVER_URL}/services/loan-application`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      `Loan Application service error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
  }
}


export async function agentVerificationService({ data, token }: { data: AgentVerificationProps, token: string }) {
  try {
    const response = await fetch(`${API_SERVER_URL}/services/agents-verification`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(`Agent verification service error: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function documentVerificationService({
  data,
  token,
}: {
  data: DocumentVerificationProps;
  token: string;
}) {
  try {
    const response = await fetch(`${API_SERVER_URL}/services/documents-verification`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(
      `Documents verification service error: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
    );
  }
}
