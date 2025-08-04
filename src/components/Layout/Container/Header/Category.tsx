interface ContainerHeaderCategoryProps {
  text: React.ReactNode;
  icon: React.ReactNode;
}

const ContainerHeaderCategory: React.FC<ContainerHeaderCategoryProps> = ({
  icon,
  text,
}) => {
  return (
    <section className="flex gap-1.5 items-center">
      <div className="*:w-5 *:h-5 *:text-neutral-700">{icon}</div>
      <p className="text-neutral-700 text-sm">{text}</p>
    </section>
  );
};

export default ContainerHeaderCategory;
