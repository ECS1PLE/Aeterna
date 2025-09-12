"use client";

import Banner from "@/components/Banner";
import BannerFooter from "@/components/Banner/Footer";
import BannerText from "@/components/Banner/Text";
import BannerTitle from "@/components/Banner/Title";
import BigBrand from "@/components/BigBrand";
import UIButton from "@/components/Ui/Button";
import { Rocket } from "lucide-react";
import BannerBorder from "@/components/Illustrations/BannerBorder";
import { useEffect, useState } from "react";
import MobileBannerBottomIllustration from "@/components/Illustrations/MobileBannerBottom";
import Link from "next/link";

interface BottomBanner {
  showBottomLogo?: boolean;
  showBorderSvg?: boolean;
  FirstButton?: string;
  SecondButton?: string;
  icon?: React.ReactElement;
  className?: string;
  title?: string;
  text?: string;
}

const BottomBanner: React.FC<BottomBanner> = ({
  showBottomLogo = true,
  showBorderSvg = false,
  FirstButton = "Газ",
  SecondButton = "Войти в аккаунт",
  icon = <Rocket />,
  className,
  title = "Волки используют Aetérna",
  text = "А ты бездарь, до сих пор платишь бездарям фронтендерам за работу. Не будь лохом, и используй наш сервис",
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`flex items-center justify-center h-[514px] relative ${
        showBorderSvg && "h-[786px]"
      } ${className}`}
    >
      {showBorderSvg && !isMobile && (
        <BannerBorder className="w-screen h-[786px] sm:w-[1280px] sm:h-[auto]" />
      )}
      {showBorderSvg && isMobile && (
        <MobileBannerBottomIllustration className="absolute w-screen -z-[1]" />
      )}
      <Banner>
        <BannerTitle>{title}</BannerTitle>
        <BannerText>{text}</BannerText>
        <BannerFooter>
          {FirstButton && (
            <UIButton color="white" icon={icon}>
              {FirstButton}
            </UIButton>
          )}
          <Link href="https://aeterna-sso.vercel.app">
            {SecondButton && (
              <UIButton color="transparent">{SecondButton}</UIButton>
            )}
          </Link>
        </BannerFooter>
        {showBottomLogo && (
          <BigBrand className="absolute bottom-0 -z-1 w-screen sm:w-[1385px] sm:h-[319px]" />
        )}
      </Banner>
    </div>
  );
};

export default BottomBanner;
