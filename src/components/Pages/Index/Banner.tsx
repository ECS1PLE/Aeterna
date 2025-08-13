import Banner from "@/components/Banner";
import BannerFooter from "@/components/Banner/Footer";
import BannerText from "@/components/Banner/Text";
import BannerTitle from "@/components/Banner/Title";
import BigBrand from "@/components/BigBrand";
import UIButton from "@/components/Ui/Button";
import { Rocket } from "lucide-react";

const BottomBanner = () => {
  return (
    <div className="flex items-center justify-center h-[514px] relative">
      <Banner>
        <BannerTitle>Волки используют Aetérna</BannerTitle>
        <BannerText>
          А ты бездарь, до сих пор платишь бездарям фронтендерам за работу. Не
          будь лохом, и используй наш сервис
        </BannerText>
        <BannerFooter>
          <UIButton color="white" icon={<Rocket />}>
            Газ
          </UIButton>
          <UIButton color="transparent">Войти в аккаунт</UIButton>
        </BannerFooter>
        <BigBrand className="absolute bottom-0 -z-1 w-screen sm:w-[1385px] sm:h-[319px]" />
      </Banner>
    </div>
  );
};

export default BottomBanner;
