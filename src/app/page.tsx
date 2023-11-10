"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import trophyImage from "@/assets/images/trophy.svg";
import AwardedStudent from "@/components/AwardedStudent";
import Student from "@/components/Student";
import { useAwardContext } from "@/hooks/useAwardContext";

const Home = () => {
  const { awardedStudents, setAwardedStudents } = useAwardContext();
  const [actualStudent, setActualStudent] = useState<HTMLDivElement | null>(
    null,
  );

  useEffect(() => {
    if (document.getElementById(`draggable-student-1`)) {
      for (let i = 0; i < 10; i++) {
        document
          .getElementById(`draggable-student-${i + 1}`)!
          .children[0].classList.add("drag");
      }
    }
  }, []);

  const handleAwardedContext = (
    name: string,
    photo: string,
    color: string,
    position: number,
  ) => {
    switch (position) {
      case 1:
        setAwardedStudents({
          ...awardedStudents,
          award1: { name, photo, color },
        });
        break;
      case 2:
        setAwardedStudents({
          ...awardedStudents,
          award2: { name, photo, color },
        });
        break;
      case 3:
        setAwardedStudents({
          ...awardedStudents,
          award3: { name, photo, color },
        });
        break;
      case 4:
        setAwardedStudents({
          ...awardedStudents,
          award4: { name, photo, color },
        });
        break;
      default:
        break;
    }
  };

  return (
    <main className="w-[95%] mx-auto flex-1 flex flex-col items-center mt-[1em]">
      <div className="flex items-center">
        <Image src={trophyImage} alt="trophy" />
        <h2 className="text-[1.5em]">Effort Awards 2023</h2>
        <Image src={trophyImage} alt="trophy" />
      </div>
      <section className="border-solid border-[.063em] border-[#010101] w-[85%] mt-[1em] py-[1.75em] rounded-[1.25em] flex justify-around flex-wrap gap-[1em] px-[1em]">
        <AwardedStudent
          name={awardedStudents.award1!.name}
          photo={awardedStudents.award1!.photo}
          award="Greatest Effort"
          color={awardedStudents.award1!.color}
          actualStudent={actualStudent}
          awardPosition={1}
          contextFunction={handleAwardedContext}
        />
        <AwardedStudent
          name={awardedStudents.award2!.name}
          photo={awardedStudents.award2!.photo}
          award="Best Improvement"
          color={awardedStudents.award2!.color}
          actualStudent={actualStudent}
          awardPosition={2}
          contextFunction={handleAwardedContext}
        />
        <AwardedStudent
          name={awardedStudents.award3!.name}
          photo={awardedStudents.award3!.photo}
          award="Best Behavior"
          color={awardedStudents.award3!.color}
          actualStudent={actualStudent}
          awardPosition={3}
          contextFunction={handleAwardedContext}
        />
        <AwardedStudent
          name={awardedStudents.award4!.name}
          photo={awardedStudents.award4!.photo}
          award="Best Support"
          color={awardedStudents.award4!.color}
          actualStudent={actualStudent}
          awardPosition={4}
          contextFunction={handleAwardedContext}
        />
      </section>
      <div className="w-full bg-[#010101] h-[.063em] mt-[2em]"></div>
      <h2 className="text-[1.5em] mt-[1em]">Students</h2>
      <section className="flex w-[85%] justify-evenly mt-[2em] mb-[1.5em] flex-wrap gap-[1em]">
        <Link href={"/student/1"}>
          <Student
            firstName="Eddie"
            lastName="Scott"
            profile={`/static/images/student1.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={1}
          />
        </Link>
        <Link href={"/student/2"}>
          <Student
            firstName="Robert"
            lastName="Jones"
            profile={`/static/images/student2.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={2}
          />
        </Link>
        <Link href={"/student/3"}>
          <Student
            firstName="Charlotte"
            lastName="Smith"
            profile={`/static/images/student3.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={3}
          />
        </Link>
        <Link href={"/student/4"}>
          <Student
            firstName="Emma"
            lastName="Miller"
            profile={`/static/images/student4.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={4}
          />
        </Link>
        <Link href={"/student/5"}>
          <Student
            firstName="Chloe"
            lastName="Johnson"
            profile={`/static/images/student5.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={5}
          />
        </Link>
        <Link href={"/student/6"}>
          <Student
            firstName="Chris"
            lastName="Burton"
            profile={`/static/images/student6.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={6}
          />
        </Link>
        <Link href={"/student/7"}>
          <Student
            firstName="Michael"
            lastName="Harris"
            profile={`/static/images/student7.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={7}
          />
        </Link>
        <Link href={"/student/8"}>
          <Student
            firstName="Ashley"
            lastName="Parker"
            profile={`/static/images/student8.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={8}
          />
        </Link>
        <Link href={"/student/9"}>
          <Student
            firstName="Thomas"
            lastName="Wilson"
            profile={`/static/images/student9.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={9}
          />
        </Link>
        <Link href={"/student/10"}>
          <Student
            firstName="Mary"
            lastName="Jackson"
            profile={`/static/images/student10.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={10}
          />
        </Link>
      </section>
    </main>
  );
};

export default Home;
