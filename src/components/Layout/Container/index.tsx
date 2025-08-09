interface ContainerProps {
  children: React.ReactNode;
  borderTop?: boolean;
  borderLeft?: boolean;
  borderRight?: boolean;
  borderBottom?: boolean;
  background?: string;
}

const Container: React.FC<ContainerProps> = ({
  children,
  borderTop = true,
  borderLeft = true,
  borderRight = true,
  borderBottom = true,
  background,
}) => {
  const classes = [
    "w-full",
    borderTop ? "border-t" : "",
    borderLeft ? "border-l" : "",
    borderRight ? "border-r" : "",
    borderBottom ? "border-b" : "",
    "border-solid border-neutral-800",
  ].join(" ");

  return (
    <section className={classes} style={{ background }}>
      {" "}
      {/* Применяем фон */}
      {children}
    </section>
  );
};

export default Container;
