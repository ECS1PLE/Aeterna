import BottomBanner from "@/components/Pages/Index/Banner";
import Wrapper from "@/components/Layout/Wrapper";
import { Zap } from "lucide-react";

const about = () => {
    return (
        <>
            <Wrapper className="gap-16">
                <BottomBanner showBottomLogo={false} showBorderSvg={true} FirstButton="Войти в редактор" SecondButton=""
                icon={<Zap />}/>
                2131321
            </Wrapper>
        </>
    )
}

export default about;