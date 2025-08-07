import AutoAPIIllustration from "@/components/Illustrations/AutoAPI";
import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";
import { Route } from "lucide-react";
import React from "react";

const IndexAutoAPI = () => {
  return (
    <Container>
      <ContainerWrapper>
        <div className="flex flex-col sm:block h-[450px] sm:h-auto">
          <ContainerHeader>
            <ContainerHeaderCategory icon={<Route />} text="Auto API" />
            <ContainerHeaderTitle>
              Хуярьте бекенд так, как снится нашему бекендеру в
              <br />
              <span className="text-aqua">самых сладких снах</span>
            </ContainerHeaderTitle>
          </ContainerHeader>

          {/* Контейнер для SVG */}
          <div className="mt-auto mb-[40px] sm:mt-8 sm:mb-0">
            <AutoAPIIllustration />
          </div>
        </div>
      </ContainerWrapper>
    </Container>
  );
};

export default IndexAutoAPI;
