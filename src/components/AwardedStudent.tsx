import Image from "next/image";

import noUserImage from "@/assets/images/question.png";

interface Props {
  firstName: string;
  lastName: string;
  award: string;
  color: string;
}

const AwardedStudent = ({
  firstName,
  lastName,
  award,
  color: propColor,
}: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div
        className={`rounded-[.625em] w-[9.375em] h-[11.875em] flex justify-center items-center`}
        style={{
          border: `solid .313em ${firstName !== "Not" ? propColor : "#010101"}`,
        }}
      >
        <Image
          className="rounded-[.25em]"
          src={noUserImage}
          alt={`${firstName} ${lastName}`}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div
        className="flex flex-col gap-[.5em] items-center mt-[1em] text-[${color}]"
        style={{ color: `${firstName !== "Not" ? propColor : "#010101"}` }}
      >
        <h3>{`${firstName} ${lastName}`}</h3>
        <span>{award}</span>
      </div>
    </div>
  );
};

export default AwardedStudent;
