import React from "react";
import * as LucideIcons from "lucide-react";

interface CategoryProps {
  iconName: keyof typeof LucideIcons;
  children: React.ReactNode;
}

const Category: React.FC<CategoryProps> = ({ iconName, children }) => {
  const IconComponent = LucideIcons[iconName] as unknown as React.FC<
    React.SVGProps<SVGSVGElement>
  >;

  return (
    <div className="flex gap-[6px] items-center w-max">
      {IconComponent ? (
        <IconComponent width={20} height={20} stroke="#404040" />
      ) : null}
      <p
        className="
          font-sans text-sm leading-5 tracking-tight align-middle
          text-neutral-700 text-3xl
        "
      >
        {children}
      </p>
    </div>
  );
};

export default Category;
