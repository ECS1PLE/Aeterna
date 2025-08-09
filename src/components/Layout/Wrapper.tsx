interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className }) => {
  return (
    <section className={`max-w-7xl w-screen mx-auto ${className}`}>
      {children}
    </section>
  );
};

export default Wrapper;
