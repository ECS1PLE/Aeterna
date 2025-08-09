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
  href,
  isExternal = false,
}) => {
  const linkHref =
    href ||
    (type && value
      ? type === "mail"
        ? `mailto:${value}`
        : `tel:${value}`
      : undefined);

  return linkHref ? (
    <Link
      href={linkHref}
      className="
        flex items-center
        gap-2
        tracking-[-0.4px]
        text-[#525252]
        hover:text-white
        transition-colors duration-200
        z-10
        whitespace-nowrap
      "
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
      {isExternal && <ExternalLink size={14} className="inline-block" />}
    </Link>
  ) : (
    <span className="flex items-center gap-2 tracking-[-0.4px] text-[#525252] z-10 whitespace-nowrap">
      {children}
    </span>
  );
};

export default FooterLink;
