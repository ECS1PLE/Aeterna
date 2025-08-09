import Banner from "@/components/Banner";
import BannerFooter from "@/components/Banner/Footer";
import BannerText from "@/components/Banner/Text";
import BannerTitle from "@/components/Banner/Title";
import Container from "@/components/Layout/Container";
import UIButton from "@/components/Ui/Button";
import React from "react";
import Sphere from "./Sphere";
import { Rocket } from "lucide-react";

const IndexMain = () => {
  return (
    <Container borderBottom={true}>
      <main className="flex items-center justify-center h-[720px] relative z-1 overflow-hidden">
        <Banner>
          <BannerTitle>Создавайте продукт не выходя из браузера</BannerTitle>
          <BannerText>
            Aetérna - современные решения для вашего бизнеса. Наша система
            предлагает вам широкий спектр возможностей
          </BannerText>
          <BannerFooter>
            <UIButton color="white" icon={<Rocket />}>
              Начать работу
            </UIButton>
            <UIButton color="transparent">Войти в аккаунт</UIButton>
          </BannerFooter>
        </Banner>
        <div className="absolute top-0 left-0 w-full h-full -z-1">
          <div className="*:absolute *:-left-32 *:-top-32">
            <Sphere />
          </div>
          <div className="*:absolute *:-right-32 *:-bottom-32">
            <Sphere />
          </div>
        </div>
        <div
          className="absolute top-0 left-0 w-full h-full *:w-full *:h-full -z-1"
          style={{
            mask: "radial-gradient(76.51% 76.51% at 50% 50%, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)",
          }}
        >
          <div className="absolute flex justify-between flex-col">
            {[...Array(11)].map((_, index) => (
              <div
                key={index}
                className={`w-full bg-neutral-800 h-px ${
                  index === 0 || index === 10 ? "opacity-0" : ""
                }`}
              />
            ))}
          </div>
          <div className="absolute flex justify-between">
            {[...Array(9)].map((_, index) => (
              <div
                key={index}
                className={`w-px bg-neutral-800 h-full ${
                  index === 0 || index === 8 ? "opacity-0" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </main>
    </Container>
  );
};

export default IndexMain;
