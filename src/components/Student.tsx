"use client";

import { Dispatch, SetStateAction } from "react";

import StudentPhoto from "./StudentPhoto";

interface Props {
  firstName: string;
  lastName: string;
  profile: string;
  setActualStudent: Dispatch<SetStateAction<HTMLDivElement | null>>;
  studentPosition: number;
  contextFunction: (position: number) => "#4aff7b" | "#f12815" | "#010101";
}

const Student = ({
  firstName,
  lastName,
  profile,
  setActualStudent,
  studentPosition,
  contextFunction,
}: Props) => {
  const handleDragStart = (e: React.DragEvent) => {
    setActualStudent(e.currentTarget as HTMLDivElement);
  };

  return (
    <div className="flex flex-col items-center">
      <div
        data-testid={`student-${studentPosition}`}
        id={`draggable-student-${studentPosition}`}
        onDragStart={handleDragStart}
        className={`border-solid border-[.313em] rounded-[.625em] w-[9.375em] h-[11.875em] transition-all hover:shadow-student`}
        style={{
          borderColor: contextFunction(studentPosition)
            ? contextFunction(studentPosition)
            : "#333",
        }}
      >
        <StudentPhoto
          profile={profile}
          firstName={firstName}
          lastName={lastName}
        />
      </div>
      <div className="flex flex-col gap-[.5em] items-center mt-[1em]">
        <h3>{`${firstName} ${lastName}`}</h3>
      </div>
    </div>
  );
};

export default Student;
