import Link from "next/link";

import AwardedStudent from "@/components/AwardedStudent";
import Student from "@/components/Student";

const Home = () => {
  return (
    <main className="w-[95%] mx-auto flex-1 flex flex-col items-center mt-[1em]">
      <h2 className="text-[1.5em]">Effort Awards 2023</h2>
      <section className="border-solid border-[.063em] border-[#010101] w-[85%] mt-[1em] py-[1.75em] rounded-[1.25em] flex justify-around flex-wrap gap-[1em] px-[1em]">
        <AwardedStudent
          firstName="Not"
          lastName="defined yet"
          award="Greatest Effort"
          color="#5BFFD4"
        />
        <AwardedStudent
          firstName="Not"
          lastName="defined yet"
          award="Best Improvement"
          color="#5BFFD4"
        />
        <AwardedStudent
          firstName="Not"
          lastName="defined yet"
          award="Best Behavior"
          color="#5BFFD4"
        />
        <AwardedStudent
          firstName="Not"
          lastName="defined yet"
          award="Best Support"
          color="#5BFFD4"
        />
      </section>
      <div className="w-full bg-[#010101] h-[.063em] mt-[2em]"></div>
      <h2 className="text-[1.5em] mt-[1em]">Students</h2>
      <section className="flex w-[85%] justify-evenly mt-[2em] mb-[1.5em] flex-wrap gap-[1em]">
        <Link href={"/student/1"}>
          <Student
            firstName="John"
            lastName="Doe"
            profile={`/static/images/student1.jpg`}
          />
        </Link>
        <Link href={"/student/2"}>
          <Student
            firstName="Robert"
            lastName="Jones"
            profile={`/static/images/student2.jpg`}
          />
        </Link>
        <Link href={"/student/3"}>
          <Student
            firstName="Charlotte"
            lastName="Smith"
            profile={`/static/images/student3.jpg`}
          />
        </Link>
        <Link href={"/student/4"}>
          <Student
            firstName="Emma"
            lastName="Miller"
            profile={`/static/images/student4.jpg`}
          />
        </Link>
        <Link href={"/student/5"}>
          <Student
            firstName="Chloe"
            lastName="Johnson"
            profile={`/static/images/student5.jpg`}
          />
        </Link>
        <Link href={"/student/6"}>
          <Student
            firstName="Chris"
            lastName="Burton"
            profile={`/static/images/student6.jpg`}
          />
        </Link>
        <Link href={"/student/7"}>
          <Student
            firstName="Michael"
            lastName="Harris"
            profile={`/static/images/student7.jpg`}
          />
        </Link>
        <Link href={"/student/8"}>
          <Student
            firstName="Ashley"
            lastName="Parker"
            profile={`/static/images/student8.jpg`}
          />
        </Link>
        <Link href={"/student/9"}>
          <Student
            firstName="Thomas"
            lastName="Wilson"
            profile={`/static/images/student9.jpg`}
          />
        </Link>
        <Link href={"/student/10"}>
          <Student
            firstName="Mary"
            lastName="Jackson"
            profile={`/static/images/student10.jpg`}
          />
        </Link>
      </section>
    </main>
  );
};

export default Home;
