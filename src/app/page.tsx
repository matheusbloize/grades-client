import AwardedStudent from "@/components/AwardedStudent";
import Student from "@/components/Student";

const Home = () => {
  return (
    <main className="w-[95%] mx-auto flex-1 flex flex-col items-center mt-[1em]">
      <h2 className="text-[1.5em]">Effort Awards 2023</h2>
      <div className="border-solid border-[.063em] border-[#010101] w-[85%] mt-[1em] py-[1.75em] rounded-[1.25em] flex justify-around flex-wrap gap-[1em] px-[1em]">
        <AwardedStudent />
        <AwardedStudent />
        <AwardedStudent />
        <AwardedStudent />
      </div>
      <div className="w-full bg-[#010101] h-[.063em] mt-[2em]"></div>
      <div className="flex w-[85%] justify-evenly mt-[2em] mb-[1.5em] flex-wrap gap-[1em]">
        <Student />
        <Student />
        <Student />
        <Student />
        <Student />
      </div>
    </main>
  );
};

export default Home;
