interface FAQ {
  children: React.ReactNode;
}

const MainBlockFAQ: React.FC<FAQ> = ({ children }) => {
  return <section className="flex flex-col gap-2">{children}</section>;
};

export default MainBlockFAQ;
