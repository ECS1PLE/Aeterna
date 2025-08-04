import React from "react";

const Status = () => {
  return (
    <div
      className="
        flex
        border border-neutral-800
        rounded-xl
        bg-gradient-to-r from-[#1A1A1A] to-[#0B0B0B]
        items-center
        px-4
        py-3
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
        Все системы работают безупречно
      </p>
    </div>
  );
};

export default Status;
