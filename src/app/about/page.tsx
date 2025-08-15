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

const about = () => {
    return (
        <>
            <Wrapper className="gap-16 flex flex-col mt-25 sm:mt-0">
                <BottomBanner showBottomLogo={false} showBorderSvg={true} FirstButton="Войти в редактор" SecondButton=""
                icon={<Zap />}/>
                <div className="flex w-[100%] h-[auto] sm:h-[514px] sm:flex-row flex-col">
                    <AboutHalfBlock text="Создавайте и тестируйте дизайн в реальном времени" 
                    MainHeaderTitle="Превью в реальном времени" icon={<Eye />} 
                    borderLeft={true} borderTop={true} 
                    borderBottom={true} borderRight={true}>
                        <PreviewIllustration className="absolute bottom-[24px] right-[24px]"/>
                    </AboutHalfBlock>

                    <AboutHalfBlock text="Кооперируйтесь с членами команды и получайте максимальную продуктивность" 
                    MainHeaderTitle="Работа в команде" icon={<Handshake />}
                    borderTop={true} borderBottom={true} 
                    borderRight={true}>
                        <CooperationIllustration className="absolute w-[95%] sm:bottom-[42px] sm:w-[401px] sm:h-[213px] 
                        sm:right-[42px] right-[11px] bottom-[11px]"/>
                    </AboutHalfBlock>
                </div>
                <div className="w-[100%] h-[614px] sm:h-[514px] flex relative overflow-hidden">
                    <FullBlock 
                    MainHeaderTitle="Свойства объектов"
                    icon={<Layers2 />}
                    text="Интерфейс, к которому все так 
                    привыкли, но с дополнительными возможностями">
                        <InterfaceIllustration className="absolute bottom-0 right-[20px] sm:w-auto sm:h-auto 
                        h-[420px] w-full" />
                    </FullBlock>
                </div>
                <div className="flex flex-col pt-[36px] items-center w-full gap-4">
                    <h2 className="font-medium text-5xl  text-center text-white">
                        Попробуйте наш редактор <br /> прямо в своем браузере
                    </h2>
                    <UIButton color="white" icon={<Zap />}>Войти в редактор</UIButton>
                    <TryEditorIllustration className="mt-4"/>
                </div>
                <BottomBanner />
            </Wrapper>
        </>
    )
}

export default about;