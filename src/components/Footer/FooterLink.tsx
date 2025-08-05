import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface FooterLinkProps {
  href?: string;
  children: React.ReactNode;
  type?: "mail" | "phone";
  value?: string;
  isExternal?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({
  children,
  type,
  value,
  isExternal = false,
}) => {
  const href = type === "mail" ? `mailto:${value}` : `tel:${value}`;

  return (
    <Link
      href={href}
      className="
        flex items-center
        gap-2
        tracking-[-0.4px]
        text-[#525252]
        hover:text-white
        transition-colors duration-200
        z-10
      "
    >
      {children}
      {isExternal && <ExternalLink size={14} className="inline-block" />}
    </Link>
  );
};

export default FooterLink;
