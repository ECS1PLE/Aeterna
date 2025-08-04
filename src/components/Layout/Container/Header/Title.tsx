interface ContainerHeaderTitleProps {
  children: React.ReactNode;
}

const ContainerHeaderTitle: React.FC<ContainerHeaderTitleProps> = ({
  children,
}) => {
  return <h2 className="text-white text-3xl leading-7">{children}</h2>;
};

export default ContainerHeaderTitle;
