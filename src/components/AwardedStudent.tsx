"use client";

import Image from "next/image";

import noUserImage from "@/assets/images/question.png";

interface Props {
  firstName: string;
  lastName: string;
  award: string;
  color: string;
  actualStudent: HTMLDivElement | null;
  awardPosition: number;
}

const AwardedStudent = ({
  firstName,
  lastName,
  award,
  color: propColor,
  actualStudent,
  awardPosition,
}: Props) => {
  const handleDrop = (e: React.DragEvent) => {
    if (actualStudent) {
      const currentTarget = e.currentTarget as HTMLDivElement;
      // student photo
      (currentTarget.children[0].children[0] as HTMLImageElement).srcset = (
        actualStudent!.children[0] as HTMLImageElement
      ).srcset;
      (currentTarget.children[0].children[0] as HTMLImageElement).alt = (
        actualStudent!.children[0] as HTMLImageElement
      ).alt;
      // student name
      (currentTarget.children[1].children[0] as HTMLHeadingElement).innerText =
        (actualStudent!.children[0] as HTMLImageElement).alt;
      // colors
      (currentTarget.children[0] as HTMLDivElement).style.borderColor =
        propColor;
      (
        currentTarget.children[1].children[0] as HTMLHeadingElement
      ).style.color = propColor;
      (currentTarget.children[1].children[1] as HTMLSpanElement).style.color =
        propColor;

      const awardStudentPhoto = document.querySelectorAll(".award-student")[
        awardPosition - 1
      ] as HTMLImageElement;
      if (awardStudentPhoto) {
        awardStudentPhoto.style.height = "100%";
      }
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
    >
      <div
        className={`rounded-[.625em] w-[9.375em] h-[11.875em] flex justify-center items-center`}
        style={{
          border: `solid .313em ${firstName !== "Not" ? propColor : "#010101"}`,
        }}
      >
        <Image
          className="rounded-[.25em] award-student"
          src={noUserImage}
          alt={`${firstName} ${lastName}`}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        className="flex flex-col gap-[.5em] items-center mt-[1em]"
        style={{ color: "#010101" }}
      >
        <h3>{`${firstName} ${lastName}`}</h3>
        <span>{award}</span>
      </div>
    </div>
  );
};

export default AwardedStudent;
