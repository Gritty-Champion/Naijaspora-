"use client"

import React, {
  createContext,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

interface ControllerContextType {
  isHeroInView: boolean;
  heroRef: React.RefObject<HTMLDivElement | null>;
}

export const ControllerContext = createContext<
  ControllerContextType | undefined
>(undefined);

interface ControllerProviderProps {
  children: ReactNode;
}

export const ControllerProvider: React.FC<ControllerProviderProps> = ({
  children,
}) => {
  const [isHeroInView, setIsHeroInView] = useState<boolean>(true);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
        console.log("isHeroInView", entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const current = heroRef.current;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  const value = {
    isHeroInView,
    heroRef,
  };

  return (
    <ControllerContext.Provider value={value}>
      {children}
    </ControllerContext.Provider>
  );
};
