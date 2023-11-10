"use client";

import Image from "next/image";
import Link from "next/link";
import { redirect, useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

import checkImage from "@/assets/images/check.svg";
import returnImage from "@/assets/images/return.svg";
import Subject from "@/components/Subject";
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
  StudentInterface,
} from "@/data/students";

const Student = () => {
  const [student, setStudent] = useState<StudentInterface>();
  const params = useParams();

  const findStudent = useCallback(() => {
    switch (params.id) {
      case "1":
        setStudent(student1);
        break;
      case "2":
        setStudent(student2);
        break;
      case "3":
        setStudent(student3);
        break;
      case "4":
        setStudent(student4);
        break;
      case "5":
        setStudent(student5);
        break;
      case "6":
        setStudent(student6);
        break;
      case "7":
        setStudent(student7);
        break;
      case "8":
        setStudent(student8);
        break;
      case "9":
        setStudent(student9);
        break;
      case "10":
        setStudent(student10);
        break;
      default:
        setStudent({
          name: "Student Not Found",
          age: 999,
          subject: "nothing",
        });
        redirect("/");
    }
  }, [params.id]);

  useEffect(() => {
    findStudent();
  }, [findStudent, params.id]);

  const handleGrades = () => {
    const gradesSection = document.getElementById(
      "grades-section",
    ) as HTMLDivElement;
    const gradesArr: number[] = [];
    for (let i = 0; i < gradesSection.children.length; i++) {
      if (
        Number(
          (gradesSection.children[i].children[1] as HTMLInputElement).value,
        ) > 10
      ) {
        alert("Grade Point must be between 0 and 10");
        return;
      }
      gradesArr.push(
        Number(
          (gradesSection.children[i].children[1] as HTMLInputElement).value,
        ),
      );
    }
    console.log(gradesArr); // Arr das notas
    const gradeAverage = gradesArr.reduce((prev, curr) => prev + curr) / 6;
    console.log(gradeAverage); // Média das notas
  };

  return (
    <main className="w-[85%] mx-auto flex-1 flex flex-col items-center">
      <section className="flex w-full gap-[2em] mt-[2em] max-md:flex-col max-md:items-center">
        <div className="border-solid border-[.313em] border-[#010101] rounded-[.625em] w-fit">
          <Image
            className="rounded-[.25em] h-full"
            src={`/static/images/student${params.id}.jpg`}
            alt="std"
            width={300}
            height={350}
          />
        </div>
        <section className="flex flex-col justify-between">
          <article>
            {student && (
              <>
                <h3 className="text-[2em] font-bold">{student.name}</h3>
                <span className="text-[1.75em]">{student.age} years old</span>
                <p>Likes to study {student.subject}</p>
              </>
            )}
          </article>
          <article className="flex flex-col items-center max-md:my-[2em]">
            <span>Subjects</span>
            <section
              id="grades-section"
              className="grid grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[1em] w-full mt-[1em] place-items-center"
            >
              <Subject name="Science" />
              <Subject name="Math" />
              <Subject name="English" />
              <Subject name="P.E." />
              <Subject name="Finance" />
              <Subject name="History" />
            </section>
          </article>
        </section>
      </section>
      <div className="flex justify-evenly w-full items-center h-full max-md:mb-[2em]">
        <Link href={"/"}>
          <Image
            className="transition-all cursor-pointer hover:scale-[1.1]"
            src={returnImage}
            alt="return"
          />
        </Link>
        <Image
          onClick={handleGrades}
          tabIndex={0}
          className="transition-all cursor-pointer hover:scale-[1.1] hover:mix-blend-color-burn"
          src={checkImage}
          alt="check"
        />
      </div>
    </main>
  );
};

export default Student;
