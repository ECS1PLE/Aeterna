import IndexBlock from "@/components/Layout/Banner";
import ContainerText from "./Banner/MainContainerText";
import InfoBlock from "./Heading";
import Category from "./Heading/Category";
import TitleHeading from "./Heading/Title";
import MediumInfoBlock from "./Heading/MediumHeading";
import UIButton from "../Ui/Button";
import { Rocket } from "lucide-react";

const Container = () => {
  return (
    <div className="relative w-full border-l border-r border-[1px] border-solid border-neutral-800">
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
    </div>
  );
};

export default Container;
