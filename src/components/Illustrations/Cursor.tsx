interface CursorIllustrationProps {
  className?: string;
}

const CursorIllustration: React.FC<CursorIllustrationProps> = ({
  className,
}) => {
  return (
    <svg
      width="12"
      height="15"
      viewBox="0 0 12 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M0.582031 2.46387C0.537634 1.12124 2.14536 0.401444 3.11719 1.3291L10.8271 8.68945C11.7554 9.57554 11.2108 11.0842 10.0352 11.3359C7.21522 11.9396 5.53532 12.9343 3.26465 14.4307C2.28842 15.074 0.979605 14.4067 0.94043 13.2324L0.582031 2.46387Z"
        fill="url(#paint0_linear_2481_5281)"
        stroke="black"
      />
      <defs>
        <linearGradient
          id="paint0_linear_2481_5281"
          x1="1"
          y1="2"
          x2="11"
          y2="10"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="white" />
          <stop offset="1" stop-color="#C0C0C0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CursorIllustration;
