import Banner from "@/components/Banner";
import BannerFooter from "@/components/Banner/Footer";
import BannerText from "@/components/Banner/Text";
import BannerTitle from "@/components/Banner/Title";
import BigBrand from "@/components/BigBrand";
import UIButton from "@/components/Ui/Button";
import { Rocket } from "lucide-react";
import BannerBorder from "@/components/Illustrations/BannerBorder";

interface BottomBanner {
  showBottomLogo: boolean;
  showBorderSvg:boolean;
  FirstButtom?: string;
  SecondButton?:string;
  icon?: React.ReactNode; 
}

const BottomBanner = ({ showBottomLogo = true, showBorderSvg = false, FirstButton = "Газ", 
  SecondButton = "Войти в аккаунт", icon=<Rocket /> }) => {
  return (
    <div className={`flex items-center justify-center h-[514px] relative ${showBorderSvg && ("h-[786px]")}`}>
      {showBorderSvg && (<BannerBorder className="w-[100%] h-[100%] sm:w-[1280px] sm:h-[auto]" />)}
      <Banner>
        <BannerTitle>Волки используют Aetérna</BannerTitle>
        <BannerText>
          А ты бездарь, до сих пор платишь бездарям фронтендерам за работу. Не
          будь лохом, и используй наш сервис
        </BannerText>
        <BannerFooter>
          {FirstButton && (<UIButton color="white" icon={icon}>
            {FirstButton}
          </UIButton>) }
          {SecondButton && (<UIButton color="transparent">{SecondButton}</UIButton>)}
        </BannerFooter>
        {showBottomLogo && (
          <BigBrand className="absolute bottom-0 -z-1 w-screen sm:w-[1385px] sm:h-[319px]" />
        )}
      </Banner>
    </div>
  );
};

export default BottomBanner;
