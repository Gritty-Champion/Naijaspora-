import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface ProductsContextProps {
  productType: ProductTyping | null;
  setProductType: Dispatch<SetStateAction<ProductTyping | null>>;
}

export enum ProductTyping {
  VISA_PREPS = "visa_preps",
  LOAN_POF = "loan_proof_of_funds",
  AGENT_VERIFICATION = "agent_verification",
  DOCUMENTS_VERIFICATION = "documents_and_cos_verification"
}

export const ProductsContext = createContext<ProductsContextProps | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
  const [productType, setProductType] = useState<ProductTyping | null>(null);

  return (
    <ProductsContext.Provider value={{ productType, setProductType }}>
      {children}
    </ProductsContext.Provider>
  );
};
