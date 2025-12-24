import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import {
  visaPrepsService,
  loanProofOfFundsService,
  agentVerificationService,
  documentVerificationService,
  scamReportService,
  visaDenialSupportService,
  consultationService,
  postRelocationService,
  diasporaProjectService
} from "@/services/products.services";
import { useAuth } from "@/hooks/useAuth";


export enum ProductTyping {
  VISA_PREPS = "visa_preps",
  LOAN_POF = "loan_proof_of_funds",
  AGENT_VERIFICATION = "agent_verification",
  DOCUMENTS_VERIFICATION = "documents_and_cos_verification",
  SCAM_ALERT = "scam_alert",
  POST_VISA_DENIAL = "post_visa_denial_support",
  CONSULTATION = "consultation",
  POST_RELOCATION = "post_relocation_support",
  DIASPORA_PROJECT = "diaspora_project_management",
}

interface ProductsContextProps {
  productType: ProductTyping | null;
  setProductType: Dispatch<SetStateAction<ProductTyping | null>>;
  answers: Record<string, any>;
  setAnswers: Dispatch<SetStateAction<Record<string, any>>>;
  submitProduct: (data: any) => void;
  isSubmitting: boolean;
  submitSuccess: boolean;
  submitError: unknown;
}

export const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const {userToken} = useAuth()
  const [productType, setProductType] = useState<ProductTyping | null>(null);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const serviceSelector = (data: any) => {
    switch (productType) {
      case ProductTyping.VISA_PREPS:
        return visaPrepsService({ data, token: userToken as string });
      case ProductTyping.LOAN_POF:
        return loanProofOfFundsService({ data, token: userToken as string });
      case ProductTyping.AGENT_VERIFICATION:
        return agentVerificationService({ data, token: userToken as string });
      case ProductTyping.DOCUMENTS_VERIFICATION:
        return documentVerificationService({data, token: userToken as string})
      case ProductTyping.SCAM_ALERT:
        return scamReportService({ data, token: userToken as string });
      case ProductTyping.POST_VISA_DENIAL:
        return visaDenialSupportService({ data, token: userToken as string });
      case ProductTyping.CONSULTATION:
        return consultationService({ data, token: userToken as string });
      case ProductTyping.POST_RELOCATION:
        return postRelocationService({ data, token: userToken as string });
      case ProductTyping.DIASPORA_PROJECT:
        return diasporaProjectService({ data, token: userToken as string });
      default:
        throw new Error("Unsupported product type or missing selection");
    }
  };

  const {
    mutate: submitProduct,
    isPending: isSubmitting,
    isSuccess: submitSuccess,
    error: submitError,
  } = useMutation({
    mutationFn: serviceSelector,
    onSuccess: (res) => {
      // Check if response contains an error
      if (res.error) {
        console.error("Product submission failed:", res.message);
        // You might want to handle the error state here
        return;
      }

      console.log("Product submission successful:", res);

      // If there's a payment authorization URL, open it
      const paymentUri = res.authorizationUrl;
      if (paymentUri) {
        window.open(paymentUri, "_blank");
      }
    },
    onError: (err) => {
      console.error("Product submission failed:", err);
    },
  });

  return (
    <ProductsContext.Provider
      value={{
        productType,
        setProductType,
        answers,
        setAnswers,
        submitProduct,
        isSubmitting,
        submitSuccess,
        submitError,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
