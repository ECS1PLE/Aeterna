import Wrapper from "@/components/Layout/Wrapper";
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

export default function Home() {
  return (
    <>
      <Wrapper>
        <IndexMain />
        <IndexEditor />
        <section className="flex flex-col md:flex-row w-full">
          <IndexAutoAPI />
          <IndexQuestion />
        </section>
        <div className="border-b border-neutral-800">
          <IndexPublish />
        </div>
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
