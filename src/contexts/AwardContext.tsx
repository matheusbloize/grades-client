"use client";

import { createContext, useState } from "react";

type AwardContextProviderProps = {
  children: React.ReactNode;
};

export interface StudentInterface {
  name: string;
  photo: string;
  color: string;
}

interface AwardedStudentInterface {
  award1?: StudentInterface;
  award2?: StudentInterface;
  award3?: StudentInterface;
  award4?: StudentInterface;
}

type AwardContext = {
  awardedStudents: AwardedStudentInterface;
  setAwardedStudents: React.Dispatch<
    React.SetStateAction<AwardedStudentInterface>
  >;
};

const initalState = {
  award1: {
    name: "Not defined yet",
    photo: "",
    color: "#FF1B6D",
  },
  award2: {
    name: "Not defined yet",
    photo: "",
    color: "#4EF6FF",
  },
  award3: {
    name: "Not defined yet",
    photo: "",
    color: "#4F52B1",
  },
  award4: {
    name: "Not defined yet",
    photo: "",
    color: "#5BFFD4",
  },
};

export const AwardContext = createContext<AwardContext | null>(null);

export const AwardContextProvider = ({
  children,
}: AwardContextProviderProps) => {
  const [awardedStudents, setAwardedStudents] =
    useState<AwardedStudentInterface>(initalState);

  return (
    <AwardContext.Provider value={{ awardedStudents, setAwardedStudents }}>
      {children}
    </AwardContext.Provider>
  );
};
