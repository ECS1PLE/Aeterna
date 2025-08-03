interface IndexInterface {
  children: React.ReactNode;
}

const BannerTitle: React.FC<IndexInterface> = ({ children }) => {
  return (
    <h2
      className="
        font-medium
        text-5xl
        leading-5xl
        text-white
        max-w-[499px]
        text-center
      "
    >
      {children}
    </h2>
  );
};

export default BannerTitle;
