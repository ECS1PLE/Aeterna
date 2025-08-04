interface BannerProps {
  children: React.ReactNode;
}

const Banner: React.FC<BannerProps> = ({ children }) => {
  return (
    <section className="flex flex-col gap-6 items-center w-max">
      {children}
    </section>
  );
};

export default Banner;
