import Link from "next/link";

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} passHref legacyBehavior>
      <a
        className="
          tracking-[-0.4px]
          text-[#525252]
          hover:text-white
          transition-colors duration-200
          z-10
        "
      >
        {children}
      </a>
    </Link>
  );
};

export default FooterLink;
