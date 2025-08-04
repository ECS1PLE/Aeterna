interface Container {
  children: React.ReactNode;
}

const Container: React.FC<Container> = ({ children }) => {
  return (
    <div className="relative w-full border-l border-r border-[1px] border-solid border-neutral-800">
      {children}
    </div>
  );
};

export default Container;
