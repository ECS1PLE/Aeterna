interface headerText {
  children: React.ReactNode;
}

const HeaderDocumentText: React.FC<headerText> = ({ children }) => {
  return (
    <h2 className="font-sans font-medium text-5xl text-white tracking-[-2.8px] max-w-full">
      {children}
    </h2>
  );
};

export default HeaderDocumentText;
