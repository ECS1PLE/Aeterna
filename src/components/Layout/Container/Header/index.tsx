interface ContainerHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const ContainerHeader: React.FC<ContainerHeaderProps> = ({
  children,
  className,
}) => {
  return (
    <section className={`flex flex-col gap-1.5 ${className}`}>
      {children}
    </section>
  );
};

export default ContainerHeader;
