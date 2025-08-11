interface documentText {
  children: React.ReactNode;
}

const DocumentText: React.FC<documentText> = ({ children }) => {
  return (
    <p className="text-lg leading-[1.25] tracking-tighter max-w-full text-neutral-400">
      {children}
    </p>
  );
};

export default DocumentText;
