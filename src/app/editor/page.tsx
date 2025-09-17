"use client";

import BottomBanner from "@/components/Pages/Index/Banner";
import Wrapper from "@/components/Layout/Wrapper";
import { Eye, Handshake, Layers2, Zap } from "lucide-react";
import AboutHalfBlock from "@/components/Pages/Index/AboutHalfBlock";
import PreviewIllustration from "@/components/Illustrations/Preview";
import CooperationIllustration from "@/components/Illustrations/Cooperation";
import FullBlock from "@/components/Blocks/FullBlock";
import InterfaceIllustration from "@/components/Illustrations/Interface";
import UIButton from "@/components/Ui/Button";
import TryEditorIllustration from "@/components/Illustrations/TryEditor";
import { useEffect, useState } from "react";
import MobileTryEditorIllustration from "@/components/Illustrations/MobileTryEditor";
import SphereWithCursorIllustration from "@/components/Illustrations/SphereWithCursor";
import CursorIllustration from "@/components/Illustrations/Cursor";

const Editor = () => {
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
    <>
      <Wrapper className="flex flex-col mt-25 sm:mt-0">
        <BottomBanner
          title="Средство для дизайна с возможностью публикации"
          text="Создавайте веб-приложения в 3 раза быстрее. Без кода, но с полной свободой дизайна"
          showBottomLogo={false}
          showBorderSvg={true}
          FirstButton="Войти в редактор"
          SecondButton=""
          icon={<Zap />}
        />
        <div className="flex mt-16 w-[100%] h-[auto] sm:h-[514px] flex-col sm:flex-row">
          <AboutHalfBlock
            text="Создавайте и тестируйте дизайн в реальном времени"
            MainHeaderTitle="Превью в реальном времени"
            icon={<Eye />}
            borderLeft={true}
            borderTop={true}
            borderRight={true}
          >
            <PreviewIllustration className="absolute bottom-[24px] right-[60px] sm:right-[25px]" />
          </AboutHalfBlock>

          <AboutHalfBlock
            text="Кооперируйтесь с членами команды и получайте максимальную продуктивность"
            MainHeaderTitle="Работа в команде"
            icon={<Handshake />}
            borderTop={true}
            borderRight={true}
            borderLeft={isMobile ? true : false}
          >
            <CooperationIllustration
              className="absolute w-[95%] sm:bottom-[42px] sm:w-[401px] sm:h-[213px] 
                        sm:right-[42px] -right-[22px] bottom-[44px]"
            />
          </AboutHalfBlock>
        </div>
        <div className="w-[100%] h-[614px] sm:h-[514px] flex relative overflow-hidden">
          <FullBlock
            MainHeaderTitle="Свойства объектов"
            icon={<Layers2 />}
            text="Интерфейс, к которому все так 
                    привыкли, но с дополнительными возможностями"
            className={isMobile ? `justify-between h-[550px]` : ""}
          >
            {!isMobile ? (
              <InterfaceIllustration
                className="absolute -z-[1] bottom-0 right-[20px] sm:right-[0px] sm:w-auto sm:h-auto 
                        h-[420px] w-full"
              />
            ) : (
              <>
                <SphereWithCursorIllustration className="absolute bottom-0 right-0" />
                <CursorIllustration className="absolute bottom-[140px] right-[120px]" />
              </>
            )}
          </FullBlock>
        </div>
        <div className=" mt-16 flex flex-col pt-[36px] items-center w-full gap-4">
          <h2 className="font-medium text-5xl  text-center text-white">
            Попробуйте наш редактор <br /> прямо в своем браузере
          </h2>
          <UIButton color="white" icon={<Zap />}>
            Войти в редактор
          </UIButton>
          {!isMobile ? (
            <TryEditorIllustration className="mt-4" />
          ) : (
            <MobileTryEditorIllustration className="w-[100%] px-[7px] h-[240px] mt-4" />
          )}
        </div>
        <BottomBanner />
      </Wrapper>
    </>
  );
};

export default Editor;
