interface FaqSubtitle {
  children?: React.ReactNode;
}

const FaqSubtitle: React.FC<FaqSubtitle> = ({ children }) => {
  return (
    <h2 className="font-sans font-normal text-2xl text-neutral-50 leading-8 tracking-tight">
      {children}
    </h2>
  );
};

export default FaqSubtitle;
