import Image from "next/image";
import Link from "next/link";

import logoImage from "@/assets/images/logo.svg";
import teacherImage from "@/assets/images/teacher.svg";

const Header = () => {
  return (
    <header className="flex justify-between w-[95%] mx-auto mt-[1em] max-md:flex-col">
      <Link href={"/"} className="flex flex-col items-center">
        <Image src={logoImage} alt="school logo" />
        <h1 className="font-bold text-[1.2em]">Great Brain School</h1>
      </Link>
      <div className="flex items-end gap-[1.5em]">
        <Image src={teacherImage} alt="teacher" />
        <div className="font-bold">
          <h3 className="text-[1.2em]">John Doe</h3>
          <span className="text-[#333333]">Teacher</span>
        </div>
        <div className="flex justify-center border-solid border-[.063em] border-[#010101] rounded-[.938em] transition-all cursor-pointer hover:scale-[1.1]">
          <span className="px-[1em] text-[.8em]">logout</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
