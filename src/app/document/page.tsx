import Banner from "@/components/Banner";
import BannerFooter from "@/components/Banner/Footer";
import BannerText from "@/components/Banner/Text";
import BannerTitle from "@/components/Banner/Title";
import UIButton from "@/components/Ui/Button";
import { Rocket } from "lucide-react";

const document = () => {
  return (
    <div className="flex items-center justify-center h-[720px]">
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
      </Banner>
    </div>
  );
};

export default document;
