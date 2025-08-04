interface ContainerHeaderProps {
  children: React.ReactNode;
}

const ContainerHeader: React.FC<ContainerHeaderProps> = ({ children }) => {
  return <section className="flex flex-col gap-1.5">{children}</section>;
};

export default ContainerHeader;
