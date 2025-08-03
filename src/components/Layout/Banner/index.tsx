import React from "react";

interface IndexBlockProps {
  children: React.ReactNode;
}

const IndexBlock: React.FC<IndexBlockProps> = ({ children }) => {
  return (
    <div className="relative w-full overflow-hidden р-[600px]">
      <div className="absolute inset-0 pointer-events-none">
        {/* Вертикальные полоски */}
        <div className="absolute inset-0 grid grid-cols-10 border-r border-neutral-800">
          {[...Array(10)].map((_, i) => (
            <div key={`v-${i}`} className="border-l border-neutral-800" />
          ))}
        </div>

        {/* Горизонтальные полоски */}
        <div className="absolute inset-0 grid grid-rows-8">
          {[...Array(9)].map((_, i) => (
            <div key={`h-${i}`} className="border-t border-neutral-800" />
          ))}
        </div>
      </div>

      {/* Контент поверх */}
      <div className="relative z-10 items-center flex flex-col gap-6 py-[252px]">
        {children}
      </div>
    </div>
  );
};

export default IndexBlock;
