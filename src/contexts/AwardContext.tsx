"use client";

import { createContext, useState } from "react";

import { StudentInfoHomePage } from "@/models/StudentModel";

type AwardContextProviderProps = {
  children: React.ReactNode;
};

interface AwardedStudentInterface {
  award1: StudentInfoHomePage;
  award2: StudentInfoHomePage;
  award3: StudentInfoHomePage;
  award4: StudentInfoHomePage;
}

type AwardContext = {
  awardedStudents: AwardedStudentInterface;
  setAwardedStudents: React.Dispatch<
    React.SetStateAction<AwardedStudentInterface>
  >;
};

const initalState: AwardedStudentInterface = {
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
