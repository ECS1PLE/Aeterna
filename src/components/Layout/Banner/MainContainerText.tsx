import BannerTitle from "@/components/Layout/Banner/Title";
import SubTitle from "@/components/Layout/Banner/SubTitle";
import UIButton from "@/components/Ui/Button";
import IndexFooter from "@/components/Layout/Banner/Footer";
import { Rocket } from "lucide-react";

interface ContainerText {
  title?: string;
  subtitle?: string;
  rocketButtonText: string;
  secondButtonText: string;
}

const ContainerText = (props) => {
  return (
    <>
      <BannerTitle>{props.title}</BannerTitle>
      <SubTitle>{props.subtitle}</SubTitle>
      <IndexFooter>
        <UIButton color="white">
          <span className="inline-flex items-center gap-1 leading-none justify-center">
            <Rocket color="black" size={20} />
            {props.rocketButtonText}
          </span>
        </UIButton>
        <UIButton color="transparent">{props.secondButtonText}</UIButton>
      </IndexFooter>
    </>
  );
};

export default ContainerText;
