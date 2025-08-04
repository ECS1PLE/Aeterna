interface BannerFooterProps {
  children: React.ReactNode;
}

const BannerFooter: React.FC<BannerFooterProps> = ({ children }) => {
  return <section className="flex gap-3 items-center">{children}</section>;
};

export default BannerFooter;
