import BottomBanner from "@/components/Pages/Index/Banner";
import Wrapper from "@/components/Layout/Wrapper";
import { Eye, Handshake, Zap } from "lucide-react";
import AboutHalfBlock from "@/components/Pages/Index/AboutHalfBlock";
import PreviewIllustration from "@/components/Illustrations/Preview";
import CooperationIllustration from "@/components/Illustrations/Cooperation";


const about = () => {
    return (
        <>
            <Wrapper className="gap-16 flex flex-col">
                <BottomBanner showBottomLogo={false} showBorderSvg={true} FirstButton="Войти в редактор" SecondButton=""
                icon={<Zap />}/>
                <div className="flex w-[100%] h-[514px]">
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
                        <CooperationIllustration className="absolute bottom-[42px] right-[42px]"/>
                    </AboutHalfBlock>
                </div>
            </Wrapper>
        </>
    )
}

export default about;