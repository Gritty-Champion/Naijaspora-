import { useMutation, UseMutationResult } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import {
  visaPrepsService,
  loanProofOfFundsService,
  agentVerificationService,
  documentVerificationService,
  scamReportService,
  visaDenialSupportService,
  consultationService,
  postRelocationService,
  diasporaProjectService,
} from "@/services/products.services";

// Common response type for all services
interface ServiceResponse {
  error: boolean;
  message?: string;
  status?: number;
  data?: any;
}

// Visa Preparation Submission
export const useVisaPrepsSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  VisaPrepsProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: VisaPrepsProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return visaPrepsService({ data, token: userToken });
    },
  });
};

// Loan Application Submission
export const useLoanApplicationSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  LoanApplicationProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: LoanApplicationProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return loanProofOfFundsService({ data, token: userToken });
    },
  });
};

// Agent Verification Submission
export const useAgentVerificationSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  AgentVerificationProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: AgentVerificationProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return agentVerificationService({ data, token: userToken });
    },
  });
};

// Document Verification Submission
export const useDocumentVerificationSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  DocumentVerificationProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: DocumentVerificationProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return documentVerificationService({ data, token: userToken });
    },
  });
};

// Scam Report Submission
export const useScamReportSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  ScamAlertProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: ScamAlertProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return scamReportService({ data, token: userToken });
    },
  });
};

// Visa Denial Support Submission
export const useVisaDenialSupportSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  PostVisaDenialProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: PostVisaDenialProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return visaDenialSupportService({ data, token: userToken });
    },
  });
};

// Consultation Submission
export const useConsultationSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  ConsultationProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: ConsultationProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return consultationService({ data, token: userToken });
    },
  });
};

// Post-Relocation Support Submission
export const usePostRelocationSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  PostRelocationProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: PostRelocationProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return postRelocationService({ data, token: userToken });
    },
  });
};

// Diaspora Project Submission
export const useDiasporaProjectSubmit = (): UseMutationResult<
  ServiceResponse,
  Error,
  DiasporaProjectProps,
  unknown
> => {
  const { userToken } = useAuth();

  return useMutation({
    mutationFn: async (data: DiasporaProjectProps) => {
      if (!userToken) {
        throw new Error("You must be logged in to submit this request");
      }
      return diasporaProjectService({ data, token: userToken });
    },
  });
};
