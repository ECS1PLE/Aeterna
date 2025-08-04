interface ContainerWrapperProps {
  children: React.ReactNode;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ children }) => {
  return <div className="p-8">{children}</div>;
};

export default ContainerWrapper;
