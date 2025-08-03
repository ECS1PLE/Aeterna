import Category from "./Category";

interface InfoBlock {
  children?: React.ReactNode;
}

const InfoBlock: React.FC<InfoBlock> = ({ children }) => {
  return (
    <div className="flex flex-col gap-[6px] bg-neutral-950 px-[32px] py-[32px] h-[514px] relative border-b border-neutral-800">
      {children}
    </div>
  );
};

export default InfoBlock;
