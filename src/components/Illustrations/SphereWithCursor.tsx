interface SphereWithCursorIllustration {
  className?: string;
}

const SphereWithCursorIllustration: React.FC<SphereWithCursorIllustration> = ({
  className,
}) => {
  return (
    <svg
      width="206"
      height="514"
      viewBox="0 0 206 514"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <ellipse
        opacity="0.1"
        cx="657.501"
        cy="468.852"
        rx="657.5"
        ry="745.852"
        fill="url(#paint0_radial_2481_5276)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2481_5276"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(657.501 468.852) rotate(90) scale(745.852 657.5)"
        >
          <stop stop-color="#0080FF" />
          <stop offset="1" stop-color="#0080FF" stop-opacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default SphereWithCursorIllustration;
