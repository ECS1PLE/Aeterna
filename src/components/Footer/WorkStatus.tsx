import React from "react";

interface WorkStatusProps {
  text: string;
}

const WorkStatus: React.FC<WorkStatusProps> = ({ text }) => {
  return (
    <div
      className="
        flex
        border border-[#262626]
        rounded-[12px]
        bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B]
        items-center
        p-4
        gap-2
        w-max
      "
    >
      <span
        className="
          flex-none
          w-2 h-2
          rounded-full
          bg-[#47FF53]
          shadow-[0_0_8px_#47FF53]
          -scale-y-100
        "
      />
      <p className="text-[14px] leading-[16px] tracking-[-0.4px] text-[#FAFAFA]">
        {text}
      </p>
    </div>
  );
};

export default WorkStatus;
