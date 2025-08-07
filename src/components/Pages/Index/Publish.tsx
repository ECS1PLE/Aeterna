import Container from "@/components/Layout/Container";
import ContainerHeader from "@/components/Layout/Container/Header";
import ContainerHeaderCategory from "@/components/Layout/Container/Header/Category";
import ContainerHeaderTitle from "@/components/Layout/Container/Header/Title";
import ContainerWrapper from "@/components/Layout/Container/Wrapper";
import { Route } from "lucide-react";
import React from "react";
import PublishIllustration from "@/components/Illustrations/Publish";

const IndexPublish = () => {
  return (
    <Container>
      <ContainerWrapper>
        <ContainerHeader>
          <ContainerHeaderCategory icon={<Route />} text="Aeterna Publish" />
          <ContainerHeaderTitle>
            Публикация вашего творчества
            <br />
            <span className="text-aqua">в два клика</span>
          </ContainerHeaderTitle>
        </ContainerHeader>
      </ContainerWrapper>
      <div className="relative h-[400px] sm:h-[492px] overflow-hidden">
        <div className="h-[355px] sm:h-auto absolute translate-y-[80px] sm:translate-y-[210px] sm:bottom-[20px] right-[-80px] sm:right-[-87px] w-auto pointer-events-none">
          <PublishIllustration />
        </div>
      </div>
    </Container>
  );
};

export default IndexPublish;
