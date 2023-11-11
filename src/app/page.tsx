"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import trophyImage from "@/assets/images/trophy.svg";
import AwardedStudent from "@/components/AwardedStudent";
import Student from "@/components/Student";
import { useAwardContext } from "@/hooks/useAwardContext";
import { useGradeContext } from "@/hooks/useGradeContext";

const Home = () => {
  const { awardedStudents, setAwardedStudents } = useAwardContext();
  const { studentGrade } = useGradeContext();
  const [actualStudent, setActualStudent] = useState<HTMLDivElement | null>(
    null,
  );
  const [render] = useState(true);
  let feedback: "#4aff7b" | "#f12815" | "#010101";

  const checkFirstVisit = () => {
    if (window && window.sessionStorage) {
      if (sessionStorage.getItem("was_visited")) {
        return;
      }
      sessionStorage.setItem("was_visited", "1");
    }
  };

  useEffect(() => {
    if (document.getElementById(`draggable-student-1`)) {
      for (let i = 0; i < 10; i++) {
        document
          .getElementById(`draggable-student-${i + 1}`)!
          .children[0].classList.add("drag");
      }
      checkFirstVisit();
      if (
        document.getElementById("modal") &&
        document.getElementById("modal")!.style.display === "none"
      ) {
        document.body.style.overflowY = "auto";
      }
    }
    scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  const handleFeedback = (position: number) => {
    switch (position) {
      case 1:
        if (studentGrade.student1.addedByTeacher) {
          studentGrade.student1.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 2:
        if (studentGrade.student2.addedByTeacher) {
          studentGrade.student2.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 3:
        if (studentGrade.student3.addedByTeacher) {
          studentGrade.student3.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 4:
        if (studentGrade.student4.addedByTeacher) {
          studentGrade.student4.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 5:
        if (studentGrade.student5.addedByTeacher) {
          studentGrade.student5.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 6:
        if (studentGrade.student6.addedByTeacher) {
          studentGrade.student6.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 7:
        if (studentGrade.student7.addedByTeacher) {
          studentGrade.student7.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 8:
        if (studentGrade.student8.addedByTeacher) {
          studentGrade.student8.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 9:
        if (studentGrade.student9.addedByTeacher) {
          studentGrade.student9.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      case 10:
        if (studentGrade.student10.addedByTeacher) {
          studentGrade.student10.averageGrade >= 8
            ? (feedback = "#4aff7b")
            : (feedback = "#f12815");
        } else {
          feedback = "#010101";
        }
        break;
      default:
        break;
    }
    return feedback!;
  };

  const handleModal = (e: React.MouseEvent) => {
    const currentTarget = e.currentTarget as HTMLDivElement;
    currentTarget.style.display = "none";
    document.body.style.overflowY = "auto";
  };

  return (
    <main className="w-[95%] mx-auto flex-1 flex flex-col items-center mt-[1em]">
      <div
        id="modal"
        onClick={handleModal}
        className="absolute w-full h-full bg-[#010101e0] top-0 left-0 items-center text-[#f1f1f1] p-[20%] text-[1.2em] flex-col max-md:text-[.8em]"
        style={{
          display:
            render &&
            typeof window !== "undefined" &&
            window.sessionStorage &&
            sessionStorage.getItem("was_visited")
              ? "none"
              : "flex",
        }}
      >
        <span className="text-[2em] max-md:text-[1.2em]">
          Hello, Mr. John Doe.
        </span>
        The vacations are coming, finish your activities and start your
        long-awaited vacation.
        <ul className="list-decimal">
          <li className="my-[1em]">
            Choose the winners of the Effort Awards 2023 drag and dropping into
            the right area, remember that you can repeat the student.
          </li>
          <li>
            Enter each student&apos;s grades, if their grade average is above 8
            they will receive a green border for passing, if they fail it will
            be red. Those with a black border don&apos;t have notes yet, add
            them.
          </li>
        </ul>
        <span className="animate-pulse">Click anywhere to close</span>
      </div>
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
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/2"}>
          <Student
            firstName="Robert"
            lastName="Jones"
            profile={`/static/images/student2.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={2}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/3"}>
          <Student
            firstName="Charlotte"
            lastName="Smith"
            profile={`/static/images/student3.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={3}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/4"}>
          <Student
            firstName="Emma"
            lastName="Miller"
            profile={`/static/images/student4.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={4}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/5"}>
          <Student
            firstName="Chloe"
            lastName="Johnson"
            profile={`/static/images/student5.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={5}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/6"}>
          <Student
            firstName="Chris"
            lastName="Burton"
            profile={`/static/images/student6.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={6}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/7"}>
          <Student
            firstName="Michael"
            lastName="Harris"
            profile={`/static/images/student7.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={7}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/8"}>
          <Student
            firstName="Ashley"
            lastName="Parker"
            profile={`/static/images/student8.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={8}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/9"}>
          <Student
            firstName="Thomas"
            lastName="Wilson"
            profile={`/static/images/student9.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={9}
            contextFunction={handleFeedback}
          />
        </Link>
        <Link href={"/student/10"}>
          <Student
            firstName="Mary"
            lastName="Jackson"
            profile={`/static/images/student10.jpg`}
            setActualStudent={setActualStudent}
            studentPosition={10}
            contextFunction={handleFeedback}
          />
        </Link>
      </section>
    </main>
  );
};

export default Home;
