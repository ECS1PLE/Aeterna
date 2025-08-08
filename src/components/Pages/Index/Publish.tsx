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
      <div className="relative h-[400px] sm:h-[600px] overflow-hidden">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <div className="h-[355px] sm:h-auto absolute translate-y-[80px] sm:translate-y-[100px] sm:bottom-[20px] right-[-50px] sm:right-[-85px] w-auto">
            <PublishIllustration />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default IndexPublish;
