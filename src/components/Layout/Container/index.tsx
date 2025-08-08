interface Container {
  children: React.ReactNode;
}

const Container: React.FC<Container> = ({ children }) => {
  return (
    <section className="w-full border-t border-x border-solid border-neutral-800 relative">
      {children}
    </section>
  );
};

export default Container;
