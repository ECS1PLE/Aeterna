interface Wrapper {
  children: React.ReactNode;
}

const Wrapper: React.FC<Wrapper> = ({ children }) => {
  return <section className="max-w-7xl w-screen mx-auto">{children}</section>;
};

export default Wrapper;
