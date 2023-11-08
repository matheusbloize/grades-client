interface Props {
  name: string;
}

const Subject = ({ name }: Props) => {
  return (
    <div className="flex flex-col items-center border-solid border-[.063em] border-[#010101] border-t-0 border-l-0 border-r-0">
      <div className="border-solid border-[.063em] border-[#010101] border-t-[.063em] w-fit px-[.5em] rounded-[2em]">
        {name}
      </div>
      <div>
        <span>--</span>
      </div>
    </div>
  );
};

export default Subject;
