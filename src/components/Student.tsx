import Image, { StaticImageData } from "next/image";

interface Props {
  firstName: string;
  lastName: string;
  profile: StaticImageData;
}

const Student = ({ firstName, lastName, profile }: Props) => {
  return (
    <div className="flex flex-col items-center">
      <div className="border-solid border-[.313em] border-[#010101] rounded-[.625em] w-[9.375em] h-[11.875em]">
        <Image
          className="rounded-[.25em]"
          src={profile}
          alt={`${firstName} ${lastName}`}
          width={0}
          height={0}
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="flex flex-col gap-[.5em] items-center mt-[1em]">
        <h3>{`${firstName} ${lastName}`}</h3>
      </div>
    </div>
  );
};

export default Student;
