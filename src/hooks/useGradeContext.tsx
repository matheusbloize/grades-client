"use client";

import { useContext } from "react";

import { GradeContext } from "@/contexts/GradeContext";

export const useGradeContext = () => {
  const context = useContext(GradeContext);
  if (!context) {
    throw new Error(
      "useGradeContext must be used within a GradeContextProvider",
    );
  }
  return context;
};
