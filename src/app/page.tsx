import Image from "next/image";
import Header from "@/components/Header";
import Container from "@/components/Layout/Container";
import ContainerText from "@/components/Layout/Banner/MainContainerText";
import Footer from "@/components/Footer";
import IndexBlock from "@/components/Layout/Banner";
import InfoBlock from "@/components/Layout/Heading";
import Category from "@/components/Layout/Heading/Category";
import TitleHeading from "@/components/Layout/Heading/Title";
import MediumInfoBlock from "@/components/Layout/Heading/MediumHeading";
import UIButton from "@/components/Ui/Button";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <>
      <section className="flex w-[1280px] mx-auto bg-black flex-col gap-8">
        <Header />
        <Container>
          <div className="flex flex-col">
            <IndexBlock>
              <ContainerText
                title="Создавайте продукт не выходя из браузера"
                subtitle="Aetérna - современные решения для вашего бизнеса. Наша система предлагает вам широкий спектр возможностей"
                rocketButtonText="Начать работу"
                secondButtonText="Войти в аккаунт"
              />
              <img src="/blueLight.svg" className="absolute top-0 left-0" />
              <img
                src="/blueLight.svg"
                className="absolute bottom-0 right-0 transform rotate-[180deg] origin-center"
              />
            </IndexBlock>
            <InfoBlock>
              <Category iconName="PenTool">Графический Редактор</Category>
              <TitleHeading
                firstPart="Вооплатите все фантазии "
                secondPart="в реальность"
              />
              <img
                src="./interface.svg"
                className="absolute right-0 bottom-0"
                width={830}
                height={400}
              ></img>
            </InfoBlock>
            <div className="flex border-b border-[1px] border-solid border-neutral-800">
              <MediumInfoBlock>
                <Category iconName="Route">Auto API</Category>
                <TitleHeading
                  firstPart="Хуярьте бекенд так, как снится нашему бекендеру в"
                  secondPart=" самых сладких снах"
                />
                <img
                  src="./api.svg"
                  className="absolute right-15 bottom-20"
                  width={515}
                  height={206}
                />
              </MediumInfoBlock>
              <MediumInfoBlock>
                <div className="w-max h-full flex flex-col justify-between">
                  <p className="text-6xl max-w-[173px] text-white">
                    Готовы творить?
                  </p>
                  <UIButton color="white">
                    <span className="inline-flex items-center gap-1 leading-none">
                      <Rocket color="black" size={20} />
                      Начать работу
                    </span>
                  </UIButton>
                </div>
                <img
                  src="./blueLight.svg"
                  className="absolute bottom-0 right-0 rotate-180 h-[500px]"
                />
              </MediumInfoBlock>
            </div>
            <InfoBlock>
              <Category iconName="Workflow">Aeterna Publish</Category>
              <TitleHeading
                firstPart="Публикация вашего творчества "
                secondPart="в два клика"
              />
              <img
                src="./planet.svg"
                className="absolute right-0 bottom-0"
                width={830}
                height={400}
              ></img>
            </InfoBlock>
          </div>
        </Container>
        <div className="w-[100%] py-[128px] px-[280px] text-center justify-center gap-6 flex flex-col items-center">
          <ContainerText
            title="Волки используют Aetérna"
            subtitle="А ты бездарь, до сих пор платишь бездарям фронтендерам за работу. Не будь лохом, и используй наш сервис"
            rocketButtonText="Газ"
            secondButtonText="Войти в аккаунт"
          />
        </div>
        <Footer />
      </section>
    </>
  );
}
