import { ProductsContext } from "@/providers/ProductsProvider"
import { useContext } from "react"

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within an AuthProvider");
  }

  return context;
}
