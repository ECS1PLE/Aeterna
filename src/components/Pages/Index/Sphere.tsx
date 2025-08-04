const Sphere = () => {
  return (
    <svg
      width="960"
      height="1089"
      viewBox="0 0 960 1089"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        opacity="0.1"
        cx="480"
        cy="544.5"
        rx="480"
        ry="544.5"
        fill="url(#paint0_radial_2026_280)"
      />
      <defs>
        <radialGradient
          id="paint0_radial_2026_280"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(480 544.5) rotate(90) scale(544.5 480)"
        >
          <stop stopColor="#0080FF" />
          <stop offset="1" stopColor="#0080FF" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Sphere;
