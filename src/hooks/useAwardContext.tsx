"use client";

import { useContext } from "react";

import { AwardContext } from "@/contexts/AwardContext";

export const useAwardContext = () => {
  const context = useContext(AwardContext);
  if (!context) {
    throw new Error(
      "useAwardContext must be used within a AwardContextProvider",
    );
  }
  return context;
};
