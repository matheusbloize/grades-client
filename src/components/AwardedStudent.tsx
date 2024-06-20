"use client";

import Image from "next/image";

import noUserImage from "@/assets/images/question.png";

interface Props {
  name: string;
  photo: string;
  award: string;
  color: string;
  actualStudent: HTMLDivElement | null;
  awardPosition: number;
  contextFunction: (
    name: string,
    photo: string,
    color: string,
    position: number,
  ) => void;
}

const AwardedStudent = ({
  name,
  photo,
  award,
  color: propColor,
  actualStudent,
  awardPosition,
  contextFunction,
}: Props) => {
  const handleDrop = () => {
    if (actualStudent) {
      contextFunction(
        (actualStudent!.children[0] as HTMLImageElement).alt,
        actualStudent.id[actualStudent.id.length - 1] === "0"
          ? `/static/images/student${
              actualStudent.id[actualStudent.id.length - 2]
            }${actualStudent.id[actualStudent.id.length - 1]}.jpg`
          : `/static/images/student${
              actualStudent.id[actualStudent.id.length - 1]
            }.jpg`,
        propColor,
        awardPosition,
      );
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="flex flex-col items-center"
      data-testid="awarded-card"
    >
      <div
        className={`rounded-[.625em] w-[9.375em] h-[11.875em] flex justify-center items-center`}
        style={{
          border: `solid .313em ${photo ? propColor : "#010101"}`,
        }}
      >
        <Image
          className="rounded-[.25em] award-student"
          src={photo ? photo : noUserImage}
          alt={name}
          width={300}
          height={350}
          style={{ width: "100%", height: `${photo ? "100%" : "auto"}` }}
        />
      </div>
      <div
        className="flex flex-col gap-[.5em] items-center mt-[1em]"
        style={{ color: `${photo ? propColor : "#010101"}` }}
      >
        <h3>{name}</h3>
        <span>{award}</span>
      </div>
    </div>
  );
};

export default AwardedStudent;
