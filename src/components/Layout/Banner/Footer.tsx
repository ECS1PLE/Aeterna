interface IndexFooter {
  children: React.ReactNode;
}

const IndexFooter: React.FC<IndexFooter> = ({ children }) => {
  return <div className="flex gap-3">{children}</div>;
};

export default IndexFooter;
