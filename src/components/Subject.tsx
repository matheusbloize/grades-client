"use client";

import { ChangeEvent, useState } from "react";

interface Props {
  name: string;
  gradePoints: [number, number, number, number, number, number];
  subjectPosition: number;
}

const Subject = ({ name, gradePoints, subjectPosition }: Props) => {
  const [points, setPoints] = useState(
    gradePoints[subjectPosition + 5]?.toString(),
  );
  const handleGrade = (e: ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) > 10)
      alert("Grade Point must be between 0 and 10");
    setPoints(e.target.value);
  };

  return (
    <div className="flex flex-col items-center border-solid border-[.063em] border-[#010101] border-t-0 border-l-0 border-r-0 w-[7vw] max-lg:w-[15vw] max-md:w-fit">
      <div className="border-solid border-[.063em] border-[#010101] border-t-[.063em] px-[.5em] rounded-[2em]">
        {name}
      </div>
      <input
        onChange={handleGrade}
        placeholder={points || "0"}
        type="number"
        min={0}
        max={10}
        className="w-full outline-none text-center"
      />
    </div>
  );
};

export default Subject;
