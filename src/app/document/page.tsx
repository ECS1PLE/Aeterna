import Banner from "@/components/Banner";
import BannerFooter from "@/components/Banner/Footer";
import BannerText from "@/components/Banner/Text";
import BannerTitle from "@/components/Banner/Title";
import Wrapper from "@/components/Layout/Wrapper";
import UIButton from "@/components/Ui/Button";
import { Rocket } from "lucide-react";
import DocumentPage from "@/components/documents";

const document = () => {
  return (
    <Wrapper>
      <DocumentPage />
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
    </Wrapper>
  );
};

export default document;
