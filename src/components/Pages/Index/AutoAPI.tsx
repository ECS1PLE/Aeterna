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
        <ContainerHeader>
          <ContainerHeaderCategory icon={<Route />} text="Auto API" />
          <ContainerHeaderTitle>
            Хуярьте бекенд так, как снится нашему бекендеру в
            <br />
            <span className="text-aqua">самых сладких снах</span>
          </ContainerHeaderTitle>
        </ContainerHeader>
        <div className="relative mt-8 w-full">
          <div className="w-full max-w-full h-auto mt-auto">
            <AutoAPIIllustration />
          </div>
        </div>
      </ContainerWrapper>
    </Container>
  );
};

export default IndexAutoAPI;
