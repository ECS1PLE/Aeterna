interface ContainerWrapperProps {
  children: React.ReactNode;
  className?:string;
}

const ContainerWrapper: React.FC<ContainerWrapperProps> = ({ children,className }) => {
  return <div className={`p-8 ${className}`}>{children}</div>;
};

export default ContainerWrapper;
