import Wrapper from "@/components/Layout/Wrapper";
import SectionWithDashed from "@/components/Layout/SectionWithDashed";
import IndexMain from "@/components/Pages/Index/Main";
import IndexEditor from "@/components/Pages/Index/Editor";
import IndexAutoAPI from "@/components/Pages/Index/AutoAPI";
import IndexQuestion from "@/components/Pages/Index/Question";
import IndexPublish from "@/components/Pages/Index/Publish";
import BannerText from "@/components/Banner/Text";
import BannerTitle from "@/components/Banner/Title";
import UIButton from "@/components/Ui/Button";
import Banner from "@/components/Banner";
import BannerFooter from "@/components/Banner/Footer";
import { Rocket } from "lucide-react";
import BigBrand from "@/components/BigBrand";

export default function Home() {
  return (
    <>
      <Wrapper>
        <SectionWithDashed isLast centerGap={1280} mtop={-1}>
          <IndexMain />
        </SectionWithDashed>

        <SectionWithDashed isLast centerGap={1280}>
          <IndexEditor />
        </SectionWithDashed>
        <SectionWithDashed isLast centerGap={1280}>
          <div className="flex sm:flex-row flex-col">
            <IndexAutoAPI />
            <IndexQuestion />
          </div>
        </SectionWithDashed>

        <SectionWithDashed isLast centerGap={1280} mtop={-1}>
          <div className="flex">
            <IndexPublish />
          </div>
        </SectionWithDashed>
      </Wrapper>

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
    </>
  );
}
