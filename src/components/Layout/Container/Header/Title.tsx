interface ContainerHeaderTitleProps {
  children: React.ReactNode;
  className?:string;
}

const ContainerHeaderTitle: React.FC<ContainerHeaderTitleProps> = ({
  children, className
}) => {
  return <h2 className={`text-white text-3xl leading-7 ${className}`}>{children}</h2>;
};

export default ContainerHeaderTitle;
