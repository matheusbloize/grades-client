"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import checkImage from "@/assets/images/check.svg";
import returnImage from "@/assets/images/return.svg";
import Subject from "@/components/Subject";

const Student = () => {
  const params = useParams();

  return (
    <main className="w-[85%] mx-auto flex-1 flex flex-col items-center">
      <section className="flex w-full gap-[2em] mt-[2em] max-md:flex-col">
        <div className="border-solid border-[.313em] border-[#010101] rounded-[.625em] w-fit">
          <Image
            className="rounded-[.25em]"
            src={`/static/images/student${params.id}.jpg`}
            alt="std"
            width={300}
            height={350}
          />
        </div>
        <section className="flex flex-col justify-between">
          <article>
            <h3 className="text-[2em] font-bold">Jane Doe</h3>
            <span className="text-[1.75em]">18 years old</span>
            <p>Likes to study science</p>
          </article>
          <article className="flex flex-col items-center max-md:my-[2em]">
            <span>Subjects</span>
            <section className="grid grid-cols-6 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 gap-[1em] w-full mt-[1em]">
              <Subject name="Science" />
              <Subject name="Math" />
              <Subject name="English" />
              <Subject name="P.E." />
              <Subject name="Economy" />
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
          className="transition-all cursor-pointer hover:scale-[1.1] hover:mix-blend-color-burn"
          src={checkImage}
          alt="check"
        />
      </div>
    </main>
  );
};

export default Student;
