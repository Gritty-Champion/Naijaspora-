import { ControllerContext } from "@/providers/Controller";
import { useContext } from "react";

export const useController = () => {
  const context = useContext(ControllerContext);
  if (context === undefined) {
    throw new Error("useController must be used within a ControllerProvider");
  }
  return context;
};
