import Image from "next/image";

interface Props {
  profile: string;
  firstName: string;
  lastName: string;
}

const StudentPhoto = ({ profile, firstName, lastName }: Props) => {
  return (
    <Image
      className="rounded-[.25em]"
      src={profile}
      alt={`${firstName} ${lastName}`}
      width={140}
      height={180}
      style={{ width: "100%", height: "100%" }}
    />
  );
};

export default StudentPhoto;
