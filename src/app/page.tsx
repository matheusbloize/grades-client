import student1Image from "@/assets/images/student1.jpg";
import student10Image from "@/assets/images/student10.jpg";
import student2Image from "@/assets/images/student2.jpg";
import student3Image from "@/assets/images/student3.jpg";
import student4Image from "@/assets/images/student4.jpg";
import student5Image from "@/assets/images/student5.jpg";
import student6Image from "@/assets/images/student6.jpg";
import student7Image from "@/assets/images/student7.jpg";
import student8Image from "@/assets/images/student8.jpg";
import student9Image from "@/assets/images/student9.jpg";
import AwardedStudent from "@/components/AwardedStudent";
import Student from "@/components/Student";

const Home = () => {
  return (
    <main className="w-[95%] mx-auto flex-1 flex flex-col items-center mt-[1em]">
      <h2 className="text-[1.5em]">Effort Awards 2023</h2>
      <div className="border-solid border-[.063em] border-[#010101] w-[85%] mt-[1em] py-[1.75em] rounded-[1.25em] flex justify-around flex-wrap gap-[1em] px-[1em]">
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
      </div>
      <div className="w-full bg-[#010101] h-[.063em] mt-[2em]"></div>
      <h2 className="text-[1.5em] mt-[1em]">Students</h2>
      <div className="flex w-[85%] justify-evenly mt-[2em] mb-[1.5em] flex-wrap gap-[1em]">
        <Student firstName="John" lastName="Doe" profile={student1Image} />
        <Student firstName="Robert" lastName="Jones" profile={student2Image} />
        <Student
          firstName="Charlotte"
          lastName="Smith"
          profile={student3Image}
        />
        <Student firstName="Emma" lastName="Miller" profile={student4Image} />
        <Student firstName="Chloe" lastName="Johnson" profile={student5Image} />
        <Student firstName="Chris" lastName="Burton" profile={student6Image} />
        <Student
          firstName="Michael"
          lastName="Harris"
          profile={student7Image}
        />
        <Student firstName="Ashley" lastName="Parker" profile={student8Image} />
        <Student firstName="Thomas" lastName="Wilson" profile={student9Image} />
        <Student firstName="Mary" lastName="Jackson" profile={student10Image} />
      </div>
    </main>
  );
};

export default Home;
