interface Props {
  name: string;
}

const Subject = ({ name }: Props) => {
  return (
    <div className="flex flex-col items-center border-solid border-[.063em] border-[#010101] border-t-0 border-l-0 border-r-0 w-[7vw] max-lg:w-[15vw] max-md:w-fit">
      <div className="border-solid border-[.063em] border-[#010101] border-t-[.063em] px-[.5em] rounded-[2em]">
        {name}
      </div>
      <input
        type="number"
        min={0}
        max={10}
        className="w-full outline-none text-center"
      />
    </div>
  );
};

export default Subject;
