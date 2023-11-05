import Image from "next/image";

import image from "@/assets/images/teacher.svg";

const Student = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-solid border-[.313em] border-[#010101] rounded-[.625em] w-[9.375em] h-[11.875em]">
        <Image className="w-full h-full" src={image} alt="image" />
      </div>
      <div className="flex flex-col gap-[.5em] items-center mt-[1em]">
        <h3>John Doe</h3>
      </div>
    </div>
  );
};

export default Student;
