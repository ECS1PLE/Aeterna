import React, { ReactNode } from "react";

interface SectionWithDashedProps {
  children: ReactNode;
  twoCol?: boolean;
  dividerY?: string;
  isLast?: boolean;
  centerGap?: number;
  mtop?: number;
}

const SectionWithDashed: React.FC<SectionWithDashedProps> = ({
  children,
  twoCol = false,
  dividerY,
  isLast = false,
  centerGap = 40,
  mtop = 0,
}) => {
  const top = dividerY ?? (twoCol ? "50%" : "100%");
  const childrenArray = React.Children.toArray(children);
  const gapHalf = Math.round(centerGap / 2);

  return (
    <section
      className={`relative w-full flex flex-col ${
        twoCol ? "md:flex-row md:items-stretch" : ""
      }`}
    >
      {twoCol ? (
        childrenArray.map((child, i) => (
          <div key={i} className="relative z-10 flex-1">
            {child}
            {i !== childrenArray.length - 1 && (
              <div
                className="hidden md:block absolute bottom-0 left-0 right-0 border-t border-dashed border-[#262626]"
                style={{ height: 1 }}
                aria-hidden="true"
              />
            )}
          </div>
        ))
      ) : (
        <div className="relative z-10 w-full">
          {childrenArray.map((child, i) => (
            <div key={i} className="relative w-full">
              {child}
              {i !== childrenArray.length - 1 && (
                <div
                  className="hidden md:block border-t border-dashed border-[#262626] mt-6"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      )}
      <div
        className="hidden md:block absolute"
        style={{
          top,
          left: "50%",
          width: "100vw",
          transform: "translateX(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {isLast ? (
          <>
            <div
              style={{
                position: "absolute",
                left: 0,
                width: `max(0px, calc(50vw - ${gapHalf}px))`,
                height: 1,
                borderTop: "1px dashed #262626",
                top: `${mtop}px`,
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                width: `max(0px, calc(50vw - ${gapHalf}px))`,
                height: 1,
                borderTop: "1px dashed #262626",
                top: `${mtop}px`,
              }}
            />
          </>
        ) : (
          <div
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              top: 0,
              height: 1,
              borderTop: "1px dashed #262626",
              transform: "translateY(-50%)",
            }}
          />
        )}
      </div>
    </section>
  );
};

export default SectionWithDashed;
