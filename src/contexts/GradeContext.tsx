"use client";

import { createContext, useState } from "react";

import {
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
  student7,
  student8,
  student9,
  student10,
} from "@/data/students";
import { StudentGradeInterface as StudentGrade } from "@/models/StudentModel";

type GradeContextProviderProps = {
  children: React.ReactNode;
};

interface StudentGradeInterface {
  student1: StudentGrade;
  student2: StudentGrade;
  student3: StudentGrade;
  student4: StudentGrade;
  student5: StudentGrade;
  student6: StudentGrade;
  student7: StudentGrade;
  student8: StudentGrade;
  student9: StudentGrade;
  student10: StudentGrade;
}

type GradeContext = {
  studentGrade: StudentGradeInterface;
  setStudentGrade: React.Dispatch<React.SetStateAction<StudentGradeInterface>>;
};

const initalState: StudentGradeInterface = {
  student1: {
    name: student1.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student2: {
    name: student2.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student3: {
    name: student3.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student4: {
    name: student4.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student5: {
    name: student5.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student6: {
    name: student6.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student7: {
    name: student7.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student8: {
    name: student8.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student9: {
    name: student9.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
  student10: {
    name: student10.name,
    gradePoints: [0, 0, 0, 0, 0, 0],
    averageGrade: 0,
    addedByTeacher: false,
  },
};

export const GradeContext = createContext<GradeContext | null>(null);

export const GradeContextProvider = ({
  children,
}: GradeContextProviderProps) => {
  const [studentGrade, setStudentGrade] =
    useState<StudentGradeInterface>(initalState);

  return (
    <GradeContext.Provider value={{ studentGrade, setStudentGrade }}>
      {children}
    </GradeContext.Provider>
  );
};
