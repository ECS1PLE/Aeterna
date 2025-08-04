import AutoAPIIllustration from "@/components/Illustrations/AutoAPI";
import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";
import UIButton from "@/components/Ui/Button";
import { Rocket } from "lucide-react";
import React from "react";
import Sphere from "./Sphere";

const IndexQuestion = () => {
  return (
    <Container>
      <div className="p-11 flex flex-col justify-between h-full overflow-hidden z-1">
        <h2 className="text-6xl text-white leading-[60px]">
          Готовы
          <br />
          творить?
        </h2>
        <div className="*:w-max">
          <UIButton color="white" icon={<Rocket />}>
            Начать работу
          </UIButton>
        </div>
        <div className="absolute top-0 left-0 w-full h-full -z-1">
          <div className="*:absolute *:-left-32 *:-top-32">
            <Sphere />
          </div>
          <div className="*:absolute *:-right-32 *:-bottom-32">
            <Sphere />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IndexQuestion;
